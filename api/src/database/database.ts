import mongoose from "mongoose";

function getMongoURI() {
    return `${process.env.MONGO_URI}`
}

const clientOptions = {
    socketTimeoutMS: 30000,
    keepAlive: true,
    dbName: process.env.DOCUMENT
}

export function connectToDatabase() {
    try {
        mongoose.connect(getMongoURI(), clientOptions).then(() => {
            console.log('successfully connected to database');
        });
    } catch (error) {
        console.log(error);
        throw error;
    }
}
