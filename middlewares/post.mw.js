const verifyPostBody=async(req,res,next)=>{
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


module.exports={verifyPostBody:verifyPostBody
}