const Discord = require('discord.js');
const { executionAsyncResource } = require('async_hooks');

module.exports = {
    name: 'kick',
    description: 'kicks user',
    async execute(client, message, args){
        if(message.member.permissions.has('KICK_MEMBERS')){
            if(!args[1]) {
                const embed = new Discord.MessageEmbed()
                .setTitle('Valiuos - Kick - Missing User')
                .setDescription('You must specify the user you wish to kick.')
                .setColor(0x28D69F)
                .setThumbnail('https://i.imgur.com/PJMcwrG.png')
                message.channel.send(embed);
            }
            else {
                const kickedUser = message.mentions.users.first();
                const kickedUserReal = message.guild.members.resolve(kickedUser);
                if (kickedUserReal) {
                    const targetKickedUser = message.guild.members.cache.get(kickedUser.id)
                    if (!kickedUserReal.permissions.has('KICK_MEMBERS')){
                        targetKickedUser.kick()
                        .catch(err => message.reply(`Something went wrong... ${err}`))
        
                        const embed = new Discord.MessageEmbed()
                        .setTitle('Valiuos - Kick')
                        .setDescription('The user ' + args[1] + ' has been kicked from the server.')
                        .setColor(0x28D69F)
                        .setThumbnail('https://i.imgur.com/PJMcwrG.png')
                        message.channel.send(embed);
                    } else {
                        const embed = new Discord.MessageEmbed()
                        .setTitle('Valiuos - Kick - Elevated User')
                        .setDescription('This user can not be kicked due to their elevated permissions.')
                        .setColor(0x28D69F)
                        .setThumbnail('https://i.imgur.com/PJMcwrG.png')
                        message.channel.send(embed);
                    
                    }
                } else {
                    const embed = new Discord.MessageEmbed()
                    .setTitle('Valiuos - Kick - Invalid User')
                    .setDescription('You must specify the user you wish to kick.')
                    .setColor(0x28D69F)
                    .setThumbnail('https://i.imgur.com/PJMcwrG.png')
                    message.channel.send(embed);
                }
            }
        } else {
            const embed = new Discord.MessageEmbed()
            .setTitle('Valiuos - Kick - Missing Permissions')
            .setDescription('You are missing the permissions to be eligible to run this command.')
            .setColor(0x28D69F)
            .setThumbnail('https://i.imgur.com/PJMcwrG.png')
            message.channel.send(embed);
        }
    }
}