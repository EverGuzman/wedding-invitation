const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

const photoLink = (fileName: string) => `/pictures/${fileName}`;
const photosList = [
  { fileName: "gallery/0028-low.jpg", width: 1300, height: 868 },

  // { fileName: "gallery/0032.jpg", width: 3572, height: 5352 },

  // { fileName: "gallery/IMG_5896-low.jpg", width: 868, height: 1300 },
  { fileName: "gallery/0000ALEX-20-low.jpg", width: 900, height: 1260 },
  // { fileName: "gallery/0033-low.jpg", width: 868, height: 1300 },
  { fileName: "gallery/IMG_A.jpeg", width: 1024, height: 684 },
  { fileName: "gallery/0000ALEX-10-low.jpg", width: 900, height: 1125 },
  //   { fileName: "gallery/0048.jpg", width: 3886, height: 5821 },
  { fileName: "gallery/0000ALEX-36-2-low.jpg", width: 1260, height: 900 },
  { fileName: "gallery/IMG_6214-low.jpg", width: 868, height: 1300 },
  { fileName: "gallery/IMG_5895-low.jpg", width: 1300, height: 868 },
  { fileName: "gallery/D001-low.jpg", width: 1300, height: 868 },
];

const photos = photosList.map((photo) => ({
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

export default photos;
