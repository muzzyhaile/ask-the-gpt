import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

interface ChatInterfaceProps {
  prompt: string;
  onComplete: () => void;
}

export const ChatInterface = ({ prompt, onComplete }: ChatInterfaceProps) => {
  const [typedText, setTypedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showSendButton, setShowSendButton] = useState(false);

  useEffect(() => {
    if (!prompt) return;

    setIsTyping(true);
    let currentIndex = 0;
    
    const typeText = () => {
      if (currentIndex < prompt.length) {
        setTypedText(prompt.slice(0, currentIndex + 1));
        currentIndex++;
        setTimeout(typeText, 50 + Math.random() * 50); // Vary typing speed
      } else {
        setIsTyping(false);
        setShowSendButton(true);
        setTimeout(() => {
          onComplete();
        }, 1500);
      }
    };

    const startDelay = setTimeout(typeText, 1000);
    return () => clearTimeout(startDelay);
  }, [prompt, onComplete]);

  return (
    <div className="w-full max-w-4xl mx-auto bg-secondary rounded-lg shadow-chat border border-border">
      {/* Chat Header */}
      <div className="border-b border-border p-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
            <span className="text-secondary-foreground font-semibold text-sm">C</span>
          </div>
          <span className="font-medium text-foreground">Chat</span>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="p-4 min-h-[200px] bg-background">
        <div className="space-y-4">
          {/* Example previous message */}
          <div className="flex gap-3">
            <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-muted-foreground font-semibold text-sm">U</span>
            </div>
            <div className="bg-background rounded-lg p-3 border border-border">
              <p className="text-foreground text-sm">Hello! How can I help you today?</p>
            </div>
          </div>

          {/* AI Response */}
          <div className="flex gap-3">
            <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-secondary-foreground font-semibold text-sm">C</span>
            </div>
            <div className="bg-background rounded-lg p-3 border border-border">
              <p className="text-foreground text-sm">
                I'm here to help! What would you like to know or discuss?
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Input Area */}
      <div className="border-t border-border p-4">
        <div className="flex gap-3 items-end">
          <div className="flex-1 relative">
            <div className="min-h-[44px] max-h-[200px] bg-background border border-chat-border rounded-lg px-4 py-3 focus-within:shadow-input transition-shadow">
              <div className="text-foreground whitespace-pre-wrap break-words">
                {typedText}
                {isTyping && (
                  <span className="inline-block w-1 h-4 bg-foreground ml-1 animate-pulse" />
                )}
              </div>
              {!typedText && !isTyping && (
                <div className="text-muted-foreground">Type your message...</div>
              )}
            </div>
          </div>
          
      <Button
        size="sm"
        variant="secondary"
        className={`${showSendButton ? 'opacity-100 scale-100' : 'opacity-50 scale-95'} h-11 w-11 p-0 transition-all duration-200`}
        disabled={!showSendButton}
      >
        <Send className="w-4 h-4" />
      </Button>
        </div>
      </div>
    </div>
  );
};