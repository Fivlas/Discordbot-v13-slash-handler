const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v10");
require("dotenv").config();

module.exports = {
    name: "ready",
    once: true,
    execute (client, commands) {
        console.log("BOT ONLINE / Fivlas#9571");
        console.log("Poczekaj na wczytanie komend ...");

        const CLIENT_ID = client.user.id;
    
        const rest = new REST({
            version: "10"
        }).setToken(process.env.TOKEN);
    
        (async () => {
            try {
                if (process.env.ENV === "production") {
                    await rest.put(Routes.applicationCommands(CLIENT_ID), {
                        body: commands
                    });
                    console.log("Wczytano komendy na wszystkich serwerach");
                } else {
                    await rest.put(Routes.applicationGuildCommands(CLIENT_ID , process.env.GUILD_ID), {
                        body: commands
                    });
                    console.log("Wczytano komendy na 1 serwerze");
                }
            } catch (err) {
                if (err) console.error(err);
            }
        })();
    }
}