import { createSlice } from "@reduxjs/toolkit";

export const videoSlice = createSlice({
  name: "video",
  initialState: {
    isLoadingVideos: true,
    videos: [],
    activeVideo: null,
  },
  reducers: {
    onSetActiveVideo: (state, { payload }) => {
      state.activeVideo = payload;
    },
    onAddNewVideo: (state, { payload }) => {
      state.videos.push(payload);
      state.activeVideo = null;
    },
    onUpdateVideo: (state, { payload }) => {
      state.videos = state.videos.map((video) => {
        if (video.id === payload.id) {
          return payload;
        }
        return video;
      });
    },
    onDeleteVideo: (state) => {
      if (state.activeVideo) {
        state.videos = state.videos.filter(
          (video) => video.id !== state.activeVideo.id
        );
        // console.log(state.viodeos[0])
        state.activeVideo = null;
      }
    },
    onLoadVideos: (state, {payload = []}) => {
      state.isLoadingVideos = false
      payload.forEach(video => {
        const exists = state.videos.some(dbVideo => dbVideo.id === video.id)
        if(!exists){
          state.videos.push(video)
        }
      });
    },
    onLogoutVideos: (state) => {
        state.isLoadingVideos = true,
        state.videos = [],
        state.activeVideo = null
    }
  },
});


// Action creators are generated for each case reducer function
export const {
  onSetActiveVideo,
  onAddNewVideo,
  onUpdateVideo,
  onDeleteVideo,
  onLoadVideos,
  onLogoutVideos
} = videoSlice.actions;
