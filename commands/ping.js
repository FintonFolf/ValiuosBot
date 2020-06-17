const Discord = require('discord.js');
const { executionAsyncResource } = require('async_hooks');

module.exports = {
    name: 'ping',
    description: 'checks bot latency',
    execute(message, args){
        message.channel.send('pong!');
    }
}