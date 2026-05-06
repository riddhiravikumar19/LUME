import { Trophy, Award, Zap } from "lucide-react";

const Leaderboard = () => {
  const users = [
    { rank: 1, name: "Sarah K.", xp: 2840, streak: 15, badges: 12 },
    { rank: 2, name: "Alex T.", xp: 2650, streak: 12, badges: 10 },
    { rank: 3, name: "Mike R.", xp: 2430, streak: 10, badges: 9 },
    { rank: 4, name: "Emma L.", xp: 2120, streak: 8, badges: 8 },
    { rank: 5, name: "John D.", xp: 1980, streak: 7, badges: 7 },
  ];

  return (
    <div className="min-h-screen bg-background p-6 pt-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Leaderboard & Achievements</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="gradient-card border border-border rounded-xl p-6 text-center">
            <Trophy className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
            <p className="text-2xl font-bold">2,450</p>
            <p className="text-sm text-muted-foreground">Total XP</p>
          </div>
          <div className="gradient-card border border-border rounded-xl p-6 text-center">
            <Zap className="h-8 w-8 text-orange-500 mx-auto mb-2" />
            <p className="text-2xl font-bold">14 Days</p>
            <p className="text-sm text-muted-foreground">Current Streak</p>
          </div>
          <div className="gradient-card border border-border rounded-xl p-6 text-center">
            <Award className="h-8 w-8 text-blue-500 mx-auto mb-2" />
            <p className="text-2xl font-bold">8</p>
            <p className="text-sm text-muted-foreground">Badges Earned</p>
          </div>
        </div>
        
        <div className="gradient-card border border-border rounded-xl overflow-hidden">
          <div className="p-6 border-b border-border">
            <h2 className="text-xl font-semibold">Top Performers</h2>
          </div>
          <div className="divide-y divide-border">
            {users.map((user) => (
              <div key={user.rank} className="p-4 hover:bg-card/50 transition-colors flex items-center gap-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                  user.rank === 1 ? 'bg-yellow-500/20 text-yellow-500' :
                  user.rank === 2 ? 'bg-gray-400/20 text-gray-400' :
                  user.rank === 3 ? 'bg-orange-500/20 text-orange-500' :
                  'bg-primary/10 text-primary'
                }`}>
                  {user.rank}
                </div>
                <div className="flex-1">
                  <p className="font-semibold">{user.name}</p>
                  <p className="text-sm text-muted-foreground">{user.xp} XP</p>
                </div>
                <div className="text-right">
                  <p className="text-sm flex items-center gap-1">
                    <Zap className="h-4 w-4 text-orange-500" />
                    {user.streak} days
                  </p>
                  <p className="text-xs text-muted-foreground">{user.badges} badges</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
