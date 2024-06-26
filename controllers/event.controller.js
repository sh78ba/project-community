const event_model=require("../models/event.model")

exports.createEvent=async(req,res)=>{
    const request_body=req.body;
    const eventObject={
        title:request_body.title,
        description:request_body.description,
        date:request_body.date,
        location:request_body.location,
        organizer:request_body.organizer,
        creatoremail:request_body.creatoremail
    }
    try{

        const event_created=await event_model.create(eventObject)

        res.status(201).send({message:"Event created",event_created})

    }catch(err){
        console.log("Error while creating the event",err)
        res.status(500).send({
            message:"Error while creating the event"
        })
    }
}

exports.getAllEvents=async(req,res)=>{
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