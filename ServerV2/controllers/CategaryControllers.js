const Category = require('../models/CategoryModel')


const createCategory = async(req , res)=>{

    const {title} = req.body


    try {

        const cat = await Category.findOne({title})
        if(cat) throw Error('this title is already existe')
        
        const data = await Category.create({title , document : []})


        res.status(201).json(data)

    } catch (error) {
        res.status(500).json({error : error.message})
    }

}


const addDocument = async (req, res) => {
    const { categoryId, document } = req.body;

    try {
        // Find the category by ID
        const category = await Category.findById(categoryId);

        if (!category) {
            return res.status(404).json({ error: 'Category not found' });
        }

        // Add the document to the category's document array
        category.documents.push(document);
        await category.save();

        res.status(200).json(category);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};


module.exports = {createCategory , addDocument}