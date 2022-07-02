const Joi = require('joi');

const schema = Joi.object({
  task: Joi.string()
    .min(1)
    .max(50)
    .required(),
});

const schema2 = Joi.object({
  content: Joi.string()
    .min(1)
    .max(50)
    .required(),
});

const newTask = async (req, res, next) => {
  try {
    const { body } = req;
    await schema.validateAsync(body).catch((err) => {
      const errorMessage = {
        status: 400,
        message: err.message,
      };
      throw errorMessage;
    });

    next();
  } catch (err) {
    next(err);
  }
};

const updateContent = async (req, res, next) => {
  try {
    const { body } = req;
    await schema2.validateAsync(body).catch((err) => {
      const errorMessage = {
        status: 400,
        message: err.message,
      };
      throw errorMessage;
    });

    next();
  } catch (err) {
    next(err);
  }
};

module.exports = {
  newTask,
  updateContent,
};
