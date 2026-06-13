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

    // PRIORITY
    if (filters.priority) {
      filtered = filtered.filter((task) => task.priority === filters.priority);
    }

    // STATUS
    if (filters.status) {
      filtered = filtered.filter((task) => task.status === filters.status);
    }

    // CATEGORY (SAFE)
    if (filters.category) {
      filtered = filtered.filter((task) =>
        (task.category || "")
          .toLowerCase()
          .includes(filters.category.toLowerCase()),
      );
    }

    // SORT
    if (filters.sortOrder === "asc") {
      filtered.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
    } else if (filters.sortOrder === "desc") {
      filtered.sort((a, b) => new Date(b.dueDate) - new Date(a.dueDate));
    }

    setFilteredTasks(filtered);
  };

  const handleReset = () => {
    const reset = {
      priority: "",
      status: "",
      category: "",
      sortOrder: "",
    };

    setFilters(reset);
    setFilteredTasks(tasks);
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow-md mb-6 grid grid-cols-1 md:grid-cols-5 gap-4">
      {/* Priority */}
      <select
        name="priority"
        value={filters.priority}
        onChange={handleChange}
        className="border p-2 rounded-lg"
      >
        <option value="">All Priority</option>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>

      {/* Status */}
      <select
        name="status"
        value={filters.status}
        onChange={handleChange}
        className="border p-2 rounded-lg"
      >
        <option value="">All Status</option>
        <option value="Pending">Pending</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>

      {/* Category */}
      <input
        name="category"
        type="text"
        placeholder="Category"
        value={filters.category}
        onChange={handleChange}
        className="border p-2 rounded-lg"
      />

      {/* Sort */}
      <select
        name="sortOrder"
        value={filters.sortOrder}
        onChange={handleChange}
        className="border p-2 rounded-lg"
      >
        <option value="">Sort by Date</option>
        <option value="asc">Oldest First</option>
        <option value="desc">Newest First</option>
      </select>

      {/* Buttons */}
      <div className="flex gap-2">
        <button
          onClick={handleApply}
          className="bg-green-600 text-white px-4 py-2 rounded-lg w-full">
          Apply
        </button>

        <button
          onClick={handleReset}
          className="bg-gray-200 px-4 py-2 rounded-lg w-full">
          Reset
        </button>
      </div>
    </div>
  );
};

export default FilterBar;
