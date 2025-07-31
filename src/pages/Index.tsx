import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
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
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center space-y-2">
            <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
              Prompt That For You
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              For all those people who find it more convenient to ask you to ask ChatGPT than to ask ChatGPT themselves.
            </p>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <PromptForm />
        
        <div className="max-w-2xl mx-auto mt-12 text-center space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">How it works:</h3>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="space-y-2">
              <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto font-semibold">1</div>
              <p className="text-sm text-gray-600">Enter a prompt you want someone to ask ChatGPT</p>
            </div>
            <div className="space-y-2">
              <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto font-semibold">2</div>
              <p className="text-sm text-gray-600">Share the generated link with them</p>
            </div>
            <div className="space-y-2">
              <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto font-semibold">3</div>
              <p className="text-sm text-gray-600">They see the typing animation, then get redirected to ChatGPT</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
