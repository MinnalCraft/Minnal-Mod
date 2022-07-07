//THIS BOT IS NOT A CLONE ITS 100% CODED BY TEAM MINNAL
module.exports = {
    name: 'ping',
    description: "Use To Know Bot Ping",
    run(client, message, args , Discord){
      const Embed = new Discord.MessageEmbed()
      .setColor('RANDOM')
      .setTitle('USER INFO')
      .setDescription('<@792713065232728135> FROM THE SHADOWS ')
      .setFooter('CREDITS TO TEAM MINNAL')
      .addFields(
        {name: 'About', value: 'SMOOTH WATCHOVER THE HIDDEN MINNAL CRAFT VILLAGE FROM THE SHADOWS LIKE ITACHI UCHIHA'},
        {name: 'Hobby', value: 'SMOOTH LOVES TO PLAY BEDWARS & BGMI AND TO WATCH ANIME'},
        {name: 'Real Name', value: 'UNDEFINED'},
        {name: 'FOLLOW ', value: '[Instagtam](https://www.instagram.com/meb.nnn)'}
      )
      message.channel.send(Embed);
    }
}
//THIS BOT IS NOT A CLONE ITS 100% CODED BY TEAM MINNAL
