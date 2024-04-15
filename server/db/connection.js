import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.ATLAS_URI || ""
const client = new MongoClient(uri, {
    serverApi:{version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,},
});

try{
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Connected to the database");
}
catch(err){
    console.log(err);
}
let db = client.db("DB_NAME");//this should be replaced with the name of your database in MongoDB
export default db;