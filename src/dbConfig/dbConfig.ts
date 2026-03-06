import mongoose from "mongoose";

type ConnectionObject = {
    isConnected?: number,
}

const connected:ConnectionObject = {};

const MONGO_URI = process.env.MONGO_URI as string;

if(!MONGO_URI){
    throw new Error("Please define the MONGO_URI environment variable");
}


export async function connectDB():Promise<typeof mongoose | void>{
    if(connected.isConnected){
        console.log("Already connected to the database");
        return;
    }
    try {
        const db = await mongoose.connect(MONGO_URI,{});
        connected.isConnected = db.connections[0].readyState;
        console.log("Database connected successfully");
        return db;
        
    } catch (error) {
        console.log("Database connection failed ",error);
        process.exit(1);   
    }
}