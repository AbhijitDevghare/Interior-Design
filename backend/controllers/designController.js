import Design from "../models/Design.js";

export const getDesigns = async (req, res) => {
  const designs = await Design.find();
  res.json(designs);
};

export const createDesign = async (req, res) => {
  const { title, description, categoryId } = req.body;
  const imageUrl = req.file ? `/uploads/${req.file.filename}` : "";
  const design = new Design({ title, description, categoryId, imageUrl });
  await design.save();
  res.status(201).json(design);
};

export const updateDesign = async (req, res) => {
  const { title, description, categoryId } = req.body;
  const imageUrl = req.file ? `/uploads/${req.file.filename}` : req.body.imageUrl;
  const design = await Design.findByIdAndUpdate(
    req.params.id,
    { title, description, categoryId, imageUrl },
    { new: true }
  );
  res.json(design);
};

export const deleteDesign = async (req, res) => {
  await Design.findByIdAndDelete(req.params.id);
  res.json({ message: "Design deleted" });
};
