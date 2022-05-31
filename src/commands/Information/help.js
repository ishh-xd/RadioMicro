var {MessageEmbed} = require("discord.js")
 module.exports = {
  name: 'help',
  category: 'Information',
  aliases: ['h'],
  description: 'Help command.',
  args: false,
  usage: '',
  userPrams: [],
  botPrams: ['EMBED_LINKS'],
  owner: false,
  execute: async (message, args, client, prefix) => {
    const emd = new MessageEmbed()
	.setColor(client.embedColor)
	.setTitle(`${client.user.username} HELP PANEL`, client.user.displayAvatarURL())
.setThumbnail(client.user.displayAvatarURL())
		.addField('Information Commands', `\`${client.commands.filter(x => x.category=='Information').map(x => x.name).join(", ")}\``)
.addField('Radio Commands', `\`${client.commands.filter(x => x.category=='Music').map(x => x.name).join(", ")}\``)
      
	.addField('Misc Commands', `\`${client.commands.filter(x => x.category=='Settings').map(x => x.name).join(", ")}\``)
.setTimestamp()
message.reply({embeds:[emd]})
    
  }}
