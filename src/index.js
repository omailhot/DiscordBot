const { Client } = require('discord.js');

// require('dotenv').config(); // uses .env file for debugging

const client = new Client({ 
  intents: [
    "GUILDS", 
    "GUILD_MEMBERS"
  ] 
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity("Purple Army Cx", {type: "PLAYING"});
});

const roleId = "451396167276822529";

client.on("guildMemberAdd", (member) => {
  member.roles.set([roleId]);
});

client.login(process.env.TOKEN);
