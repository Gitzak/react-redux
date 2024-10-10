![Screenshot of Todo List Application](https://github.com/Gitzak/react-redux/blob/main/Screenshot.png)

React-Redux Todo List Application
=================================

This template provides a minimal setup to get a Todo List application working in React with Redux for state management.

Features
--------

-   **Add Task**: Users can type in the input field and click "Add" or press "Enter" to add a new task.

-   **Delete Task**: Each task can be deleted by clicking the delete button.

-   **Mark Task as Completed**: Users can check/uncheck a task to mark it as completed or not.

Project Structure
-----------------

Currently, the following components and files are available:

-   **src/components**

    -   `TaskInput.jsx`: A component for adding new tasks. It includes an input field and a button for users to add tasks to the list.

    -   `TaskList.jsx`: This component is responsible for displaying the list of tasks. It pulls data from the Redux store to display the current tasks.

    -   `TaskItem.jsx`: Represents an individual task. It includes the task text, a checkbox to mark it as done, and a delete button.

-   **src/Redux**

    -   `actions.js`: Defines the actions like adding, deleting, and toggling tasks. Actions describe what changes should be made in the state.

    -   `reducer.js`: A reducer that takes the current state and an action to produce the new state. Handles logic for adding, deleting, and updating tasks.

    -   `store.js`: Creates the Redux store that holds the entire state of the application.

Technologies Used
-----------------

-   [**React**](https://reactjs.org/): Front-end framework used for building the user interface.

-   **Redux**: A state management tool for managing and centralizing application state.

-   **React-Redux**: A binding library that helps connect React components with the Redux store.

-   [**Tailwind CSS**](https://tailwindcss.com/): Utility-first CSS framework used for styling the application.

How to Run the Project
----------------------

1.  **Clone the repository**:

    ```
    git clone <repository-url>
    ```

2.  **Install dependencies**:

    ```
    npm install
    ```

3.  **Run the development server**:

    ```
    npm run dev
    ```

The application should now be running at `http://localhost:5173`.

Folder Structure
----------------

-   **public/**: Contains the public assets such as `index.html`.

-   **src/**: Contains the source code of the application.

    -   **assets/**: Directory for any images or static assets used.

    -   **components/**: Contains React components for different parts of the application.

    -   **Redux/**: Contains the Redux setup, including actions, reducers, and store configuration.

Screenshot
----------

Purpose
-------

This project is a simple demonstration of how to use **Redux** with **React** to manage application state. It helps beginners understand how actions, reducers, and the Redux store interact with React components to maintain a consistent state across the app.

License
-------

This project is open source and available under the MIT License.