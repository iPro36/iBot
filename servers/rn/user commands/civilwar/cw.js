exports.run = (bot, msg, args, command, Discord, ms, moment) =>
{
    let warrior = msg.guild.roles.find(roles => roles.name === 'Civil Warrior');

    //Lets the user assign them selves the warrior role
    if (command == 'join')
    {
        if(!warrior)
        {
            msg.channel.send(`${msg.author}, Sorry couldn't find \`Civil Warrior\` role :(`)
        }
    
        //Checks to see if the person already has the role
        if (msg.member.roles.has(warrior.id))
        {
            let embed = new Discord.RichEmbed()
            .setThumbnail(`https://cdn.discordapp.com/emojis/457778182058147840.png?v=1`)
            .setTitle('__**Already In**__')
            .setDescription(`It seems like you've already signed up to be in the civil war!`)
            .setColor('008000')
            .setFooter('Rn Civil War',`https://cdn.discordapp.com/emojis/343797690833960960.png?v=1`)
            .setTimestamp();
        
            return msg.channel.send(embed); 
        }

        msg.member.addRole(warrior);
        let embed = new Discord.RichEmbed()
        .setThumbnail(`https://cdn.discordapp.com/emojis/457778182058147840.png?v=1`)
        .setTitle('__**You Are In**__')
        .setDescription(`You are now part of RN'S CIVIL WAR!`)
        .addField('Check the following channels:',`${msg.guild.channels.get('507344700198354955')},${msg.guild.channels.get('507333230458961920')},${msg.guild.channels.get('507333265619812382')},${msg.guild.channels.get('507333284523540520')},${msg.guild.channels.get('507333349593841665')}`)
        .addField('Visit the following website to join the tournament!:',`https://matcherino.com/tournaments/12815/participants`)

        .setColor('008000')
        .setFooter('Rn Civil War',`https://cdn.discordapp.com/emojis/343797690833960960.png?v=1`)
        .setTimestamp();
    
        msg.channel.send(embed); 
    }

    if(command == 'leave')
    {
        if(!warrior)
        {
            msg.channel.send(`${msg.author}, Sorry couldn't find \`Civil Warrior\` role :(`)
        }
    
        //Checks to see if the person already has the warrior role
        if (!msg.member.roles.has(warrior.id))
        {
            let embed = new Discord.RichEmbed()
            .setThumbnail(`https://cdn.discordapp.com/emojis/457778182058147840.png?v=1`)
            .setTitle('__**Already Out**__')
            .setDescription(`It seems like you haven't signed up to be in the RN's Civil War, use \`;join\` to be a part of it!`)
            .setColor('ff0000')
            .setFooter('Rn Civil War',`https://cdn.discordapp.com/emojis/343797690833960960.png?v=1`)
            .setTimestamp();
        
            return msg.channel.send(embed); 
        }
        msg.member.removeRole(warrior);
        let embed = new Discord.RichEmbed()
        .setThumbnail(`https://cdn.discordapp.com/emojis/457778182058147840.png?v=1`)
        .setTitle('__**You Are Out**__')
        .setDescription(`We are sorry to see you leave RN'S Civil War, use \`;join\` to be a part of it anytime!`)
        .setColor('ff0000')
        .setFooter('Rn Civil War',`https://cdn.discordapp.com/emojis/343797690833960960.png?v=1`)
        .setTimestamp();
    
        msg.channel.send(embed);
    }

    //Shows the ammount of players in the role.
    if (command == 'count')
    {
        if(!warrior)
        {
            msg.channel.send(`${msg.author}, Sorry couldn't find \`Civil Warrior\` role :(`)
        }
    
        count = 0;
        msg.guild.roles.find(roles => roles.name === 'Civil Warrior').members.forEach(function(member,id)
        {
            if (!member.user.bot || !member.user.id == bot.id)
            { 
              count++;
            }
        })
    
        msg.channel.send(`There are currently **${count}** warriors in civil war!\nUse \`;join\` to join the war!`);
        return;
    }


}