const router = require('express').Router()
const { createCategory , addDocument } = require('../controllers/CategaryControllers')
const Joi = require('joi')
const validateRequest = require('../middleware/joiValidation')


const validationSchema = Joi.object().keys({
    title: Joi.string().min(3).required(),
});


router.route('/').post(validateRequest(validationSchema) , createCategory)
router.route('/:id').patch(addDocument)



module.exports = router