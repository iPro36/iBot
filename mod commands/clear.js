exports.run = (bot, msg, args, command, Discord, ms, moment, logChannel, prefix) =>
{
      //CLear messages
  if (command == 'clear')
  {
    //Checks to see if person has anyone of the roles
    if (!msg.member.roles.find("name", "Moderator") && !msg.member.permissions.has('KICK_MEMBERS' || 'BAN_MEMBERS' || 'ADMINISTRATOR' || 'MANAGE_ROLES' || 'MANAGE_MESSAGES'))
    {
      msg.delete(1);
      return msg.author.send(`${msg.author} it looks like you can't \`Clear\` messages.`);
    }

    //Does not delete the messages in Keep it going
    if (msg.channel.id == '311644464730865664' && !msg.member.roles.find("name", "Leader"))
    {
      msg.delete(1);
      return msg.author.send(`You can't delete messages in **#Keep-it-Going** >:(`)
    }

    //Does not delete the messages in Keep it going
    if (msg.channel.id == '335892581189681153' && !msg.member.roles.find("name", "Leader"))
    {
      msg.delete(1);
      return msg.author.send(`You can't delete messages in **#Count-to-100000** >:(`)
    }


    msg.delete(1);
    setTimeout(function()
    { 
      //See if a number was entered
      let clear = args[0];
      if(!clear)
      {
        return msg.reply("Please enter the `number of messages` you want me to `clear`.");
      }
      if (clear > 100)
      {
        return msg.reply("You cannot clear more then 100 messages!");
      }
  
      //clears the ammount of messages
      msg.channel.bulkDelete((clear));
  
      msg.channel.send(`\`${clear}\` messages have been \`cleared\` on the request of ${msg.author}.`);
      msg.channel.bulkDelete(('1'));
    }, ms('0.5s'));
  }

}