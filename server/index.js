import express from "express";
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";


import { checkHealth } from "./controllers/health.js";
import { getAllPlants,postPlant,getPlantId ,putPlant,deletePlant} from "./controllers/Plants.js";
const dbconnection=async()=>{

    const connection= await mongoose.connect(process.env.MONGO_URL );

    if(connection){
        console.log("Mongo DB connected 🎁")
    }else{
        console.log("Mongo DB not connected ❌")
    }

}

dbconnection();

const app=express();

app.use(express.json());

app.post("/plant",postPlant)

app.get("/plants",getAllPlants)

app.get("/plant/:id",getPlantId)

app.put("/plant/:id",putPlant)

app.delete("/plant/:id",deletePlant)

app.get("/health",checkHealth)


//app.use("*",handleErrorNotFound)

const PORT= process.env.port;

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})