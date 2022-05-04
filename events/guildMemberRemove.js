const Discord = require('discord.js');

module.exports = {
    name: "guildMemberRemove",
    async execute (member) {

        const leaveMemberEmbed = new Discord.MessageEmbed()
            .setColor("#eb4034")
            .setAuthor({ name: `${member.user.tag}`, iconURL: 'https://cdn.discordapp.com/attachments/875874671407534080/971489614915334184/avatar.png'})
            .setDescription(`${member.user.tag} wyleciał z serwera zostało nas **${member.guild.memberCount}**!`)
            .setThumbnail(member.user.displayAvatarURL({ dynamic: true, size: 512}))
            .setTimestamp()
            .setFooter({ text: `${member.guild.name}`});

            member.guild.channels.cache.get("idkanalu").send({ embeds: [leaveMemberEmbed]})
    }
}

