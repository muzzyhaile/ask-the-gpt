import { useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { ChatInterface } from "@/components/ChatInterface";
import { PromptForm } from "@/components/PromptForm";

const Index = () => {
  const [searchParams] = useSearchParams();
  const promptParam = searchParams.get("prompt");
  const [showAnimation] = useState(!!promptParam);
  const [redirecting, setRedirecting] = useState(false);

  const handleAnimationComplete = async () => {
    setRedirecting(true);
    const url = `https://chat.openai.com/?q=${encodeURIComponent(promptParam || "")}`;
    setTimeout(() => {
      window.location.href = url;
    }, 600);
  };

  const openCookieSettings = (e: React.MouseEvent) => {
    e.preventDefault();
    const btn = document.querySelector('[data-open-cookie-settings]') as HTMLButtonElement | null;
    btn?.click();
  };

  if (showAnimation && promptParam) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex flex-col">
        {/* Clean centered content, no headline */}
        <div className="flex-1 flex flex-col items-center justify-center px-4 py-12">
          <div className="w-full max-w-2xl mx-auto">
            <ChatInterface 
              prompt={promptParam} 
              onComplete={handleAnimationComplete}
            />

            {redirecting && (
              <div className="text-center mt-8">
                <div className="inline-flex items-center gap-2 text-gray-400">
                  <div className="w-4 h-4 border-2 border-white/60 border-t-transparent rounded-full animate-spin"></div>
                  Redirecting to chat...
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <footer className="border-t border-gray-700 bg-gray-900 mt-auto">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center">
                  <span className="text-secondary-foreground font-bold text-xs">P</span>
                </div>
                <span className="text-gray-400 text-sm">Prompt That For You</span>
              </div>
              <div className="flex flex-wrap gap-4 text-gray-400 text-sm text-center sm:text-right">
                <Link to="/imprint" className="hover:text-white transition-colors">Imprint</Link>
                <Link to="/legal" className="hover:text-white transition-colors">Legal</Link>
                <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
                <a href="#" onClick={openCookieSettings} className="hover:text-white transition-colors">Cookie Settings</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }

  console.log("Index component rendering..."); // Debug log

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      {/* ChatGPT-style header */}
      <div className="border-b border-gray-700 bg-gray-900">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                <span className="text-secondary-foreground font-bold text-sm">P</span>
              </div>
              <h1 className="text-xl font-medium text-white">
                Prompt That For You
              </h1>
            </div>
            <Link to="/about" className="text-sm text-gray-400 hover:text-white underline transition-colors">
              About us
            </Link>
          </div>
        </div>
      </div>
      
      {/* Main content area */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        <div className="w-full max-w-4xl mx-auto">
          {/* ChatGPT-style welcome message */}
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-white mb-4">
              Let me Prompt that for you
            </h2>
            <p className="text-gray-400 text-base sm:text-lg px-4">
              For all those people who find it more convenient to ask you to ask the chat than to ask the chat themselves.
            </p>
          </div>
          
          <PromptForm />
          
          {/* How it works section */}
          <div className="max-w-3xl mx-auto mt-16 text-center px-4">
            <h3 className="text-lg sm:text-xl font-medium text-white mb-8">How it works:</h3>
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
              <div className="space-y-3">
                <div className="w-10 h-10 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center mx-auto font-semibold">1</div>
                <p className="text-gray-300 text-sm sm:text-base">Enter a prompt you want someone to ask the chat</p>
              </div>
              <div className="space-y-3">
                <div className="w-10 h-10 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center mx-auto font-semibold">2</div>
                <p className="text-gray-300 text-sm sm:text-base">Share the generated link with them</p>
              </div>
              <div className="space-y-3 sm:col-span-2 md:col-span-1">
                <div className="w-10 h-10 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center mx-auto font-semibold">3</div>
                <p className="text-gray-300 text-sm sm:text-base">They see the typing animation, then get redirected to the chat</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="border-t border-gray-700 bg-gray-900 mt-auto">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center">
                <span className="text-secondary-foreground font-bold text-xs">P</span>
              </div>
              <span className="text-gray-400 text-sm">Prompt That For You</span>
            </div>
            <div className="flex flex-wrap gap-4 text-gray-400 text-sm text-center sm:text-right">
              <Link to="/imprint" className="hover:text-white transition-colors">Imprint</Link>
              <Link to="/legal" className="hover:text-white transition-colors">Legal</Link>
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
              <a href="#" onClick={openCookieSettings} className="hover:text-white transition-colors">Cookie Settings</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
