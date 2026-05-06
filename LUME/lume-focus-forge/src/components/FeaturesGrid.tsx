import { Video, BookOpen, Share2, CheckSquare, Clock, Users, Trophy, Settings } from "lucide-react";
import FeatureCard from "./FeatureCard";
import { useNavigate } from "react-router-dom";

const FeaturesGrid = () => {
  const navigate = useNavigate();
  
  const features = [
    {
      icon: Video,
      title: "Live Video Calls",
      description: "Connect with study partners through HD video sessions with screen sharing and real-time collaboration tools.",
      buttonText: "Start Session",
      status: "online" as const,
      path: "/video-call",
    },
    {
      icon: BookOpen,
      title: "Personal Library",
      description: "Upload and organize your notes, PDFs, and study materials in one secure, accessible location.",
      buttonText: "View Library",
      path: "/library",
    },
    {
      icon: Share2,
      title: "Public Resources",
      description: "Access a community-driven library of shared study materials, rated and reviewed by peers.",
      buttonText: "Browse Resources",
      path: "/public-resources",
    },
    {
      icon: CheckSquare,
      title: "Smart To-Do Lists",
      description: "Create, organize, and track your study tasks with integrated reminders and progress monitoring.",
      buttonText: "Manage Tasks",
      status: "active" as const,
      path: "/tasks",
    },
    {
      icon: Clock,
      title: "Pomodoro Timer",
      description: "Stay focused with customizable study sessions using the proven Pomodoro Technique.",
      buttonText: "Start Timer",
      path: "/pomodoro",
    },
    {
      icon: Users,
      title: "Study Groups",
      description: "Create or join study groups with shared resources, chat, and collaborative learning spaces.",
      buttonText: "Explore Groups",
      path: "/groups",
    },
    {
      icon: Trophy,
      title: "Leaderboard & Achievements",
      description: "Track your progress, earn XP, maintain study streaks, and compete with friends on the leaderboard.",
      buttonText: "View Rankings",
      path: "/leaderboard",
    },
    {
      icon: Settings,
      title: "Admin Dashboard",
      description: "Comprehensive platform management with user analytics, resource moderation, and insights.",
      buttonText: "Manage Platform",
      path: "/admin",
    },
  ];

  return (
    <section className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature) => (
          <FeatureCard key={feature.title} {...feature} onClick={() => navigate(feature.path)} />
        ))}
      </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
