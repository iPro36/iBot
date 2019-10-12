exports.run = (bot, msg, args, command, Discord, ms, moment, prefix) =>
{
  //Help Command
  if (command == 'help')
  {

    setTimeout(function()
    {
      msg.channel.send(
        `-\n`+
        `• **${msg.guild.name} Server Commands: **\n`+
        `> \`${prefix}rnhelp:\` Gives you RN's Server Commands`);
    },10);
  }

  //RN Help command
  if (command == 'rnhelp')
  {
    //Checks to see if the message was sent in general
    if (msg.channel.id == "272954876021964800" || msg.channel.id == "464061186993029150")
    {
      let channel = msg.guild.channels.get('284929847162306560');
      msg.delete(1);
      return msg.author.send(`Please use **#${channel.name}** for any \`rn commands info\``);
    }

    msg.channel.send(
      `• **Info Commands: **\n`+
      `> \`${prefix}web:\` Gives you the RN's website\n\n`+

      /*`• **Civil War Commands: **\n`+
      `> \`${prefix}join\` To get in the Rn's Civil War\n`+
      `> \`${prefix}leave\` To get out of RN's Civil War\n`+
      `> \`${prefix}count\` To see the ammount of Civil Warriors\n\n`+*/

      `• **COD Mobile Commands: **\n`+
      `> \`${prefix}codjoin\` To join the world of COD Mobile\n`+
      `> \`${prefix}codleave\` To leave\n\n`+

      `• **Other Commands: **\n`+
      `> \`${prefix}rnhelp:\` This list`);
  }

}
