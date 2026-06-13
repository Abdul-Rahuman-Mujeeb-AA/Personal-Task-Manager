import { useState } from "react";
import TaskCard from "./TaskCard";

const KanbanBoard = ({ tasks, onDelete, onComplete }) => {
  const [view, setView] = useState("kanban");

  const pendingTasks = tasks.filter((task) => task.status === "Pending");

  const progressTasks = tasks.filter((task) => task.status === "In Progress");

  const completedTasks = tasks.filter((task) => task.status === "Completed");

  return (
    <div className="space-y-6">
      {/* View Toggle */}
      <div className="flex justify-end">
        <div className="flex rounded-xl overflow-hidden bg-white shadow border">
          <button
            onClick={() => setView("kanban")}
            className={`px-5 py-2 font-medium transition ${
              view === "kanban"
                ? "bg-blue-600 text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            Kanban View
          </button>

          <button
            onClick={() => setView("list")}
            className={`px-5 py-2 font-medium transition ${
              view === "list"
                ? "bg-blue-600 text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            List View
          </button>
        </div>
      </div>

      {/* KANBAN VIEW */}
      {view === "kanban" && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Pending */}
          <div className="bg-slate-50 rounded-2xl p-4">
            <div className="bg-orange-500 text-white rounded-xl px-4 py-3 font-semibold mb-4">
              Pending ({pendingTasks.length})
            </div>

            <div className="space-y-4">
              {pendingTasks.length > 0 ? (
                pendingTasks.map((task) => (
                  <TaskCard
                    key={task.id}
                    task={task}
                    onDelete={onDelete}
                    onComplete={onComplete}
                  />
                ))
              ) : (
                <div className="bg-white border border-dashed rounded-xl p-6 text-center text-gray-400">
                  No Pending Tasks
                </div>
              )}
            </div>
          </div>

          {/* In Progress */}
          <div className="bg-slate-50 rounded-2xl p-4">
            <div className="bg-blue-500 text-white rounded-xl px-4 py-3 font-semibold mb-4">
              In Progress ({progressTasks.length})
            </div>

            <div className="space-y-4">
              {progressTasks.length > 0 ? (
                progressTasks.map((task) => (
                  <TaskCard
                    key={task.id}
                    task={task}
                    onDelete={onDelete}
                    onComplete={onComplete}
                  />
                ))
              ) : (
                <div className="bg-white border border-dashed rounded-xl p-6 text-center text-gray-400">
                  No Tasks In Progress
                </div>
              )}
            </div>
          </div>

          {/* Completed */}
          <div className="bg-slate-50 rounded-2xl p-4">
            <div className="bg-green-500 text-white rounded-xl px-4 py-3 font-semibold mb-4">
              Completed ({completedTasks.length})
            </div>

            <div className="space-y-4">
              {completedTasks.length > 0 ? (
                completedTasks.map((task) => (
                  <TaskCard
                    key={task.id}
                    task={task}
                    onDelete={onDelete}
                    onComplete={onComplete}
                  />
                ))
              ) : (
                <div className="bg-white border border-dashed rounded-xl p-6 text-center text-gray-400">
                  No Completed Tasks
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* LIST VIEW */}
      {view === "list" && (
        <div className="bg-white rounded-2xl shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px]">
              <thead className="bg-slate-100">
                <tr>
                  <th className="px-4 py-3 text-left">Title</th>

                  <th className="px-4 py-3 text-left">Category</th>

                  <th className="px-4 py-3 text-left">Priority</th>

                  <th className="px-4 py-3 text-left">Due Date</th>

                  <th className="px-4 py-3 text-left">Status</th>

                  <th className="px-4 py-3 text-center">Actions</th>
                </tr>
              </thead>

              <tbody>
                {tasks.length > 0 ? (
                  tasks.map((task) => (
                    <tr key={task.id} className="border-t hover:bg-slate-50">
                      <td className="px-4 py-3 font-medium">{task.title}</td>

                      <td className="px-4 py-3">{task.category}</td>

                      <td className="px-4 py-3">{task.priority}</td>

                      <td className="px-4 py-3">{task.dueDate}</td>

                      <td className="px-4 py-3">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            task.status === "Completed"
                              ? "bg-green-100 text-green-700"
                              : task.status === "In Progress"
                                ? "bg-blue-100 text-blue-700"
                                : "bg-orange-100 text-orange-700"
                          }`}
                        >
                          {task.status}
                        </span>
                      </td>

                      <td className="px-4 py-3">
                        <div className="flex justify-center gap-2">
                          {task.status !== "Completed" && (
                            <button
                              onClick={() => onComplete(task.id)}
                              className="bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-lg text-sm"
                            >
                              Complete
                            </button>
                          )}

                          <button
                            onClick={() => onDelete(task.id)}
                            className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-lg text-sm"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="py-10 text-center text-gray-500">
                      No Tasks Available
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default KanbanBoard;
