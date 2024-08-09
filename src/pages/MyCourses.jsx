import { useState } from "react";
import UploadWidget from "../components/UploadWidget";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage, responsive, placeholder } from "@cloudinary/react";

export const MyCourses = () => {
  const [publicId, setPublicId] = useState("");
  const [url, setUrl] = useState(""); // State to hold the image URL
  // Replace with your own cloud name
  const [cloudName] = useState("dfpbzr7n0");
  // Replace with your own upload preset
  const [uploadPreset] = useState("fz466asa");

  const [uwConfig] = useState({ cloudName, uploadPreset });
  const [courseId] = useState("id6644db6fe5ce24230c57c0af");
  const cld = new Cloudinary({
    cloud: {
      cloudName,
    },
  });
  const myImage = cld.image(publicId);
  return (
    <>
      <h1 className="page-title">My Courses</h1>
      <UploadWidget
        uwConfig={uwConfig}
        setPublicId={setPublicId}
        id={courseId}
        setUrl={setUrl}
      />
      {/* <div style={{ width: "800px" }}>
        <AdvancedImage
          style={{ maxWidth: "100%" }}
          cldImg={myImage}
          plugins={[responsive(), placeholder()]}
        />
      </div> */}
    </>
  );
};
