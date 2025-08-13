module.exports = {
  name: 'ping',
  description: 'checks the ping of the bot',
  devOnly: Boolean,
  testOnly: Boolean,

  callback: (client, interaction) => {
    interaction.reply(`pong! ${client.ws.ping}ms`);
  }
}