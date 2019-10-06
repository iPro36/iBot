exports.run = (bot, Discord, ms, moment) =>
{  
//Member Banned
bot.on('guildBanAdd', (server,member) =>
{
  let autolog = member.guild.channels.find('name','auto-log');
  if (!autolog)
  {
    return;
  }

  let embed = new Discord.RichEmbed()
  .setAuthor(member.user.username,member.user.avatarURL)
  .setTitle("**Banned!**")
  .setDescription(`${member.username} has been banned`)
  .setColor("#e253ed")
  .setTimestamp();

  autolog.send(embed);
});

//Member Un-Banned
bot.on('guildBanRemove', (server,member) =>
{
  let autolog = member.guild.channels.find('name','auto-log');
  if (!autolog)
  {
    return;
  }

  let embed = new Discord.RichEmbed()
  .setAuthor(member.user.username,member.user.avatarURL)
  .setTitle("**Un-Banned!**")
  .setDescription(`${member.username} has been unbanned`)
  .setColor("#e253ed")
  .setTimestamp();

  autolog.send(embed);
});
}