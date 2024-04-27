const router = require('express').Router()
const { signUp, login, getUsers } = require('../controllers/UserControllers')
const Joi = require('joi')
const validateRequest = require('../middleware/joiValidation')

const signupSchema = Joi.object().keys({
    name: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
    confirmPassword : Joi.string().min(8).required()
});
const loginSchema = Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required()
});


router.route('/signup').post(validateRequest(signupSchema) , signUp)
router.route('/login').post(validateRequest(loginSchema) , login)
router.route('/').get(getUsers)



module.exports = router