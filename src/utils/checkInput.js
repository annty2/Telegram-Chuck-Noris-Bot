const { messages } = require("../utils/messages");

function checkInputValidity (input){

    // if(!input){
    //     return {
    //         validity:false,
    //         message:messages.emptyInput
    //     };
    // }

    const numInput = Number(input);

    if(isNaN(numInput)){
        return {
            validity:false,
            message:messages.nanInput
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