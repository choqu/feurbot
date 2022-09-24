const {
  Client,
  Collection,
  Intents
} = require('discord.js');
const config = require('./config.json');

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS],
});

const Discord = require('discord.js');
const db = require("quick.db");

client.discord = Discord;
client.config = config;





client.on('ready', () => {
  console.log(`Connecté en tant que ${client.user.tag}!`)

  setTimeout(() => {
    client.user.setStatus('online')
    //client.user.setActivity(`!invite / !stats | ${client.guilds.cache.size} serveurs`, {type: 'WATCHING'})
  const statuses = [
      () => `!invite / !stats | ${client.guilds.cache.size} serveurs`
  ]
  var i = 0
  setInterval(() => {
      client.user.setActivity(statuses[i](), {type: 'WATCHING',})
      i = ++i% statuses.length
  }, 10000)
}, 100)


})
let daily = 11;
let weekly = 125;
let total = 3138;

setInterval(() => {
  client.channels.cache.get(config.logs).send(`**<:stats:947081893411717130> - Actualisation des statistiques;**
  <:category_red:982998892046077962> Aujourd'hui: \`${daily}\`
  <:category_red:982998892046077962> Cette semaine: \`${weekly}\`
  <:category_red:982998892046077962> Au total: \`${total}\`
  
  > Les statistiques du jour ont été remises à **0**.`)
  daily = 0;
}, 86400000) 

setInterval(() => {
  client.channels.cache.get(config.logs).send(`**<:stats:947081893411717130> - Actualisation des statistiques;**
  <:category_red:982998892046077962> Aujourd'hui: \`${daily}\`
  <:category_red:982998892046077962> Cette semaine: \`${weekly}\`
  <:category_red:982998892046077962> Au total: \`${total}\`
  
  > Les statistiques de la semaine ont été remises à **0**.`)
  weekly = 0;
}, 604800000) 


var feur = [
    "feur.",
    "Feur !",
    "Feur ?",
    "Feur.",
    "Feur :rofl: ",
    "Chi :rofl:",
    "fure lol",
    "drilataire mdrr",
    "https://tenor.com/view/feur-theobabac-quoi-gif-24294658",
    "https://tenor.com/view/feur-th%C3%A9obabac-not-funny-gif-22130648",
    "https://tenor.com/view/feur-meme-gif-24407942",
    "https://tenor.com/view/feur-heart-locket-vred-quoi-quoi-feur-gif-22321210",
    "tuor",
    "https://tenor.com/view/duke-dukesilvee-dukesuke-leperchoir-siscord-gif-22595611",
    "anticonstitutionnellemement. Tsé le bot qu'a rien compris xD. UwU ^^",
    "Druplé",
    "La loumpour",
    "Artz",
    "de neuf"
]

var quoi = [
    "quoi ?",
    "Quoi ?",
    "pourquoi ",
    "quoi",
    "Quoi",
    "koi",
    "Koi",
    "Pourquoi?",
    "quoi?",
    "Quoi?",
    "Quoii?",
    "quoii?",
    "quoii",
    "Quoii",
    "tfq",
    "tfk",
    "vfq",
    "vfk",
    "coi",
    "tfq ?",
    "tfk ?",
    "vfq ?",
    "vfk ?",
    "tfq?",
    "tfk?",
    "vfq?",
    "vfk?",


]






client.on('messageCreate', async message => {
  const args = message.content.trim().split(/ +/g);


    let random = Math.floor(Math.random() * feur.length);


    if (message.author.bot) return;

    for (var i = 0; i < quoi.length; i++) {
        if (message.content.toLowerCase().endsWith(quoi[i])) {
          message.channel.send(feur[random]).catch(error => {
            console.log(error)
          });
          daily += 1
          weekly += 1
          total += 1
          message.client.channels.cache.get(config.stats).send("`" + message.author.username + ", ID:" + message.author.id + "` **a dit** : " + message.content+"\n\n**Dans le salon** : `" + message.channel.name + "` **ID** : `" + message.channel.id + "`\nDu serveur : `" + message.guild.name + "` **ID** : `" + message.guild.id +"`.\n-\n")

        }
      }



      if (message.content.startsWith('!stats')){
        const embed = new Discord.MessageEmbed()
        .setDescription(`**<:stats:947081893411717130> - Mes statistiques:**
        
        Je suis un bot qui répond "feur" à chaque **quoi** en fin de phrase que je rencontre.
        
        <:folder:947081868476567602> Ci-dessous, vous pouvez voir mes statistiques:
        Le nombre de **feur** que j'ai envoyé aujourd'hui : \`${daily}\`.
        Le nombre de **feur** que j'ai envoyé cette semaine : \`${weekly}\`.
        Le nombre de **feur** que j'ai envoyé au total : \`${total}\`.
        
        *Attention, ces données peuvent changer du jours au lendemain. Elles ne sont pas constantes !*`)
        .setTimestamp()
        .setColor("#0db19e")
        .setFooter({text: 'On peut le dire, je suis drôle.'})

        message.channel.send({embeds: [embed]}).catch(error => {
          console.log(error)
        });
      }
  

      if (message.content.match(`<@!?${client.user.id}>`)){
        message.channel.send(`J'ai toujours su que tu étais adopté`).catch(error => {
          console.log(error)
        });
      }
    

      if (message.content.startsWith('!invite')){
          message.channel.send('Voici mon lien d\'invitation: https://discord.com/oauth2/authorize?client_id=966331391354748928&permissions=8&scope=bot').catch(error => {
            console.log(error)
          });
      }


      if (message.content.includes('UwU')){
        message.channel.send(`arrête avec tes UwU t'as crus on était à la gay pride ?`).catch(error => {
          console.log(error)
        });
      };







  

})




client.login(config.token)