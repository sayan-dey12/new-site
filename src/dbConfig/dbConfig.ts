// import dns from "node:dns"; 
import "server-only";
import mongoose from "mongoose";

// dns.setServers(["8.8.8.8", "8.8.4.4"]);

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  throw new Error("Please define the MONGO_URI environment variable");
}

type MongooseCache = {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
};

declare global {
  // eslint-disable-next-line no-var
  var mongooseCache: MongooseCache | undefined;
}

const cached =
  global.mongooseCache ?? {
    conn: null,
    promise: null,
  };

if (!global.mongooseCache) {
  global.mongooseCache = cached;
}

export async function connectDB(): Promise<typeof mongoose> {
  // Already connected
  if (cached.conn && mongoose.connection.readyState === 1) {
    return cached.conn;
  }

  // Connection is already being established
  if (cached.promise) {
    return cached.promise;
  }

  cached.promise = mongoose.connect(MONGO_URI as string);

  try {
    cached.conn = await cached.promise;

    console.log("Database connected successfully");

    return cached.conn;
  } catch (error) {
    console.error("Database connection failed:", error);

    cached.promise = null;
    cached.conn = null;

    throw error;
  }
}