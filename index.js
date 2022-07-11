const express = require('express');
const app = express();
const port = 3000;
//THIS BOT IS NOT A CLONE ITS 100% CODED BY TEAM MINNAL
app.get('/', (req, res) => res.send('THIS BOT IS NOT A CLONE ITS 100% CODED BY TEAM MINNAL'));
//THIS BOT IS NOT A CLONE ITS 100% CODED BY TEAM MINNAL
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
//THIS BOT IS NOT A CLONE ITS 100% CODED BY TEAM MINNAL
const Discord = require('discord.js');
const client = new Discord.Client();
//THIS BOT IS NOT A CLONE ITS 100% CODED BY TEAM MINNAL
const fs = require("fs");
const prefix = "~"
client.commands = new Discord.Collection();
//THIS BOT IS NOT A CLONE ITS 100% CODED BY TEAM MINNAL
const commands = fs.readdirSync("./commands").filter(file => file.endsWith(".js"));
for(file of commands) {
  const commandName = file.split(".")[0]
  const command = require(`./commands/${commandName}`)
  client.commands.set(commandName, command) 
}
//THIS BOT IS NOT A CLONE ITS 100% CODED BY TEAM MINNAL
client.once('ready', () => {
  console.log(`THIS BOT IS NOT A CLONE ITS 100% CODED BY TEAM MINNAL`);
});
//THIS BOT IS NOT A CLONE ITS 100% CODED BY TEAM MINNAL
client.on('message', message => {
if(message.content.startsWith(prefix)) {
  const args = message.content.slice(prefix.length).trim().split(/ +/g)
  const commandName = args.shift()
  const command = client.commands.get(commandName)
  if(!command) return
  command.run(client, message, args , Discord)
}
})
//THIS BOT IS NOT A CLONE ITS 100% CODED BY TEAM MINNAL
client.on('message', msg => {
  if (msg.content === '<@994194753518305381>') {
    msg.reply(`**USE ~help FOR MY HELP**`);
  }
});
//THIS BOT IS NOT A CLONE ITS 100% CODED BY TEAM MINNAL
client.login(process.env.TOKEN); 
//THIS BOT IS NOT A CLONE ITS 100% CODED BY TEAM MINNAL
