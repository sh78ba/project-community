const authController=require("../controllers/auth.controller")
const authMw=require("../middlewares/auth.mw")

module.exports=(app)=>{
    //signup
    app.post("/community/api/v1/signup",[authMw.verifySignUpBody],authController.signup)

    //signin
    app.post("/community/api/v1/signin",[authMw.verifySignInBody],authController.signin)

    //updtae profile image
    app.put("/community/api/v1/updatephoto",authController.editProfileImage)

    //update interest 
    app.post("/community/api/v1/updateinterest",authController.editProfileInterests)

    //update profile
    app.put("/community/api/v1/updateprofile",authController.updateProfile)
    
    //get user
    app.get("/community/api/v1/getuser",authController.getUser)
     
    //edit interest
    app.put("/community/api/v1/updateinterest",authController.editProfileInterests)
   

}

