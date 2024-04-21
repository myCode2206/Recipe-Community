const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const seedDB = require("./seed");
const dotenv=require('dotenv').config()




app.use(express.json());

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));



// const mongourl = process.env.MONGO_URL;
const mongourl = "mongodb://127.0.0.1:27017/recipeeee";
const port = process.env.PORT;



mongoose
  .connect(mongourl)
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

app.listen(port, () => {
  console.log("conected to port 5000");
});
