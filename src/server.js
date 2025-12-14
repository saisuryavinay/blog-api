import express from "express";
import sequelize from "./config/database.js";
import postRoutes from "./routes/postRoutes.js";

import "./models/Author.js";
import "./models/Post.js";

import authorRoutes from "./routes/authorRoutes.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Routes
app.use("/authors", authorRoutes);
app.use("/posts", postRoutes);

app.get("/", (req, res) => {
  res.send("Blog API is running");
});

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connected successfully");

    await sequelize.sync({ alter: true });
    console.log("Models synchronized");

    app.listen(PORT, () => {
      console.log(` Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Startup error:", error.message);
  }
};

startServer();
