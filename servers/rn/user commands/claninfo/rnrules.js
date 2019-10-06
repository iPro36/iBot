exports.run = (bot, msg, args, command, Discord, ms, moment) =>
{
  //Gives user RN Rules
  if (command == 'rnrules')
  {
    //Checks to see if the message was sent in general
    if (msg.channel.id == "620079229240999944" || msg.channel.id == "464061186993029150")
    {
      return msg.channel.send(`Please use ${msg.guild.channels.get('620079263592349706')} for any \`commands\``);
    }
    if(!msg.member.roles.find("id", "620071693984989195"))
    {
      return msg.author.send("Sorry, but you have to be an RN Member to use that command")
    }


    let embed = new Discord.RichEmbed()
    .setTitle("**Rules to be followed in __RN SERVER__:**")
    .setDescription(`Hello ${msg.author.username}, a list of rules to be followed by rn members.`)
    .addField("**Rn Rules:**", 
    `**[1]**- **Takeout** яη from your name if you are planning on killing other яη members.\n`+
    "`Punishment: 1st Warn > 2nd Warn > 3rd Warn > Demotion From Clan`\n\n"+

    `**[2]**- Yo cannot **Copy** another member's name and fake.\n`+
    "`Punishment: 1st Warn > 2nd Warn  > Demotion From Clan`\n\n"+

    `**[3]**- If you are in the **Same Voice Chat** as the other яη members and you want to kill them, make sure they are aware of it.\n`+
    "`Punishment: 1st Warn > 2nd Warn > 3rd Warn > Demotion From Clan`\n\n"+

    `**[4]**- Warnings by **Staff Members** in game have the same importance as the warnings in the Server.\n\n`+

    `**[5]**- Don't expect the Staff members to **always** team with you. They will team if  they have яη in the name.\n`+
    "`If they kill you with яη their name please report them to someone with a higher role than them.`\n\n"+

    `**[6]**- No asking for __**Promotion**__.\n`+
    "`You will be promoted once you've proven your self to the staff`")

    .setColor('#ff3399');

    msg.channel.send(embed);
  }
}