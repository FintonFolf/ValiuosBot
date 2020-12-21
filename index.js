require('dotenv').config();
let ver = process.env.NODE_ENV;

const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '.';
const owner = '214843390863343616';
const fs = require('fs');

global.prefix = prefix;
global.owner = owner;

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`)
    client.commands.set(command.name, command)
}

client.on('message', message => {
    let args = message.content.substring(prefix.length).split(" ");
    if (!message.content.startsWith(prefix)) return;

    switch (args[0]) {
        case "ping":
            client.commands.get('ping').execute(client, message, args);
        break;
        case "help":
            client.commands.get('help').execute(client, message, args);
        break;
        case "clear":
            client.commands.get('clear').execute(client, message, args);
        break;
        case "ban":
            client.commands.get('ban').execute(client, message, args);
        break;
        case "kick":
            client.commands.get('kick').execute(client, message, args);
        break;
        case "8ball":
            client.commands.get('8ball').execute(client, message, args);
        break;
        case "roll":
            client.commands.get('roll').execute(client, message, args);
        break;
        case "coinflip":
            client.commands.get('coinflip').execute(client, message, args);
        break;
        case "shutdown":
            client.commands.get('shutdown').execute(client, message, args);
        break;
        case "guilds":
            client.commands.get('guilds').execute(client, message, args);
        break;
        case "christmas":
            client.commands.get('christmas').execute(client, message, args);
        break;
        case "newyear":
            client.commands.get('newyear').execute(client, message, args);
        break;
    }
})

client.on('ready', () => {
    const files = fs.readdirSync('./commands/');
    files.forEach(file => {
        if(file.endsWith('.js')){
            console.log(`Loaded ${file}`);
        }
    })
    console.log(`Loaded ${files.length} commands`)
    console.log(`Successfully connected to ${client.guilds.cache.size} guilds`)
    console.log(`${client.user.tag} successfully logged in`);
    client.user.setActivity(` Start with ${prefix}help`);
})

client.login(process.env.CLIENT_TOKEN);
