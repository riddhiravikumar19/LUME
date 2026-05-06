import { Plus, Trash2, CheckCircle, Circle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

const Tasks = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, text: "Complete Chapter 5 reading", completed: false },
    { id: 2, text: "Prepare presentation slides", completed: true },
  ]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const toggleTask = (id: number) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="min-h-screen bg-background p-6 pt-24">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Smart To-Do List</h1>
        
        <div className="gradient-card border border-border rounded-2xl p-6 mb-6">
          <div className="flex gap-2 mb-6">
            <Input
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && addTask()}
              placeholder="Add a new task..."
              className="flex-1"
            />
            <Button onClick={addTask} className="gradient-primary">
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="space-y-3">
            {tasks.map((task) => (
              <div
                key={task.id}
                className="flex items-center gap-3 p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors"
              >
                <button onClick={() => toggleTask(task.id)}>
                  {task.completed ? (
                    <CheckCircle className="h-5 w-5 text-primary" />
                  ) : (
                    <Circle className="h-5 w-5 text-muted-foreground" />
                  )}
                </button>
                <span className={`flex-1 ${task.completed ? 'line-through text-muted-foreground' : ''}`}>
                  {task.text}
                </span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => deleteTask(task.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
