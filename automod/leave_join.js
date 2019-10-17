exports.run = (bot, Discord, ms, moment) =>
{  
//Member Leaves
bot.on('guildMemberRemove', member =>
{
    let autolog = member.guild.channels.find(ch => ch.name === 'auto-log');
    if (!autolog)
    {
      return;
    }

    let embed = new Discord.RichEmbed()
    .setAuthor(member.user.username,member.user.avatarURL)
    .setTitle("**Left!**")
    .setColor("#e253ed")
    .setTimestamp();
  
    autolog.send(embed);

    if (member.guild.id == '272954876021964800')
    {
      let welcome = member.guild.channels.find(ch => ch.id === '436330640217210881');

      // let ch = bot.guilds.find('id', '272954876021964800').channels.find(ch => ch.id === '392901042003771404');
      // ch.setName(`Server Members: ${ch.guild.memberCount}`)
  
      let embed = new Discord.RichEmbed()
      .setAuthor(member.user.username,member.user.avatarURL)
      .setTitle("**Left!**")
      .setColor("#e253ed")
      .setTimestamp();
    
      welcome.send(embed);  
    }
});

//Member Join
bot.on('guildMemberAdd', (member) =>
{
  if(member.id == bot.id)
  {
    return;
  }

  let autolog = member.guild.channels.find(ch => ch.name === 'auto-log');
  if (!autolog)
  {
    return;
  }

   let embed = new Discord.RichEmbed()
   .setAuthor(member.user.username,member.user.avatarURL)
   .setTitle("**Joined!**")
   .setColor("#c92a57")
   .setTimestamp();
 
   autolog.send(embed);
});
}