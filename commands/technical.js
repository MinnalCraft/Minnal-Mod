//THIS BOT IS NOT A CLONE ITS 100% CODED BY TEAM MINNAL
module.exports = {
    name: 'smooth',
    description: "about smooth",
    run(client, message, args , Discord){
      const Embed = new Discord.MessageEmbed()
      .setColor('RANDOM')
      .setTitle('USER INFO')
      .setDescription('<@770667833486475265> THE CYBER GUY')
      .setFooter('CREDITS TO TEAM MINNAL')
      .addFields(
        {name: 'About', value: 'TECHNICAL PLAYZZ THE TECHNO OF MINNAL CRAFT HE IS ALSO KNOWN AS HABIBI'},
        {name: 'Hobby', value: 'HE LOVES TO DEVELOP AND HE ALSO IS STARTING A MC HOST'},
        {name: 'Real Name', value: 'UNDEFINED'},
        {name: 'Relation', value: 'Single'},
        {name: 'FOLLOW ', value: '**NOTHING YET**'}
      )
      message.channel.send(Embed);
    }
}
//THIS BOT IS NOT A CLONE ITS 100% CODED BY TEAM MINNAL
