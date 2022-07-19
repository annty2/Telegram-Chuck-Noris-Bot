# Telegram Chuck Norris Bot
A telegram bot that scrapes [101 Chuck Norris Jokes]("https://parade.com/968666/parade/chuck-norris-jokes/") and sends back a quote, you have two options:
1. send `/get_quote` and get a random Chuck Norris quote
2. send `/get_quote {number}` for a specific quote

### Extra commands:
1. `/help` or `/start` to get some basic instructions

## Running the bot
Go to [Chuck Norris Bot](http://t.me/getChuckNorrisJokeBot) and start a conversation, the bot will guide you trough the options.<br>
If the link doesn't work, search for **getCheckNorrisJokeBot** in Telegram search bar to find the bot.

## Running Locally
### Install dependencies
```shell
npm install -g yarn && yarn install
```
 
### Running test
```shell
yarn run test
```

## Deploy
1. Configure [AWS CLI]("https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html")
2. Create a [New AWS Lambda Function]("https://docs.aws.amazon.com/cli/latest/reference/lambda/create-function.html")
3. Add a new file at the `root` folder named `.env`
```shell
TELEGRAM_BOT_TOKEN={TELEGRAM_BOT_TOKEN}
```
4. Edit `deploy.bat`
```shell
aws lambda update-function-code --function-name {FUNCTION_NAME} --zip-file "fileb://index.zip" --output table
```

5. Run 
```shell
yarn run deploy
```

6. **Have fun!**
And never forget: ***Chuck Norris can divide by zero***
