const Discord = require('discord.js');
const { executionAsyncResource } = require('async_hooks');

module.exports = {
    name: 'clear',
    description: 'clears the chat',
    async execute(message, args){
        if(message.member.permissions.has('MANAGE_MESSAGES')){
            if(!args[1]) {
                const embed = new Discord.MessageEmbed()
                .setTitle('Valiuos - Clear - Missing Integer')
                .setDescription('You must specify the amount of messages you wish to remove.')
                .setColor(0x28D69F)
                .setThumbnail('https://i.imgur.com/ry5hJqC.png')
                message.channel.send(embed);
            }
            else {
                if (args[1] < 1) {
                    const embed = new Discord.MessageEmbed()
                    .setTitle('Valiuos - Clear - Error')
                    .setDescription('You must delete at least 1 message')
                    .setColor(0x28D69F)
                    .setThumbnail('https://i.imgur.com/ry5hJqC.png')
                    message.channel.send(embed);
                } else if (args[1] > 100) {
                    const embed = new Discord.MessageEmbed()
                    .setTitle('Valiuos - Clear - Error')
                    .setDescription('You can not delete more than 100 messages at once due to a Discord API limitation')
                    .setColor(0x28D69F)
                    .setThumbnail('https://i.imgur.com/ry5hJqC.png')
                    message.channel.send(embed);
                } else {
                    message.channel.bulkDelete(1, true)
                    message.channel.bulkDelete(args[1], true)
                    .catch(err => message.reply(`Something went wrong... ${err}`));
                    
                    const embed = new Discord.MessageEmbed()
                    .setTitle('Valiuos - Clear')
                    .setDescription(args[1] + ' messages have been deleted successfully')
                    .setColor(0x28D69F)
                    .setFooter('Messages over 14 days old have not been deleted due to a Discord API limitation', 'https://i.imgur.com/ry5hJqC.png')
                    .setThumbnail('https://i.imgur.com/ry5hJqC.png')
                    message.channel.send(embed);
                }

            }
        } else {
            const embed = new Discord.MessageEmbed()
            .setTitle('Valiuos - Clear - Missing Permissions')
            .setDescription('You are missing the permissions to be eligible to run this command.')
            .setColor(0x28D69F)
            .setThumbnail('https://i.imgur.com/ry5hJqC.png')
            message.channel.send(embed);
        }
    }
}