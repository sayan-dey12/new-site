import mongoose from "mongoose";

type ConnectionObject = {
    isConnected?: number,
}

const connected:ConnectionObject = {};

const mongo_url = process.env.MONGO_URI as string;

if(!mongo_url){
    throw new Error("Please define the MONGO_URI environment variable");
}


export async function connectDB():Promise<typeof mongoose | void>{
    if(connected.isConnected){
        console.log("Already connected to the database");
        return;
    }
    try {
        const db = await mongoose.connect(mongo_url,{});
        connected.isConnected = db.connections[0].readyState;
        console.log("Database connected successfully");
        return db;
        
    } catch (error) {
        console.log("Database connection failed ",error);
        //process.exit(1);   
    }
}