// UploadWidget.jsx

import { createContext, useEffect, useState } from "react";

// Create a context to manage the script loading state
const CloudinaryScriptContext = createContext();

function UploadWidget({ uwConfig, setPublicId, setUrl, id }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Check if the script is already loaded
    if (!loaded) {
      const uwScript = document.getElementById("uw");
      if (!uwScript) {
        // If not loaded, create and load the script
        const script = document.createElement("script");
        script.setAttribute("async", "");
        script.setAttribute("id", "uw");
        script.src = "https://upload-widget.cloudinary.com/global/all.js";
        script.addEventListener("load", () => setLoaded(true));
        document.body.appendChild(script);
      } else {
        // If already loaded, update the state
        setLoaded(true);
      }
    }

    // Añadir estilo global para el z-index del widget de Cloudinary
    /*const style = document.createElement("style");
    style.innerHTML = `
      .cloudinary-ui .cloudinary-widget {
        z-index: 1050 !important; // Asegúrate de que este valor sea mayor que el del modal 
      }
    `;
    document.head.appendChild(style);*/

  }, [loaded]);

  const initializeCloudinaryWidget = (event) => {
    event.stopPropagation(); // Prevent click event propagation
    if (loaded) {
      // Update uwConfig with id if necessary
      const updatedConfig = { ...uwConfig, context: { id } };

      var myWidget = window.cloudinary.createUploadWidget(
        updatedConfig,
        (error, result) => {
          if (!error && result && result.event === "success") {
            console.log("Done! Here is the image info: ", result.info);
            setPublicId(result.info.public_id);
            setUrl(result.info.url); // Set the URL of the uploaded image
          }
        }
      );

      myWidget.open();
    }
  };

  return (
    <CloudinaryScriptContext.Provider value={{ loaded }}>
      <button
        id="upload_widget"
        className="cloudinary-button"
        onClick={initializeCloudinaryWidget}
      >
        Upload
      </button>
    </CloudinaryScriptContext.Provider>
  );
}

export default UploadWidget;
export { CloudinaryScriptContext };
