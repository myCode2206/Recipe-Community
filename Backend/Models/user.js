const mongoose = require("mongoose");
const Blog = require("./blog");
const Recipe = require("./recipe");

// Define your schema without passport-local-mongoose
const authenticationSchema = new mongoose.Schema({
    googleId: String,
    username: String,
    email: String,
    role: {
        type: String,
        default: "client"
    },
    blogs: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Blog"
    }],
    recipes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Recipe"
    }],
    following: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],
    follower: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],
    sendrequest: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],
    recivedrequest: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],
}, { timestamps: true });

// Create the model without applying passport-local-mongoose plugin
const User = mongoose.model("User", authenticationSchema);

module.exports = User;
