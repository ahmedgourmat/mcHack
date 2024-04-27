const mongoose =require('mongoose')

const UserSchema = new mongoose.Schema({
    name :{
        type : String , 
        required : true
    },
    email :{
        type : String , 
        required : true
    },
    password :{
        type : String , 
        required : true
    },
    sessions : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Session'
    }],
    privateKey : {
        type : String,
        requird : false
    },
    publicKey : {
        type : String,
        requird : false
    }
},{
    timestamps : true
})

const User = mongoose.model('User' , UserSchema)


module.exports = User