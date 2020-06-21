const Discord = require('discord.js');
const { executionAsyncResource } = require('async_hooks');
const prefix = global.prefix;
const name = global.name;

module.exports = {
    name: 'help',
    description: 'sends help dialoge',
    execute(message, args){
        if(!args[1]) {
            const embed = new Discord.MessageEmbed()
            .setTitle(`${name} - Help Command`)
            .setDescription(`Use \`${prefix}help <command>\` to get help with a specific command`)
            .addField(':jigsaw: - General Commands', `\`help\``)
            .addField(':tools: - Moderation Commands', ' - COMING SOON - ')
            .addField(':ping_pong: - Fun Commands', `\`ping\``)
            .setColor(0x28D69F)
            .setThumbnail('https://i.imgur.com/041f3zv.png')
            message.channel.send(embed);
        } else {
            switch (args[1]) {
            case "ping":
                const embedPing = new Discord.MessageEmbed()
                .setTitle(`${name} - Help Command - Ping`)
                .setDescription(`**${prefix}ping**`)
                .addField('Description', 'A dummy command that returns Pong!')
                .addField('Usage', `${prefix}ping`)
                .setColor(0x28D69F)
                .setThumbnail('https://i.imgur.com/041f3zv.png')
                message.channel.send(embedPing);
            break;
            case "help":
                const embedHelp = new Discord.MessageEmbed()
                .setTitle(`${name} - Help Command - Help`)
                .setDescription(`**${prefix}help**`)
                .addField('Description', 'A command that can be used to find another command\'s use')
                .addField('Usage', `${prefix}help <command>`)
                .setColor(0x28D69F)
                .setThumbnail('https://i.imgur.com/041f3zv.png')
                message.channel.send(embedHelp);
            break;
            }
        }
    }
}
