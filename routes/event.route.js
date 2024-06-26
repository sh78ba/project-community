const eventMw=require("../middlewares/event.mw")
const eventController=require("../controllers/event.controller")


module.exports=(app)=>{
    app.post("/community/api/v1/event/create",[eventMw.verifyEventBody],eventController.createEvent);
    app.get("/community/api/v1/event/getallevents",eventController.getAllEvents)
}

