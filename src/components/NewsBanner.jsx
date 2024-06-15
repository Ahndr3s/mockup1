import { ContentList } from "./ContentList"
import { Slider } from "../components/Slider";
// import { Card } from "../components/Card";
import { useCourseStore } from "../hooks/useCourseStore";


export const NewsBanner = () => {
  const { courses } = useCourseStore()

  return (
    <>
        <div className="banner-grid">
            <div className="main-headlight">
              
              <Slider type={2} cards={courses}/>
              
            </div>
            <div className="headlights">
            <ContentList contentType={'4'} limit={2} />              
            </div>
        </div>
    </>
  )
}
