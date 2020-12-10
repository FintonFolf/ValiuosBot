const Discord = require('discord.js');
const { executionAsyncResource } = require('async_hooks');

module.exports = {
    name: 'ban',
    description: 'bans user',
    async execute(message, args){
        if(message.member.permissions.has('BAN_MEMBERS')){
            if(!args[1]) {
                const embed = new Discord.MessageEmbed()
                .setTitle('Valiuos - Ban - Missing User')
                .setDescription('You must specify the user you wish to ban.')
                .setColor(0x28D69F)
                .setThumbnail('https://i.imgur.com/E6LRzpz.png')
                message.channel.send(embed);
            }
            else {
                const bannedUser = message.mentions.users.first();
                const bannedUserReal = message.guild.members.resolve(bannedUser);
                if (bannedUserReal) {
                    const targetBannedUser = message.guild.members.cache.get(bannedUser.id)
                    if (!bannedUserReal.permissions.has('BAN_MEMBERS')){
                        targetBannedUser.ban()
                        .catch(err => message.reply(`Something went wrong... ${err}`))
        
                        const embed = new Discord.MessageEmbed()
                        .setTitle('Valiuos - Ban')
                        .setDescription('The user ' + args[1] + ' has been banned from the server.')
                        .setColor(0x28D69F)
                        .setThumbnail('https://i.imgur.com/E6LRzpz.png')
                        message.channel.send(embed);
                    } else {
                        const embed = new Discord.MessageEmbed()
                        .setTitle('Valiuos - Ban - Elevated User')
                        .setDescription('This user can not be banned due to their elevated permissions.')
                        .setColor(0x28D69F)
                        .setThumbnail('https://i.imgur.com/E6LRzpz.png')
                        message.channel.send(embed);
                    
                    }
                } else {
                    const embed = new Discord.MessageEmbed()
                    .setTitle('Valiuos - Ban - Invalid User')
                    .setDescription('You must specify the user you wish to ban.')
                    .setColor(0x28D69F)
                    .setThumbnail('https://i.imgur.com/E6LRzpz.png')
                    message.channel.send(embed);
                }
                
            }
        } else {
            const embed = new Discord.MessageEmbed()
            .setTitle('Valiuos - Ban - Missing Permissions')
            .setDescription('You are missing the permissions to be eligible to run this command.')
            .setColor(0x28D69F)
            .setThumbnail('https://i.imgur.com/E6LRzpz.png')
            message.channel.send(embed);
        }
    }
}