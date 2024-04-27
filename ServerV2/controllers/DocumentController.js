const Document = require('../models/DocumentModel')
const storeFile = require("../utils/storeFile")
const bcrypt = require("bcrypt")

const createDocument = async (req, res) => {
    try {
        const {originalname , mimetype , size ,filename } = req.file

        const type = mimetype.split('/')[1]
        console.log(type)

        const data = await Document.create({name : filename , originalname , size , type })

        const salt = await bcrypt.genSalt(10);
        const fileData = originalname.toString()+mimetype.toString()+size.toString()+filename.toString();
        const hash = await bcrypt.hash(fileData, salt);

        await storeFile(filename,hash,"662cbbbc8baeb994ddcfd4c2")

        res.status(201).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }

};

const getDocuments = async (req, res) => {
    const documents = req.query.search ? {
        $or: [
            { title: { $regex: req.query.search, $options: 'i' } },
            { type: { $regex: req.query.search, $options: 'i' } },
            { taille: { $regex: req.query.search, $options: 'i' } }
        ]
    } : {};

    try {
        const data = await Document.find(documents);
        res.status(200).json(data);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

module.exports = {
    createDocument,
    getDocuments
};