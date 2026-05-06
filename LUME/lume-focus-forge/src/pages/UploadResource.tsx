import { Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const UploadResource = () => {
  return (
    <div className="min-h-screen bg-background p-6 pt-24">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Upload Resource</h1>
        
        <div className="gradient-card border border-border rounded-2xl p-8">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Resource Title</label>
              <Input placeholder="Enter resource title" />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Description</label>
              <Textarea placeholder="Describe your resource..." rows={4} />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Category</label>
              <Input placeholder="e.g., Math, Science, History" />
            </div>
            
            <div className="border-2 border-dashed border-primary/50 rounded-xl p-8 text-center hover:border-primary transition-colors cursor-pointer">
              <Upload className="h-12 w-12 mx-auto mb-4 text-primary" />
              <p className="text-sm text-muted-foreground mb-2">Click to upload or drag and drop</p>
              <p className="text-xs text-muted-foreground">PDF, DOC, PPT (max. 50MB)</p>
            </div>
            
            <Button className="w-full gradient-primary" size="lg">
              Upload Resource
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UploadResource;
