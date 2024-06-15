import { ContentList } from '../components/ContentList';
import { Slider } from '../components/Slider';
import './BlogStyles.css'



export const Blog = () => {
  return (
    <>
      <div className="blog-container">
        <h1>Blog</h1>
        <iframe
          className="blog-layer"
          src="https://iatutores.blogspot.com"
          width="1200"
          height="800"
        ></iframe>
      </div>
      {/* <Slider type={2} cards={<ContentList contentType='2'/>}/> */}
    </>
  );
};
