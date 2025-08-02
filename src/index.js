const { Client, IntentsBitField } = require('discord.js'); // from the discord.js library we're using the Client class and the IntentsBitField class
require('dotenv').config();

const client = new Client({
  intents : [
    IntentsBitField.Flags.Guilds,         // allows for server moderation
    IntentsBitField.Flags.GuildMembers,   // allows you to see who is inside the server
    IntentsBitField.Flags.GuildMessages,  // allows you to see what has messages have been sent
    IntentsBitField.Flags.MessageContent, // allows you to see the message contents
  ]
});

client.on('ready', (c) => {
  console.log(`${c.user.tag} is online!`);
});

client.on("interactionCreate", (interaction) => {
  if(!interaction.isChatInputCommand()) return;
  
  if(interaction.isChatInputCommand === 'ping'){
    interaction.reply('pong');
  };
});

client.login(process.env.TOKEN);