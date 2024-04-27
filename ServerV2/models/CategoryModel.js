const mongoose =require('mongoose')

const CategorySchema = new mongoose.Schema({
    
    title : {
        type : String , 
        required : true
    },
    document : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Document'
    }]
},{
    timestamps : true
})

const Category = mongoose.model('Category' , CategorySchema)


module.exports = Category