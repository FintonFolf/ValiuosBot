const Discord = require('discord.js');
const { executionAsyncResource } = require('async_hooks');
const owner = global.owner;

module.exports = {
    name: 'shutdown',
    description: 'shutdown the bot',
    async execute(client, message, args){
        if (message.author.id == owner){
            const embed = new Discord.MessageEmbed()
            .setTitle('Valiuos - Shutdown')
            .setDescription('Valiuos is now shutting down.')
            .setColor(0x28D69F)
            .setThumbnail('https://i.imgur.com/fhyL7Jv.png')
            message.channel.send(embed);
            console.log(`Shutting down...`);
            setTimeout(function(){ 
                process.exit();
             }, 2);

        } 
    }
}