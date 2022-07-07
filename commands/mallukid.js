//THIS BOT IS NOT A CLONE ITS 100% CODED BY TEAM MINNAL
module.exports = {
    name: 'ping',
    description: "Use To Know Bot Ping",
    run(client, message, args , Discord){
      const Embed = new Discord.MessageEmbed()
      .setColor('RANDOM')
      .setTitle('USER INFO')
      .setDescription('<@876380482378539090> THE VAZHA')
      .setFooter('CREDITS TO TEAM MINNAL')
      .addFields(
        {name: 'About', value: 'MALLU KID IS THE GREATEST VAZHA IN MINNAL CRAFT'},
        {name: 'Hobby', value: 'MALLU KID LIKES TO EAT & COOK AND ALSO LOVE TO PLAY BEDWARS,BGMI & LUDO'},
        {name: 'Real Name', value: 'George K Chacko'},
        {name: 'FOLLOW ', value: '[Instagtam](https://www.instagram.com/_mallu_kid_2006_)'}
      )
      message.channel.send(Embed);
    }
}
//THIS BOT IS NOT A CLONE ITS 100% CODED BY TEAM MINNAL
