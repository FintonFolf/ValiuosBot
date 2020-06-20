const Discord = require('discord.js');
const { executionAsyncResource } = require('async_hooks');
const name = global.name;

module.exports = {
    name: 'ping',
    description: 'pong!',
    execute(message, args){
        const embed = new Discord.MessageEmbed()
        .setTitle(`${name} - Ping`)
        .setDescription('Pong!')
        .setColor(0x28D69F)
        .setThumbnail('https://i.imgur.com/8kK5AKY.png')
        message.channel.send(embed);
    }
}