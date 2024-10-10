import { createStore } from "redux";
import taskReducer from "./reducer";

// Create a Redux store with the taskReducer to manage the application's state
const store = createStore(taskReducer);

// Export the store to be used in the application
export default store;
