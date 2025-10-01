import mongoose from "mongoose";

const ServiceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  icon: String,
});

export default mongoose.model("Service", ServiceSchema);
