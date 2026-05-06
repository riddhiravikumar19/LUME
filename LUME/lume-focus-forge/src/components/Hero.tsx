import { Calendar } from "lucide-react";

const Hero = () => {
  return (
    <section className="text-center py-12 px-4">
      <h1 className="text-5xl md:text-7xl font-bold mb-6">
        Welcome to{" "}
        <span className="bg-gradient-to-r from-primary via-secondary to-purple-700 bg-clip-text text-transparent animate-pulse-glow">
          LUME
        </span>
      </h1>
      <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
        Your complete virtual study space with live video calls, collaborative tools,
        <br className="hidden sm:block" />
        personal libraries, and intelligent task management.
      </p>
      
      {/* Today's Focus */}
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full">
        <Calendar className="h-4 w-4 text-primary" />
        <span className="text-sm">Today's Focus: <span className="text-primary font-medium">Advanced React Patterns</span></span>
      </div>
    </section>
  );
};

export default Hero;
