const Discord = require('discord.js');
const { executionAsyncResource } = require('async_hooks');
const prefix = global.prefix;

module.exports = {
    name: 'help',
    description: 'sends help dialogue',
    async execute(message, args){
        if(!args[1]) {
            const embed = new Discord.MessageEmbed()
            .setTitle('Valiuos - Help Command')
            .setDescription(`Use \`${prefix}help <command>\` to get help with a specific command`)
            .addField(':jigsaw: - General Commands', `\`help\``)
            .addField(':tools: - Moderation Commands', '`\`clear\`` `\`kick\`` `\`ban\``')
            .addField(':ping_pong: - Fun Commands', `\`ping\``)
            .setColor(0x28D69F)
            .setThumbnail('https://i.imgur.com/041f3zv.png')
            message.channel.send(embed);
        } else {
            switch (args[1]) {
            case "ping":
                const embedPing = new Discord.MessageEmbed()
                .setTitle('Valiuos - Help Command - Ping')
                .setDescription(`**${prefix}ping**`)
                .addField('Description', 'A dummy command that returns Pong!')
                .addField('Usage', `${prefix}ping`)
                .setColor(0x28D69F)
                .setThumbnail('https://i.imgur.com/041f3zv.png')
                message.channel.send(embedPing);
            break;
            case "help":
                const embedHelp = new Discord.MessageEmbed()
                .setTitle('Valiuos - Help Command - Help')
                .setDescription(`**${prefix}help**`)
                .addField('Description', 'A command that can be used to find another command\'s use')
                .addField('Usage', `${prefix}help <command>`)
                .setColor(0x28D69F)
                .setThumbnail('https://i.imgur.com/041f3zv.png')
                message.channel.send(embedHelp);
            break;
            case "clear":
                const embedClear = new Discord.MessageEmbed()
                .setTitle('Valiuos - Help Command - Clear')
                .setDescription(`**${prefix}clear**`)
                .addField('Description', 'A command that can be used by a moderator to remove a bulk amount of messages')
                .addField('Usage', `${prefix}clear <integer>`)
                .setColor(0x28D69F)
                .setThumbnail('https://i.imgur.com/041f3zv.png')
                message.channel.send(embedClear);
            case "kick":
                const embedKick = new Discord.MessageEmbed()
                .setTitle('Valiuos - Help Command - Kick')
                .setDescription(`**${prefix}kick**`)
                .addField('Description', 'A command that can be used by a moderator to kick a user from the current server')
                .addField('Usage', `${prefix}kick <user>`)
                .setColor(0x28D69F)
                .setThumbnail('https://i.imgur.com/041f3zv.png')
                message.channel.send(embedKick);
            break;
            case "ban":
                const embedBan = new Discord.MessageEmbed()
                .setTitle('Valiuos - Help Command - Ban')
                .setDescription(`**${prefix}ban**`)
                .addField('Description', 'A command that can be used by a moderator to ban a user from the current server')
                .addField('Usage', `${prefix}ban <user>`)
                .setColor(0x28D69F)
                .setThumbnail('https://i.imgur.com/041f3zv.png')
                message.channel.send(embedBan);
            break;
            }
        }
    }
}
