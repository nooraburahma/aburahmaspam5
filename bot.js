const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("564392299606441984")
setInterval(function() {
channel.send(`564392299606441984`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
