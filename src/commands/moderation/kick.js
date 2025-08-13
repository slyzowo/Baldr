module.exports = {
  name: 'kick',
  description: 'kicks someone',
  devOnly: Boolean,
  testOnly: Boolean,

  callback: (client, interaction) => {
    interaction.reply(``);
  }
}