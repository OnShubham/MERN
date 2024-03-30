const validate = (schema) => async (req, res, next) => {
  try {
    const parseBody = await schema.parseAsync(req.body);
    req.body = parseBody;
    next();
  } catch (err) {
    const message = err.issues[0].message; // Assuming err contains an array of errors with messages
    console.log(message); // Log the error for debugging
    res.status(400).json({ msg: message }); // Respond with the error message
  }
};

module.exports = validate;
 