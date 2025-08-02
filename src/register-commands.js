const { REST, Routes } = require('discord.js');
require('dotenv').config();

const commands = [
  
  {
    name: 'ping',
    description: 'replies with pong',
  },
];

const rest = new REST({ version: '10'}).setToken(process.env.TOKEN);

(async () => {
  try {

    console.log("🟨 Registering Your Commands...");

    await rest.put(
      Routes.applicationGuildCommands(
        process.env.BOT_ID,
        process.env.GUILD_ID
      ),

      { body: commands }
    );

    console.log("🟩 Registered Your Commands!");
  }

  catch (error) {
    console.log(`🟥 there was an error : $(error)`);
  }
})();