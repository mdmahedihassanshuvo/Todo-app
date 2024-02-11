import React, { useState } from "react";

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
    <div className="flex flex-col justify-center items-center md:gap-8">
      <select
        id="priority"
        value={priority}
        onChange={handlePriorityChange}
        className="select select-bordered w-full max-w-xs"
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
        className="input input-bordered input-primary w-full max-w-xs"
      />
      <button
        onClick={handleAddTask}
        disabled={!taskInput.trim() || !priority}
        className="btn bg-blue-600"
      >
        Add Task
      </button>
    </div>
  );
};

export default AddTask;
