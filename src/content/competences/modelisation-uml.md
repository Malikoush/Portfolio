---
title: Modélisation UML
category: technique
level: 8
icon: "📐"
shortDescription: Conception technique et architecture logicielle via diagrammes UML.
relatedRealisations: ["letstyle", "spotymike"]
---

## Définition

La modélisation UML (Unified Modeling Language) est le langage standardisé de représentation des systèmes logiciels. Elle comprend les diagrammes de cas d'usage, de classes, de séquence, d'activité et de déploiement. C'est le langage commun entre architectes, développeurs et chefs de projet pour communiquer une vision technique de manière non ambiguë.

En 2025, l'UML reste incontournable dans les appels d'offres, les dossiers d'architecture et les revues de conception des grandes organisations. Même dans les équipes Agile, un diagramme de séquence ou de classes bien fait vaut mieux qu'une heure de réunion.

## Éléments de preuve

### Let'Style — Dossier d'architecture complet

Pour Let'Style, j'ai produit un dossier d'architecture incluant : diagramme de cas d'usage, diagramme de classes, diagrammes de séquence pour les flux principaux (inscription, commande, personnalisation), et diagramme de déploiement.

**Résultat** : Ce dossier a permis une communication fluide avec les membres de l'équipe et a servi de référence tout au long du développement pour éviter les dérives architecturales. Il a été noté 18/20 par le jury.

→ _Voir la réalisation [Let'Style](/realisations/letstyle)_

### SpotyMike — Modélisation du flux d'intégration API

J'ai produit des diagrammes de séquence détaillant les flux OAuth2 avec Spotify et Deezer, afin que chaque membre de l'équipe comprenne précisément l'enchaînement des appels et les états possibles (succès, erreur, expiration de token).

**Résultat** : Les diagrammes ont évité plusieurs erreurs d'intégration en rendant visible la complexité du flux d'authentification. La mise en œuvre a été réalisée sans bug majeur dès la première itération.

→ _Voir la réalisation [SpotyMike](/realisations/spotymike)_

## Autocritique

Mon niveau est de 8/10. Je maîtrise les diagrammes les plus courants (classes, séquence, cas d'usage). Ma progression porte sur les diagrammes d'état et les notations architecturales plus avancées (C4 Model, ArchiMate). Je tends à produire des modèles légèrement trop détaillés — l'art est de savoir quand s'arrêter et garder un modèle "juste assez" précis.

Cette compétence prend tout son sens en amont du développement. Utilisée en retro (décrire ce qui a déjà été fait), elle perd beaucoup de valeur. Je conseille de la pratiquer systématiquement avant de coder, même pour de petits projets.

## Évolution

Je souhaite me certifier sur l'UML (OMG-UML) et approfondir le C4 Model pour les architectures microservices. Je m'intéresse également à l'Architecture Driven Development (ADD) pour structurer mes choix architecturaux de manière plus rigoureuse.
