import React, { useEffect, useState } from "react";

const AllTask = () => {
  const [tasks, setTasks] = useState([]);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);
  console.log(tasks);

  const handleStatus = () => {
    console.log("click complete");
    setActive(true);
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="">
              <th>No:</th>
              <th>Task Name</th>
              <th>Status</th>
              <th>Priority</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{task?.description}</td>
                <td>
                  <button
                    onClick={handleStatus}
                    disabled={active}
                    className="text-center p-2 bg-gray-800 text-white rounded-2xl hover:bg-white hover:text-black "
                    style={{ transition: "all 0.5s" }}
                  >
                    {task?.completed == false ? "Incomplete" : "complete"}
                  </button>
                </td>
                <td>
                    {task?.priority}
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
