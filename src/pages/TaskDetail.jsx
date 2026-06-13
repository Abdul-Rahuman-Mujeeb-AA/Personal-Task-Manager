import { useNavigate, useLocation } from "react-router-dom";

const TaskDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const task = location.state;

  if (!task) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <h2 className="text-xl font-semibold text-gray-700">
          Task Not Found
        </h2>
      </div>
    );
  }

  const isOverdue =
    new Date(task.dueDate) < new Date() && task.status !== "Completed";

  const priorityColors = {
    Low: "bg-red-100 text-red-700",
    Medium: "bg-yellow-100 text-yellow-700",
    High: "bg-green-100 text-green-700",
  };

  const statusColors = {
    "To-Do": "bg-gray-100 text-gray-700",
    "In Progress": "bg-blue-100 text-blue-700",
    Completed: "bg-green-100 text-green-700",
  };

  return (
    <div className="min-h-screen bg-gray-300 p-4 md:p-8">
      {" "}
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-blue-600 text-white p-6">
          <h1 className="text-2xl md:text-3xl font-bold">Task Details</h1>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <h2 className="text-2xl font-bold text-gray-800">{task.title}</h2>

            {isOverdue && (
              <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium">
                Overdue
              </span>
            )}
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-semibold text-gray-500 mb-2">
                Description
              </h3>

              <p className="text-gray-700 leading-relaxed">
                {task.description}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-xl">
                <h3 className="text-sm font-semibold text-gray-500 mb-2">
                  Priority
                </h3>

                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    priorityColors[task.priority]
                  }`}
                >
                  {task.priority}
                </span>
              </div>

              <div className="bg-gray-50 p-4 rounded-xl">
                <h3 className="text-sm font-semibold text-gray-500 mb-2">
                  Category
                </h3>

                <p className="font-medium text-gray-800">{task.category}</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-xl">
                <h3 className="text-sm font-semibold text-gray-500 mb-2">
                  Status
                </h3>

                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    statusColors[task.status]
                  }`}
                >
                  {task.status}
                </span>
              </div>

              <div className="bg-gray-50 p-4 rounded-xl">
                <h3 className="text-sm font-semibold text-gray-500 mb-2">
                  Due Date
                </h3>

                <p className="font-medium text-gray-800">
                  {new Date(task.dueDate).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>

          {/* Back Button */}
          <div className="mt-8">
            <button
              onClick={() => navigate("/dashboard")}
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition">
              Back to Dashboard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskDetail;
