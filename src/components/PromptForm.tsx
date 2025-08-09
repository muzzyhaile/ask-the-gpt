import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Copy, ExternalLink } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const PromptForm = () => {
  const [prompt, setPrompt] = useState("");
  const [generatedUrl, setGeneratedUrl] = useState("");
  const { toast } = useToast();

  const generateUrl = () => {
    if (!prompt.trim()) return;
    
    const baseUrl = window.location.origin;
    const encodedPrompt = encodeURIComponent(prompt.trim());
    const url = `${baseUrl}?prompt=${encodedPrompt}`;
    setGeneratedUrl(url);
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generatedUrl);
      toast({
        title: "Copied!",
        description: "URL copied to clipboard",
      });
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please copy manually",
        variant: "destructive",
      });
    }
  };

  const openPreview = () => {
    if (generatedUrl) {
      window.open(generatedUrl, '_blank');
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* ChatGPT-style input area */}
      <div className="bg-secondary rounded-2xl border border-border p-4">
        <div className="space-y-4">
          <Textarea
            placeholder="Ask anything"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="min-h-[60px] bg-transparent border-0 text-foreground placeholder-muted-foreground resize-none text-lg p-0 focus:ring-0 focus:outline-none"
          />
          
          <div className="flex justify-end items-center">
            <Button 
              onClick={generateUrl}
              disabled={!prompt.trim()}
              variant="secondary"
              className="rounded-full h-8 w-8 p-0"
            >
              <span className="text-sm">↗</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Generated URL section */}
      {generatedUrl && (
        <div className="mt-8 bg-secondary rounded-2xl border border-border p-6">
          <h3 className="text-lg font-medium text-foreground mb-4">Your shareable link:</h3>
          <div className="flex flex-col sm:flex-row gap-3">
            <Input
              value={generatedUrl}
              readOnly
              className="flex-1 bg-muted border-border text-foreground font-mono text-sm"
            />
            <div className="flex gap-3 sm:gap-2">
              <Button
                variant="secondary"
                onClick={copyToClipboard}
              >
                <Copy className="w-4 h-4 mr-2 sm:mr-0" />
                <span className="sm:hidden">Copy</span>
              </Button>
              <Button
                variant="secondary"
                onClick={openPreview}
              >
                <ExternalLink className="w-4 h-4 mr-2 sm:mr-0" />
                <span className="sm:hidden">Open</span>
              </Button>
            </div>
          </div>
          <p className="text-muted-foreground text-sm mt-3">
            Share this link to show someone how to ask ChatGPT the right question!
          </p>
        </div>
      )}
    </div>
  );
};