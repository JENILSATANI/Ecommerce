class requestError extends Error{
    constructor(message, code) {
        super(message);
        this.code = code;
    }
}

class BadRequestError extends requestError{
    constructor(message){
        super(message , 400)
    }
}

class NotFoundError extends requestError{
    constructor(message){
        super(message,404)
    }
}

export {BadRequestError, NotFoundError}