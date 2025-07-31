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
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <div className="bg-card rounded-lg border border-border p-6 shadow-chat">
        <h2 className="text-xl font-semibold text-foreground mb-4">
          Create Your Prompt Share Link
        </h2>
        
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">
              Enter the prompt you want to share:
            </label>
            <Textarea
              placeholder="e.g., Can you help me write a professional email to my boss about taking time off?"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="min-h-[100px] resize-none"
            />
          </div>

          <Button 
            onClick={generateUrl}
            disabled={!prompt.trim()}
            className="w-full bg-gradient-primary hover:bg-primary-hover"
          >
            Generate Shareable Link
          </Button>

          {generatedUrl && (
            <div className="space-y-3 pt-4 border-t border-border">
              <label className="text-sm font-medium text-foreground block">
                Your shareable link:
              </label>
              <div className="flex gap-2">
                <Input
                  value={generatedUrl}
                  readOnly
                  className="flex-1 font-mono text-xs"
                />
                <Button
                  variant="outline"
                  size="sm"
                  onClick={copyToClipboard}
                  className="px-3"
                >
                  <Copy className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={openPreview}
                  className="px-3"
                >
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Share this link to show someone how to ask ChatGPT the right question!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};