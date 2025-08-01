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
      <div className="bg-gray-800 rounded-2xl border border-gray-700 p-4">
        <div className="space-y-4">
          <Textarea
            placeholder="Ask anything"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="min-h-[60px] bg-transparent border-0 text-white placeholder-gray-400 resize-none text-lg p-0 focus:ring-0 focus:outline-none"
          />
          
          <div className="flex justify-between items-center">
            <div className="flex space-x-2">
              {/* Placeholder for attachment icons */}
              <div className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center">
                <span className="text-gray-400 text-sm">📎</span>
              </div>
            </div>
            
            <Button 
              onClick={generateUrl}
              disabled={!prompt.trim()}
              className="bg-white text-black hover:bg-gray-200 rounded-full p-2 w-8 h-8"
            >
              <span className="text-sm">↗</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Generated URL section */}
      {generatedUrl && (
        <div className="mt-8 bg-gray-800 rounded-2xl border border-gray-700 p-6">
          <h3 className="text-lg font-medium text-white mb-4">Your shareable link:</h3>
          <div className="flex flex-col sm:flex-row gap-3">
            <Input
              value={generatedUrl}
              readOnly
              className="flex-1 bg-gray-700 border-gray-600 text-gray-200 font-mono text-sm"
            />
            <div className="flex gap-3 sm:gap-2">
              <Button
                variant="outline"
                onClick={copyToClipboard}
                className="flex-1 sm:flex-none bg-gray-700 border-gray-600 text-gray-200 hover:bg-gray-600"
              >
                <Copy className="w-4 h-4 mr-2 sm:mr-0" />
                <span className="sm:hidden">Copy</span>
              </Button>
              <Button
                variant="outline"
                onClick={openPreview}
                className="flex-1 sm:flex-none bg-gray-700 border-gray-600 text-gray-200 hover:bg-gray-600"
              >
                <ExternalLink className="w-4 h-4 mr-2 sm:mr-0" />
                <span className="sm:hidden">Open</span>
              </Button>
            </div>
          </div>
          <p className="text-gray-400 text-sm mt-3">
            Share this link to show someone how to ask ChatGPT the right question!
          </p>
        </div>
      )}
    </div>
  );
};