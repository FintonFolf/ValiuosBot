const Discord = require('discord.js');
const { executionAsyncResource } = require('async_hooks');
const owner = global.owner;

module.exports = {
    name: 'guilds',
    description: 'shows how many guilds',
    async execute(client, message, args){
        if (message.author.id == owner){
            const embed = new Discord.MessageEmbed()
            .setTitle('Valiuos - Guilds')
            .setDescription('Valiuos is connected to ' + client.guilds.cache.size + ' guilds.')
            .setColor(0x28D69F)
            .setThumbnail('https://i.imgur.com/fhyL7Jv.png')
            message.channel.send(embed);
            console.log('Currently connected to ' + client.guilds.cache.size + ' guilds')
        } 
    }
}