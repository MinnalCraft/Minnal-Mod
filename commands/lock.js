module.exports = {
    name: 'Lock',
    description: "Lock Channel",
    async run(client, message, args, Discord) {
    message.delete();
        const Embed1 = new Discord.MessageEmbed()
      .setColor('#00FF00')
      .setTitle('LOCKED')
      .setDescription('**U വാഴ, LOCKED EE CHANNEL**')
      .setFooter('MINNAL CRAFT OFFICIAL BOT')

        const Embed2 = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('ERROR')
      .setDescription('`U വാഴ, നിങ്ങൾക്ക് PERMISSION ILLA`')
        const Embed3 = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('ERROR')
      .setDescription('`U വാഴ, എനിക്ക് PERMISSION ILLA`')
      .setFooter('MINNAL CRAFT OFFICIAL BOT')

    if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send(Embed2);
    if(!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send(Embed3)

    const role = message.guild.roles.cache.get('931148475272421386');
    let lockChannel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]);
    if (!lockChannel) lockChannel = message.channel;

    await lockChannel.updateOverwrite(role, {
      SEND_MESSAGES: false
    }).catch(err => console.log(err));
    message.channel.send(Embed1);
  }
}
