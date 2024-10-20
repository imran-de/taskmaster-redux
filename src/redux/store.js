import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "./features/task/taskSlice";
const store = configureStore({
  reducer: {
    tasks: taskSlice,
  },
});

export default store;
