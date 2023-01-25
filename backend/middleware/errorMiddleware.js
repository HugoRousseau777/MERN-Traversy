const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? // If it's there we want it
     res.statusCode : 500 // Else it's 500

    res.status(statusCode)

    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack
    })
}

module.exports = {
    errorHandler
}