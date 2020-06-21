require('dotenv').config();
let ver = process.env.NODE_ENV;

const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '.';
const name = 'Valiuos';
const fs = require('fs');

global.prefix = prefix;
global.name = name;

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
            client.commands.get('ping').execute(message, args);
        break;
        case "help":
            client.commands.get('help').execute(message, args);
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
    client.user.setActivity(` plysm.cf | ${prefix}help`);
})

client.login(process.env.CLIENT_TOKEN);
