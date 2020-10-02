const Discord = require('discord.js');

const client = new Discord.Client();
const prefix = '.'

client.once('ready' , () => {
   console.log('sn02 is active!');
});

/**
* @Author sn01
* Development began on 1/10/2020
**/

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    if(command === 'help'){
        message.channel.send('you need serious help! may i suggest a councellor?');
    } else if(command === 'fatfuck'){
    message.channel.send('do tha phatfuck https://cdn.discordapp.com/attachments/452733553122476062/655291803087667201/image0.png')
    } else if(command === 'rat'){
    message.channel.send('https://bigrat.monster/')
    }else if(command === 'invite'){
    message.channel.send('invite me to your server! https://discord.com/oauth2/authorize?client_id=761099279141175326&scope=bot&permissions=2146958847')
    }else if(command === 'cmd'){
    message.channel.send('you can check out all avalible commands at https://github.com/sn0wy01/sn02/blob/main/README.md')
    }else if(command === 'poggers'){
    message.channel.send('https://tenor.com/view/poggers-anime-girls-kissing-pog-gif-18050577')
    }else if(command === 'suffix'){
    message.channel.send('t >ᴇᴘɪᴄ ꜱᴛᴜғғɪ✗» ʌгᴇѕ+ « ᴋᴀᴍɪ ʙʟᴜᴇ ᴏɴ ᴛᴏᴘ » » ˢⁿᵒʷ⏐ НεᎮнᗩεѕƭυѕ » ʙᴀᴄᴋᴅᴏᴏʀᴇᴅ | ᴍᴇᴏᴡ » ᴜɴɪᴄᴏʀɴɢᴏᴅ.ɢɢ ꜱᴇᴘᴘᴜᴋᴜ | ʜᴜᴢᴜɴɪɢʀᴇᴇɴ.ɢɢtm » ʙᴀᴄᴋᴄʟɪᴇɴᴛtm » ɴᴏᴜ ʟᴇᴀᴋ ⏐ ғᴏʀɢᴇʀᴀᴛ ♡ | ӨBΛMΛ ᄃᄂIΣПƬ - ᴇʟᴇᴍᴇɴᴛᴀʀꜱ.ᴄᴏᴍ 》ᴏꜱɪʀɪꜱ | WÔÔKÏÊ ÇLîëÑTtm {ʀᴀɪᴏɴᴋᴇᴋ} ッ Ｒ００Ｔ｜ ᴠᴏɪᴅ ᴄʟɪᴇɴᴛ ｜ ᴋᴀᴍɪ ｜ ʳᴜˢʰᴇʳʰᴀᶜᵏ ｜ ⓌⓌⒺ ｜ ｉｍｐａｃｔ｜ ꜰᴜᴛᴜʀᴇtm ⓖⓞⓛⓓ ｜ 卂丂ㄩ几卂ᴄʟɪᴇɴᴛ ｜ꄘꆂ꒓ꁍꍟꑛꋫꇓ ｜ ʳᴀｔᴄʟɪᴇɴᴛ ｜ ᴀᴘᴏʟʟʏᴏɴ ｜ ᴋᴀᴍɪ ʙʟᴜᴇ ❘ ᴾᴼᴾᴮᴼᴮ ᶜᴸᴵᴱᴺᵀ ⏐ ɢᴀʏ ⏐ c l i e n t | B a L l C l i E n T | ᖴEᗰᗷOYᕼᗩᑕK.ᑕᑕ | ᶠᵉᵐᵇᵒʸʰᵃᶜᵏ.ᶜᶜ | ᴠᴏɪᴅᴇᴅᴄʟɪᴇɴᴛ | Fᵢₙₜₐ ₕₐₓ | LιȥαɾԃKιɳɠ.ƈƈ | ѕ¢нσσℓѕнσσтєя.мρ4 | 千乇爪乃ㄖㄚ千尺丨ᗪ卂ㄚ卄卂乂乂 | ᗰYᑎIGGᗩOᗷᗩᗰᗩ.Eᘔ | 911匚ㄥ丨乇几ㄒ.匚匚 | ßïllñ¥êHåk§ | A̾s̾i̾a̾n̾D̾o̾g̾E̾a̾t̾e̾r̾.̾m̾p̾3̾ | ⑨①①ⓌⓐⓢⒶⒻⓤⓢⓢ | 🄺🄾🄾🄻🄺🄸🄳🅂🄺🄻🅄🄱.🄲🄲 | ⱧØⱠɎ₥ØⱠɎ₵ⱧɆɆ₴Ɇ₲Ɽ₳₦ØⱠⱠł | ＭｙＫ０ＫＫｌｉｅｎｔ| ᴜɴɪᴄᴏʀɴɢᴏᴅ.ɢɢ ꜱᴇᴘᴘᴜᴋᴜ -ingros- | ʜᴜᴢᴜɴɪɢʀᴇᴇɴ.ɢɢtm » ʙᴀᴄᴋᴄʟɪᴇɴᴛt [ᴀᴛʟᴀꜱ]')
    }else if(command === 'allah'){
    message.channel.send('praise allah https://cdn.discordapp.com/attachments/634286781499572224/752818250085171220/image0.png')
}else if(command === 'about'){
message.channel.send('swag bot written in js by sn01. you can contact him on discord at sn01#7441 or at https://github.com/sn0wy01')
}
    });


client.login ('NzYxMDk5Mjc5MTQxMTc1MzI2.X3Vq8A.x-ZZY_fnQo5S-BlND0WtDYOLK48');