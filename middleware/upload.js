const multer = require("multer");
const GridFsStorage = require("multer-gridfs-storage").GridFsStorage;

const MONGODB_URI =
  "mongodb+srv://admin-ayush:ayush123@cluster0.itvnq.mongodb.net/NotesProject";
const storage = new GridFsStorage({
    url: MONGODB_URI,
    file: (req, file) => {
      return new Promise((resolve, reject) => {
          const filename = file.originalname;
          const fileInfo = {
            filename: filename,
            bucketName: 'notes'
          };
          resolve(fileInfo);
      });
    }
  });

module.exports = multer({storage: storage});
  