const { MessageEmbed } = require('discord.js');

module.exports = {

  name: 'skip',

  aliases: ['next'],

  category: 'Music',

  description: 'To skip the current playing song.',

  args: false,

  usage: '',

  userPrams: [],

  botPrams: ['EMBED_LINKS'],

  owner: false,

  player: true,

  inVoiceChannel: true,

  sameVoiceChannel: true,

  execute: async (message, args, client, prefix) => {

    const player = client.manager.players.get(message.guild.id);

    if (!player.current) {

      let thing = new MessageEmbed().setColor('RED').setDescription('\`❌\` | There is no radio playing.');

      return message.reply({ embeds: [thing] });

    }

    if (player.queue.length == 0) {

      let noskip = new MessageEmbed()

        .setColor(client.embedColor)

        .setDescription(`\`❌\` | No more radio station left in the queue to skip.`);

      return message.reply({ embeds: [noskip] });

    }

    await player.player.stopTrack();

    const emojiskip = client.emoji.skip;

    let thing = new MessageEmbed()

      .setDescription(`\`${emojiskip}\` | **Skipped!**\n[24/7 Radio](${player.current.uri})`)

      .setColor(client.embedColor);

    return message.reply({ embeds: [thing] }).then((msg) => {

      setTimeout(() => {

        msg.delete();

      }, 5000);

    });

  },

};
