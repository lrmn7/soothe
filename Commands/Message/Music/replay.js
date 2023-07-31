const { Message, PermissionFlagsBits } = require("discord.js");
const LRMN = require("../../../handlers/Client");
const { Queue } = require("distube");

module.exports = {
  name: "s/replay",
  aliases: ["rp", "rplay"],
  description: `replay current song of queue`,
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
    queue.seek(0);
    client.embed(message, `${client.config.emoji.SUCCESS} Replaying Track !!`);
  },
};
