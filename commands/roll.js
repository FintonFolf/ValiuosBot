const Discord = require('discord.js');
const { executionAsyncResource } = require('async_hooks');

module.exports = {
    name: 'roll',
    description: 'dice roll.',
    async execute(client, message, args){
        const rollDice = () => Math.floor(Math.random() * 6) + 1;
        switch (rollDice()) {
            case 1:
                const embedOne = new Discord.MessageEmbed()
                .setTitle('Valiuos - Roll')
                .setDescription('You have rolled a one.')
                .setColor(0x28D69F)
                .setThumbnail('https://i.imgur.com/hFrlszx.png')
                message.channel.send(embedOne);
            break;
            case 2:
                const embedTwo = new Discord.MessageEmbed()
                .setTitle('Valiuos - Roll')
                .setDescription('You have rolled a two.')
                .setColor(0x28D69F)
                .setThumbnail('https://i.imgur.com/W5FwvWn.png')
                message.channel.send(embedTwo);
            break;
            case 3:
                const embedThree = new Discord.MessageEmbed()
                .setTitle('Valiuos - Roll')
                .setDescription('You have rolled a three.')
                .setColor(0x28D69F)
                .setThumbnail('https://i.imgur.com/XLvBeD1.png')
                message.channel.send(embedThree);
            break;
            case 4:
                const embedFour = new Discord.MessageEmbed()
                .setTitle('Valiuos - Roll')
                .setDescription('You have rolled a four.')
                .setColor(0x28D69F)
                .setThumbnail('https://i.imgur.com/44kwsmz.png')
                message.channel.send(embedFour);
            break;
            case 5:
                const embedFive = new Discord.MessageEmbed()
                .setTitle('Valiuos - Roll')
                .setDescription('You have rolled a five.')
                .setColor(0x28D69F)
                .setThumbnail('https://i.imgur.com/2llExUR.png')
                message.channel.send(embedFive);
            break;
            case 6:
                const embedSix = new Discord.MessageEmbed()
                .setTitle('Valiuos - Roll')
                .setDescription('You have rolled a six.')
                .setColor(0x28D69F)
                .setThumbnail('https://i.imgur.com/gtQSaVX.png')
                message.channel.send(embedSix);
            break;
        }
    }
}