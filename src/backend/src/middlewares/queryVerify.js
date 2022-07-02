const updateQueryVerify = (req, res, next) => {
  try {
    const { query } = req;
    if (query.type !== 'task' && query.type !== 'status') {
      const err = {
        status: 406,
        message: 'A valid type is required, check readme',
      };
      throw err;
    }

    next();
  } catch (err) {
    next(err);
  }
};

module.exports = {
  updateQueryVerify,
};
