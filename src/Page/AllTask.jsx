import React, { useEffect, useState } from "react";

const AllTask = () => {
  const [tasks, setTasks] = useState([]);
  const [editedTask, setEditedTask] = useState({
    index: null,
    description: "",
  });
  const [priorityFilter, setPriorityFilter] = useState("all");

  const completedTasks = tasks.filter((task) => task.completed);

  let filteredTasks = tasks;

  if (priorityFilter !== "all") {
    filteredTasks = filteredTasks.filter(
      (task) => task.priority.toLowerCase() === priorityFilter
    );
  }

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  const getPriorityColor = (priority) => {
    switch (priority.toLowerCase()) {
      case "high":
        return "bg-red-500";
      case "medium":
        return "bg-yellow-500";
      case "low":
        return "bg-green-500";
      default:
        return "bg-gray-500";
    }
  };

  const handleMarkAsDone = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = true;
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const handleEdit = (index, description) => {
    setEditedTask({ index, description });
  };

  const handleUpdateTask = () => {
    const updatedTasks = [...tasks];
    updatedTasks[editedTask.index].description = editedTask.description;
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setEditedTask({ index: null, description: "" });
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((task, i) => i !== index);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  return (
    <div className="md:mt-10 overflow-x-auto md:w-full w-[432px]">
      <div className="flex justify-center items-center md:mb-20 mb-10">
        <h3 className="text-3xl">
          <span className="text-[#f4ae0f]">-----------</span>{" "}
          <span className="font-medium">All Task</span>{" "}
          <span className="text-[#f4ae0f]">-----------</span>
        </h3>
      </div>
      <div className="filter-section bg-slate-400 md:h-10 font-medium flex md:justify-evenly justify-between items-center md:mb-4 ">
        <h1 className="text-xl">
          <span className="">Total Task:</span> {tasks?.length}
        </h1>
        <p className="text-xl">Completed Task: {completedTasks.length}</p>
        <select
          className="p-1 rounded-full bg-gray-200 text-gray-800"
          value={priorityFilter}
          onChange={(e) => setPriorityFilter(e.target.value)}
        >
          <option value="all">All Priorities</option>
          <option value="high">High Priority</option>
          <option value="medium">Medium Priority</option>
          <option value="low">Low Priority</option>
        </select>
      </div>
      <table className="table min-w-full">
        <thead>
          <tr>
            <th className="w-1/12">No:</th>
            <th className="w-3/12">Task Name</th>
            <th className="w-2/12">Status</th>
            <th className="w-2/12">Priority</th>
            <th className="w-2/12">Edit Task</th>
            <th className="w-1/12">Mark as Done</th>
            <th className="w-1/12">Delete Task</th>
          </tr>
        </thead>
        <tbody>
          {filteredTasks.map((task, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>
                {editedTask.index === index ? (
                  <input
                    type="text"
                    value={editedTask.description}
                    onChange={(e) =>
                      setEditedTask({
                        index: editedTask.index,
                        description: e.target.value,
                      })
                    }
                  />
                ) : (
                  task?.description?.slice(0, 20) + "..."
                )}
              </td>
              <td>
                <div
                  style={{ cursor: "pointer", transition: "all 0.5s" }}
                  className={`text-center p-2 rounded-2xl hover:bg-white hover:text-black ${
                    task?.completed
                      ? "bg-green-500 text-white"
                      : "bg-gray-800 text-white"
                  }`}
                >
                  {task?.completed ? "Complete" : "Incomplete"}
                </div>
              </td>
              <td>
                <div
                  style={{ cursor: "pointer" }}
                  className={`p-2 rounded-full text-white ${getPriorityColor(
                    task?.priority
                  )}`}
                >
                  {task?.priority}
                </div>
              </td>
              <td>
                {editedTask.index === index ? (
                  <button
                    onClick={handleUpdateTask}
                    className="p-2 rounded-2xl bg-teal-950 text-white hover:bg-slate-800"
                    style={{ transition: "all 0.5s" }}
                  >
                    Update
                  </button>
                ) : (
                  <button
                    onClick={() => handleEdit(index, task.description)}
                    disabled={task?.completed}
                    className="p-2 rounded-2xl bg-teal-950 text-white hover:bg-slate-800"
                    style={{ transition: "all 0.5s" }}
                  >
                    Edit
                  </button>
                )}
              </td>
              <td>
                <button
                  onClick={() => handleMarkAsDone(index)}
                  className="p-2 rounded-2xl bg-teal-950 text-white hover:bg-slate-800"
                  style={{ transition: "all 0.5s" }}
                >
                  Done
                </button>
              </td>
              <td>
                <button
                  onClick={() => handleDeleteTask(index)}
                  className="p-2 rounded-2xl bg-red-400 text-white hover:bg-slate-800"
                  style={{ transition: "all 0.5s" }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllTask;
