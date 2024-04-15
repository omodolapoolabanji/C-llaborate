import express from 'express';
//helps connet to the database
import db from '../db/connection.js';
//helps to convert the id to the ObjectID
import { ObjectId } from 'mongodb';

//we use this to define our routes
//this is the same as the app.get() method in the server.js file
//the router will be added as a middleware[?] and will take control of the requests to the /records endpoint 
const router = express.Router();
router.get("/", async(res, req)=>{
    let collection = await db.collection("DB_COLLECTION_NAME");//this should be replaced with the name of your collection in MongoDB
    let results = await collection.find({}).toArray();
    res.send(results).status(200);
})

router.get("/:id", async(res, req)=>{
    let collection = await db.collection("DB_COLLECTION_NAME");
    let query = {_id: new ObjectId(req.params.id)}
    let result = await collection.findOne(query)

    if(!result) res.send("Not found").status(404)
    else res.send(result).status(200)
})
router.post("/", async(res, req)=>{
    try{
        let newDocument = {
            name: req.body.name, 
            position: req.body.position, 
            level : req.body.level,
     
      }
      let collection = await db.collection("DATABASE_NAME")  
      let result = await collection.insertOne(newDocument)
      res.send(result).status(204)
    }
    catch(err){
        console.error(err)
        res.status(500).send("Error adding new record")
    }
})


//this is a tutorial for a post request
router.patch("/:id", async (req, res)=>{
    try{
        const query = {_id: new ObjectId(req.params.id)}
        const updates = {
            $set:{
                name: req.body.name, 
                position: req.body.position,
                level: req.body.level,
            }

        }
        let collection  =await db.collection("DATABASE_NAME")
        let result = await collection.updateOne(query, updates)
        res.send(result).status(200)
    }catch(err){
        console.error(err)
        res.status(500).send("Error updating this record")
    }
})
