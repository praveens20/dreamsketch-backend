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

exports.buildFailureResponse = (message, data = null, error = null) => {
    return {
        status: "failure",
        message,
        data,
        error
    };
};
