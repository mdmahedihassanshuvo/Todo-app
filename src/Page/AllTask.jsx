import React, { useEffect, useState } from "react";

const AllTask = () => {
  const [tasks, setTasks] = useState([]);
  const [editedTask, setEditedTask] = useState({ index: null, description: "" });

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

//   const getPriorityColor = (priority) => {
//     switch (priority.toLowerCase()) {
//       case "high":
//         return "bg-red-500";
//       case "medium":
//         return "bg-yellow-500";
//       case "low":
//         return "bg-green-500";
//       default:
//         return "bg-gray-500";
//     }
//   };

//   const handleMarkAsDone = (index) => {
//     const updatedTasks = [...tasks];
//     updatedTasks[index].completed = true;
//     setTasks(updatedTasks);
//     localStorage.setItem("tasks", JSON.stringify(updatedTasks));
//   };

//   const handleEdit = (index, description) => {
//     setEditedTask({ index, description });
//   };

//   const handleUpdateTask = () => {
//     const updatedTasks = [...tasks];
//     updatedTasks[editedTask.index].description = editedTask.description;
//     setTasks(updatedTasks);
//     localStorage.setItem("tasks", JSON.stringify(updatedTasks));
//     setEditedTask({ index: null, description: "" });
//   };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>No:</th>
              <th>Task Name</th>
              <th>Status</th>
              <th>Priority</th>
              <th>Edit Task</th>
              <th>Mark as Done</th>
              <th>Delete Task</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
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
                      className="p-2 rounded-2xl bg-teal-950 text-white hover:bg-slate-800 "
                      style={{ transition: "all 0.5s" }}
                    >
                      Update
                    </button>
                  ) : (
                    <button
                      onClick={() => handleEdit(index, task.description)}
                      className="p-2 rounded-2xl bg-teal-950 text-white hover:bg-slate-800 "
                      style={{ transition: "all 0.5s" }}
                    >
                      Edit
                    </button>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleMarkAsDone(index)}
                    className="p-2 rounded-2xl bg-teal-950 text-white hover:bg-slate-800 "
                    style={{ transition: "all 0.5s" }}
                  >
                    Done
                  </button>
                </td>
                <td>
                  <button
                    className="p-2 rounded-2xl bg-red-400 text-white hover:bg-slate-800 "
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
    </div>
  );
};

export default AllTask;
