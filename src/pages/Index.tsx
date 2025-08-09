import { useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { ChatInterface } from "@/components/ChatInterface";
import { PromptForm } from "@/components/PromptForm";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [searchParams] = useSearchParams();
  const promptParam = searchParams.get("prompt");
  const [showAnimation] = useState(!!promptParam);
  const [redirecting, setRedirecting] = useState(false);
  const [popupBlocked, setPopupBlocked] = useState(false);
  const { toast } = useToast();

  const openChatGpt = () => {
    const url = `https://chatgpt.com/?model=gpt-4o-mini&q=${encodeURIComponent(promptParam || "")}`;
    const newTab = window.open(url, "_blank", "noopener,noreferrer");
    if (!newTab) {
      setPopupBlocked(true);
      toast({ title: "Popup blocked", description: "Click the button to open the chat.", variant: "destructive" });
    } else {
      setPopupBlocked(false);
    }
  };
  const copyPrompt = async () => {
    try {
      await navigator.clipboard.writeText(promptParam || "");
      toast({ title: "Copied", description: "Prompt copied. Paste in the chat and press Enter." });
    } catch (e) {
      toast({ title: "Copy failed", description: "Press Ctrl/Cmd+C to copy manually.", variant: "destructive" });
    }
  };

  const handleAnimationComplete = async () => {
    setRedirecting(true);
    await copyPrompt();
    openChatGpt();
  };

  if (showAnimation && promptParam) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex flex-col">
        {/* ChatGPT-style header (same as LP) */}
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
        
        {/* Main content area (centered like LP) */}
        <div className="flex-1 flex flex-col items-center justify-center px-4 py-12">
          <div className="w-full max-w-4xl mx-auto">
            <ChatInterface 
              prompt={promptParam} 
              onComplete={handleAnimationComplete}
            />

              <div className="mt-8 max-w-xl mx-auto text-center bg-secondary border border-border rounded-xl p-5">
                <p className="text-foreground">
                  Your prompt is copied. Switch to the chat tab, paste (Ctrl/Cmd+V), then press Enter.
                </p>
                <div className="flex items-center justify-center gap-3 mt-4">
                  <Button variant="secondary" onClick={copyPrompt}>Copy again</Button>
                  <Button onClick={openChatGpt}>Open chat</Button>
                </div>
                {popupBlocked && (
                  <p className="text-muted-foreground text-sm mt-3">If a popup was blocked, use the button above to open the chat.</p>
                )}
              </div>
          </div>
        </div>

        {/* Footer (same as LP) */}
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
              For all those people who find it more convenient to ask you to ask ChatGPT than to ask ChatGPT themselves.
            </p>
          </div>
          
          <PromptForm />
          
          {/* How it works section */}
          <div className="max-w-3xl mx-auto mt-16 text-center px-4">
            <h3 className="text-lg sm:text-xl font-medium text-white mb-8">How it works:</h3>
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
              <div className="space-y-3">
                <div className="w-10 h-10 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center mx-auto font-semibold">1</div>
                <p className="text-gray-300 text-sm sm:text-base">Enter a prompt you want someone to ask ChatGPT</p>
              </div>
              <div className="space-y-3">
                <div className="w-10 h-10 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center mx-auto font-semibold">2</div>
                <p className="text-gray-300 text-sm sm:text-base">Share the generated link with them</p>
              </div>
              <div className="space-y-3 sm:col-span-2 md:col-span-1">
                <div className="w-10 h-10 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center mx-auto font-semibold">3</div>
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
              <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center">
                <span className="text-secondary-foreground font-bold text-xs">P</span>
              </div>
              <span className="text-gray-400 text-sm">Prompt That For You</span>
            </div>
            <div className="flex flex-wrap gap-4 text-gray-400 text-sm text-center sm:text-right">
              <Link to="/imprint" className="hover:text-white transition-colors">Imprint</Link>
              <Link to="/legal" className="hover:text-white transition-colors">Legal</Link>
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
