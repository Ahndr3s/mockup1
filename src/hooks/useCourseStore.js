import { useDispatch, useSelector } from "react-redux";
import {
  onAddNewCourse,
  onDeleteCourse,
  onLoadCourses,
  onSetActiveCourse,
  onUpdateCourse,
} from "../store/courseSlice/courseSlice";
import iatApi from "../api/iatApi";
import Swal from "sweetalert2";


export const useCourseStore = () => {
  const { courses, activeCourse } = useSelector((state) => state.course);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const setActiveCourse = (course) => {
    dispatch(onSetActiveCourse(course));
  };

  const startSavingCourse = async (course) => {
    try {
      if (course.id) {
        console.log("Update course");
        console.log(course.img)
        // await iatApi.put(`/api/uploads/courses/${course.id}`, course.img);
        await iatApi.put(`/api/courses/${course.id}`, course);
        dispatch(onUpdateCourse(course));
        return;
      }
      console.log("Create course");
      const { data } = await iatApi.post('/api/courses', course);
      dispatch(onAddNewCourse({ ...course, id: data.event.id, user }));
    } catch (error) {
      console.log(error);
      Swal.fire('Error at saving', error.response.data.msg, 'error');
    }
  };

  /*const startSavingCourse = async (formData) => {
    try {
        if (formData.has("id")) {
            console.log("Update course");
            // console.log(formData.get("files"))      
            // await iatApi.put(`/api/uploads/courses/${formData.get("id")}`, formData.get('img'));
            await iatApi.put(`/api/courses/${formData.get("id")}`, formData);
            dispatch(onUpdateCourse(formData));
            return;
        }
        console.log("Create course");
        const { data } = await iatApi.post('/api/courses', formData);
        dispatch(onAddNewCourse({ ...formData, id: data.event.id, user }));
    } catch (error) {
        console.log(error);
        Swal.fire('Error at saving', error.response.data.msg, 'error');
    }
};*/


  const startDeletingCourse = async() => {
    try {      
      await iatApi.delete(`/api/courses/${activeCourse.id}`)
      dispatch(onDeleteCourse());
    } catch (error) {
      console.log(error)
      Swal.fire('Error at deliting', error.response.data.msg, 'error')
    }
  };

  const startLoadingCourses = async() => {
    try {
        const {data} = await iatApi.get('/api/courses')
        // console.log(data)
        dispatch(onLoadCourses(data.courses))
    } catch (error) {
        console.log('Error loading courses')
        console.log(error)
    }
  }

  return {
    // PROPERTIES
    activeCourse,
    courses,
    hasCourseSelected: !!activeCourse,

    // METHODS
    setActiveCourse,
    startSavingCourse,
    startDeletingCourse,
    startLoadingCourses,
  };
};
