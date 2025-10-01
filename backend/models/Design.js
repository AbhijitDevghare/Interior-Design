import mongoose from "mongoose";

const DesignSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  imageUrl: String,
  categoryId: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
});

export default mongoose.model("Design", DesignSchema);
