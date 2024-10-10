import React from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import { HiOutlineInbox } from "react-icons/hi";
import "./App.css";

export default function App() {
  return (
    <div className="flex items-center justify-center font-medium">
      <div className="flex flex-grow items-center justify-center h-full text-gray-600">
        <div className="max-w-full p-8 bg-white rounded-lg shadow-lg w-3/4">
          <div className="flex items-center mb-6">
            <HiOutlineInbox className="h-8 w-8 text-indigo-500" />
            <h4 className="font-semibold ml-3 text-lg">Task React + Redux</h4>
          </div>

          {/* Task Input Component */}
          <TaskInput />

          {/* Task List Component */}
          <TaskList />
        </div>
      </div>
    </div>
  );
}
