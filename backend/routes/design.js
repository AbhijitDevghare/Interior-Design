import express from "express";
import multer from "multer";
import { getDesigns, createDesign, updateDesign, deleteDesign } from "../controllers/designController.js";

const router = express.Router();
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});
const upload = multer({ storage });

router.get("/", getDesigns);
router.post("/", upload.single("image"), createDesign);
router.put("/:id", upload.single("image"), updateDesign);
router.delete("/:id", deleteDesign);

export default router;
