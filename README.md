## Baldr
An open source discord app made as an alternative to the bigger discord apps

If you encounter a problem please go to our [Discord server](https://discord.gg/CdEaxbKyVN)

## Commands

### Economy

### Information
- 🟥 /help
- 🟥 /ping

### Fun
- 🟥 /coinflip
- 🟥 /diceroll             `min`, `max`
- 🟥 /d4
- 🟥 /d6
- 🟥 /d8
- 🟥 /d10
- 🟥 /d12
- 🟥 /d20
- 🟥 /echo                 `text goes here!`
- 🟥 /whisper-echo         `text goes here!`
- 🟥 /rock-paper-scissors
- 🟥 /react                `message-id`, `emoji`
- 🟥 /poll                 `question`, `option-1`, `option-2`...


### Math
- 🟥 /add                  `first-num`, `second-num`
- 🟥 /divide               `first-num`, `second-num`
- 🟥 /exponent             `first-num`, `second-num`
- 🟥 /multiply             `first-num`, `second-num`
- 🟥 /subtract             `first-num`, `second-num`

### Moderation
- 🟥 /ban                 `@user-id`, `reason`
- 🟥 /unban               `@user-id`
- 🟥 /kick                `@user-id`, `reason`
- 🟥 /timeout             `@user-id`, `duration`
- 🟥 /untimeout           `@user-id`
- 🟥 /category-create     `category-name`
- 🟥 /category-rename     `category-id`
- 🟥 /category-delete     `category-id`
- 🟥 /channel-create      `channel-name`
- 🟥 /channel-rename      `channel-id`
- 🟥 /channel-delete      `channel-id`
- 🟥 /thread-create       `message-id`, `thread-name`
- 🟥 /thread-rename       `thread-id`
- 🟥 /thread-delete       `thread-id`
- 🟥 /role-create         `name`
- 🟥 /role-rename         `role-id`
- 🟥 /role-delete         `role-id`
- 🟥 /message-delete      `message-id`
- 🟥 /message-purge-all   `channel-id`
- 🟥 /self-purge-all      `user-id`
- 🟥 /join-role           `#role-id`
- 🟥 /log-event           `#channel-id`, `Enable | Disable`
- 🟥 /rename-user         `user-id`, `new-nickname`

## Installation for Self-Hosting

If you would like to self host an instance of this, follow these instructions.

### 1. Dependancies

Install node.js from [Node.js](https://nodejs.org/)

Install discord.js from [Discord.js](https://discord.js.org/) or by using :

`npm install discord.js` | `npm i discord.js`

Install dotenv from [Dotenv](https://www.npmjs.com/package/dotenv) or by using :

`npm install dotenv` | `npm i dotenv`

### 2. Creating Sensitive Files

Create a `.env` file and add the following arguments 
```
TOKEN = "bot-token"
GUILD_ID = "guild-id"
BOT_ID = "bot-id"
```

Create a `.json` file called "config" and add this information
```
{
  "testServer": "testing-server-id",
  "clientID": "bot-id",
  "devs": ["developer-id"]
}
```
### 3. Starting the bot
> [!WARNING]
> This is temporary as it's not user friendly, and I wanna make a cool dashboard :3

To run the bot use `node src/index.js` to run
