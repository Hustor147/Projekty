import LightGallery from "lightgallery/react";
import "./Gallery.css";
// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

function Gallery() {
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };
  return (
    <div className="lg-thumb-container">
      <LightGallery onInit={onInit} speed={500} plugins={[lgThumbnail, lgZoom]}>
        <a href="images/foto1.jpeg">
          <img alt="img1" src="images/foto1.jpeg" width={200} height={200} />
        </a>
        <a href="images/foto2.jpeg">
          <img alt="img1" src="images/foto2.jpeg" width={200} height={200} />
        </a>
        <a href="images/foto3.jpeg">
          <img alt="img1" src="images/foto3.jpeg" width={200} height={200} />
        </a>
        <a href="images/foto4.jpeg">
          <img alt="img1" src="images/foto4.jpeg" width={200} height={200} />
        </a>
        <a href="images/foto5.jpeg">
          <img alt="img1" src="images/foto5.jpeg" width={200} height={200} />
        </a>
        <a href="images/foto6.jpeg">
          <img alt="img1" src="images/foto6.jpeg" width={200} height={200} />
        </a>
        <a href="images/foto7.jpeg">
          <img alt="img1" src="images/foto7.jpeg" width={200} height={200} />
        </a>
        <a href="images/foto8.jpeg">
          <img alt="img1" src="images/foto8.jpeg" width={200} height={200} />
        </a>
        <a href="images/foto9.jpeg">
          <img src="images/foto9.jpeg" width={200} height={200} />
        </a>
      </LightGallery>
    </div>
  );
}
export default Gallery;
