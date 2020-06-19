const Discord = require('discord.js');
const { executionAsyncResource } = require('async_hooks');

module.exports = {
    name: 'ping',
    description: 'pong!',
    execute(message, args){
        const embed = new Discord.MessageEmbed()
        .setTitle('Valios - Ping')
        .setDescription('Pong!')
        .setColor(0x28D69F)
        .setThumbnail('https://i.imgur.com/8kK5AKY.png')
        message.channel.send(embed);
    }
}