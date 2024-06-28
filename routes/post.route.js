const postMw=require("../middlewares/post.mw")
const postController=require("../controllers/post.controller")

module.exports=(app)=>{
    app.post("/community/api/v1/post/create",[postMw.verifyPostBody],postController.createNeighbourPost);
    app.get("/community/api/v1/post/getallposts",postController.getAllPosts)
}

