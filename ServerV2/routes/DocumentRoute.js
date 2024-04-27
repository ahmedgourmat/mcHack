const express = require('express');
const router = express.Router();
const { createDocument, getDocuments } = require('../controllers/DocumentController');
const upload = require('../middleware/uploadFileMiddleware')


// Route to create a new document
router.post('/create', upload.single('file'), createDocument);

// Route to get documents with optional search query
router.get('/', getDocuments);

module.exports = router