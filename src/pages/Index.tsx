import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { ChatInterface } from "@/components/ChatInterface";
import { PromptForm } from "@/components/PromptForm";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [searchParams] = useSearchParams();
  const promptParam = searchParams.get("prompt");
  const [showAnimation, setShowAnimation] = useState(!!promptParam);
  const [redirecting, setRedirecting] = useState(false);

  const handleAnimationComplete = () => {
    setRedirecting(true);
    // Redirect to ChatGPT with the prompt
    const chatGptUrl = `https://chatgpt.com/?q=${encodeURIComponent(promptParam || "")}`;
    setTimeout(() => {
      window.location.href = chatGptUrl;
    }, 1000);
  };

  if (showAnimation && promptParam) {
    return (
      <div className="min-h-screen bg-chat-background">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-2">
              Watch and Learn
            </h2>
            <p className="text-muted-foreground">
              Here's how you ask ChatGPT the question:
            </p>
          </div>
          
          <ChatInterface 
            prompt={promptParam} 
            onComplete={handleAnimationComplete}
          />

          {redirecting && (
            <div className="text-center mt-8">
              <div className="inline-flex items-center gap-2 text-muted-foreground">
                <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
                Redirecting to ChatGPT...
              </div>
            </div>
          )}
        </div>
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
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">P</span>
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
              For all those people who find it more convenient to ask you to ask ChatGPT than to ask ChatGPT themselves.
            </p>
          </div>
          
          <PromptForm />
          
          {/* How it works section */}
          <div className="max-w-3xl mx-auto mt-16 text-center px-4">
            <h3 className="text-lg sm:text-xl font-medium text-white mb-8">How it works:</h3>
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
              <div className="space-y-3">
                <div className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto font-semibold">1</div>
                <p className="text-gray-300 text-sm sm:text-base">Enter a prompt you want someone to ask ChatGPT</p>
              </div>
              <div className="space-y-3">
                <div className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto font-semibold">2</div>
                <p className="text-gray-300 text-sm sm:text-base">Share the generated link with them</p>
              </div>
              <div className="space-y-3 sm:col-span-2 md:col-span-1">
                <div className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto font-semibold">3</div>
                <p className="text-gray-300 text-sm sm:text-base">They see the typing animation, then get redirected to ChatGPT</p>
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
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xs">P</span>
              </div>
              <span className="text-gray-400 text-sm">Prompt That For You</span>
            </div>
            <div className="flex flex-wrap gap-4 text-gray-400 text-sm text-center sm:text-right">
              <Link to="/imprint" className="hover:text-white transition-colors">Imprint</Link>
              <Link to="/legal" className="hover:text-white transition-colors">Legal</Link>
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
              <p className="w-full sm:w-auto">Made with ❤️ for people who prefer delegation over direct interaction</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
