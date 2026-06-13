import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import TaskForm from "../components/TaskForm";
import KanbanBoard from "../components/KanbanBoard";
import FilterBar from "../components/FilterBar";

const Dashboard = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser") || "null");

  const storageKey = currentUser?.id ? `tasks_${currentUser.id}` : "tasks";

  const [tasks, setTasks] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(storageKey) || "[]");
    } catch {
      return [];
    }
  });

  const [filteredTasks, setFilteredTasks] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(storageKey) || "[]");
    } catch {
      return [];
    }
  });

  const [showTaskForm, setShowTaskForm] = useState(false);

  // Save tasks automatically
  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(tasks));
  }, [tasks, storageKey]);

  // Refresh data when window regains focus
  useEffect(() => {
    const handleFocus = () => {
      try {
        const latestTasks = JSON.parse(
          localStorage.getItem(storageKey) || "[]",
        );

        setTasks(latestTasks);
        setFilteredTasks(latestTasks);
      } catch {
        setTasks([]);
        setFilteredTasks([]);
      }
    };

    window.addEventListener("focus", handleFocus);

    return () => {
      window.removeEventListener("focus", handleFocus);
    };
  }, [storageKey]);

  const handleAddTask = (taskData) => {
    const newTask = {
      id: crypto.randomUUID(),
      title: taskData.title,
      description: taskData.description,
      dueDate: taskData.dueDate,
      priority: taskData.priority,
      category: taskData.category,
      status: taskData.status || "Pending",
    };

    const updatedTasks = [...tasks, newTask];

    setTasks(updatedTasks);
    setFilteredTasks(updatedTasks);
    setShowTaskForm(false);
  };

  const handleDeleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);

    setTasks(updatedTasks);
    setFilteredTasks(updatedTasks);
  };

  const handleCompleteTask = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, status: "Completed" } : task,
    );

    setTasks(updatedTasks);
    setFilteredTasks(updatedTasks);
  };

  return (
    <div className="min-h-screen bg-slate-100">
      <Navbar onAddTask={() => setShowTaskForm(true)} />

      {showTaskForm && (
        <TaskForm
          onClose={() => setShowTaskForm(false)}
          onSubmit={handleAddTask}
        />
      )}

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">My Tasks</h1>

          <div className="bg-blue-600 text-white px-4 py-2 rounded-lg">
            Total Tasks: {tasks.length}
          </div>
        </div>

        <FilterBar tasks={tasks} setFilteredTasks={setFilteredTasks} />

        {filteredTasks.length === 0 ? (
          <div className="bg-white p-10 rounded-2xl shadow text-center">
            <h2 className="text-xl font-semibold text-gray-700">
              No Tasks Available
            </h2>

            <p className="text-gray-500 mt-2">
              Create a new task to get started.
            </p>
          </div>
        ) : (
          <KanbanBoard
            tasks={filteredTasks}
            onDelete={handleDeleteTask}
            onComplete={handleCompleteTask}
          />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
