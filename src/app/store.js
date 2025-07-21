import { configureStore } from "@reduxjs/toolkit";
import "../features/course/courseSlice"
import courseReducer from "../features/course/courseSlice";

const store = configureStore({
    reducer: {
        course: courseReducer
    }
});
export default store;