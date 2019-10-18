exports.run = async (bot, msg, args, command, Discord, ms, moment, xp, fs, prefix, Canvas) =>
{
    const applyText = (canvas, text) => {
        const ctx = canvas.getContext('2d');
    
        let fontSize = 70;
        do 
        {
            ctx.font = `${fontSize -= 10}px sans-serif`;
            // Compare pixel width of the text to the canvas minus the approximate avatar size
        } while (ctx.measureText(text).width > canvas.width - 300);

        return ctx.font;
    };

    if(command == 'rank')
    {
        try
        {
            const canvas = Canvas.createCanvas(934, 282);
            const ctx = canvas.getContext('2d');
            const background = await Canvas.loadImage('./images/rank.jpg');
        
            //Sets measurements of the image loaded
            ctx.drawImage(background, 0, 0, canvas.width, canvas.height); 

            //Text Modifications
            //Username
            ctx.font = applyText(canvas, msg.author.username);
            ctx.fillStyle = '#000000';
            ctx.fillText(msg.author.username, canvas.width - 600, canvas.height - 145);

            //Checks to see if a levels file exists for a user
            if(!fs.existsSync(`./data/levels/${msg.guild.id}.json`))
            {
                return msg.channel.send("It seems like there was no levels file for this server, don't worry took care of that. Try again.");
            }

            let user = msg.author.id;
            if (!xp[user])
            {
                return msg.channel.send("You haven't earned any xp yet, start typing...");
            }
            else
            {
                //msg.channel.send(`Your xp: ${xp[user].xp}/${(xp[user].level)*200}\nYour Level: ${xp[user].level}`);

                //Xp
                ctx.font = '28px sans-serif';
                ctx.fillStyle = '#000000';
                ctx.fillText(`Xp: ${xp[user].xp}/${(xp[user].level)*200}`, canvas.width - 600, canvas.height - 120);

                //Level
                ctx.font = '28px sans-serif';
                ctx.fillStyle = '#000000';
                ctx.fillText(`Level: ${xp[user].level}`, canvas.width - 600, canvas.height - 97);


                //Avatar Modifications
                //Image stroke
                ctx.strokeStyle = '#ffffff';
                ctx.strokeRect(0, 0, canvas.width, canvas.height);
                //Turns the pic in a circle
                ctx.beginPath();
                ctx.arc(187, 141, 128, 0, Math.PI * 2, true);
                ctx.closePath();
                ctx.clip();
                //Loads and puts avatar on image
                const avatar = await Canvas.loadImage(msg.author.avatarURL);
                ctx.drawImage(avatar,37, -12, 300, 300);

                const attachment = new Discord.Attachment(canvas.toBuffer(), 'welcome-image.png');
                return msg.channel.send(`Testing...`, attachment);
            }

        }
        catch(e)
        {
            console.log(e.stack);
        }
    }
}
