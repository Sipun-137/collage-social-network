import mongoose from "mongoose"

const UserSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"please provide a name"]
    },
    email: {
        type: String,
        required: [true, "please provide a email"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "please provide a password"]
    },
    role: {
        type: String,
        required: true
    }
})

const Users = mongoose.models.users || mongoose.model("users", UserSchema);

export default Users;