import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth/authSlice'
import { courseSlice } from './courseSlice/courseSLice'

export default configureStore({
  reducer: {
    auth: authSlice.reducer,
    course: courseSlice.reducer
  },
})