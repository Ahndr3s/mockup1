import { useEffect, useState } from "react";
import axios from "axios";
import { Modal } from "./Modal";
import getEnvVariables from "../helpers/getEnvVariables";


export const InstMatrix = () => {
  const [posts, setPosts] = useState([]);
  const [modal, setModal] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const {VITE_INST_TOKEN} = getEnvVariables()

  useEffect(() => {
    const fetchInstagramFeed = async () => {
      try {
        const response = await axios.get(
          "https://graph.instagram.com/me/media",
          {
            params: {
              fields:
                "id,media_type,media_url,username,timestamp,caption,thumbnail_url,children",
              access_token:VITE_INST_TOKEN,
            },
          }
        );

        setPosts(response.data.data.slice(0, 12));
      } catch (error) {
        console.error("Error al obtener el feed de Instagram:", error);
      }
    };

    fetchInstagramFeed();
  }, []);

  const openModal = (post) => {
    setSelectedPost(post);
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
    setSelectedPost(null);
  };

  return (
    <>
      <div className="instMatrix-container">
        {posts.map((post) => (
          <div key={post.id} style={{ marginBottom: "20px" }}>
            {post.media_type === "IMAGE" && (
              <>
                <img
                  src={post.media_url}
                  className="instPic"
                  onClick={() => openModal(post)}
                  alt={post.caption}
                />
              </>
            )}
            {post.media_type === "VIDEO" && (
              <>
                <video className="instVideo" onClick={() => openModal(post)}>
                  <source src={post.media_url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </>
            )}
            {post.media_type === "CAROUSEL_ALBUM" && (
              <>
              {/* {console.log(post.children.data)} */}
                <img
                  src={post.media_url}
                  className="instPic"
                  alt={post.caption}
                  onClick={() => openModal(post)}
                />
              </>
            )}
          </div>
        ))}
      </div>
      {selectedPost && (
        <Modal
          modalType={0}
          openModal={modal}
          info={selectedPost}
          closeModal={closeModal}
        >
          {selectedPost.username}
        </Modal>
      )}
    </>
  );
};
