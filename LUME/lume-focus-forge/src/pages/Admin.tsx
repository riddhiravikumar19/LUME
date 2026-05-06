import { Users, FileText, Activity, TrendingUp } from "lucide-react";

const Admin = () => {
  const stats = [
    { label: "Total Users", value: "1,234", icon: Users, change: "+12%" },
    { label: "Resources", value: "456", icon: FileText, change: "+8%" },
    { label: "Active Sessions", value: "89", icon: Activity, change: "+23%" },
    { label: "Engagement", value: "94%", icon: TrendingUp, change: "+5%" },
  ];

  return (
    <div className="min-h-screen bg-background p-6 pt-24">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="gradient-card border border-border rounded-xl p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <stat.icon className="h-8 w-8 text-primary" />
                <span className="text-sm text-green-500">{stat.change}</span>
              </div>
              <p className="text-3xl font-bold mb-1">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
        
        <div className="gradient-card border border-border rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          <div className="space-y-3">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center gap-3 p-3 bg-card border border-border rounded-lg">
                <div className="h-2 w-2 bg-primary rounded-full" />
                <span className="text-sm">User activity log entry {i}</span>
                <span className="text-xs text-muted-foreground ml-auto">2 min ago</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
