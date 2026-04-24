import mongoose from "mongoose";

function ConnectToDB(){
mongoose.connect(process.env.MONGO_URI)
try {
    console.log("connected to mongodb")
} catch (error) {
    console.log(error)
}

}
export default ConnectToDB