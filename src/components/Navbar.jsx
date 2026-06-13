import { useNavigate } from "react-router-dom";

const Navbar = ({ onAddTask }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("tasks");
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <nav className="bg-white shadow-md border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between py-4 gap-3 sm:gap-0">
          {/* Left Side */}
          <h1 className="text-2xl font-bold text-blue-600">Task Manager</h1>

          {/* Right Side */}
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onAddTask}
              className="flex-1 sm:flex-none bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition"
            >
              Add New Task
            </button>

            <button
              onClick={handleLogout}
              className="flex-1 sm:flex-none bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-medium transition"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
