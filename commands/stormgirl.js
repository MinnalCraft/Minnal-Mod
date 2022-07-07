//THIS BOT IS NOT A CLONE ITS 100% CODED BY TEAM MINNAL
module.exports = {
    name: 'stormgirl',
    description: "about stormgirl",
    run(client, message, args , Discord){
      const Embed = new Discord.MessageEmbed()
      .setColor('RANDOM')
      .setTitle('USER INFO')
      .setDescription('<@914175792085344257> THE CUTE GIRL')
      .setFooter('CREDITS TO TEAM MINNAL')
      .addFields(
        {name: 'About', value: 'STORMGIRL IS ALSO KNOWN AS THE GREAT MEMER OF MINNAL CRAFT'},
        {name: 'Hobby', value: 'STORM GIRL LOVE TO PLAP VALORANT AND ROBLOX AND ALSO LOVES TO WATCH ANIME'},
        {name: 'Real Name', value: 'UNDEFINED'},
        {name: 'Relation', value: 'Mingle'},
        {name: 'FOLLOW ', value: '**NOTING YET**'}
      )
      message.channel.send(Embed);
    }
}
//THIS BOT IS NOT A CLONE ITS 100% CODED BY TEAM MINNAL
