import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* ChatGPT-style header */}
      <div className="border-b border-gray-700 bg-gray-900">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">P</span>
              </div>
              <Link to="/" className="text-xl font-medium text-white hover:text-gray-300">
                Prompt That For You
              </Link>
            </div>
            <Link to="/" className="text-sm text-gray-400 hover:text-white underline transition-colors">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
      
      {/* Main content */}
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-medium text-white mb-6">About Us</h1>
          <p className="text-xl text-gray-400">
            The story behind "Let me Prompt that for you"
          </p>
        </div>

        <div className="prose prose-invert max-w-none">
          <div className="bg-gray-800 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Inspired by a Classic</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              Remember <span className="text-green-400 font-medium">Let Me Google That For You</span>? 
              That delightfully passive-aggressive way to help people who ask you to search for things 
              they could easily Google themselves?
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Well, we've entered the AI age, and now people ask you to ask ChatGPT instead of just... 
              asking ChatGPT themselves. So we created the modern equivalent for the ChatGPT era.
            </p>
          </div>

          <div className="bg-gray-800 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">How It Started</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              "Hey, can you ask ChatGPT how to cook pasta?"
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              "Can you prompt ChatGPT to write my email?"
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Sound familiar? Instead of getting frustrated, we built this tool to gently educate 
              people on how easy it is to use ChatGPT directly.
            </p>
          </div>

          <div className="bg-gray-800 rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-white mb-4">The Mission</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              We believe everyone should feel comfortable using AI tools directly. Sometimes people 
              just need to see how simple it really is.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              So next time someone asks you to "prompt ChatGPT for them," just send them here. 
              They'll see exactly how it's done, and maybe they'll be inspired to try it themselves next time.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/" 
            className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors"
          >
            Try It Yourself
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;