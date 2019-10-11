exports.run = (bot, msg, args, command, Discord, ms, moment, prefix) =>
{
    let codPLayer = msg.guild.roles.find('name', 'COD Mobile Player');
    let usernameChannel = msg.guild.channels.get('632241734855819275');
    let codTalkChannel = msg.guild.channels.get('632241762068594689');

    //Lets the user assign them selves the warrior role
    if (command == 'codjoin')
    {
        if(!codPLayer)
        {
            return msg.channel.send(`> • ${msg.author}, Sorry couldn't find \`COD Mobile Player\` role :(`)
        }
    
        //Checks to see if the person already has the role
        if (msg.member.roles.has(codPLayer.id))
        {
            return msg.channel.send(`> • You've already joined the World of **__COD Mobile__**.`); 
        }

        msg.member.addRole(codPLayer);
        msg.channel.send(`**Welcome to the World of __COD Mobile__** \n>>> Please use the following channels accordingly:\n\n`+
        `${usernameChannel}: To post your username in COD Mobile.\n`+
        `${codTalkChannel}: To chat about game related things.\n`);
    }

    if(command == 'codleave')
    {
        if(!codPLayer)
        {
            return msg.channel.send(`> • ${msg.author}, Sorry couldn't find \`COD Mobile Player\` role :(`)
        }
    
        //Checks to see if the person already has the warrior role
        if (!msg.member.roles.has(codPLayer.id))
        {
            return msg.channel.send(`>>> • You're not currently in the World of __COD Mobile__**.\n• Please use \`${prefix}codjoin\` to join.`);
        }

        msg.member.removeRole(codPLayer);
        msg.channel.send(`>>> • We are sorry to see you **leave**.`+
        `\n• Please use \`${prefix}codjoin\` to join anytime you wish.`);
    }
}