import React, { useRef, useEffect } from "react";
import lightGallery from "lightgallery";

// Plugins
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

// Styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-zoom.css";

export default function ImageGallery() {
  const galleryRef = useRef(null);
  const lgInstance = useRef(null); // store lightGallery instance

  const images = [
    "https://i.ibb.co/Q3WqtwW0/liceofrances.png",
    "https://i.ibb.co/zWtpNp9W/brains-400x415.png",
    "https://i.ibb.co/Q74y72Ly/sis-212x300.png",
    "https://i.ibb.co/Ldt65bH0/dynamic-coaching.png",
    "https://i.ibb.co/0R2GFP77/sis.png",
  ];

  useEffect(() => {
    // Destroy previous instance if exists
    if (lgInstance.current) {
      lgInstance.current.destroy(true);
    }

    if (galleryRef.current) {
      lgInstance.current = lightGallery(galleryRef.current, {
        plugins: [lgThumbnail, lgZoom],
        speed: 500,
        thumbnail: true,
        licenseKey: "0000-0000-000-0000", // Optional if needed
      });
    }

    // Optional: Clean up on unmount
    return () => {
      if (lgInstance.current) {
        lgInstance.current.destroy(true);
        lgInstance.current = null;
      }
    };
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold text-center mb-6">
        Galería de Imágenes
      </h2>
      <div ref={galleryRef} className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {images.map((src, index) => (
          <a
            href={src}
            key={index}
            className="block rounded overflow-hidden shadow hover:shadow-lg transition"
          >
            <img
              src={src}
              alt={`Imagen ${index + 1}`}
              className="w-full h-40 object-contain"
            />
          </a>
        ))}
      </div>
    </div>
  );
}
