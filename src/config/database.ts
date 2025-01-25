import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()

const connectDB = async () => {
    try {
        const mongoURI = process.env.MONGO_URI as string
        await mongoose.connect(mongoURI)
        console.log("Connected to MongoDB")

    } catch (error) {
        console.error("MongoDB connection error: ", error)
        process.exit(1)
    }
}

export default connectDB