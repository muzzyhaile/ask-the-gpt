import { useState, useEffect } from "react";

interface ChatInterfaceProps {
  prompt: string;
  onComplete: () => void;
}

export const ChatInterface = ({ prompt, onComplete }: ChatInterfaceProps) => {
  const [typedText, setTypedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (!prompt) return;

    setIsTyping(true);
    let currentIndex = 0;
    
    const typeText = () => {
      if (currentIndex < prompt.length) {
        setTypedText(prompt.slice(0, currentIndex + 1));
        currentIndex++;
        setTimeout(typeText, 50 + Math.random() * 50);
      } else {
        setIsTyping(false);
        setTimeout(() => {
          onComplete();
        }, 300);
      }
    };

    const startDelay = setTimeout(typeText, 300);
    return () => clearTimeout(startDelay);
  }, [prompt, onComplete]);

  return (
    <div className="w-full max-w-2xl mx-auto bg-secondary rounded-lg border border-border shadow-lg">
      {/* Typing area */}
      <div className="p-4">
        <div className="min-h-[140px] bg-background border border-chat-border rounded-lg px-4 py-3">
          <div className="text-foreground whitespace-pre-wrap break-words">
            {typedText}
            {isTyping && (
              <span className="inline-block w-1 h-4 bg-foreground ml-1 animate-pulse" />
            )}
          </div>
          {!typedText && !isTyping && (
            <div className="text-muted-foreground">Preparing your chat…</div>
          )}
        </div>
      </div>
    </div>
  );
};