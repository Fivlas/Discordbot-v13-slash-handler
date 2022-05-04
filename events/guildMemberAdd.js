const Discord = require('discord.js');

module.exports = {
    name: "guildMemberAdd",
    async execute (member) {

        const newMemberEmbed = new Discord.MessageEmbed()
            .setColor("#44b863")
            .setAuthor({ name: `${member.user.tag}`, iconURL: 'https://cdn.discordapp.com/attachments/875874671407534080/971489614915334184/avatar.png'})
            .setDescription(`Witamy na serwerze! Jesteś naszym **${member.guild.memberCount}** użytkownikiem!`)
            .setThumbnail(member.user.displayAvatarURL({ dynamic: true, size: 512}))
            .setTimestamp()
            .setFooter({ text: `${member.guild.name}`});

            member.guild.channels.cache.get("idkanalu").send({ embeds: [newMemberEmbed]})
    }
}