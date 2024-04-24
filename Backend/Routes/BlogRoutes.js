const express = require("express");
const router = express.Router();
const MyBlog = require("../Models/blog");
const BlogComment = require("../Models/blogComment");

router.get("/blog", async (req, res) => {
  try {
    const blog = await MyBlog.find();
    console.log("sare blogs aa jynge");
    res.status(200).json(blog);
  } catch (e) {
    res.status(400).json({ msg: "Something Went Wrong!!!" });
  }
});

router.post("/blog/add", async (req, res) => {
  try {
    const { blogName, img, desc } = req.body.formData;
    const author = "mukul";
    const newblog = await MyBlog.create({
      title: blogName,
      image: img,
      body: desc,
      author,
    });
    res.status(201).json({ _id: newblog._id });
  } catch (err) {
    console.log(err);
    res.status(400).json({ msg: "Something Went Wrong!!!" });
  }
});

router.get("/blog/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await MyBlog.findById(id).populate("comment");
    res.status(200).json(blog);
  } catch (e) {
    res.status(400).json({ msg: "Something Went Wrong!!!" });
  }
});

router.get("/blog/:id/updateblog", async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await MyBlog.findById(id);
    console.log("sare blogs aa jynge");
    res.status(200).json(blog);
  } catch (e) {
    res.status(400).json({ msg: "somthing went wrong" });
  }
});
router.post("/blog/:id/updateblog", (req, res) => {
  try {
    const { id } = req.params;
    const { title, image, body } = req.body();
    const blog = MyBlog.findByIdAndUpdate(id, {
      title: title,
      image: image,
      body: body,
    });
    console.log("sare blogs aa jynge");
    res.status(200).json(blog);
  } catch (e) {
    res.status(400).json({ msg: "somthing went wrong" });
  }
});

router.post("/blog/:id/comment", async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await MyBlog.findById(id);
    const { comment } = req.body;

    const newComment = await BlogComment.create({
      comment,
      user_id: "1",
      username: "mukul",
    });

    // console.log(newComment)

    blog.comment.push(newComment);
    blog.save();

    res.status(201).json({ msg: "comment added sucess" });
  } catch (e) {
    res.status(400).json({ msg: "error in adding comments" });
  }
});

module.exports = router;
