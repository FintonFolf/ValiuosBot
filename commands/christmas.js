const Discord = require('discord.js');
const { executionAsyncResource } = require('async_hooks');
const { off } = require('process');

module.exports = {
    name: 'christmas',
    description: 'Displays countdown for Christmas',
    async execute(client, message, args){
        var currentDate = new Date();
        var countdownDay = ("December 25,")
        var currentDay = currentDate.getDate();
        currentYear = currentDate.getFullYear();
        var currentTime = currentDate.getTime();
        var currentMonth = (currentDate.getMonth() + 1)
        if (currentMonth >= 12 && currentDay > 25){
            currentYear = currentYear + 1;
        }
        var xmasDay = new Date(countdownDay + currentYear);
        var timeDifference = xmasDay - currentTime;
        var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        var hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
        if (currentMonth == 12 && currentDay == 25){
            const embed = new Discord.MessageEmbed()
            .setTitle('Valiuos - Christmas')
            .setDescription('Merry Christmas, go enjoy some hot cocoa and sit around the fire.')
            .setColor(0x28D69F)
            .setFooter('Countdown is relative to Eastern Standard Time (UTC−05:00)', 'https://i.imgur.com/041f3zv.png')
            .setThumbnail('https://i.imgur.com/pKncbHT.png')
            message.channel.send(embed);
        } else {
            const embed = new Discord.MessageEmbed()
            .setTitle('Valiuos - Christmas')
            .setDescription('Christmas ' + currentYear + ' will begin in ' + days + ' days, ' + hours + ' hours, ' + minutes + ' minutes, and ' + seconds + ' seconds.')
            .setColor(0x28D69F)
            .setFooter('Countdown is relative to Eastern Standard Time (UTC−05:00)', 'https://i.imgur.com/041f3zv.png')
            .setThumbnail('https://i.imgur.com/pKncbHT.png')
            message.channel.send(embed);
        }
    }
}