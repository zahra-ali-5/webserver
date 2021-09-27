const { count } = require("../models");
const Film = require("../models");

constFilm = require("../models");

exports.helloWorld =(req, res)=>{
    res.send("garysteve says Hello World ");
};

exports.addFilm = async(req, res) =>{
    try {
        const film=new Film(req.body)
        await film.save();
        res.status(200).send({film: film, message:"sucess"});
    } catch (error) {
        console.log(error)
        res.status(500).send({err:error});
    }
};

exports.listFilm = async(req, res)=>{
    //console.log(req);
    try {
        const list= await Film.find({});
    console.log(list);
   //if(i=0, i<count, i++)
   //m trying to make if else statement with counter
   // res.status(200).send(list[0].name);
    res.status(200).send({message:"sucess", list });

    res.status(200).send(`Film no. :  ${list[0]}`)
   
    
    //res.send({ film:film , message : "LIST" });
        
    }
        
    catch (error) {
        console.log(error)
        res.status(500).send({err:error});
    }
};

exports.deleteFilm = async(req, res)=>{
    try {
        const name =req.params.name;
        console.log(name);
        const del= await Film.deleteOne({name: name});
 
        res.status(200).send({message:"sucess" , del});
   
    
    //res.send({ film:film , message : "LIST" });
}
        
    catch (error) {
        console.log(error)
        res.status(500).send({err:error});
    }
};

exports.upFilm = async(req, res)=>{
    try {
      
        await Film.updateOne(
            {name: req.body.filter},
            {$set: {watched :req.body.update}}
            );
            res.status(200).send({message:"sucess"});
  
        }   
        
    catch (error) {
        console.log(error)
        res.status(500).send({err:error});
    }
};

exports.findOneFilm = async (req, res) => {
    try {
        const oneFilm = await Film.find({"name": req.params.name})
        console.log(oneFilm)
        res.status(200).send(oneFilm[0].name)
    } catch (error) {
        res.status(500).send({msg: `internal server error:${error}`})
    }
}
