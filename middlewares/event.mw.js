const verifyEventBody=async(req,res,next)=>{
    try{
        if(!req.body.title){
            return res.status(400).send({
                message:"Title was not provided in request body"
            })
        }

        // if(!req.body.description){
        //     return res.status(400).send({
        //         message:"Description was not provided in request body"
        //     })
        // }

        // if(!req.body.date){
        //     return res.status(400).send({
        //         message:"Date was not provided in request body"
        //     })
        // }

        // if(!req.body.location){
        //     return res.status(400).send({
        //         message:"Location was not provided in request body"
        //     })
        // }

        // if(!req.body.organizer){
        //     return res.status(400).send({
        //         message:"Organizer was not provided in request body"
        //     })
        // }

        // if(!req.body.creatoremail){
        //     return res.status(400).send({
        //         message:"Creator email was not provided in request body"
        //     })
        // }

        next();
    }catch(err){
        console.log("Error while validating the request body",err)
        res.status(500).send({
            message:"Error while validating the request body"
        })
    }
}

module.exports={
    verifyEventBody:verifyEventBody
}