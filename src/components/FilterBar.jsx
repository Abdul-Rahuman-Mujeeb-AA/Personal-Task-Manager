import { useState } from "react";

const FilterBar = ({ tasks, setFilteredTasks }) => {
  const [filters, setFilters] = useState({
    priority: "",
    status: "",
    category: "",
    sortOrder: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleApply = () => {
    let filtered = [...tasks];

    // Filter by Priority
    if (filters.priority) {
      filtered = filtered.filter(
        (task) => task.priority === filters.priority
      );
    }

    // Filter by Status
    if (filters.status) {
      filtered = filtered.filter(
        (task) => task.status === filters.status
      );
    }

    // Filter by Category
    if (filters.category) {
      filtered = filtered.filter((task) =>
        (task.category || "")
          .toLowerCase()
          .includes(filters.category.toLowerCase())
      );
    }

    // Sort by Due Date
    if (filters.sortOrder === "asc") {
      filtered.sort(
        (a, b) => new Date(a.dueDate) - new Date(b.dueDate)
      );
    } else if (filters.sortOrder === "desc") {
      filtered.sort(
        (a, b) => new Date(b.dueDate) - new Date(a.dueDate)
      );
    }

    setFilteredTasks(filtered);
  };

  const handleReset = () => {
    const resetFilters = {
      priority: "",
      status: "",
      category: "",
      sortOrder: "",
    };

    setFilters(resetFilters);
    setFilteredTasks(tasks);
  };

  return (
    <div className="bg-white shadow-lg rounded-2xl p-4 sm:p-5 md:p-6 mb-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        
        {/* Priority */}
        <select
          name="priority"
          value={filters.priority}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
        >
          <option value="">All Priority</option>
          <option value="Low">Low Priority</option>
          <option value="Medium">Medium Priority</option>
          <option value="High">High Priority</option>
        </select>

        {/* Status */}
        <select
          name="status"
          value={filters.status}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
        >
          <option value="">All Status</option>
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>

        {/* Category */}
        <input
          type="text"
          name="category"
          placeholder="Search Category"
          value={filters.category}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
        />

        {/* Sort */}
        <select
          name="sortOrder"
          value={filters.sortOrder}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
        >
          <option value="">Sort by Date</option>
          <option value="asc">Oldest First</option>
          <option value="desc">Newest First</option>
        </select>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-2">
          <button
            onClick={handleApply}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300"
          >
            Apply
          </button>

          <button
            onClick={handleReset}
            className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2 px-4 rounded-lg transition duration-300"
          >
            Reset
          </button>
        </div>

      </div>
    </div>
  );
};

export default FilterBar;
