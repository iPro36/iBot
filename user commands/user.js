exports.run = (bot, msg, args, command, Discord, ms, moment, xp, fs, prefix) =>
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

    //Games
    let gamefile = require(`./games/gamefile`);
    gamefile.run(bot, msg, args, command, Discord, ms, moment, xp, fs, prefix);

    //Info
    let infofiles = require(`./info/infofiles`);
    infofiles.run(bot, msg, args, command, Discord, ms, moment, xp, fs, prefix);

    //Rank Info
    let rankinfofiles = require(`./rank info/rankinfofiles`);
    rankinfofiles.run(bot, msg, args, command, Discord, ms, moment, xp, fs, prefix);
    
}