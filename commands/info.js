const {
    SlashCommandBuilder
  } = require('@discordjs/builders');
  
  module.exports = {
    data: new SlashCommandBuilder()
      .setName('info')
      .setDescription('Les informations du bot'),
    async execute(interaction, client) {
      const embed = new client.discord.MessageEmbed()
      .setColor("WHITE")
      .setDescription(`**<:administration:982999357341200415> - A propos du bot**
        
        Vous vous demandez à quoi je sers ? 
        > Pour le moment, pas à grand chose. Je répond simplement **feur** aux **quoi** que je détecte.
        
        **<:earlydev:947081788105318430>** Je suis actuellement codé sous **discord.js**. Mon créateur n'est pas plus drôle que ça. Si vous avez des questions vous pouvez vous rendre sur le [serveur de support](https://discord.gg/fzjPGUar8M)
        
        **<:stats:947081893411717130>** Je suis intégré d'un système de statistiques quotidienne, hebdomadaire et un total du tout. Pour consulter les statistiques vous pouvez effectuer la commande \`!stats\`.

        **<:category_red:982998892046077962>** Si voous souhaitez m'inviter sur l'un de vos serveur, vous pouvez m'ajouter via la commande \`!invite\`, ou alors directement sur mon profil.

        **<:discovery:947080578874884116>** Enfin, pour en terminer, le bot est en amélioration constante (même si vous ne le constatez pas). Si vous avez des suggestions, n'hésitez pas à les faire sur le [serveur de support](https://discord.gg/fzjPGUar8M) ou sur le [serveur de développement](https://discord.gg/2Z3Z5Z2Z2Z). 
        
        `)        .setFooter({
            text: "Drôle non ? C'est français."
            })       
            .setTimestamp();
  
      await interaction.reply({
        embeds: [embed]
      });
    },
  };