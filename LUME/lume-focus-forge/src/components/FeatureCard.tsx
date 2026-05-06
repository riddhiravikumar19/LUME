import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  buttonText: string;
  status?: "online" | "active" | null;
  onClick?: () => void;
}

const FeatureCard = ({ icon: Icon, title, description, buttonText, status, onClick }: FeatureCardProps) => {
  return (
    <div className="gradient-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all group">
      <div className="flex items-start justify-between mb-4">
        <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        {status && (
          <span className="flex items-center gap-2 text-xs px-3 py-1 rounded-full bg-primary/20 text-primary border border-primary/30">
            <span className="h-2 w-2 bg-primary rounded-full animate-pulse" />
            {status === "online" ? "Online" : "Active"}
          </span>
        )}
      </div>
      
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{description}</p>
      
      <Button onClick={onClick} className="w-full gradient-primary hover:opacity-90 transition-opacity">
        {buttonText}
      </Button>
    </div>
  );
};

export default FeatureCard;
