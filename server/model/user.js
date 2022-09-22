const mongoose=require("mongoose")

const UserSchema = new mongoose.Schema({
    name:{
         type:String,
    },
    email:{
        type:String,
    },
    
    hash:{
        type:String,
    },
    
    salt:{
        type:String,
    },

    admin:{
        type:Boolean,
    }
});

const User=mongoose.model('User',UserSchema)

module.exports=User;