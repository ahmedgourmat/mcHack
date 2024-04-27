const router = require('express').Router()
const { createSession , getSessions } = require('../controllers/SessionControllers')
const Joi = require('joi')
const validateRequest = require('../middleware/joiValidation')


const sessionSchema = Joi.object().keys({
    title: Joi.string().min(3).required(),
});


router.route('/').post(validateRequest(sessionSchema) , createSession).get(getSessions)



module.exports = router