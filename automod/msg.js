exports.run = (bot, Discord, ms, moment) =>
{  
//Message edits
bot.on('messageUpdate',(oldMsg,newMsg) =>
{
  if (!newMsg.content || !oldMsg.content)
  {
    return;
  }
  let autolog = oldMsg.guild.channels.find(ch => ch.name === 'auto-log');
  if (!autolog)
  {
    return;
  }
  

  let embed = new Discord.RichEmbed()
  .setAuthor(oldMsg.author.username,oldMsg.author.avatarURL)
  .setTitle("Message **Edited!**")
  .setDescription(`Message Edited in: ${oldMsg.guild.channels.find(ch => ch.id === oldMsg.channel.id)}`)
  .addField("Old Message:", oldMsg)
  .addField("New Message:", newMsg)
  .setColor("#42eef4")
  .setTimestamp();

  autolog.send(embed);
});

//Message deleted
bot.on('messageDelete', (msg) =>
{
  let autolog = msg.guild.channels.find(ch => ch.name === 'auto-log');
  if (!autolog)
  {
    return;
  }
  if (!msg.content)
  {
    return;
  }

  let embed = new Discord.RichEmbed()
  .setAuthor(msg.author.username,msg.author.avatarURL)
  .setTitle("Message __**Deleted!**__")
  .setDescription(`Message deleted in: ${msg.guild.channels.find(ch => ch.id === msg.channel.id)}`)
  .addField("Deleted Message:", `${msg.content}`)
  .setColor("#ed5264")
  .setTimestamp();

  autolog.send(embed);
});
}