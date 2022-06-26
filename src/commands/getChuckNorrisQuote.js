const { ChuckNorrisQuoteFetcher } = require("../ChuckNorrisQuoteFetcher/index");
const { checkInputValidity } = require("../utils/checkInput");
const { messages } = require("../utils/messages");

async function getChuckNorrisQuote(params){

    if (params.length > 1){
        throw new Error(messages.paramsError);
    }

    const param = params[0];

    const fetcher = new ChuckNorrisQuoteFetcher();

    if (!param){
        const quote = await fetcher.getRandomQuote();
        return  messages.randomQuote + quote;
    } 

    const inputValidity = checkInputValidity(param);

    if (!inputValidity.validity){
        throw new Error(inputValidity.message);
    }

    const index = inputValidity.message;

    const quote = await fetcher.getQuoteByIndex(index);

    if (!quote){
        throw new Error(messages.indexError(index));  
    }
    return quote;
}


module.exports = {
    getChuckNorrisQuote: getChuckNorrisQuote
}