//THIS BOT IS NOT A CLONE ITS 100% CODED BY TEAM MINNAL
module.exports = {
    name: 'ping',
    description: "Use To Know Bot Ping",
    run(client, message, args , Discord){
      const Embed = new Discord.MessageEmbed()
      .setColor('RANDOM')
      .setTitle('USERS')
      .setDescription('`~` **+** `USERNAME`')
      .setFooter('MINNAL CRAFT OFFICIAL BOT')
      .addFields(
        {name: 'USERS', value: '``` mallukid , lexcrafter , koku , vicfic , smooth , stormgirl , technical ```'}
      )
      message.channel.send(Embed);
    }
}
//THIS BOT IS NOT A CLONE ITS 100% CODED BY TEAM MINNAL
