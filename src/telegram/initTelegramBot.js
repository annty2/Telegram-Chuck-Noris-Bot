const { Telegraf } = require('telegraf');
const {parseCommandParams} = require("../utils/parseCommandParams");
const {chuck} = require("../handlers/chuck");

function initTelegramBot(){
    const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN, {
        webhookReply: true
    });

    bot.start(ctx => ctx.reply("Welcome!"))

    bot.command('help', ctx => ctx.reply('Try send a sticker!'));

    bot.command("get_quote", ctx => {
        const params = parseCommandParams("/get_quote", ctx.message.text);

        chuck(params).then(quote => ctx.reply(quote)).catch(e => ctx.reply(String(e)));
    });

    return bot;
}

module.exports = {
    initTelegramBot
}