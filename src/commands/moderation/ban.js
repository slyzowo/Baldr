module.exports = {
  name: 'ban',
  description: 'bans someone',
  devOnly: Boolean,
  testOnly: Boolean,

  callback: (client, interaction) => {
    interaction.reply(``);
  }
}