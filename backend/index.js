import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import booksRoute from "./routes/booksRoute.js";
import cors from "cors";

const app = express();

// Middleware for parsing request body
app.use(express.json());

// Middleware for handling CORS
app.use(cors());

// Test route
app.get("/", (req, res) => {
  res.status(200).send("Welcome to MERN Stack Book Shop");
});

// Books routes
app.use("/books", booksRoute);

// Debug log to ensure URI is loaded
console.log("Connecting to MongoDB with URL:", mongoDBURL);

// Connect to MongoDB
mongoose
  .connect(mongoDBURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("App connected to db");
    app.listen(PORT, () => {
      console.log(`App listening on port ${PORT}!`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });
