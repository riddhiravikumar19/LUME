import { Video, Mic, MicOff, VideoOff, PhoneOff, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const VideoCall = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);

  return (
    <div className="min-h-screen bg-background p-6 pt-24">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Live Video Call</h1>
        
        <div className="gradient-card border border-border rounded-2xl p-8 mb-6">
          <div className="aspect-video bg-black/50 rounded-xl flex items-center justify-center mb-6">
            <div className="text-center">
              <Video className="h-16 w-16 mx-auto mb-4 text-primary" />
              <p className="text-muted-foreground">Video call interface will appear here</p>
            </div>
          </div>
          
          <div className="flex justify-center gap-4">
            <Button
              variant={isMuted ? "destructive" : "outline"}
              size="icon"
              className="h-12 w-12 rounded-full"
              onClick={() => setIsMuted(!isMuted)}
            >
              {isMuted ? <MicOff className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
            </Button>
            
            <Button
              variant={isVideoOff ? "destructive" : "outline"}
              size="icon"
              className="h-12 w-12 rounded-full"
              onClick={() => setIsVideoOff(!isVideoOff)}
            >
              {isVideoOff ? <VideoOff className="h-5 w-5" /> : <Video className="h-5 w-5" />}
            </Button>
            
            <Button
              variant="outline"
              size="icon"
              className="h-12 w-12 rounded-full"
            >
              <Monitor className="h-5 w-5" />
            </Button>
            
            <Button
              variant="destructive"
              size="icon"
              className="h-12 w-12 rounded-full"
            >
              <PhoneOff className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCall;
