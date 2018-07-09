  const Discord = require("discord.js");
const client = new Discord.Client();
var TOKEN = "NDY1OTQ3MzU1NTc3OTc0Nzg1.DiU6zw.mPFuAJf_cicmoeNcZg9kan2l9QA";



client.on("ready", () => {
    setInterval(function(){
        client.guilds.get("388462969362710558").roles.find("name", "Members").edit({
            color : "RANDOM"
        });
    },1000)
}).login(TOKEN);
  
