const Discord = require('discord.js');
const { executionAsyncResource } = require('async_hooks');

module.exports = {
    name: '8ball',
    description: '8ball',
    async execute(message, args){
        if (!args[1]) {
            const embed = new Discord.MessageEmbed()
            .setTitle('Valiuos - 8 Ball - Missing Question')
            .setDescription('Ask a question you want the eight ball to answer.')
            .setColor(0x28D69F)
            .setThumbnail('https://i.imgur.com/1Zy6Sag.png')
            message.channel.send(embed);
        } else {
            let questionResponse = [
                "It is certain.",
                "It is decidedly so.",
                "Without a doubt.",
                "Yes – definitely.",
                "You may rely on it.",
                "As I see it, yes.",
                "Most likely.",
                "Outlook good.",
                "Yes.",
                "Signs point to yes.",
                "Reply hazy, try again.",
                "Ask again later.",
                "Better not tell you now.",
                "Cannot predict now.",
                "Concentrate and ask again",
                "Don't count on it.",
                "My reply is no.",
                "My sources say no.",
                "Outlook not so good.",
                "Very doubtful."
             ]
             let questionAnswer = questionResponse[Math.floor(Math.random()*questionResponse.length-1)]
             const embed = new Discord.MessageEmbed()
            .setTitle('Valiuos - 8 Ball - Response')
            .setDescription('The eight ball has responded with \"' + questionAnswer + '\"')
            .setColor(0x28D69F)
            .setThumbnail('https://i.imgur.com/1Zy6Sag.png')
            message.channel.send(embed);
        }
    }
}