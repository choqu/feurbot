# Le bot qui dit quoi feur

C'est un bot discord très simple qui fut réalisé en même pas 1h, son but ? répondre à tous les "quoi" qu'il croise.
Juste pour énerver les gens.

## Sommaire

* [Conditions](#Conditions)
* [Débuter](#debuter)
* [Features & Commands](#features--commands)
* [Common errors](#common-errors)
* [Contributing](#contributing)
* [Author](#author)
* [License](#license)

## Conditions

- [Node](https://nodejs.org/en/) - Version 16 ou plus
- [NPM](https://www.npmjs.com/)

## debuter

Tout d'abord, vérifiez que vous avez tout ce dont il y a besoin d'installer sur votre machine.

### Installation

```bash
# Cloner le dossier
git clone https://github.com/choqu/feurbot.git

# Entrer dans le dossier
cd feurbot/

# Installer les modules
npm install
```

### Permissions du bot

Assurez-vous que votre bot a la portée d'application `applications.commands` activée, qui se trouve sous l'onglet `OAuth2` sur le [portail des développeurs](https://discord.com/developers/applications/)

Activez `Server Members Intent` et `Message Content Intent` qui se trouvent sous l'onglet `Bot` sur le [developer portal](https://discord.com/developers/applications/)

### Configuration

Après avoir clone le projet, rendez-vous dans config.json pour configurer le bot comme bon vous semble !

### Démarrer l'application

Avant de démarrer le bot, assurez vous d'avoir ajouter les slashcommands dans l'API ! vous pouvez effectuer cela avec la commande `npm deploy`.

Pour lancer le bot :
```bash
npm start
```

## Contribuer

Vous êtes le bienvenue de contribuer au projet en le téléchargeant par exemple !

## Auteur

[choqu](https://github.com/choqu/)


## License

Ce projet est sous isc-licence - voir le fichier [LICENSE.md](LICENSE) pour plus de détails.
