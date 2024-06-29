const bcrypt=require("bcryptjs")
const user_model=require("../models/user.model")
const cloudinary=require("../utils/cloudinary");

exports.signup=async(req,res)=>{
    //get all the data
    const request_body=req.body

    const userObject={
        name:request_body.name,
        email:request_body.email,
        password:bcrypt.hashSync(request_body.password,8),
        phone:"",
        photourl:"",
        interest:[]
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

exports.editProfileImage = async (req, res) => {
    const transaction_mail = req.body.email;
    const file = req.files.image;

    try {
        const user = await user_model.findOne({ email: transaction_mail });
        
            cloudinary.uploader.upload(file.tempFilePath, async (err, result) => {
                if (err) {
                    console.log("Error uploading image to Cloudinary", err);
                    return res.status(500).send({ message: "Error uploading image" });
                }
    
                const updatedUser = await user_model.updateOne(
                    { email: transaction_mail },
                    { $set: { photourl: result.url } }
                );
    
                res.status(200).send({message:"Photo updated sucessfully"});
            });
    

    } catch (err) {
        console.log("Error while updating", err);
        res.status(500).send({ message: "Error while updating" });
    }
};

exports.editProfileInterests = async (req, res) => {
    const transaction_mail = req.body.email;
    const get_interests = req.body.interests;

    // Check if interests is an array of strings
    if (!Array.isArray(get_interests) || !get_interests.every(item => typeof item === 'string')) {
        return res.status(400).send({ message: "Interests should be an array of strings" });
    }

    try {
        const user = await user_model.findOne({ email: transaction_mail });

        if (!user) {
            return res.status(404).send({ message: "User not found" });
        }

        const updatedUser = await user_model.updateOne(
            { email: transaction_mail },
            { $set: { interests: get_interests } }
        );

        res.status(200).send({ message: "Interests updated successfully", user: updatedUser });

    } catch (err) {
        console.log("Error while updating", err);
        res.status(500).send({ message: "Error while updating" });
    }
};

exports.editProfile=async(req,res)=>{

}