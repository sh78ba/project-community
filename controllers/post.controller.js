const post_model=require("../models/post.model")

const cloudinary=require("../utils/cloudinary");


exports.createPost=async(req,res)=>{
    const req_body=req.body

    const file=req.files.image;
   

    //  insert it into the database neighbour schema

     try{

        cloudinary.uploader.upload(file.tempFilePath,async(err,result)=>{
        const postObject={
            title:req_body.title,
            description:req_body.description,
            email:req_body.email,
            imageurl:result.url
        }
        const neighbour_created=await post_model.create(postObject)
        res.status(201).send({message:"Post created"})


        })
       
       
    }catch(err){
        console.log("Error while creating post",err)
        res.status(500).send({
            message:"Error while creating post"
        })
    }

}


exports.getAllPosts=async(req,res)=>{
    try{
        const response=await post_model.find();
        res.status(201).send(response)
    }catch(err){
        console.log("Error while fetching the posts",err)
        res.status(500).send({
            message:"Error while fetching the posts"
        })
    }
}