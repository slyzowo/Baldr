// imports Client and Intents from Discord.js
const {Client, IntentsBitField, EmbedBuilder} = require("discord.js");
const eventhandlers = require("./handlers/eventHandler");
// security 
require('dotenv').config();

const client = new Client({
  intents: [                    // Intents are Permissions
    IntentsBitField.Flags.Guilds,            // see servers
    IntentsBitField.Flags.GuildMembers,      // see server members
    IntentsBitField.Flags.GuildMessages,     // read messages i think?
    IntentsBitField.Flags.MessageContent,    // read messages
]});

eventHandler(client);

client.login(process.env.TOKEN);