//THIS BOT IS NOT A CLONE ITS 100% CODED BY TEAM MINNAL
module.exports = {
    name: 'smooth',
    description: "about smooth",
    run(client, message, args , Discord){
    message.delete();
      const Embed = new Discord.MessageEmbed()
      .setColor('RANDOM')
      .setTitle('ABOUT ME')
      .setDescription('MY NAME IS MINNAL MOD')
      .setFooter('MINNAL CRAFT OFFICIAL BOT')
      .addFields(
        {name: 'Developed By', value: 'TEAM MINNAL'},
        {name: 'Ping', value: `${client.ws.ping} ms`},
        {name: 'Version', value: `${require("../package.json").version}`},
        {name: 'Servers', value: `${client.guilds.cache.size}`},
        {name: 'Discord.js', value: `v12.5.3`}
      )
      message.channel.send(Embed);
    }
}
//THIS BOT IS NOT A CLONE ITS 100% CODED BY TEAM MINNAL
