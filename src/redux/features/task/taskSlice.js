import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [
    {
      id: 1,
      status: "pending",
      title: "Remove Button",
      description:
        "We need a remove button in our task card. Meke the button red and use Heroicon for tashbin icon.",
      date: "2023-08-28",
      assignedTo: "Imran Ahmed",
      priority: "high",
    },
  ], // Array of tasks
};
const taskSlice = createSlice({
  name: "taskSlice",
  initialState,
  reducers: {
    addTask: (state, { payload }) => {
      // basically actions.payload is the {payload}, here we destructure here
      if (state.tasks.length === 0) {
        state.tasks.push({ id: 1, status: "pending", ...payload });
      } else {
        const lastElement = state.tasks.at(-1);
        state.tasks.push({
          id: lastElement.id + 1,
          status: "pending",
          ...payload,
        });
      }
    },
    removeTask: (state, payload) => {
      state.tasks.filter((item) => item.id !== payload);
    },
    deleteTask: (state, { action }) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    updateTask: (state, action) => {
      const updatedTask = state.tasks.find(
        (task) => task.id === action.payload.id
      );
      if (updatedTask) {
        updatedTask.status = action.payload.status;
        updatedTask.title = action.payload.title;
        updatedTask.description = action.payload.description;
        updatedTask.date = action.payload.date;
        updatedTask.assignedTo = action.payload.assignedTo;
        updatedTask.priority = action.payload.priority;
      }
    },
  },
});
export const { addTask, removeTask } = taskSlice.actions; // export the action creator

export default taskSlice.reducer;
