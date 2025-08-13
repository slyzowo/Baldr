module.exports = {
  name: 'whisper-echo',
  description: 'whisper echos your message',
  devOnly: Boolean,
  testOnly: Boolean,

  callback: (client, interaction) => {
    interaction.reply(``);
  }
}