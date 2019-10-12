exports.run = (bot, msg, args, command, Discord, ms, moment, prefix) =>
{
  //Help Command
  if (command == 'help')
  {
    const help = new Discord.RichEmbed()
    .setColor('#0099ff')
    .setAuthor('iCommands', bot.user.avatarURL)
    .addField(`• **Info Commands: ℹ️**`,
    `> \`${prefix}info [user]:\` Shows you mentioned user's information or your info\n`+
    `> \`${prefix}serverinfo:\` Shows this server\'s info\n`+
    `> \`${prefix}roles:\` Shows a list of roles in this server\n\n`, true)

    .addField(`• **Game Commands: 🎮**`,
    `> \`${prefix}rps [rock/paper/scissor]:\` Play rock paper scissor with bot\n`+
    `> \`${prefix}flip [heads/tails]:\` To flip a coin\n\n`, true)

    .addField(`• **Help Commands: 💁**`,
    `> \`${prefix}modhelp:\` Shows a list of mod commands\n`+
    `> \`${prefix}adminhelp:\` Shows a list of admin commands\n`+
    `> \`${prefix}help:\` This list`, true)

    .setTimestamp()
    .setFooter(`Requested By: ${msg.author.username}`, msg.author.avatarURL);
    return msg.channel.send(help);
  }
    
  /*********************Games***************************/
  //Rps
  let rps = require(`../user commands/games/rps`);
  rps.run(bot, msg, args, command, Discord, ms, moment);

  //Toss
  let toss = require(`../user commands/games/toss`);
  toss.run(bot, msg, args, command, Discord, ms, moment)
  
  //Chase the Rabbit
  let rabbit = require(`../user commands/games/rabbit`);
  rabbit.run(bot, msg, args, command, Discord, ms, moment)
  

  /*********************Info***************************/
  //User Info
  let info = require(`../user commands/info/userinfo`);
  info.run(bot, msg, args, command, Discord, ms, moment);

  //Server Info
  let servinfo = require(`../user commands/info/serverinfo`);
  servinfo.run(bot, msg, args, command, Discord, ms, moment);

  //Roles Info
  let roles = require(`../user commands/info/roles`);
  roles.run(bot, msg, args, command, Discord, ms, moment);
}