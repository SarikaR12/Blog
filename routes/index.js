
const express = require("express")
const routes = express.Router()
const userRoute = require("./user.route")
const postRoute = require("./post.route");
const commentRoute = require("./comment.route");

routes.use("/user", userRoute)
routes.use("/post", postRoute)
routes.use("/comment", commentRoute)

module.exports = routes;
