const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '.'

const fs = require('fs')

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'))
for(const file of commandFiles){
const command = require(`./commands/${file}`);

client.commands.set(command.name, command);

}


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
    client.commands.get('suffix').execute(message, args);
    }else if(command === 'allah'){
    message.channel.send('praise allah https://cdn.discordapp.com/attachments/634286781499572224/752818250085171220/image0.png')
}else if(command === 'about'){
message.channel.send('swag bot written in js by sn01. you can contact him on discord at sn01#7441 or at https://github.com/sn0wy01')
}else if(command === 'ping'){
message.channel.send('pong')
}else if (command === 'admin'){
client.commands.get('admin').execute(message,args);
}
    });


client.login ('stop stealing my token lol');