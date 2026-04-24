import dotenv from "dotenv"
dotenv.config()
import app from "./src/app.js";
import ConnectToDB from "./src/config/database.js";

ConnectToDB()
app.listen(3000,(req,res) =>{

    console.log("server running on port 3000")
}
)