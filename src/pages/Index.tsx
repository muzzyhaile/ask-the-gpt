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

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-12">
        <PromptForm />
        
        <div className="max-w-2xl mx-auto mt-12 text-center space-y-4">
          <h3 className="text-lg font-semibold text-foreground">How it works:</h3>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="space-y-2">
              <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto font-semibold">1</div>
              <p className="text-sm text-muted-foreground">Enter a prompt you want someone to ask ChatGPT</p>
            </div>
            <div className="space-y-2">
              <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto font-semibold">2</div>
              <p className="text-sm text-muted-foreground">Share the generated link with them</p>
            </div>
            <div className="space-y-2">
              <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto font-semibold">3</div>
              <p className="text-sm text-muted-foreground">They see the typing animation, then get redirected to ChatGPT</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
