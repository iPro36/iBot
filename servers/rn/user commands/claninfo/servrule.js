exports.run = (bot, msg, args, command, Discord, ms, moment) =>
{
  //Gives user RN Rules
  if (command == 'rules')
  {
    //Checks to see if the message was sent in general
    if (msg.channel.id == "272954876021964800" || msg.channel.id == "464061186993029150")
    {
      return msg.channel.send(`Please use ${msg.guild.channels.get('284929847162306560')} for any \`commands\``);
    }    

    let embed = new Discord.RichEmbed()
    .setTitle("**Rules to be followed in __RN SERVER__:**")
    .setDescription(`Hello ${msg.author.username}, below is the list of rules to be followed at all time in this server.`)
    .addField("**Server Rules:**", 
    `**[1]**- **Moderators**, **Supervisors**, **Administrators** must be listened to **at all times**.\n\n`+
    `**[2]**- Any **Drama** in the chat will result in a **mute** for **1 day**.\n\n`+
    `**[3]**- Any **Annoying Noise** from a player will result in a __**Mute in Voice**__.\n\n`+
    `**[4]**- **No Spamming** in ${msg.guild.channels.find('name', '💬general💬')} at all times.\n\n`+
    `**[5]**- **No Advertising** in ${msg.guild.channels.find('name', '💬general💬')}.\n\n`+
    `**[6]**- **No NSFW** Material in any channel.\n\n`+
    `**[7]**- Bots __**Must**__ be used in ${msg.guild.channels.find('name', 'anything_bot_related')}.\n\n`+
    `**[8]**- Keep the language age appropriate!\n\n`+
    `**[9]**- No **Asking for/Giving away** personal info.\n\n`+
    `**[10]**- __**No asking for promotion.**__\n`)
    .setColor('#6935e0');

    msg.channel.send(embed);
  }
}