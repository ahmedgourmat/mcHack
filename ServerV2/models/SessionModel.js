const mongoose =require('mongoose')

const SessionSchema = new mongoose.Schema({
    
    title : {
        type : String , 
        required : true
    },
    description : String,
    users :[
    {
        usersId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        role: {
            type: String,
            required: true
        }
    }],
    category : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Category'
    }]
},{
    timestamps : true
})

const Session = mongoose.model('Session' , SessionSchema)


module.exports = Session