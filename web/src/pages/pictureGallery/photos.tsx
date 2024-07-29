import React, { useState, useEffect } from "react";

const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

const photoLink = (fileName: string) =>
  `${process.env.PUBLIC_URL}/pictures/${fileName}`;

const initialPhotosList = [
  { fileName: "gallery/Bridal Party-14.jpg" },
  { fileName: "gallery/CASUAL-89.jpg" },
  { fileName: "gallery/CASUAL-68.jpg" },
  { fileName: "gallery/Bridal Party-26.jpg" },
  { fileName: "gallery/CASUAL-148.jpg" },
  { fileName: "gallery/CASUAL-22.jpg" },
  { fileName: "gallery/Bridal Party-384.jpg" },
  { fileName: "gallery/CASUAL-13.jpg" },
  { fileName: "gallery/CASUAL-99.jpg" },
  { fileName: "gallery/CASUAL-57.jpg" },
  { fileName: "gallery/CASUAL-44.jpg" },
  { fileName: "gallery/CASUAL-130.jpg" },
];

const getPhotoDimensions = (
  fileName: string
): Promise<{ width: number; height: number }> => {
  return new Promise((resolve) => {
    const img = new Image();
    img.src = photoLink(fileName);
    img.onload = () => {
      resolve({ width: img.width, height: img.height });
    };
  });
};

const usePhotos = () => {
  const [photos, setPhotos] = useState<
    { fileName: string; width: number; height: number }[]
  >([]);

  useEffect(() => {
    const loadPhotos = async () => {
      const updatedPhotos = await Promise.all(
        initialPhotosList.map(async (photo) => {
          const dimensions = await getPhotoDimensions(photo.fileName);
          return { ...photo, ...dimensions };
        })
      );
      setPhotos(updatedPhotos);
    };

    loadPhotos();
  }, []);

  return photos.map((photo) => ({
    src: photoLink(photo.fileName),
    width: photo.width,
    height: photo.height,
    images: breakpoints.map((breakpoint) => {
      const height = Math.round((photo.height / photo.width) * breakpoint);
      return {
        src: photoLink(photo.fileName),
        width: breakpoint,
        height,
      };
    }),
  }));
};

export default usePhotos;
