const Discord = require('discord.js');
const { executionAsyncResource } = require('async_hooks');

module.exports = {
    name: 'christmas',
    description: 'Displays countdown for Christmas',
    async execute(client, message, args){

        currentYear = new Date().getFullYear();
        xmasDay = new Date("December 25," + currentYear);
        
        var currentDate = new Date().getTime();
        
        var timeDifference = xmasDay - currentDate;
      
        var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        var hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
        

        const embed = new Discord.MessageEmbed()
        .setTitle('Valiuos - Christmas')
        .setDescription('Days: ' + days + ' Hours: ' + hours + ' Minutes: ' + minutes + ' Seconds: ' + seconds)
        .setColor(0x28D69F)
        .setFooter('Countdown is relative to Eastern Standard Time (UTC−05:00)', 'https://i.imgur.com/041f3zv.png')
        .setThumbnail('https://i.imgur.com/8kK5AKY.png')
        message.channel.send(embed);
    }
}