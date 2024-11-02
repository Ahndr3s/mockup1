import { useDispatch, useSelector } from "react-redux";
import {
  onAddNewVideo,
  onDeleteVideo,
  onLoadVideos,
  onSetActiveVideo,
  onUpdateVideo,
} from "../store/videoSlice/videoSlice";
import iatApi from "../api/iatApi";
import Swal from "sweetalert2";


export const useVideoStore = () => {
  const { videos, activeVideo } = useSelector((state) => state.video);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const setActiveVideo = (video) => {
    dispatch(onSetActiveVideo(video))
  }

  const startSavingVideo = async (video) => {
    try {
      if (video.id) {
        // console.log("Update video");
        // console.log(video.img)
        await iatApi.put(`/api/videos/${video.id}`, video);
        dispatch(onUpdateVideo(video));
        return;
      }
      // console.log("Create video");
      // console.log(video)
      const { data } = await iatApi.post('/api/videos', video);
      dispatch(onAddNewVideo({ ...video, id: data.event.id, user }));
    } catch (error) {
      console.log(error);
      Swal.fire('Error at saving', error.response.data.msg, 'error');
    }
  };

  const startDeletingVideo = async() => {
    // console.log(activeVideo.id)
    try {      
      await iatApi.delete(`/api/videos/${activeVideo.id}`)
      dispatch(onDeleteVideo());
    } catch (error) {
      console.log(error)
      Swal.fire('Error at deliting', error.response.data.msg, 'error')
    }
  };

  const startLoadingVideos = async() => {
    try {
        const {data} = await iatApi.get('/api/videos')
        // console.log(data)
        dispatch(onLoadVideos(data.videos))
    } catch (error) {
        console.log('Error loading videos')
        console.log(error)
    }
  }

  return {
    // PROPERTIES
    activeVideo,
    videos,
    hasVideoSelected: !!activeVideo,

    // METHODS
    setActiveVideo,
    startSavingVideo,
    startDeletingVideo,
    startLoadingVideos,
  };
};
