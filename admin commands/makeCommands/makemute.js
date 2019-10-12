module.exports.run = async (bot, msg, args, command, Discord, ms, moment) => 
{
  if (command == 'makemute')
  {
    if(msg.guild.roles.find(`name`, "iMute"))
    {
      return msg.channel.send('It seems like there is already an iMute role that exists\n`If you would like to make a new one, please delete the old one.`')
    } 
    else 
    {
      //Mute
      let mute = require(`./mute.js`);
      mute.run(bot, msg, args, command, Discord, ms, moment, prefix);
      return msg.channel.send("**iMute** role has been created!")
    }
  }
}
