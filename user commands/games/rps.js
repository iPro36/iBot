exports.run = (bot, msg, args, command, Discord, ms, moment) =>
{
  //RPS Game
  var rand = Math.floor(Math.random()*3)+1, cMsg;

  switch (rand)
        {
          case 1:
            cMsg = "rock";
            break;

          case 2:
            cMsg = "paper";
            break;
          
          case 3:
            cMsg = "scissor";
            break;
        }

  if (command == 'rps' && args[0] == 'rock') //If user selects rock
  {
    //Checks to see if the message was sent in general
    if (msg.channel.id == "272954876021964800" || msg.channel.id == "464061186993029150")
    {
      return msg.channel.send(`Please use ${msg.guild.channels.get('284929847162306560')} for any \`commands\``);
    }

      if (cMsg == 'rock') //If its a tie
      {
        let embed = new Discord.RichEmbed()
        .setFooter(`Status: Tie`, msg.author.avatarURL)
        .setColor('C0C0C0')
        .setTitle('🗿 __**Tie**__ 🗿')
        .setDescription('Don\'t lose hope, Try Again!')
        .addField('Bot\'s Pick:', cMsg);

        msg.channel.send(embed);
      }
      if (cMsg == 'scissor') //If its a win
      {
        let embed = new Discord.RichEmbed()
        .setFooter(`Status: Winner`, msg.author.avatarURL)
        .setColor('008000')
        .setTitle('🗿 __**You Win**__ ✂️')
        .setDescription('Well Played!')
        .addField('Bot\'s Pick:', cMsg);

        msg.channel.send(embed);      
      }
      if (cMsg == 'paper') //If its a lose
      {
        let embed = new Discord.RichEmbed()
        .setFooter(`Status: Loser`, msg.author.avatarURL)
        .setColor('ff0000 ')
        .setTitle('🗿 __**You Lost**__ 📜')
        .setDescription('Give it another shot!')
        .addField('Bot\'s Pick:', cMsg);

        msg.channel.send(embed);      
      }
  }
  
  if (command == 'rps' && args[0] == 'paper') //If user selects paper
  {
    //Checks to see if the message was sent in general
    if (msg.channel.id == "272954876021964800" || msg.channel.id == "464061186993029150")
    {
      let channel = msg.guild.channels.get('284929847162306560');
      msg.delete(1);
      return msg.author.send(`Please use **#${channel.name}** for any \`commands\``);
    }
    
    if (cMsg == 'paper') //If its a tie
      {
        let embed = new Discord.RichEmbed()
        .setFooter(`Status: Tie`, msg.author.avatarURL)
        .setColor('C0C0C0')
        .setTitle('📜 __**Tie**__ 📜')
        .setDescription('Don\'t lose hope, Try Again!')
        .addField('Bot\'s Pick:', cMsg);     
        
        msg.channel.send(embed);      
      }
    if (cMsg == 'rock') //If its a win
      {
        let embed = new Discord.RichEmbed()
        .setFooter(`Status: Winner`, msg.author.avatarURL)
        .setColor('008000')
        .setTitle('📜 __**You Win**__ 🗿')
        .setDescription('Well Played!')
        .addField('Bot\'s Pick:', cMsg);

        msg.channel.send(embed);            
      }
      if (cMsg == 'scissor') //If its a lose
      {
        let embed = new Discord.RichEmbed()
        .setFooter(`Status: Loser`, msg.author.avatarURL)
        .setColor('ff0000 ')
        .setTitle('📜 __**You Lost**__ ✂️')
        .setDescription('Give it another shot!')
        .addField('Bot\'s Pick:', cMsg);

        msg.channel.send(embed);      
      }
  }
  
  if (command == 'rps' && args[0] == 'scissor') //If user selects scissor
  {
    //Checks to see if the message was sent in general
    if (msg.channel.id == "272954876021964800" || msg.channel.id == "464061186993029150")
    {
      return msg.channel.send(`Please use ${msg.guild.channels.get('284929847162306560')} for any \`commands\``);
    }

    if (cMsg == 'scissor') //If its a tie
    {
      let embed = new Discord.RichEmbed()
      .setFooter(`Status: Tie`, msg.author.avatarURL)
      .setColor('C0C0C0')
      .setTitle('✂️ __**Tie**__ ✂️')
      .setDescription('Don\'t lose hope, Try Again!')
      .addField('Bot\'s Pick:', cMsg);     
      
      msg.channel.send(embed);    }
    if (cMsg == 'paper') //If its a win
    {
      let embed = new Discord.RichEmbed()
      .setFooter(`Status: Winner`, msg.author.avatarURL)
      .setColor('008000')
      .setTitle('✂️ __**You Win**__ 📜')
      .setDescription('Well Played!')
      .addField('Bot\'s Pick:', cMsg);

      msg.channel.send(embed);  
    }
    if (cMsg == 'rock') //If its a lose
    {
      let embed = new Discord.RichEmbed()
      .setFooter(`Status: Loser`, msg.author.avatarURL)
      .setColor('ff0000 ')
      .setTitle('✂️ __**You Lost**__ 🗿')
      .setDescription('Give it another shot!')
      .addField('Bot\'s Pick:', cMsg);

      msg.channel.send(embed);    
    }
  }
}