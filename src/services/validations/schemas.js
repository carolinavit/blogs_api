const Joi = require('joi');

const userSchema = Joi.object({
  displayName: Joi.string().min(8).required().label('displayName'),
  email: Joi.string().email().required().label('email'),
  password: Joi.string().min(6).required().label('password'),
  image: Joi.string().allow(null, ''),
}).messages({
  'string.min': '{{#label}} length must be at least {{#limit}} characters long',
  email: '{{#label}} must be a valid email',
});

const categorySchema = Joi.object({
  name: Joi.string().required().label('name'),
}).messages({
  'any.required': '{{#label}} is required',
});

module.exports = {
  userSchema,
  categorySchema,
};
