exports.run = (bot, msg, args, command, Discord, ms, moment, xp, fs, user, prefix) =>
{

    //Toss the coin
    if (command == 'flip')
    {
    //Checks to see if the message was sent in general
    if (msg.channel.id == "272954876021964800" || msg.channel.id == "464061186993029150")
    {
      let channel = msg.guild.channels.get('284929847162306560');
      msg.delete(1);
      return msg.author.send(`Please use **#${channel.name}** for any \`commands\``);
    }
    
    let selection = args[0];
    if (!selection)
    {
        return msg.channel.send('Please select either `heads` or `tails`');
    }
    
        //Assigns heads/tails to land
        var rand = Math.floor(Math.random()*2)+1;

            //If the coin lands on Head
            if ((selection == 'heads' || selection == 'head') && rand == 1)
            {
              let embed = new Discord.RichEmbed()
              .setFooter(`Status: Winner`, msg.author.avatarURL)
              .setColor('008000')
              .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/a/a0/2006_Quarter_Proof.png')
              .setTitle(' __**You Win!**__ ')
              .setDescription('Keep the streak going!')
              .addField('Coin Landed On:', 'Heads');
      
              msg.channel.send(embed);
            }
            else if((selection == 'tails' || selection == 'tails') && rand == 1)
            {
                let embed = new Discord.RichEmbed()
                .setFooter(`Status: Loser`, msg.author.avatarURL)
                .setColor('ff0000')
                .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/a/a0/2006_Quarter_Proof.png')
                .setTitle(' __**You Lose!**__ ')
                .setDescription('Better Luck Next Time 👍')
                .addField('Coin Landed On:', 'Heads');
        
                msg.channel.send(embed);       
            }

    
            //If the coin lands on Tails
            if ((selection == 'tails' || selection == 'tail') && rand == 2)
            {
              let embed = new Discord.RichEmbed()
              .setFooter(`Status: Winner`, msg.author.avatarURL)
              .setColor('008000')
              .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/1/1f/2008_AK_Proof.png')
              .setTitle(' __**You Win!**__ ')
              .setDescription('Keep the streak going!')
              .addField('Coin Landed On:', 'Tails');
      
              msg.channel.send(embed);
            }
            else if ((selection == 'heads' || selection == 'head') && rand == 2)
            {
              let embed = new Discord.RichEmbed()
              .setFooter(`Status: Loser`, msg.author.avatarURL)
              .setColor('ff0000')
              .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/1/1f/2008_AK_Proof.png')
              .setTitle(' __**You Lose!**__ ')
              .setDescription('Better Luck Next Time 👍')
              .addField('Coin Landed On:', 'Tails');
      
              msg.channel.send(embed);        
            }
    
      }
    
    
}