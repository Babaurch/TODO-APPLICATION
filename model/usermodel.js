import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullname:{
        type:String,
        required:[true, "Fullame is needed"],
    },
    email:{
        type:String,
        required:[true, "email is needed"],
    },
    password:{
        type:String,
        required:[true, "password is needed"]
    },
},{
    timestamps:true,
    toJSON:{virtuals:true}
});

const User = mongoose.model("User", userSchema);

export default User;