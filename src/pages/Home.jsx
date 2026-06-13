import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-slate-100 to-white">

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div>
            <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
              Smart Productivity Task Manager
            </span>

            <h1 className="mt-6 text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
              Organize Your Work &
              <span className="text-blue-600"> Boost Productivity</span>
            </h1>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Manage your daily tasks, track progress, organize priorities,
              and improve productivity with an intuitive task management
              platform built for students, professionals, and teams.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link
                to="/signup"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-center transition duration-300 shadow-lg"
              >
                Get Started
              </Link>

              <Link
                to="/login"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl font-semibold text-center transition duration-300"
              >
                Login
              </Link>
            </div>
          </div>

          {/* Right Content */}
          <div className="bg-white rounded-3xl shadow-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Task Overview
            </h2>

            <div className="space-y-4">

              <div className="flex items-center justify-between bg-slate-50 p-4 rounded-xl">
                <span className="font-medium">To-Do Tasks</span>
                <span className="bg-gray-200 px-3 py-1 rounded-full">
                  12
                </span>
              </div>

              <div className="flex items-center justify-between bg-slate-50 p-4 rounded-xl">
                <span className="font-medium">In Progress</span>
                <span className="bg-yellow-200 px-3 py-1 rounded-full">
                  8
                </span>
              </div>

              <div className="flex items-center justify-between bg-slate-50 p-4 rounded-xl">
                <span className="font-medium">Completed</span>
                <span className="bg-green-200 px-3 py-1 rounded-full">
                  25
                </span>
              </div>

              <div className="flex items-center justify-between bg-slate-50 p-4 rounded-xl">
                <span className="font-medium">Productivity Score</span>
                <span className="bg-blue-200 px-3 py-1 rounded-full">
                  92%
                </span>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">
            Powerful Features
          </h2>

          <p className="text-gray-600 mt-4">
            Everything you need to manage your tasks efficiently.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

          <div className="bg-white rounded-2xl shadow-lg p-6 hover:-translate-y-1 transition">
            <h3 className="text-xl font-bold mb-3">
              Task Management
            </h3>

            <p className="text-gray-600">
              Create, edit, delete and organize tasks with categories and
              priorities.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 hover:-translate-y-1 transition">
            <h3 className="text-xl font-bold mb-3">
              Kanban Workflow
            </h3>

            <p className="text-gray-600">
              Move tasks through To-Do, In Progress and Completed stages.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 hover:-translate-y-1 transition">
            <h3 className="text-xl font-bold mb-3">
              Smart Filters
            </h3>

            <p className="text-gray-600">
              Search and filter tasks by category, priority and due date.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 hover:-translate-y-1 transition">
            <h3 className="text-xl font-bold mb-3">
              Productivity Stats
            </h3>

            <p className="text-gray-600">
              Monitor progress, completion rates and productivity trends.
            </p>
          </div>

        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold">
              Why Choose Task Manager?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto flex items-center justify-center text-2xl">
                ✓
              </div>

              <h3 className="font-bold text-xl mt-4">
                Easy to Use
              </h3>

              <p className="text-gray-600 mt-2">
                Simple and intuitive interface designed for maximum
                productivity.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full mx-auto flex items-center justify-center text-2xl">
                ⚡
              </div>

              <h3 className="font-bold text-xl mt-4">
                Fast Performance
              </h3>

              <p className="text-gray-600 mt-2">
                Quickly manage tasks and stay focused on your goals.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full mx-auto flex items-center justify-center text-2xl">
                📊
              </div>

              <h3 className="font-bold text-xl mt-4">
                Track Progress
              </h3>

              <p className="text-gray-600 mt-2">
                Visualize productivity and monitor task completion.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16">
        <div className="max-w-4xl mx-auto text-center px-6">

          <h2 className="text-4xl font-bold text-white">
            Ready to Get Organized?
          </h2>

          <p className="text-blue-100 mt-4 text-lg">
            Join now and start managing your tasks efficiently.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <Link
              to="/signup"
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-slate-100 transition"
            >
              Create Account
            </Link>

            <Link
              to="/login"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-blue-600 transition"
            >
              Login Now
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Home;