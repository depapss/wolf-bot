const discord = require ('discord');
const client = new discord.client();
console.log("script by dream");

client.on("ready",()=>{
	let channel = client.channels.get("537526018395602964")
setInterval(function(){
	channel.send('السلام عليكم');
},30) 
})


client.login(process.env.bot_token);