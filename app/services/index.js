import mongoose from "mongoose";
const MONGODB_URI=process.env.MONGODB_URI;

export async function dbConnect(){
const conn=await  mongoose.connect(MONGODB_URI);
return conn;
}