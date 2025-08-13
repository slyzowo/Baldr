## Baldr
An open source discord app made as an alternative to the bigger discord apps

If you encounter a problem please go to our [Discord server](https://discord.gg/CdEaxbKyVN)

## Commands
- /echo                 `text goes here!`
- /whisper-echo         `text goes here!`
- /add                  `first-num`, `second-num`
- /divide               `first-num`, `second-num`
- /exponent             `first-num`, `second-num`
- /multiply             `first-num`, `second-num`
- /subtract             `first-num`, `second-num`

## Future Commands

### Information
- /help

### Fun
- /coinflip
- /diceroll             `min`, `max`
  - /diceroll d4
  - /diceroll d6
  - /diceroll d8
  - /diceroll d10
  - /diceroll d12
  - /diceroll d20
- /rock-paper-scissors
- /react                `message-id`, `emoji`
- /poll                 `question`, `option-1`, `option-2`...

### Administration

- /ban              `@user-id`, `reason`
- /kick             `@user-id`, `reason`
- /timeout          `@user-id`, `duration`

- /category-create  `category-name`
- /category-rename  `category-id`
- /category-delete  `category-id`

- /channel-create   `channel-name`
- /channel-rename   `channel-id`
- /channel-delete   `channel-id`

- /thread-create    `message-id`, `thread-name`
- /thread-rename    `thread-id`
- /thread-delete    `thread-id`

- /role-create         `name`
- /role-rename         `role-id`
- /role-delete         `role-id`

- /message-delete      `message-id`
- /message-purge-all   `channel-id`
- /self-purge-all      `user-id`

- /join-role         `#role-id`
- /log-event         `#channel-id`, `Enable | Disable`
- /rename-user       `user-id`, `new-nickname`

## Installation

If you would like to self host an instance of this, follow these instructions.

### 1. Dependancies
- [Dotenv](https://www.npmjs.com/package/dotenv)

Install node.js from [Node.js](https://nodejs.org/)
Install discord.js from [Discord.js](https://discord.js.org/) or by using :

`npm install discord.js` | `npm i discord.js`

Install dotenv from [Dotenv](https://www.npmjs.com/package/dotenv) or by using :

`npm install dotenv` | `npm i dotenv`

### 2. Creating sensitive files

Create a `.env` file and add the following arguments 
```
TOKEN = "bot-token"
GUILD_ID = "guild-id"
BOT_ID = "bot-id"
```

Create a `.json` file called "config" and add
```
{
  "testServer": "testing-server-id",
  "clientID": "bot-id",
  "devs": ["developer-id"]
}
```
### 3. Starting the bot

to run the bot use `node src/index.js`