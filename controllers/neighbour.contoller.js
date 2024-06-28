const neighbour_model=require("../models/neighbour.model")

const cloudinary=require("../utils/cloudinary");


exports.createNeighbourPost=async(req,res)=>{
    const req_body=req.body

    const file=req.files.image;
   

    //  insert it into the database neighbour schema

     try{

        cloudinary.uploader.upload(file.tempFilePath,async(err,result)=>{
        const neighbourObject={
            title:req_body.title,
            description:req_body.description,
            email:req_body.email,
            phone:req_body.phone,
            imageurl:result.url
        }
        const neighbour_created=await neighbour_model.create(neighbourObject)
        res.status(201).send({message:"Neighbour created"})


        })
       
       
    }catch(err){
        console.log("Error while creating neighbour post",err)
        res.status(500).send({
            message:"Error while creating neighbour post"
        })
    }

}


exports.getAllNeighbour=async(req,res)=>{
    try{
        const response=await neighbour_model.find();
        res.status(201).send(response)
    }catch(err){
        console.log("Error while fetching the events",err)
        res.status(500).send({
            message:"Error while fetching the events"
        })
    }
}