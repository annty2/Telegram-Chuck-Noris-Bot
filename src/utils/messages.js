//Here is where we get the messages to output
messages = {
    indexError: (index) => `Index ${index} out of bounds`,
    nanInput: (input) =>`"${input}" is not a number!`,
    negativeNumber:`Can't work with negative numbers!`,
    paramsError:"Invalid number of parameters",
    errorMessage: (e) =>`Oops!: ${e}`,
    randomQuote:"Here's a random quote: ",
    botLoading:"Loading..."

};

module.exports = {
    messages
}