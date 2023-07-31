const { Message, PermissionFlagsBits } = require("discord.js");
const LRMN = require("../../../handlers/Client");
const { Queue } = require("distube");

module.exports = {
  name: "s/autoplay",
  aliases: ["ap", "atp"],
  description: `toggle autoplay in your server`,
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
    let autoplay = queue.toggleAutoplay();

    client.embed(
      message,
      `${client.config.emoji.SUCCESS} AutoPlay: \`${autoplay ? "On" : "Off"}\``
    );
  },
};
