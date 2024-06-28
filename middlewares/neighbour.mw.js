
// title:req_body.title,
// description:req_body.description,
// email:req_body.email,
// phone:req_body.phone,
// imageurl:req_body.imageurl

const verifyNeighbourBody=async(req,res,next)=>{
    try{
        if(!req.body.title){
            return res.status(400).send({
                message:"Title was not provided in request body"
            })
        }

        if(!req.body.description){
            return res.status(400).send({
                message:"Description was not provided in request body"
            })
        }

        if(!req.body.email){
            return res.status(400).send({
                message:"Email was not provided in request body"
            })
        }

        if(!req.body.phone){
            return res.status(400).send({
                message:"Phone was not provided in request body"
            })
        }

        if(!req.files||!req.files.image){
            return res.status(400).send({
                message:"Image was not provided in request body"
            })
        }

        

        next();
    }catch(err){
        console.log("EError while validating the neighbour body",err)
        res.status(500).send({
            message:"Error while validating the neighbour body"
        })
    }
}


module.exports={
    verifyNeighbourBody:verifyNeighbourBody
}