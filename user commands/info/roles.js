exports.run = (bot, msg, args, command, Discord, ms, moment, xp, fs, prefix) =>
{
    if(command == 'roles')
    {
        msg.channel.send(`\n__**Server Roles:**__\n${msg.guild.roles.filter(r => r.id !== msg.guild.id).map(roles => `\`${roles.name}\``).join(" **|** ") || "No Roles"}`);
    }
}