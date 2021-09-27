const {Router}= require("express");
const helloRouter = Router();
//const {steve} =require("../controllers");
const {
    //addSteve,
    addFilm,
    listFilm,
    deleteFilm,
    upFilm  
    //readSteve,
    //updateSteve,
    //deleteSteve
    }=require("../controllers")


helloRouter.get("/steve", listFilm);
helloRouter.post("/steve",addFilm);
helloRouter.put("/steve",upFilm);
//helloRouter.patch("/steve",updateSteve);
helloRouter.delete("/steve/:name",deleteFilm);

module.exports=helloRouter;