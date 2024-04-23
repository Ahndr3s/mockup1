import { Card } from "../components/Card";
import { getContentsByType } from "../helpers/getContents";

export const CoursesList = () => {
  const courses = getContentsByType("2");
  return (
    <>
      {courses.map((course) => {
        return (
          <Card
            id={course.id}
            key={course.id}
            type={2}
            title={course.name}
            img={course.img}
            Coursedata={course.Coursedata}
            resume={course.resume}
            info={course.info}
            btntxt={course.btntxt}
          />
        );      
      })}
    </>
  );
};
