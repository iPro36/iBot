module.exports.run = async (bot, msg, args, command, Discord, ms, moment) => 
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
}
