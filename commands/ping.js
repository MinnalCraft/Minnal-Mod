//THIS BOT IS NOT A CLONE ITS 100% CODED BY TEAM MINNAL
module.exports = {
    name: 'ping',
    description: "Use To Know Bot Ping",
    run(client, message, args , Discord){
    message.delete();
      const Embed = new Discord.MessageEmbed()
      .setColor('RANDOM')
      .setTitle('BOT PING')
      .setDescription(`Pong! ${client.ws.ping} ms`)
      .setFooter('THARAVAD NETWORK')
      
      message.channel.send(Embed);
    }
}
//THIS BOT IS NOT A CLONE ITS 100% CODED BY TEAM MINNAL
