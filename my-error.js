class ServerError extends Error {
    constructor(message, status) {
        super(message);
        this.status = status;
    }
}

function exist(value, message, status) {
    if (!value) throw new ServerError(message, status);
}

module.exports = { ServerError, exist };