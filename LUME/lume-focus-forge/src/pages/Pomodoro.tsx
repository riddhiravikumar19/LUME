import { Play, Pause, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const Pomodoro = () => {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isActive && (minutes > 0 || seconds > 0)) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            setIsActive(false);
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, minutes, seconds]);

  const reset = () => {
    setIsActive(false);
    setMinutes(25);
    setSeconds(0);
  };

  const progress = ((25 * 60 - (minutes * 60 + seconds)) / (25 * 60)) * 100;

  return (
    <div className="min-h-screen bg-background p-6 pt-24">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-3xl font-bold mb-8">Pomodoro Timer</h1>
        
        <div className="gradient-card border border-border rounded-2xl p-12">
          <div className="relative w-64 h-64 mx-auto mb-8">
            <svg className="w-full h-full transform -rotate-90">
              <circle
                cx="128"
                cy="128"
                r="120"
                stroke="currentColor"
                strokeWidth="8"
                fill="none"
                className="text-primary/20"
              />
              <circle
                cx="128"
                cy="128"
                r="120"
                stroke="currentColor"
                strokeWidth="8"
                fill="none"
                strokeDasharray={`${2 * Math.PI * 120}`}
                strokeDashoffset={`${2 * Math.PI * 120 * (1 - progress / 100)}`}
                className="text-primary transition-all duration-1000"
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-6xl font-bold">
                {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
              </div>
            </div>
          </div>
          
          <div className="flex justify-center gap-4">
            <Button
              size="lg"
              className="gradient-primary w-20 h-20 rounded-full"
              onClick={() => setIsActive(!isActive)}
            >
              {isActive ? <Pause className="h-8 w-8" /> : <Play className="h-8 w-8" />}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-20 h-20 rounded-full"
              onClick={reset}
            >
              <RotateCcw className="h-8 w-8" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pomodoro;
