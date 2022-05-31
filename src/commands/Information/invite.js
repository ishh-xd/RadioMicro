const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
  name: 'invite',
  category: 'Information',
  aliases: ['addme'],
  description: 'invite WaveMusic',
  args: false,
  usage: '',
  userPrams: [],
  botPrams: ['EMBED_LINKS'],
  owner: false,
  execute: async (message, args, client, prefix) => {
    var invite = client.config.links.invite;
    const row = new MessageActionRow().addComponents(
      new MessageButton().setLabel('Invite').setStyle('LINK').setURL(invite),
    );
    const mainPage = new MessageEmbed()
      .setDescription(`\`➕\` | Click [here](${invite}) to invite me or click the button below.`)
      .setColor(client.embedColor);
    message.reply({ embeds: [mainPage], components: [row] });
  },
};
