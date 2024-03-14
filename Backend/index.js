const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const seedDB = require("./seed");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose
  .connect("mongodb://127.0.0.1:27017/recipeeee")
  .then(() => console.log("Connection Open!"))
  .catch((err) => console.log(err));

app.use(
  cors({
    origin: ["http://localhost:5173"],
  })
);

//all routes
const BlogRoutes = require("./Routes/BlogRoutes");
const NormalRoutes = require("./Routes/NormalRoutes");
const RecipeRoutes = require("./Routes/RecipeRoutes");
const UserRoutes = require("./Routes/UserRoutes");
app.use(BlogRoutes);
app.use(NormalRoutes);
app.use(RecipeRoutes);
app.use(UserRoutes);

// seedDB();

app.listen("5000", () => {
  console.log("conected to port 5000");
});
