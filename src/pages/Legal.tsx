import { Link } from "react-router-dom";
import { useEffect } from "react";

const Legal = () => {
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
          <h1 className="text-3xl font-bold text-white mb-8">Terms of Service</h1>
          
          <div className="space-y-8 text-gray-300">
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">1. Service description</h2>
              <p>
                This website provides a link generator that redirects users to external AI chat services (e.g., ChatGPT) with a pre-filled query. We do not operate those external services nor do we control their availability or content.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">2. Use and responsibilities</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Do not use the service for unlawful purposes or to submit unlawful content.</li>
                <li>You are responsible for the content you enter and share via generated links.</li>
                <li>We may modify or discontinue features at any time.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">3. Intellectual property</h2>
              <p>
                Site content, trademarks and branding are protected by applicable laws. You receive no license beyond what is necessary to use the service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">4. AI outputs and third-party services</h2>
              <p>
                AI outputs may be inaccurate or inappropriate. We are not responsible for content or policies of third-party services. Please review their terms separately.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">5. Liability</h2>
              <p>
                We are liable only for intent and gross negligence and for injury to life, body or health. Otherwise, liability is excluded to the maximum extent permitted by law. Mandatory statutory rights under German law remain unaffected.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">6. Governing law and venue</h2>
              <p>
                These terms are governed by the laws of the Federal Republic of Germany. If you are a merchant within the meaning of the HGB, the place of jurisdiction is Berlin.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">7. Changes to these terms</h2>
              <p>
                We may update these terms. The current version is displayed on this page.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">8. Contact</h2>
              <p>
                Guiding-Ventures, Lohmühlenstraße 65, 12435 Berlin, Germany, E-mail: <a className="underline" href="mailto:admin@guidingventures.com">admin@guidingventures.com</a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Legal;