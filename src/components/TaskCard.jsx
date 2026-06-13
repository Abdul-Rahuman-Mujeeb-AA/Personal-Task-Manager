import { useNavigate } from "react-router-dom";

const TaskCard = ({ task, onDelete, onComplete }) => {
  const navigate = useNavigate();

  const isOverdue =
    task.status !== "Completed" && new Date(task.dueDate) < new Date();

  return (
    <div className="bg-white p-4 rounded-xl shadow border">
      <h3 className="font-bold text-lg">{task.title}</h3>

      <p className="text-gray-600 mt-1">{task.description}</p>

      <div className="mt-3 text-sm space-y-1">
        <p>📅 {task.dueDate}</p>
        <p>⚡ {task.priority}</p>
        <p>📂 {task.category}</p>
        <p>
          📌 {task.status}{" "}
          {isOverdue && (
            <span className="text-red-600 font-semibold">(Overdue)</span>
          )}
        </p>
      </div>

      <div className="flex gap-2 mt-4 flex-wrap">
        <button
          onClick={() =>
            navigate(`/task/${task.id}`, {
              state: task,
            })
          }
          className="px-3 py-2 bg-blue-600 text-white rounded-lg"
        >
          View
        </button>

        <button
          onClick={() =>
            navigate(`/edit-task/${task.id}`, {
              state: task,
            })
          }
          className="px-3 py-2 bg-yellow-500 text-white rounded-lg"
        >
          Edit
        </button>

        <button
          onClick={() => onComplete(task.id)}
          className="px-3 py-2 bg-green-600 text-white rounded-lg"
        >
          Complete
        </button>

        <button
          onClick={() => onDelete(task.id)}
          className="px-3 py-2 bg-red-600 text-white rounded-lg"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
