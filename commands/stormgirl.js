//THIS BOT IS NOT A CLONE ITS 100% CODED BY TEAM MINNAL
module.exports = {
    name: 'stormgirl',
    description: "about stormgirl",
    run(client, message, args , Discord){
      const Embed = new Discord.MessageEmbed()
      .setColor('RANDOM')
      .setTitle('USER INFO')
      .setDescription('<@914175792085344257> THE CUTE GIRL')
      .setFooter('THARAVAD NETWORK')
      .addFields(
        {name: 'About', value: 'STORMGIRL IS ALSO KNOWN AS THE GREAT MEMER OF THARAVAD NETWORK'},
        {name: 'Hobby', value: 'STORM GIRL LOVE TO PLAY VALORANT AND ROBLOX AND ALSO LOVES TO WATCH ANIME MAINLY (NARUTO)'},
        {name: 'Real Name', value: 'Undefined'},
        {name: 'Relation', value: 'Mingle'},
        {name: 'FOLLOW ', value: '**NOTING YET**'}
      )
      message.channel.send(Embed);
    }
}
//THIS BOT IS NOT A CLONE ITS 100% CODED BY TEAM MINNAL
