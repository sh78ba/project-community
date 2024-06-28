const neighbourMw=require("../middlewares/neighbour.mw")
const neighbourController=require("../controllers/neighbour.contoller")

module.exports=(app)=>{
    app.post("/community/api/v1/neighbour/create",[neighbourMw.verifyNeighbourBody],neighbourController.createNeighbourPost);
    app.get("/community/api/v1/neighbour/getAll",neighbourController.getAllNeighbour)
}

