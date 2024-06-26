const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
    {
        email:{
            type:String,
            required:[true,"Please provide a valid email"],
            
        },

        password:{
            type:String,
            required:[true,"Enter your password "]
        }
    },
    {
        timestamps:true
    }
);

const User = mongoose.model("User",userSchema);

module.exports = User