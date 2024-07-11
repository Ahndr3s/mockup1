import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth/authSlice'
import { courseSlice } from './courseSlice/courseSlice'
import { videoSlice } from './videoSlice/videoSlice'

export default configureStore({
  reducer: {
    auth: authSlice.reducer,
    course: courseSlice.reducer,
    video: videoSlice.reducer
  },
})