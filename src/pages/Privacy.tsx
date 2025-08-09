import { Link } from "react-router-dom";
import { useEffect } from "react";

const Privacy = () => {
  // Add noindex for this legal page
  useEffect(() => {
    const existing = document.querySelector('meta[name="robots"]') as HTMLMetaElement | null;
    const prev = existing?.getAttribute('content') ?? null;
    let created = false;
    const el = existing ?? (() => { const m = document.createElement('meta'); m.setAttribute('name', 'robots'); document.head.appendChild(m); created = true; return m; })();
    el.setAttribute('content', 'noindex, nofollow');
    return () => {
      if (created) el.remove(); else if (prev) el.setAttribute('content', prev); else el.removeAttribute('content');
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <div className="border-b border-gray-700 bg-gray-900">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                <span className="text-secondary-foreground font-bold text-sm">P</span>
              </div>
              <h1 className="text-xl font-medium text-white">
                Prompt That For You
              </h1>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-white mb-8">Privacy Policy</h1>
          
          <div className="space-y-8 text-gray-300">
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">1. Controller</h2>
              <p>
                Guiding-Ventures<br />
                Lohmühlenstraße 65, 12435 Berlin, Germany<br />
                E-mail: <a className="underline" href="mailto:admin@guidingventures.com">admin@guidingventures.com</a>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">2. Scope</h2>
              <p>
                This policy explains how we process personal data when you visit this website and use its features. We operate a static web application built with Vite, React and Tailwind CSS. No third-party cookies or trackers are loaded without your consent.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">3. Categories of data and purposes</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Server logs (essential): When accessing the site, the web server may process IP address, date/time, URL, referrer, and user agent for the purpose of delivering content and ensuring security (Art. 6(1)(f) GDPR). Log data is automatically deleted per server retention schedules.
                </li>
                <li>
                  Cookies/Local Storage: We use strictly necessary cookies/local storage to remember your cookie consent decision (key: <code>cookie-consent-v1</code>). With your consent, we may set functional, analytics, and marketing cookies (Art. 6(1)(a) GDPR). You can update your choices anytime via Cookie Settings.
                </li>
                <li>
                  Contact data: If you contact us by e-mail, we process your message and contact details to respond (Art. 6(1)(f) or (b) GDPR).
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">4. Analytics (Google Analytics 4) — only if you consent</h2>
              <p>
                If you give consent to analytics cookies, we use Google Analytics 4 (GA4), a web analytics service provided by Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland. GA4 uses cookies and similar technologies to analyze your use of our website.
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Data processed: device identifiers, approximate location, pages viewed, events (e.g., clicks, scrolls), and technical metadata. Google may also process IP addresses for geolocation and service integrity.</li>
                <li>Purpose and legal basis: usage analytics and site improvement based on your consent (Art. 6(1)(a) GDPR).</li>
                <li>Transfers: Google may process data outside the EU/EEA (e.g., USA). Standard Contractual Clauses and other safeguards apply per Google’s policies.</li>
                <li>Retention: data is retained according to GA4 settings. We do not load GA4 unless you consent, and you can withdraw consent at any time via Cookie Settings.</li>
                <li>Provider info: <a className="underline" href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a>, <a className="underline" href="https://policies.google.com/technologies/cookies" target="_blank" rel="noopener noreferrer">Cookies</a>.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">5. Redirect to ChatGPT (OpenAI)</h2>
              <p>
                When you choose to open your prompt in ChatGPT, we redirect you to chat.openai.com with your prompt placed in the URL query. This discloses the prompt to OpenAI (OpenAI, L.L.C.). This action occurs only when you explicitly click to open ChatGPT.
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Purpose and legal basis: provide the requested redirection workflow you initiated (Art. 6(1)(b) or (f) GDPR).</li>
                <li>Provider info: <a className="underline" href="https://openai.com/policies/privacy-policy" target="_blank" rel="noopener noreferrer">OpenAI Privacy Policy</a>. Please review their terms and privacy before using their service.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">6. Cookies and consent</h2>
              <p>
                We use a consent management tool to collect and store your choices. Essential cookies are always active. Non-essential cookies (functional, analytics, marketing) are only set after you provide consent. You can withdraw or change your consent at any time via the link below or the banner:
              </p>
              <p className="mt-2">
                <a className="underline" href="#" onClick={(e) => { e.preventDefault(); const btn = document.querySelector('[data-open-cookie-settings]') as HTMLButtonElement | null; btn?.click(); }}>Open Cookie Settings</a>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">7. Recipients and transfers</h2>
              <p>
                We do not sell personal data. Service providers (e.g., hosting) may process data on our behalf under Art. 28 GDPR. Where providers are located outside the EU/EEA, we ensure appropriate safeguards (e.g., Standard Contractual Clauses) where required.
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>
                  Hosting/CDN: We host and deliver this site via Vercel. As part of providing infrastructure, Vercel may process IP addresses and technical request data (e.g., when serving pages from edge locations). International transfers may occur; Vercel provides appropriate safeguards under its data protection terms. Provider info: <a className="underline" href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">Vercel Privacy Policy</a>, <a className="underline" href="https://vercel.com/legal/dpa" target="_blank" rel="noopener noreferrer">Data Processing Addendum</a>.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">8. Storage periods</h2>
              <p>
                We store personal data only as long as necessary for the stated purposes or legal obligations. Cookie consent choices are stored on your device until you delete them or until we change our policy version.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">9. Your rights</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Right of access (Art. 15 GDPR)</li>
                <li>Right to rectification (Art. 16 GDPR)</li>
                <li>Right to erasure (Art. 17 GDPR)</li>
                <li>Right to restriction of processing (Art. 18 GDPR)</li>
                <li>Right to data portability (Art. 20 GDPR)</li>
                <li>Right to object (Art. 21 GDPR)</li>
                <li>Right to withdraw consent at any time (Art. 7(3) GDPR)</li>
                <li>Right to lodge a complaint with a supervisory authority (Art. 77 GDPR)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">10. Contact</h2>
              <p>
                For privacy inquiries, contact: Guiding-Ventures, Lohmühlenstraße 65, 12435 Berlin, Germany, E-mail: <a className="underline" href="mailto:admin@guidingventures.com">admin@guidingventures.com</a>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">11. Updates</h2>
              <p>
                We may update this policy to reflect changes in technology, services, or legal requirements. The current version is shown below. Older versions are available upon request.
              </p>
              <p className="text-sm text-gray-400 mt-2">Policy version: 1.0.0</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;