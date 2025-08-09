import { Link } from "react-router-dom";

const Legal = () => {
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
          
          <div className="space-y-6 text-gray-300">
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">1. Acceptance of Terms</h2>
              <p>
                By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">2. Use License</h2>
              <p>
                Permission is granted to temporarily use this website for personal, non-commercial transitory viewing only.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">3. Disclaimer</h2>
              <p>
                The materials on this website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">4. Limitations</h2>
              <p>
                In no event shall the company or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on this website.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Legal;