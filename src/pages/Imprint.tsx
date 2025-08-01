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
          <h1 className="text-3xl font-bold text-white mb-8">Imprint</h1>
          
          <div className="space-y-6 text-gray-300">
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">Information according to § 5 TMG</h2>
              <p>
                [Company Name]<br />
                [Street Address]<br />
                [City, Postal Code]<br />
                [Country]
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">Contact</h2>
              <p>
                Phone: [Phone Number]<br />
                Email: [Email Address]
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">Responsible for content according to § 55 Abs. 2 RStV</h2>
              <p>
                [Name]<br />
                [Address]
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Imprint;