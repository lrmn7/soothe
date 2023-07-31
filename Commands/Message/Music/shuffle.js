const { Message, PermissionFlagsBits } = require("discord.js");
const LRMN = require("../../../handlers/Client");
const { Queue } = require("distube");

module.exports = {
  name: "s/shuffle",
  aliases: ["sfl"],
  description: `shuffle current queue`,
  userPermissions: PermissionFlagsBits.Connect,
  botPermissions: PermissionFlagsBits.Connect,
  category: "Music",
  cooldown: 5,
  inVoiceChannel: true,
  inSameVoiceChannel: true,
  Player: true,
  djOnly: true,

  /**
   *
   * @param {LRMN} client
   * @param {Message} message
   * @param {String[]} args
   * @param {String} prefix
   * @param {Queue} queue
   */
  run: async (client, message, args, prefix, queue) => {
    // Code
    client.shuffleData.set(`shuffle-${queue.id}`, queue.songs.slice(1));
    queue.shuffle();
    client.embed(
      message,
      `${client.config.emoji.SUCCESS} Suffled ${queue.songs.length} Songs !!`
    );
  },
};
