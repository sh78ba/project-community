const bcrypt=require("bcryptjs")
const user_model=require("../models/user.model")

exports.signup=async(req,res)=>{
    //get all the data
    const request_body=req.body

    const userObject={
        name:request_body.name,
        email:request_body.email,
        password:bcrypt.hashSync(request_body.password,8)
    }

    //insert it into the database User schema

    try{

        const user_created=await user_model.create(userObject)

        const res_object={
            name:user_created.name,
            email:user_created.email,
            userId:user_created._id
        }

        res.status(201).send({message:"SignUp Successfull!! Please SignIn"})

    }catch(err){
        console.log("Error while registering the user",err)
        res.status(500).send({
            message:"Error while registering the user"
        })
    }
}

exports.signin=async(req,res)=>{

    //get details from body
    const getUser=await user_model.findOne({email:req.body.email})    

    //find if user is present
    if(getUser==null){
        return res.status(400).send({
            message:"Email is not valid"
        })
    }

    //verify the password

    const isPasswordValid=bcrypt.compareSync(req.body.password,getUser.password)

    if(!isPasswordValid){
        return res.status(401).send({
            message:"Password not valid"
        })
    }

    res.status(200).send({
        name:getUser.name,
        email:getUser.email,
    })

}
