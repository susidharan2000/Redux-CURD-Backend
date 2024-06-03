import  mongoose from "mongoose";

const user_Schema = mongoose.Schema({
    name:String,
    email:String,
    age:String
})
const User = mongoose.model("User",user_Schema);

export default User;