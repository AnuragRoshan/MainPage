const mongoose=require("mongoose")

const UserSchema = new mongoose.Schema({
    username:{
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

// export default user;
module.exports=User;