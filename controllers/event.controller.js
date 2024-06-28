const event_model=require("../models/event.model")
const cloudinary=require("../utils/cloudinary")

exports.creategroupEvent=async(req,res)=>{
    const request_body=req.body;
    const file = req.files.image;

    try {
       
            cloudinary.uploader.upload(file.tempFilePath, async (err, result) => {
                if (err) {
                    console.log("Error uploading image to Cloudinary", err);
                    return res.status(500).send({ message: "Error uploading image" });
                }
                const eventObject={
                    title:request_body.title,
                    subtitle:request_body.subtitle,
                    description:request_body.description,
                    location:request_body.location,
                    hostname:request_body.hostname,
                    hostemail:request_body.hostemail,
                    imageurl:result.url,
                    fromdate:request_body.fromdate,
                    todate:request_body.todate

            }
            const event_created=await event_model.create(eventObject)

            res.status(201).send({message:"Event created",event_created})
    });

        }catch(err){
            console.log("Error while creating the event",err)
            res.status(500).send({
                message:"Error while creating the event"
            })
        }

     
    }


        
    


exports.getAllGroupEvents=async(req,res)=>{
    try{
        const response=await event_model.find();
        res.status(201).send(response)
    }catch(err){
        console.log("Error while fetching the events",err)
        res.status(500).send({
            message:"Error while fetching the events"
        })
    }
}

