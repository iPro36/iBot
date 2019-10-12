exports.run = (bot, msg, args, command, Discord, ms, moment, prefix) =>
{
if(!msg)
{
  return;
}
//Checks to see if the person has moderator role
  if(!msg.member.hasPermission("ADMINISTRATOR")) return;

  //Gives the list of admin commands
  if (command == 'adminhelp')
  {
      const modhelp = new Discord.RichEmbed()
      .setColor('#9e5ef7')
      .setAuthor('iCommands', bot.user.avatarURL)
      .addField(`• **Make Commands: **`,
      `> \`${prefix}makemute:\` To make a mute role\n`+
      `> \`${prefix}makeilog:\` Creates a channel where, all commands used by mods are logged\n`+
      `> \`${prefix}makeautolog:\` Creates a channel which logs every action on discord\n\n`, true)

      .addField(`• **Other Commands: **`,
      `> \`${prefix}dm [message]:\` Dm everyone on the server, with the given message\n\n`, true)
  
      .addField(`• **Help Commands: **`,
      `> \`${prefix}adminhelp:\` This list`, true)
  
      .setTimestamp()
      .setFooter(`Staff: ${msg.author.username}`, msg.author.avatarURL);
      return msg.channel.send(modhelp);
  }

  //Make
  let make = require(`../admin commands/makeCommands/make.js`);
  make.run(bot, msg, args, command, Discord, ms, moment, prefix);

  //Others
  let other = require(`../admin commands/other/other.js`);
  other.run(bot, msg, args, command, Discord, ms, moment, prefix);
}