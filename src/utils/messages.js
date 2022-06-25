//Here is where we get the messages to output
messages = {
    indexError: (index) => `Index ${index} out of bounds`,
    //emptyInput:`No input`,
    nanInput: `Input is not a number!`,
    negativeNumber:`Can't work with negative numbers!`,
    paramsError:"Invalid number of parameters",
    errorMessage: (e) =>`Error: ${e}`,
    randomQuote:"here's a random quote:"

};

module.exports = {
    messages
}