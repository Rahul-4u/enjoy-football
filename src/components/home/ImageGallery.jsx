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
    "https://i.ibb.co/PZNNHRd1/38c8ff04-788f-4f6b-bf23-80ac7e7fe391.jpg",
    "https://i.ibb.co/RGmMFBz8/114d68b8-b11a-4aa1-bd6c-8478ade35f2a.jpg",
    "https://i.ibb.co/NgkJT2w9/12511111-41c4-49b5-9c49-6bc73b544181.jpg",
    "https://i.ibb.co/WNsZ6P76/40752526-c3dc-4d16-a714-d2dd0dbaa3cb.jpg",
    "https://i.ibb.co/v4xtctkK/a096d709-881d-4868-af1b-4700481fdbc4.jpg",
    "https://i.ibb.co/Lz6mK2Lg/c0e5a9d6-226c-4140-913b-89a227943a33.jpg",
    "https://i.ibb.co/QjNMNScS/c427baf2-c822-47de-906d-0fe6bfe40347.jpg",
    "https://i.ibb.co/Tn3MTvs/c620d7de-fee4-434a-b751-df87b7b89c58.jpg",
    "https://i.ibb.co/fdkgNMXy/e51ca39d-161e-491b-9869-91c060c70764.jpg",
    "https://i.ibb.co/1GqpkHFd/ac93a9b2-324e-459e-aa1f-7b9c8839beee.jpg",
    "https://i.ibb.co/Y7Jc9DS5/39cd3c00-ceda-49e7-8960-40b7a0e71988.jpg",
    "https://i.ibb.co/9km0ySWd/177778ef-71f3-4daa-abdf-22ef8ebb918e.jpg",
    "https://i.ibb.co/VYKtWh1z/663400b5-354a-4e72-bb32-9b3a079e2554.jpg",
    "https://i.ibb.co/pr6jL7qZ/a34e4947-6059-4ed6-9f36-678f37526f71.jpg",
    "https://i.ibb.co/s95YYjdB/ad256e47-87f5-4be5-8820-b327529061b7.jpg",
    "https://i.ibb.co/9mQWrbFg/aff8d7f1-cb02-4620-bdba-dccdb67a56ca.jpg",
    "https://i.ibb.co/Gvp2S4rC/31a1a0ee-9ca2-4a7c-bfda-e848d37bec6e.jpg",
    "https://i.ibb.co/CpqkmzLC/PHOTO-2021-03-11-11-11-37-2-1.jpg",
    "https://i.ibb.co/Cp2NNmHX/a9004809-84d2-43ce-a5f2-60387c67bf1d.jpg",
    "https://i.ibb.co/60CrzNtw/IMG-0504-1.jpg",
    "https://i.ibb.co/X0kVYy6/IMG-1618-scaled.jpg",
    "https://i.ibb.co/jkx5VK8L/MOL-IMG-6631-Original-scaled.jpg",
    "https://i.ibb.co/d0p3ttwg/IMG-0190-1.jpg",
    "https://i.ibb.co/jvWS70bX/IMG-1627-scaled.jpg",
  ];

  useEffect(() => {
    if (lgInstance.current) {
      lgInstance.current.destroy(true);
    }

    if (galleryRef.current) {
      lgInstance.current = lightGallery(galleryRef.current, {
        plugins: [lgThumbnail, lgZoom],
        speed: 500,
        thumbnail: true,
        licenseKey: "0000-0000-000-0000",
      });
    }

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
      <div ref={galleryRef} className="grid grid-cols-6 gap-4">
        {images.slice(0, 24).map((src, index) => (
          <a
            href={src}
            key={index}
            className="block rounded overflow-hidden shadow hover:shadow-lg transition"
          >
            <img
              src={src}
              alt={`Imagen ${index + 1}`}
              className="w-full h-10 object-contain"
            />
          </a>
        ))}
      </div>
    </div>
  );
}
