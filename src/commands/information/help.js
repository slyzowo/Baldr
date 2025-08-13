module.exports = {
  name: 'help',
  description: 'provides some information about the bot',
  devOnly: Boolean,
  testOnly: Boolean,

  callback: (client, interaction) => {
    interaction.reply(``);
  }
}