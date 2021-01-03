const Joi = require('joi');

const signUpSchema = Joi.object({
    name: Joi.string()
        .alphanum()
        .min(3)
        .max(30),
    lastName: Joi.string()
        .min(3)
        .max(30),
    password: Joi.string()
        .min(6)
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),

    email: Joi.string()
        .email()
        .required()
        .min(6)
        .lowercase(),

    avatar: Joi.string(),
    role: Joi.number(),
    date: Joi.string()
});


const logInSchema = Joi.object({
    password: Joi.string()
        .min(6)
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),

    email: Joi.string()
        .email()
        .required()
        .min(6)
        .lowercase()
});

module.exports = {
    signUpSchema,
    logInSchema,
}