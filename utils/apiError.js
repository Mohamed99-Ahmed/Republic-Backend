class ApiError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode || 500;
        this.status = `${statusCode}`.startsWith('4')?'fail': 'error'
        this.message = message;
     
    }
}
module.exports = ApiError;