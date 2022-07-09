//THIS BOT IS NOT A CLONE ITS 100% CODED BY TEAM MINNAL
module.exports = {
    name: 'smooth',
    description: "about smooth",
    run(client, message, args , Discord){
      const Embed = new Discord.MessageEmbed()
      .setColor('BLACK')
      .setTitle('USER INFO')
      .setDescription('<@770333950874091551> FROM THE SHADOWS ')
      .setFooter('MINNAL CRAFT OFFICIAL BOT')
      .addFields(
        {name: 'About', value: 'SMOOTH WATCHOVER THE HIDDEN MINNAL CRAFT VILLAGE FROM THE SHADOWS LIKE ITACHI UCHIHA'},
        {name: 'Hobby', value: 'SMOOTH LOVES TO PLAY BEDWARS & BGMI AND TO WATCH ANIME'},
        {name: 'Real Name', value: 'UNDEFINED'},
        {name: 'Relation', value: 'Single'},
        {name: 'FOLLOW ', value: '[Instagtam](https://www.instagram.com/meb.nnn)'}
      )
      message.channel.send(Embed);
    }
}
//THIS BOT IS NOT A CLONE ITS 100% CODED BY TEAM MINNAL
