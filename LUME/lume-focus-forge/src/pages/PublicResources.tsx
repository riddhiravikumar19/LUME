import { FileText, Download, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const PublicResources = () => {
  const resources = [
    { id: 1, title: "Advanced Calculus Guide", author: "Sarah K.", rating: 4.8, downloads: 234 },
    { id: 2, title: "World History Timeline", author: "Mike R.", rating: 4.5, downloads: 189 },
    { id: 3, title: "Physics Formula Collection", author: "Alex T.", rating: 4.9, downloads: 312 },
  ];

  return (
    <div className="min-h-screen bg-background p-6 pt-24">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Public Resources</h1>
        
        <div className="mb-6">
          <Input placeholder="Search resources..." className="max-w-md" />
        </div>
        
        <div className="grid gap-4">
          {resources.map((resource) => (
            <div
              key={resource.id}
              className="gradient-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-1">{resource.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">by {resource.author}</p>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                      {resource.rating}
                    </span>
                    <span className="text-muted-foreground">{resource.downloads} downloads</span>
                  </div>
                </div>
                <Button className="gradient-primary">
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PublicResources;
