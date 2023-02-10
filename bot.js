const {Client, GatewayIntentBits} = require('discord.js')
const path = require('path')
require('dotenv/config')

const client = new Client({
    intents: [
  GatewayIntentBits.Guilds,
  GatewayIntentBits.GuildMessages,
  GatewayIntentBits.MessageContent,
  GatewayIntentBits.GuildMembers,
    ],
  })


  client.on('ready', () => {
    console.log("bot is online")
  })

    client.on('messageCreate', (message) => { 
        // Only listen for messages in a specific channel
        if (message.channel.id !== '') return; //id here
        
        // Only listen for messages that contain the word "vouch"
        if (!message.content.toLowerCase().includes('vouch')) return;
        
        // Get the current count from the user's nickname
        let count = 0;
        if (message.member.nickname) {
            const match = message.member.nickname.match(/\+(\d+)/);
            if (match) count = parseInt(match[1]);
        }
        
        // Increment the count
        count += 1;
        
        // Update the user's nickname
        message.guild.members.cache.get(client.user.id).setNickname(`${count} Vouches`);
        })

client.login(process.env.TOKEN)
d
