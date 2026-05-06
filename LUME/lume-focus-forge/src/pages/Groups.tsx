import { Users, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Groups = () => {
  const groups = [
    { id: 1, name: "Math Study Group", members: 12, active: true },
    { id: 2, name: "History Enthusiasts", members: 8, active: false },
    { id: 3, name: "Science Project Team", members: 15, active: true },
  ];

  return (
    <div className="min-h-screen bg-background p-6 pt-24">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Study Groups</h1>
          <Button className="gradient-primary">
            <Plus className="h-4 w-4 mr-2" />
            Create Group
          </Button>
        </div>
        
        <div className="mb-6">
          <Input placeholder="Search groups..." className="max-w-md" />
        </div>
        
        <div className="grid gap-4">
          {groups.map((group) => (
            <div
              key={group.id}
              className="gradient-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="p-4 bg-primary/10 rounded-xl">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-semibold text-xl">{group.name}</h3>
                    {group.active && (
                      <span className="flex items-center gap-2 text-xs px-3 py-1 rounded-full bg-primary/20 text-primary border border-primary/30">
                        <span className="h-2 w-2 bg-primary rounded-full animate-pulse" />
                        Active
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{group.members} members</p>
                </div>
                <Button variant="outline">Join Group</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Groups;
