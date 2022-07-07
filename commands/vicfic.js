//THIS BOT IS NOT A CLONE ITS 100% CODED BY TEAM MINNAL
module.exports = {
    name: 'ping',
    description: "Use To Know Bot Ping",
    run(client, message, args , Discord){
      const Embed = new Discord.MessageEmbed()
      .setColor('RANDOM')
      .setTitle('USER INFO')
      .setDescription('<@708622411779670036> THE COOODERRRRR')
      .setFooter('CREDITS TO TEAM MINNAL')
      .addFields(
        {name: 'About', value: 'VICFIC IS A PYTHON EXPERT WHO CODED MINNUZZ'},
        {name: 'Hobby', value: 'VICFIC LIVES TO CODE MAILY PYTHON AND TO PLAY VALORANT'},
        {name: 'Real Name', value: 'UNDEFINED'},
        {name: 'FOLLOW ', value: '[Youtube](https://www.youtube.com/channel/UCf8H1ar74cpo04O0mENRgqQ)'}
      )
      message.channel.send(Embed);
    }
}
//THIS BOT IS NOT A CLONE ITS 100% CODED BY TEAM MINNAL
