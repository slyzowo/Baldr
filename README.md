## Baldr
An open source discord app

## Dependancies
- [Node.js](https://nodejs.org/)
- [Discord.js](https://discord.js.org/)
- [Dotenv](https://www.npmjs.com/package/dotenv)

## Installation
Install node.js from nodejs.org
Install discord.js from discordjs.org or by using :

`npm install discord.js`

Install dotenv from npm or by using :

`npm install dotenv`

Create a .env file and add the following arguments 
```
TOKEN = "bot-token"
GUILD_ID = "guild-id"
BOT_ID = "bot-id"
```

to run the bot use `node src/index.js`

## Commands
- /coinflip
- /reply

- /add                  `first-num`, `second-num`
- /divide               `first-num`, `second-num`
- /exponent             `first-num`, `second-num`
- /multiply             `first-num`, `second-num`
- /subtract             `first-num`, `second-num`

## Future Commands

### Information
- /help

### Fun
- /diceroll             `min`, `max`
- /rock-paper-scissors
- /echo                 `whatever person inputs`
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

- /autorole         `#role-id`
- /log              `#channel-id`, `Enable | Disable`
- /rename-user      `user-id`, `new-nickname`