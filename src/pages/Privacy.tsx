import { Link } from "react-router-dom";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <div className="border-b border-gray-700 bg-gray-900">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">P</span>
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
                Mussie Haile<br />
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
                  Cookies/Local Storage: We use strictly necessary cookies/local storage to remember your cookie consent decision. With your consent, we may set functional, analytics, and marketing cookies (Art. 6(1)(a) GDPR). You can update your choices anytime via Cookie Settings.
                </li>
                <li>
                  Contact data: If you contact us by e-mail, we process your message and contact details to respond (Art. 6(1)(f) or (b) GDPR).
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">4. Cookies and consent</h2>
              <p>
                We use a consent management tool to collect and store your choices. Essential cookies are always active. Non-essential cookies (functional, analytics, marketing) are only set after you provide consent. You can withdraw or change your consent at any time via the link below or the banner:
              </p>
              <p className="mt-2">
                <a className="underline" href="#" onClick={(e) => { e.preventDefault(); const btn = document.querySelector('[data-open-cookie-settings]') as HTMLButtonElement | null; btn?.click(); }}>Open Cookie Settings</a>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">5. Recipients and transfers</h2>
              <p>
                We do not sell personal data. Service providers (e.g., hosting) may process data on our behalf under Art. 28 GDPR. Where providers are located outside the EU/EEA, we ensure appropriate safeguards (e.g., Standard Contractual Clauses) where required.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">6. Storage periods</h2>
              <p>
                We store personal data only as long as necessary for the stated purposes or legal obligations. Cookie consent choices are stored on your device until you delete them or until we change our policy version.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">7. Your rights</h2>
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
              <h2 className="text-xl font-semibold text-white mb-3">8. Contact</h2>
              <p>
                For privacy inquiries, contact: Mussie Haile, Guiding-Ventures, Lohmühlenstraße 65, 12435 Berlin, Germany, E-mail: <a className="underline" href="mailto:admin@guidingventures.com">admin@guidingventures.com</a>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">9. Updates</h2>
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