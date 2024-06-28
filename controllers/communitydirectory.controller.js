
const commDir_model=require("../models/communitydir.model")

const cloudinary=require("../utils/cloudinary");


exports.createCommDir=async(req,res)=>{
    const req_body=req.body

    const file=req.files.image;
   

    //  insert it into the database neighbour schema

     try{

        cloudinary.uploader.upload(file.tempFilePath,async(err,result)=>{
        const commDirObject={
            title:req_body.title,
            address:req_body.address,
            phone:req_body.phone,
            service:req_body.service,
            imageurl:result.url
        }
        const commDircreated=await commDir_model.create(commDirObject)
        res.status(201).send({message:"Community Dir created",commDircreated})

        })
       
       
    }catch(err){
        console.log("Error while creating Community post",err)
        res.status(500).send({
            message:"Error while creating Community post"
        })
    }

}

exports.getAll=async(req,res)=>{
    try{
        const response=await commDir_model.find();
        res.status(201).send(response)
    }catch(err){
        console.log("Error while fetching the community",err)
        res.status(500).send({
            message:"Error while fetching the ecommunity"
        })
    }
}