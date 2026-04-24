import multer from "multer"
const storage = multer.memoryStorage();
const fileFilter = (req, file, cb) => {
// what is inside file
//     file = {
//   originalname: "photo.png",
//   mimetype: "image/png",
//   buffer: <binary data>
// }
// 👉 You mainly use:
// file.mimetype and sends to cloudnary 
  if (
    file.mimetype.startsWith("image/") ||
    file.mimetype.startsWith("video/")
  ) {
    cb(null, true);
  } else {
    cb(new Error("Only images and videos are allowed"), false);
  }
};

export const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter,
});