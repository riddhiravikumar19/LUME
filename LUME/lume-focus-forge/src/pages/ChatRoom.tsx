import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const ChatRoom = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { id: 1, user: "Alex", text: "Hey everyone! Ready to study?", time: "10:30 AM" },
    { id: 2, user: "Sarah", text: "Yes! Let's focus on Chapter 5", time: "10:32 AM" },
  ]);

  const handleSend = () => {
    if (message.trim()) {
      setMessages([...messages, {
        id: messages.length + 1,
        user: "You",
        text: message,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);
      setMessage("");
    }
  };

  return (
    <div className="min-h-screen bg-background p-6 pt-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Study Chat Room</h1>
        
        <div className="gradient-card border border-border rounded-2xl overflow-hidden">
          <div className="h-[500px] overflow-y-auto p-6 space-y-4">
            {messages.map((msg) => (
              <div key={msg.id} className="flex flex-col">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-semibold text-primary">{msg.user}</span>
                  <span className="text-xs text-muted-foreground">{msg.time}</span>
                </div>
                <div className="bg-card border border-border rounded-lg p-3 max-w-md">
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
          
          <div className="border-t border-border p-4 flex gap-2">
            <Input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type your message..."
              className="flex-1"
            />
            <Button onClick={handleSend} className="gradient-primary">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatRoom;
