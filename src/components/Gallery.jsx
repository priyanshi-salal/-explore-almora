import React from "react";
import Sidebar from "./Sidebar";
import "./Gallery.css";
import jageshwarImg from "../assets/Jageshwar.jpg";
import kasarImg from "../assets/Kasardevi.jpg";
import chitaiImg from "../assets/Chitai.jpg";
import banarImg from "../assets/BanarDevi.jpeg";
import dolashramImg from "../assets/DolAshram.jpg";
import nandaImg from "../assets/nandadevi.jpg";
import katarmalImg from "../assets/Katarmal.jpg";

function Gallery() {
  const images = [
    { src: jageshwarImg, alt: "Jageshwar Temple" },
    { src: kasarImg, alt: "Kasar Devi Temple" },
    { src: chitaiImg, alt: "Chitai Temple" },
    { src: banarImg, alt: "Banar Devi Temple" },
    { src: dolashramImg, alt: "Dol Ashram" },
    { src: nandaImg, alt: "Nanda Devi" },
    { src: katarmalImg, alt: "Katarmal Sun Temple" },
  ];

  return (
    <div className="gallery-container">
      <Sidebar /> {/* ✅ Sidebar add kiya */}
      <div className="page-content">
        <h2>Temple Gallery</h2>
        <div className="gallery-grid">
          {images.map((img, index) => (
            <div className="gallery-item" key={index}>
              <img src={img.src} alt={img.alt} />
              <p>{img.alt}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
