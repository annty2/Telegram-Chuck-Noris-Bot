const { messages } = require("../utils/messages");

function checkInputValidity (input){

    const numInput = Number(input);

    if(isNaN(numInput)){
        return {
            validity:false,
            message:messages.inputNotNumber(input)
        };
    }

    if(numInput < 1){
        return {
            validity:false,
            message:messages.negativeNumber
        };
    }

    return {
        validity:true,
        message: Number(input)
    }
}

module.exports = {
    checkInputValidity
}