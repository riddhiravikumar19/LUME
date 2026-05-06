import Hero from "@/components/Hero";
import QuickActions from "@/components/QuickActions";
import FeaturesGrid from "@/components/FeaturesGrid";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="pt-24 pb-12">
        <Hero />
        <QuickActions />
        <FeaturesGrid />
      </main>
    </div>
  );
};

export default Index;
