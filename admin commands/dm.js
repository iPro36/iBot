exports.run = (bot, msg, args, command, Discord, ms, moment) =>
{
  //Dms everyone on the server
  if (command == 'dm')
  {
    var count = 1;
    msg.author.send(`List of people Direct Messaged:`);

    msg.guild.members.forEach(function(guildMember, guildMemberId)
    {
        if (!guildMember.user.bot || !guildMember.user.id == bot.id || !guildMember.user.id == msg.author.id)
        {
          guildMember.user.send(`This message was sent from \`${msg.guild.name} Server\`\n${args.join(" ")}`);
          
          msg.author.send(`${count}: ${guildMember.user.tag}`);
          count++;
        }
    })
    msg.channel.send(`${count} people have been DM'ed!`);
  }

}