const {chuck} = require("../handlers/chuck");
const { messages } = require("../utils/messages");


describe('chuck: failed inputs', () => {

    test('invalid input', async () => {
        const mock = ["prince"];

        let msg;
        try{
            msg = await chuck(mock)
        } catch (e){
            msg = e.message
        }

        expect(msg).toBe(messages.nanInput);
    });

    test('negative number', async () => {
        const mock = ["-1"];

        let msg;
        try{
            msg = await chuck(mock)
        } catch (e){
            msg = e.message
        }

        expect(msg).toBe(messages.negativeNumber)
    });

    test('index error', async () => {
        const mock = ["368"];

        let msg;
        try{
            msg = await chuck(mock)
        } catch (e){
            msg = e.message
        }

        expect(msg).toBe(messages.indexError(mock))
    });

    test('index error', async () => {
        const mock = ["34","56"];

        let msg;
        try{
            msg = await chuck(mock)
        } catch (e){
            msg = e.message
        }

        expect(msg).toBe(messages.paramsError)
    });

});

describe('chuck: valid inputs', () => {

    test('expected input', async () => {
        const mock = ["78"];

        const msg = await chuck(mock);

        expect(msg).toBe("When Chuck Norris was born, the only person who cried was the doctor. Never slap Chuck Norris.")
    });

    test('empty input', async () => {
        const mock = [""];

        let msg;
        try{
            msg = await chuck(mock)
        } catch (e){
            msg = e.message
            console.error(e)
        }

        expect(msg).toBeTruthy();
    });
});