const express = require("express");
const postController = express.Router();
const Post = require("../models/post.model");
const { auth, isAdmin } = require("../middleware/authMiddleware");
/* Get all Posts */

postController.get("/", isAdmin, auth, async (req, res, next) => {
  let usr = res.locals.user;
  try {
    let posts = await Post.find({}).where("author").equals(usr._id).exec();
    res.status(200).json({ success: true, data: posts });
  } catch (err) {
    res.status(400).json({ success: false, error: "Sth wrong" + err.message });
  }
});

postController.get("/all", async (req, res, next) => {
  try {
    let posts = await Post.find({});
    res.status(200).json({ success: true, data: posts });
  } catch (err) {
    res.status(400).json({ success: false, error: "Sth wrong" + err.message });
  }
});

///

postController.post("/comment", async (req, res, next) => {
  try {
    let { postId, commentAuthor, commentBody, authorId } = req.body;
    let newComment = {
      commentBody: commentBody,
      postId: postId,
      commentAuthor,
      authorId,
    };
    let post = await Post.findById(postId);
    post.comments.push(newComment);
    let savedComment = await post.save();
    res.json({ success: true, data: savedComment });
  } catch (e) {
    res.json({ error: "Error while creating comment" + e, success: false });
  }
});
postController.patch("/comment", async (req, res, next) => {
  let { postId, _id } = req.body;
  try {
    let post = await Post.findById(postId);
    post.comments.id(_id).remove();
    let response = await post.save();
    res.json({ success: true, data: response });
  } catch (e) {
    res.json({ error: "Error while deleting comment" + e, success: false });
  }
});

/* Get Single Post */
postController.get("/:post_id", async (req, res, next) => {
  // --- archive
  // Post.findById(req.params.post_id, function (err, result) {
  //   if (err) {
  //     res.status(400).send({
  //       success: false,
  //       error: err.message,
  //     });
  //   }
  //   res.status(200).send({
  //     success: true,
  //     data: result,
  //   });
  // });
  try {
    let singlePost = await Post.findById(req.params.post_id)
      .populate({ path: "author", select: ["name", "lastName", "email"] })
      .exec();
    res.status(200).json({
      success: true,
      data: singlePost,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: "Sth worng" + err,
    });
  }
});

/* Add Single Post */
postController.post("/", auth, isAdmin, async (req, res, next) => {
  try {
    let newPost = {
      title: req.body.title,
      body: req.body.body,
      author: res.locals.user._id,
    };
    const post = new Post(newPost);
    const savedPost = await post.save();
    res.status(201).json({
      success: true,
      data: savedPost,
      message: "Post created successfully!",
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: "" + err,
    });
  }
});

/* Edit Single Post */
postController.patch("/:post_id", auth, isAdmin, async (req, res, next) => {
  try {
    let fieldsToUpdate = req.body;
    let post = await Post.findByIdAndUpdate(
      req.params.post_id,
      {
        $set: fieldsToUpdate,
      },
      {
        new: true,
      }
    )
      .where("author")
      .equals(res.locals.user._id)
      .exec();
    res.status(200).json({
      success: true,
      data: post,
      message: "Post updated successfully",
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: "Sth" + err.message,
    });
  }
});

/* Delete Single Post */
postController.delete("/:post_id", auth, isAdmin, async (req, res, next) => {
  try {
    let result = await Post.findByIdAndDelete(req.params.post_id)
      .where("author")
      .equals(res.locals.user._id)
      .exec();
    res.status(200).json({
      success: true,
      result,
      message: "Post deleted successfully!",
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: "Sth wrong" + error.message,
    });
  }
});

module.exports = postController;
