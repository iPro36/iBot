exports.run = (bot, msg, args, command, Discord, ms, moment) =>
{
  //Gives user the link to rn's website
  if (command == 'web')
  {
    //Checks to see if the message was sent in general
    if (msg.channel.id == "272954876021964800" || msg.channel.id == "464061186993029150")
    {
      let channel = msg.guild.channels.get('284929847162306560');
      msg.delete(1);
      return msg.author.send(`Please use **#${channel.name}** for any \`commands\``);
    }

    let embed = new Discord.RichEmbed()
    .setTitle("👉Click Here👈")
    .setURL("http://bit.ly/Team_RN")
    .setFooter(msg.author.username,msg.author.avatarURL)
    .setColor("#A80000")
    .setTimestamp();

    msg.channel.send(embed);
  }
}