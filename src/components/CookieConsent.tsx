import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
// Removed Link import to avoid using router outside BrowserRouter
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

// GA4 measurement id from env (set VITE_GA_MEASUREMENT_ID="G-XXXXXXX")
const GA_ID = (import.meta as any).env?.VITE_GA_MEASUREMENT_ID || (import.meta as any).env?.VITE_GA4_ID;

declare global {
  interface Window {
    dataLayer: any[];
    gtag?: (...args: any[]) => void;
  }
}

export type ConsentCategories = {
  essential: true; // always true and cannot be disabled
  functional: boolean;
  analytics: boolean;
  marketing: boolean;
};

export type ConsentState = {
  categories: ConsentCategories;
  consentedAt: string; // ISO string
  version: string; // bump when policy changes
};

const CONSENT_STORAGE_KEY = "cookie-consent-v1";
const CONSENT_VERSION = "1.0.0";

type CookieConsentContextValue = {
  consent: ConsentState | null;
  hasConsented: boolean;
  open: boolean;
  setOpen: (v: boolean) => void;
  openSettings: () => void;
  savePreferences: (categories: Omit<ConsentCategories, "essential">) => void;
  acceptAll: () => void;
  rejectNonEssential: () => void;
};

const CookieConsentContext = createContext<CookieConsentContextValue | undefined>(undefined);

export const CookieConsentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [consent, setConsent] = useState<ConsentState | null>(null);
  const [showBanner, setShowBanner] = useState(false);
  const [open, setOpen] = useState(false);

  // Load stored consent on mount
  useEffect(() => {
    try {
      const raw = localStorage.getItem(CONSENT_STORAGE_KEY);
      if (raw) {
        const parsed: ConsentState = JSON.parse(raw);
        if (parsed?.version === CONSENT_VERSION) {
          setConsent(parsed);
          return;
        }
      }
      // No consent or version mismatch -> show banner
      setShowBanner(true);
    } catch {
      setShowBanner(true);
    }
  }, []);

  // Load GA only after analytics consent is granted
  useEffect(() => {
    if (!GA_ID) return;
    const analyticsGranted = !!consent?.categories.analytics;

    // If GA script not present and consent granted, inject it
    if (analyticsGranted && !document.querySelector(`script[data-ga-id="${GA_ID}"]`)) {
      const s = document.createElement("script");
      s.async = true;
      s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
      s.setAttribute("data-ga-id", GA_ID);
      document.head.appendChild(s);

      window.dataLayer = window.dataLayer || [];
      function gtag(){ window.dataLayer.push(arguments as any); }
      window.gtag = gtag as any;
      window.gtag('js', new Date());
      // Anonymize IP, respect basic privacy
      window.gtag('config', GA_ID, { anonymize_ip: true });
      // Explicitly set consent state for analytics storage
      window.gtag('consent', 'update', { analytics_storage: 'granted' });
    }

    // If GA is already loaded, update consent state on toggle
    if (window.gtag) {
      window.gtag('consent', 'update', { analytics_storage: analyticsGranted ? 'granted' : 'denied' });
    }
  }, [consent?.categories.analytics]);

  const persist = useCallback((state: ConsentState) => {
    setConsent(state);
    localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(state));
  }, []);

  const savePreferences = useCallback((categories: Omit<ConsentCategories, "essential">) => {
    const next: ConsentState = {
      categories: { essential: true, ...categories },
      consentedAt: new Date().toISOString(),
      version: CONSENT_VERSION,
    };
    persist(next);
    setShowBanner(false);
    setOpen(false);
  }, [persist]);

  const acceptAll = useCallback(() => {
    savePreferences({ functional: true, analytics: true, marketing: true });
  }, [savePreferences]);

  const rejectNonEssential = useCallback(() => {
    savePreferences({ functional: false, analytics: false, marketing: false });
  }, [savePreferences]);

  const openSettings = useCallback(() => setOpen(true), []);

  const value = useMemo<CookieConsentContextValue>(() => ({
    consent,
    hasConsented: !!consent,
    open,
    setOpen,
    openSettings,
    savePreferences,
    acceptAll,
    rejectNonEssential,
  }), [consent, open, openSettings, savePreferences, acceptAll, rejectNonEssential]);

  return (
    <CookieConsentContext.Provider value={value}>
      {children}

      {/* Hidden global trigger for programmatic opening from links */}
      <button
        type="button"
        data-open-cookie-settings
        className="sr-only"
        onClick={() => setOpen(true)}
        aria-hidden
        tabIndex={-1}
      >
        Open Cookie Settings
      </button>

      {showBanner && (
        <CookieBanner
          onManage={() => setOpen(true)}
          onAcceptAll={acceptAll}
          onReject={rejectNonEssential}
        />
      )}
      <CookieSettingsDialog />
    </CookieConsentContext.Provider>
  );
};

export const useCookieConsent = () => {
  const ctx = useContext(CookieConsentContext);
  if (!ctx) throw new Error("useCookieConsent must be used within CookieConsentProvider");
  return ctx;
};

// Banner component
const CookieBanner: React.FC<{
  onManage: () => void;
  onAcceptAll: () => void;
  onReject: () => void;
}> = ({ onManage, onAcceptAll, onReject }) => {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50">
      <div className="mx-auto max-w-5xl m-4 rounded-xl border bg-gray-900 text-white shadow-2xl">
        <div className="p-5 sm:p-6">
          <p className="text-sm text-gray-200">
            We use cookies and similar technologies to operate this site and keep it secure (essential).
            With your consent, we also use functional cookies, analytics cookies (e.g., Google Analytics 4),
            and marketing cookies. You can adjust your choices anytime in Cookie Settings. For details, see our <a href="/privacy" className="underline">Privacy Policy</a>{" "}
            and <a href="/imprint" className="underline">Imprint</a>.
          </p>
          <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-end">
            <Button variant="secondary" onClick={onManage}>
              Manage settings
            </Button>
            <Button variant="ghost" className="text-gray-300" onClick={onReject}>
              Reject non-essential
            </Button>
            <Button onClick={onAcceptAll}>
              Accept all
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Settings dialog
export const CookieSettingsDialog: React.FC = () => {
  const { open, setOpen, consent, savePreferences } = useCookieConsent();
  const [functional, setFunctional] = useState(consent?.categories.functional ?? false);
  const [analytics, setAnalytics] = useState(consent?.categories.analytics ?? false);
  const [marketing, setMarketing] = useState(consent?.categories.marketing ?? false);

  useEffect(() => {
    setFunctional(consent?.categories.functional ?? false);
    setAnalytics(consent?.categories.analytics ?? false);
    setMarketing(consent?.categories.marketing ?? false);
  }, [consent]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="bg-gray-900 text-white border-gray-700">
        <DialogHeader>
          <DialogTitle>Cookie Settings</DialogTitle>
          <DialogDescription className="text-gray-300">
            Control how we use cookies. Essential cookies are required for basic site functionality
            and cannot be disabled.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-5 py-2">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="font-medium">Essential</p>
              <p className="text-sm text-gray-400">Required to keep the site running securely (always active).</p>
            </div>
            <Switch checked disabled aria-readonly aria-label="Essential cookies" />
          </div>

          <div className="flex items-start justify-between gap-4">
            <div>
              <Label className="font-medium" htmlFor="functional">Functional</Label>
              <p className="text-sm text-gray-400">Remember preferences and improve usability.</p>
            </div>
            <Switch id="functional" checked={functional} onCheckedChange={setFunctional} />
          </div>

          <div className="flex items-start justify-between gap-4">
            <div>
              <Label className="font-medium" htmlFor="analytics">Analytics</Label>
              <p className="text-sm text-gray-400">Helps us understand usage (e.g., Google Analytics 4). Set only if you consent.</p>
            </div>
            <Switch id="analytics" checked={analytics} onCheckedChange={setAnalytics} />
          </div>

          <div className="flex items-start justify-between gap-4">
            <div>
              <Label className="font-medium" htmlFor="marketing">Marketing</Label>
              <p className="text-sm text-gray-400">Personalization and marketing (only set if you consent).</p>
            </div>
            <Switch id="marketing" checked={marketing} onCheckedChange={setMarketing} />
          </div>
        </div>

        <div className="flex justify-end gap-2 pt-2">
          <Button variant="ghost" onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={() => savePreferences({ functional, analytics, marketing })}>Save preferences</Button>
        </div>

        <p className="mt-4 text-xs text-gray-400">
          We store your consent choice on this device. You can change it anytime on this page or via the link in our Privacy Policy.
        </p>
      </DialogContent>
    </Dialog>
  );
};
