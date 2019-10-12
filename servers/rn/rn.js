exports.run = (bot, msg, args, command, Discord, ms, moment, prefix) =>
{
    /***************************User Command********************************/
    //help
    let help = require(`./user commands/help.js`);
    help.run(bot, msg, args, command, Discord, ms, moment, prefix);

    /***************************Clan Info********************************/
    //Website
    let web = require(`./user commands/claninfo/web`);
    web.run(bot, msg, args, command, Discord, ms, moment);

    /***************************Civil War Info********************************/
    /*//Civil War
    let cw = require(`./user commands/civilwar/cw`);
    cw.run(bot, msg, args, command, Discord, ms, moment);*/

    /***************************Other********************************/
    //Assigning Roles
    let roleassign = require(`./user commands/assignrole/files.js`);
    roleassign.run(bot, msg, args, command, Discord, ms, moment, prefix);

}