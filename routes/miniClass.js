const express = require("express");
const router = express.Router();
const multer = require("multer");

const miniClassController = require("../controller/miniClassController");

const storage = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, "./public/images");
  },
  filename: (req, file, cb) => {
    cb(null, +Date.now() + "-" + file.originalname);
  },
});

const upload = multer({
  storage: storage,
});

router.post(
  "/create",
  upload.single("posterMiniClass"),
  miniClassController.createData
);
router.get("/show", miniClassController.getData);
router.get("/show/:ProgramId", miniClassController.getDataById);
router.delete("/delete/:ProgramId", miniClassController.deleteDataById);
router.put(
  "/edit/:ProgramId",
  upload.single("posterMiniClass"),
  miniClassController.updateDataById
);

module.exports = router;
