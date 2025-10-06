import dotenv from "dotenv";
dotenv.config();  // This ensures .env is loaded

export const PORT = process.env.PORT || 5555;
export const mongoDBURL = process.env.MONGODB_URI;

console.log("mongoDBURL in config:", mongoDBURL);  // debug log
