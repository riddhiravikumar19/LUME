import { Video, MessageSquare, Upload, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const QuickActions = () => {
  const navigate = useNavigate();
  
  const actions = [
    {
      icon: Video,
      label: "Start Video Call",
      variant: "default" as const,
      className: "gradient-primary glow-primary hover:scale-105",
      path: "/video-call",
    },
    {
      icon: MessageSquare,
      label: "Join Chat Room",
      variant: "outline" as const,
      className: "border-primary/50 hover:bg-primary/10 hover:border-primary",
      path: "/chat-room",
    },
    {
      icon: Upload,
      label: "Upload Resource",
      variant: "outline" as const,
      className: "border-primary/50 hover:bg-primary/10 hover:border-primary",
      path: "/upload-resource",
    },
    {
      icon: Plus,
      label: "New Task",
      variant: "outline" as const,
      className: "border-primary/50 hover:bg-primary/10 hover:border-primary",
      path: "/tasks",
    },
  ];

  return (
    <section className="py-8 px-4">
      <h2 className="text-2xl font-semibold mb-6">Quick Actions</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
        {actions.map((action) => (
          <Button
            key={action.label}
            variant={action.variant}
            size="lg"
            onClick={() => navigate(action.path)}
            className={`h-20 flex flex-col items-center gap-2 ${action.className} transition-all`}
          >
            <action.icon className="h-6 w-6" />
            <span>{action.label}</span>
          </Button>
        ))}
      </div>
    </section>
  );
};

export default QuickActions;
