import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTask, toggleTask, updateTask } from "../Redux/actions";
import { AiOutlineDelete } from "react-icons/ai";
import { FiCheck } from "react-icons/fi";

export default function TaskItem({ task }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);
  const dispatch = useDispatch();

  const handleSaveUpdate = () => {
    // Dispatch the updateTask action with the new text
    dispatch(updateTask(task.id, editText));
    setIsEditing(false);
  };

  return (
    <li className="flex items-center mb-2 mt-3 relative">
      <input
        type="checkbox"
        checked={task.completed}
        // Dispatch toggleTask action to mark task as done/undone
        onChange={() => dispatch(toggleTask(task.id))}
        className="hidden"
        id={`task_${task.id}`}
      />
      <label
        htmlFor={`task_${task.id}`}
        className="flex items-center h-10 px-2 rounded cursor-pointer hover:bg-gray-100 w-full"
      >
        <span className="flex items-center justify-center w-5 h-5 text-transparent border-2 border-gray-300 rounded-full">
          {task.completed && <FiCheck className="w-4 h-4 text-gray-600" />}
        </span>
        {isEditing ? (
          <>
            <input
              type="text"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              className="border p-2 mr-2 ml-2 w-full"
            />
            <button
              onClick={handleSaveUpdate}
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              Save
            </button>
          </>
        ) : (
          <span
            className={`flex-1 ml-4 ${task.completed ? "line-through" : ""}`}
            onDoubleClick={() => setIsEditing(true)}
          >
            {task.text}
          </span>
        )}
      </label>
      <button
        onClick={() => dispatch(deleteTask(task.id))}
        className="absolute right-0 p-1 text-red-400 hover:text-red-600"
        aria-label="Delete Task"
      >
        <AiOutlineDelete className="w-5 h-5" />
      </button>
    </li>
  );
}
