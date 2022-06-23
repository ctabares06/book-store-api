import * as Joi from 'joi';

export const CreateCountrySchema = Joi.object({
  code: Joi.string().alphanum().min(3).required(),
  name: Joi.string().min(3).required(),
  currencyCode: Joi.string().alphanum().min(3).required(),
});

export const UpdateCountrySchema = Joi.object({
  name: Joi.string().min(3).required(),
  currencyCode: Joi.string().alphanum().min(3).required(),
});

export const UpdateCountryParamsSchema = Joi.object({
  code: Joi.string().alphanum().min(3).required(),
});
