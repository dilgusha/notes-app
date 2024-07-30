const { authSchema } = require("../schema");

function validationMiddleware(schema) {
  return (req, res, next) => {
    let result = schema.validate(req.body);
    if (result?.error) {
      let errorMessages = result?.error?.details?.map(errorDetail => errorDetail.message)
      return res.status(400).json({status: false, messages: errorMessages})
    } 
    next();
  }
}

// validationMiddleware(authSchema.login)

module.exports = {
  validationMiddleware
}