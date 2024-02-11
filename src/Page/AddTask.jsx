import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const AddTask = () => {
  const [taskInput, setTaskInput] = useState("");
  const [priority, setPriority] = useState("");

  const handleInputChange = (event) => {
    setTaskInput(event.target.value);
  };

  const handlePriorityChange = (event) => {
    setPriority(event.target.value);
  };

  const handleAddTask = () => {
    const trimmedTaskInput = taskInput.trim();

    if (trimmedTaskInput !== "" && priority !== "") {
      // Your task adding logic here
      const existingTasks = JSON.parse(localStorage.getItem("tasks")) || [];
      const newTask = {
        description: trimmedTaskInput,
        completed: false,
        priority: priority,
      };
      existingTasks.push(newTask);
      localStorage.setItem("tasks", JSON.stringify(existingTasks));
      setTaskInput("");
      setPriority("");
      alert("Task added successfully!");
    } else {
      alert("Please enter a task and select a priority before adding.");
    }
  };

  return (
    <div className="md:mt-10">
      <Helmet title="Todo - Add Task" />
      <div className="flex justify-center items-center md:mb-20 mb-10">
        <h3 className="text-3xl">
          <span className="text-[#f4ae0f]">-----------</span> <span className="font-medium">Add Task</span> <span className="text-[#f4ae0f]">-----------</span>
        </h3>
      </div>
      <div className="flex flex-col justify-center items-center md:gap-8">
        <select
          id="priority"
          value={priority}
          onChange={handlePriorityChange}
          className="select select-bordered w-full max-w-xs md:mb-0 mb-5"
        >
          <option disabled value="">
            Please select the task priority.
          </option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <input
          id="addTask"
          type="text"
          value={taskInput}
          onChange={handleInputChange}
          placeholder="add task here"
          className="input input-bordered input-primary w-full max-w-xs md:mb-0 mb-5"
        />
        <button
          onClick={handleAddTask}
          disabled={!taskInput.trim() || !priority}
          className="btn bg-blue-600"
        >
          Add Task
        </button>
      </div>
    </div>
  );
};

export default AddTask;
