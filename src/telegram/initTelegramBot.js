const { Telegraf } = require('telegraf');

const {parseCommandParams} = require("../utils/parseCommandParams");
const {getChuckNorrisQuote} = require("../commands/getChuckNorrisQuote");
const { messages } = require("../utils/messages");
const { getHelp } = require('../commands/getHelp');

async function doHelp (ctx){
    const text = await getHelp();
    ctx.replyWithHTML(text);
}

function initTelegramBot(){
    const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN, {
        webhookReply: true
    });

    bot.start(ctx => {
        doHelp(ctx).catch(e => ctx.reply(e.message));
    });

    bot.help(ctx => {
        doHelp(ctx).catch(e => ctx.reply(e.message));
    });

    bot.command("get_quote", ctx => {
        (async() => {
           const loader = await ctx.reply(messages.botLoading);

           const params = parseCommandParams("/get_quote", ctx.message.text);

           try{
                const joke = await getChuckNorrisQuote(params);

                await ctx.deleteMessage(loader.message_id);

                await ctx.reply(joke);
           } catch(e){
                await ctx.deleteMessage(loader.message_id);

                await ctx.reply(e.message);
           }
        })();
    });

    return bot;
}

module.exports = {
    initTelegramBot
}