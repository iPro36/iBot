exports.run = (bot, msg, args, command, Discord, ms, moment, prefix) =>
{
    /***************************User Command********************************/
    //help
    let help = require(`./user commands/help.js`);
    help.run(bot, msg, args, command, Discord, ms, moment, prefix);

    /***************************Clan Info********************************/
    //Rn Rules
    let rnrules = require(`./user commands/claninfo/rnrules`);
    rnrules.run(bot, msg, args, command, Discord, ms, moment);

    //Server Rules
    let serverrules = require(`./user commands/claninfo/servrule`);
    serverrules.run(bot, msg, args, command, Discord, ms, moment);

    //Website
    let web = require(`./user commands/claninfo/web`);
    web.run(bot, msg, args, command, Discord, ms, moment);

    /***************************Civil War Info********************************/
    /*//Civil War
    let cw = require(`./user commands/civilwar/cw`);
    cw.run(bot, msg, args, command, Discord, ms, moment);*/

}