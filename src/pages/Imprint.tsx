import { Link } from "react-router-dom";

const Imprint = () => {
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
          <h1 className="text-3xl font-bold text-white mb-8">Site Notice (Impressum)</h1>
          
          <div className="space-y-8 text-gray-300">
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">Information pursuant to Sect. 5 German Telemedia Act (TMG)</h2>
              <p>
                Mussie Haile<br />
                Guiding-Ventures<br />
                Lohmühlenstraße 65<br />
                12435 Berlin<br />
                Germany
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">Contact</h2>
              <p>
                Phone: +49 176 87053245<br />
                E-mail: <a className="underline" href="mailto:admin@guidingventures.com">admin@guidingventures.com</a>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">VAT ID</h2>
              <p>
                Sales tax identification number according to Sect. 27 a of the Sales Tax Law:<br />
                DE348867516
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">Person responsible for editorial</h2>
              <p>Mussie Haile</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">EU dispute resolution</h2>
              <p>
                The European Commission provides a platform for online dispute resolution (ODR): {" "}
                <a className="underline" href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noreferrer noopener">https://ec.europa.eu/consumers/odr/</a>.<br />
                Our e-mail address can be found above in the site notice.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">Dispute resolution proceedings in front of a consumer arbitration board</h2>
              <p>
                We are not willing or obliged to participate in dispute resolution proceedings in front of a consumer arbitration board.
              </p>
            </section>

            <section className="text-sm text-gray-400">
              <p>
                For information on data protection, please see our {" "}
                <Link className="underline" to="/privacy">Privacy Policy</Link>. You can change your cookie preferences anytime in {" "}
                <a className="underline" href="#" onClick={(e) => { e.preventDefault(); const btn = document.querySelector('[data-open-cookie-settings]') as HTMLButtonElement | null; btn?.click(); }}>Cookie Settings</a>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Imprint;