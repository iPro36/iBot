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
      try{
        muterole = await msg.guild.createRole
        ({
          name: "iMute",
          color: "#000000",
          permissions:[]
        })
        msg.guild.channels.forEach(async (channel, id) => 
        {
          await channel.overwritePermissions(muterole, 
            {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      }catch(e){
        console.log(e.stack);
      }
      return msg.channel.send("**iMute** role has been created!")
    }
  }
}
