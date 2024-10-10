import { ADD_TASK, DELETE_TASK, TOGGLE_TASK, UPDATE_TASK } from "./actions";

// Initial state containing tasks loaded from localStorage or an empty array if no tasks are found
const initialState = {
  tasks: JSON.parse(localStorage.getItem("tasks")) || [],
};

// Reducer function that handles different task actions based on the action type
export default function taskReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TASK:
      const newTasks = [
        ...state.tasks,
        { id: Date.now(), text: action.payload, completed: false },
      ];
      localStorage.setItem("tasks", JSON.stringify(newTasks));
      // Return the new state with the updated tasks array
      return { tasks: newTasks };

    case DELETE_TASK:
      const filteredTasks = state.tasks.filter(
        (task) => task.id !== action.payload
      );
      localStorage.setItem("tasks", JSON.stringify(filteredTasks));
      return { tasks: filteredTasks };

    case TOGGLE_TASK:
      const toggledTasks = state.tasks.map((task) =>
        task.id === action.payload
          ? { ...task, completed: !task.completed }
          : task
      );
      localStorage.setItem("tasks", JSON.stringify(toggledTasks));
      return { tasks: toggledTasks };

    case UPDATE_TASK:
      const updatedTasks = state.tasks.map((task) =>
        task.id === action.payload.id
          ? { ...task, text: action.payload.updatedText }
          : task
      );
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      return { tasks: updatedTasks };

    default:
      return state;
  }
}
