module.exports = {
  name: 'echo',
  description: 'echos your message',
  devOnly: Boolean,
  testOnly: Boolean,

  callback: (client, interaction) => {
    interaction.reply(``);
  }
}