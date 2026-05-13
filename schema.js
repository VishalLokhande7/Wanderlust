const Joi = require("joi");

module.exports.listingSchema = Joi.object({
  listing: Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    location: Joi.string().required(),
    country: Joi.string().required(),
    price: Joi.number().required().min(0),

    // image is an object with a 'url' field
    image: Joi.object({
      url: Joi.string().uri().allow("", null) // allow empty input, but must be a valid URL if present
    }).required()

  }).required(),
});

module.exports.reviewSchema = Joi.object({
  review: Joi.object({
    rating: Joi.number().min(1).max(5).required(),
    comment: Joi.string(),
  }).required(),
});
