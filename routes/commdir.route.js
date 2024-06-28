
const comDirController=require("../controllers/communitydirectory.controller")

module.exports=(app)=>{
    app.post("/community/api/v1/cummunitydir/create",comDirController.createCommDir);
    app.get("/community/api/v1/cummunitydir/getAll",comDirController.getAll);
}

