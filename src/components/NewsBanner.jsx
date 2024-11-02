import { ContentList } from "./ContentList";
import { Slider } from "../components/Slider";
import { useCourseStore } from "../hooks/useCourseStore";
import { useVideoStore } from "../hooks/useVideoStore";

export const NewsBanner = () => {
  const { courses } = useCourseStore();
  const { videos } = useVideoStore();

  return (
    <>
      <div className="banner-grid">
        <div className="main-headlight">
          <Slider type={2} cards={courses} limit={4}/>
        </div>
      </div>
      <div className="headlights">
        <ContentList contents={videos} contentType={'4'} limit={2} /> 
      </div>
    </>
  );
};
