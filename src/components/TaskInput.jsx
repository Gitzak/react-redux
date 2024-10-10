import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../Redux/actions";
import { AiOutlinePlus } from "react-icons/ai";

export default function TaskInput() {
  const [newTask, setNewTask] = useState("");
  // Get the dispatch function to send actions to the Redux store
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (newTask) {
      // Dispatch the addTask action with the new task
      dispatch(addTask(newTask));
      setNewTask("");
    }
  };

  return (
    <div className="flex items-center w-full h-10 mt-2 text-sm font-medium rounded">
      <input
        type="text"
        className="flex-grow h-10 bg-transparent focus:outline-none font-medium rounded border p-2 mr-2"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleAddTask();
          }
        }}
        placeholder="Add a new task"
      />
      <button onClick={handleAddTask} aria-label="Add Task">
        <AiOutlinePlus className="w-5 h-5 text-gray-400 hover:text-gray-600" />
      </button>
    </div>
  );
}
