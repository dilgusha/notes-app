const AppError = require("../errors/app.error");

const errormiddleware = (error, req, res,next) => {
    if (error instanceof AppError) {
        return res.status(error.statusCode).json({
            message: error.message
        });
    }
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
}

module.exports = {errormiddleware};