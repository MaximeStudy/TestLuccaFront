# Sujet
## Hello world chat

Vous avez fait des études en informatique ou des études généralistes avec une passion pour l’informatique. Vous aimez plus particulièrement ce qui touche au web, à l’expérience utilisateur, sans pour autant délaisser les tests unitaires et autres options de debugging de votre IDE favori. Vous êtes prêt à être jugé sur pièce. Alors, ce test pourrait bien être la prochaine étape de votre nouvelle vie.

Le test consiste à réaliser une single page application, qui permet à deux utilisateurs connectés de s’envoyer des messages.

À partir de là, vous devrez rajouter au moins une fonctionnalité de votre choix pour faire la différence !

Exemples de fonctionnalités :
- Responsive design
- Sauvegarde locale de l'historique
- Gestion des photos
- Un seul utilisateur par onglet du navigateur
- N utilisateurs
- Etc.

Ce projet doit être réalisé sans code serveur, c’est-à-dire en Javascript/HTML/CSS. Il est fortement recommandé d’utiliser un framework mais vous devez écrire un minimum de code pour montrer que vous savez ce que vous faites.


Vous serez notamment jugé sur la maintenabilité de votre code : lisibilité, extensibilité, non-répétitivité, homogénéité…


Envoyez-nous vos prouesses par mail à mynextjob@lucca.fr.


Si le projet est concluant, on vous rappelle pour discuter de vos choix techniques et évoquer votre avenir chez Lucca.

# Implémentation

Pour réaliser le projet, j'ai utilisé Angular pour le client front, Asp.net Core pour gérer les messages temps réels avec SignalR, IdentityServer pour gérer la connexion (avec ef et sql server). 
Je n'ai pas très bien compris la partie du sujet 'Ce projet doit être réalisé sans code serveur'. A moins d'envoyer les messages en p2p, il est difficile de réaliser l'envoi sans serveur. Le projet que je viens de réaliser ne répond pas à l'énoncé du sujet (TypeScript, serveurs). N'ayant pas de eu réponses à mes questions par mail, j'ai décidé de continuer dans cette voie. Cela me permetra au moins de monter en compétence sur Angular, techno sur laquelle je n'ai jamais travaillé.

## Exécuter le projet

Avant de lancer le projet avec Visual Studio (ou commandes), ne pas oublier de lancer la migration 

`dotnet ef database update`

Le projet à été initalisé avec https://docs.microsoft.com/fr-fr/aspnet/core/client-side/spa/angular?view=aspnetcore-5.0&tabs=visual-studio, puis j'ai migré le client Angular dans la version 12. Le plus compliqué à été de refaire fonctionner les fichiers TypeScript du dossier api-authorization.
