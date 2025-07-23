import { createSlice } from "@reduxjs/toolkit";

const courseSlice = createSlice({
    name: "course",
    initialState: {
        list:[]
    },
    reducers:{
        addCourse: (state , action ) => {

        },
        deleteCourse: (state , action) => {

        },
    }
});
console.log(courseSlice);


export default courseSlice.reducer;