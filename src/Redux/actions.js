// Define action types for different task actions
export const ADD_TASK = "ADD_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const TOGGLE_TASK = "TOGGLE_TASK";
export const UPDATE_TASK = "UPDATE_TASK";

// Action creators that return action objects with type and payload
export const addTask = (task) => ({ type: ADD_TASK, payload: task });
export const deleteTask = (id) => ({ type: DELETE_TASK, payload: id });
export const toggleTask = (id) => ({ type: TOGGLE_TASK, payload: id });
export const updateTask = (id, updatedText) => ({
  type: UPDATE_TASK,
  payload: { id, updatedText },
});
