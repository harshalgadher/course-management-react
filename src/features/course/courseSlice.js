import { createSlice, nanoid } from "@reduxjs/toolkit";
import { data } from "react-router-dom";

const courseSlice = createSlice({
    name: "course",
    initialState: {
        list: []
    },
    reducers: {
        addCourse: (state, action) => {
            state.list.push({ id: nanoid(), ...action.payload });
        },
        deleteCourse: (state, action) => {
            state.list = state.list.filter((user) => {
                return user.id != action.payload;
            })
        },

        updateCourse: (state, action) => {
            // console.log(action);

            const { id, ...data } = action.payload;
            
            const idx = state.list.findIndex(course => course.id === id);

            if(idx != -1){
                state.list[idx] = {id, ...data};
            }

        }
    }
});
console.log(courseSlice);

export const { addCourse, deleteCourse, updateCourse } = courseSlice.actions;
export default courseSlice.reducer;