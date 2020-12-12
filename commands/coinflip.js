const Discord = require('discord.js');
const { executionAsyncResource } = require('async_hooks');

module.exports = {
    name: 'coinflip',
    description: 'coin flip.',
    async execute(client, message, args){
        const rollDice = () => Math.floor(Math.random() * 2) + 1;
        switch (rollDice()) {
            case 1:
                const embedOne = new Discord.MessageEmbed()
                .setTitle('Valiuos - Coin Flip')
                .setDescription('The coin has landed on heads.')
                .setColor(0x28D69F)
                .setThumbnail('https://i.imgur.com/cjlgX9O.png')
                message.channel.send(embedOne);
            break;
            case 2:
                const embedTwo = new Discord.MessageEmbed()
                .setTitle('Valiuos - Coin Flip')
                .setDescription('The coin has landed on tails.')
                .setColor(0x28D69F)
                .setThumbnail('https://i.imgur.com/cjlgX9O.png')
                message.channel.send(embedTwo);
            break;
        }
    }
}