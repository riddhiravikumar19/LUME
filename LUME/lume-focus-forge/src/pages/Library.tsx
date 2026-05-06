import { FileText, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Library = () => {
  const resources = [
    { id: 1, title: "Chapter 5 Notes", type: "PDF", date: "2025-01-10", size: "2.3 MB" },
    { id: 2, title: "Math Formula Sheet", type: "PDF", date: "2025-01-08", size: "1.1 MB" },
    { id: 3, title: "History Timeline", type: "DOCX", date: "2025-01-05", size: "890 KB" },
  ];

  return (
    <div className="min-h-screen bg-background p-6 pt-24">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Personal Library</h1>
        
        <div className="grid gap-4">
          {resources.map((resource) => (
            <div
              key={resource.id}
              className="gradient-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all flex items-center gap-4"
            >
              <div className="p-3 bg-primary/10 rounded-lg">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold mb-1">{resource.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {resource.type} • {resource.size} • {resource.date}
                </p>
              </div>
              <Button variant="outline" size="icon">
                <Download className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Library;
