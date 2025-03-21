exports.buildResponse = (status, message, data = null, error = null) => {
    return {
        status,
        message,
        data,
        error
    };
};

exports.buildSuccessResponse = (message, data = null) => {
    return {
        status: "success",
        message,
        data
    };
};

exports.buildFailureResponse = (err, data = null, error = null) => {
    const message = err?.parent?.detail ?? err.message;
    return {
        status: "failure",
        message,
        data,
        error
    };
};
