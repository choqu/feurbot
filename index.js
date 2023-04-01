const {
  Client,
  Collection,
  Intents,
  GatewayIntentBits
} = require('discord.js');
const config = require('./config.json');
require('dotenv').config()
const fs = require('fs');

const client = new Client({ intents: [Intents.FLAGS.GUILDS]});

const { SlashCommandBuilder } = require('@discordjs/builders')
const Discord = require('discord.js');

client.discord = Discord;
client.config = config;





client.on('ready', async () => {
  console.log(`Connecté en tant que ${client.user.tag}!`)

  setTimeout(() => {
    client.user.setStatus('online')
  const statuses = [
      () => `!stats | ${client.guilds.cache.size} serveurs`,
      () => `/info | ${client.guilds.cache.size} serveurs`,
      () => `/invite | ${client.guilds.cache.size} servers`
  ]
  var i = 0
  setInterval(() => {
      client.user.setActivity(statuses[i](), {type: 'WATCHING',})
      i = ++i% statuses.length
  }, 20000)
}, 100)

})

let daily = 0; // nombre de "feurs" dans la journée
let weekly = 0; // nombre de "feurs" dans la semaine
let total = 0; // nombre de "feurs" au total

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
    "de neuf",
    "Si vous êtes une âme charitable, vous pouvez donnez votre avis ? https://forms.gle/eStBCzfTffLW7pMr6 <3"
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



client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.data.name, command);
};



client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;

  const command = client.commands.get(interaction.commandName);
  if (!command) return;

  try {
    await command.execute(interaction, client, config);
  } catch (error) {
    console.error(error);
    return interaction.reply({
      content: 'Une erreur s\'est produite durant l\'éxècution de la commande.',
      ephemeral: true
    });
  };
});




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
          message.client.channels.cache.get(config.logs).send("`" + message.author.username + ", ID:" + message.author.id + "` **a dit** : " + message.content+"\n\n**Dans le salon** : `" + message.channel.name + "` **ID** : `" + message.channel.id + "`\nDu serveur : `" + message.guild.name + "` **ID** : `" + message.guild.id +"`.\n-\n")

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

})



client.login(config.token)