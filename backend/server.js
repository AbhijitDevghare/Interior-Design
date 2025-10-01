import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import path from "path";

import categoryRoutes from "./routes/category.js";
import designRoutes from "./routes/design.js";
import serviceRoutes from "./routes/service.js";
import contactRoutes from "./routes/contact.js";

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(path.resolve(), "uploads")));

app.use("/api/categories", categoryRoutes);
app.use("/api/designs", designRoutes);
app.use("/api/services", serviceRoutes);
app.use("/api/contacts", contactRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
