import { createSlice } from "@reduxjs/toolkit";

export const courseSlice = createSlice({
  name: "course",
  initialState: {
    isLoadingCourses: true,
    courses: [],
    activeCourse: null,
  },
  reducers: {
    onSetActiveCourse: (state, { payload }) => {
      state.activeCourse = payload;
    },
    onAddNewCourse: (state, { payload }) => {
      state.courses.push(payload);
      state.activeCourse = null;
    },
    onUpdateCourse: (state, { payload }) => {
      state.courses = state.courses.map((course) => {
        if (course.id === payload.id) {
          return payload;
        }
        return course;
      });
    },
    onDeleteCourse: (state) => {
      if (state.activeCourse) {
        state.courses = state.courses.filter(
          (course) => course.id !== state.activeCourse.id
        );
        // console.log(state.courses[0])
        state.activeCourse = null;
      }
    },
    onLoadCourses: (state, {payload = []}) => {
      // state.activeCourse = null;
      state.isLoadingCourses = false
      payload.forEach(course => {
        const exists = state.courses.some(dbCourse => dbCourse.id === course.id)
        if(!exists){
          state.courses.push(course)
        }
      });
    },
    onLogoutCourses: (state) => {
        state.isLoadingCourses = true,
        state.courses = [],
        state.activeCourse = null
    }
  },
});


// Action creators are generated for each case reducer function
export const {
  onSetActiveCourse,
  onAddNewCourse,
  onUpdateCourse,
  onDeleteCourse,
  onLoadCourses,
  onLogoutCourses
} = courseSlice.actions;
