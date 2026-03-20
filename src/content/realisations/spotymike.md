---
title: SpotyMike
description: Application musicale intelligente connectée aux APIs Spotify et Deezer.
img: /assets/IMG_spoty.png
img_alt: Interface de l'application musicale SpotyMike
date: 2024-05-15
tags:
  - API
  - JavaScript
  - Node.js
relatedCompetences:
  ["api-integration", "agilite", "gestion-de-projet", "design-ux"]
---

## Présentation du projet

SpotyMike est une application web musicale intelligente agissant comme un agrégateur et un moteur de recommandation croisé. L'objectif était de créer une interface unique permettant à un utilisateur d'interagir simultanément avec les catalogues de Spotify et Deezer, de fusionner des playlists et d'obtenir des recommandations basées sur des algorithmes d'analyse audio métadonnées.

## Objectifs, Contexte et Enjeux

**Contexte** : Projet académique de fin d'année réalisé en équipe de 4 étudiants sur une durée de 3 mois, simulant des conditions de démarrage de startup.
**Objectif client** : Fournir une preuve de concept (POC) fonctionnelle d'un agrégateur musical avec une expérience utilisateur fluide.
**Enjeux / Risques** :

- _Techniques_ : Gérer deux systèmes d'authentification OAuth différents et harmoniser deux formats de données hétérogènes.
- _Organisationnels_ : Livrer un produit stable dans un temps limité avec une équipe étudiante aux emplois du temps fragmentés.
- _Pour l'équipe_ : Risque de blocage lié aux limites de quota imposées par les APIs publiques (rate limiting).

## Étapes de réalisation (Ce que j'ai fait)

En tant que référent technique et développeur full-stack sur ce projet, j'ai pris en charge les étapes suivantes :

1. **Architecture** : Conception de l'architecture backend (Node.js/Express) pour servir de proxy entre le client et les APIs tierces, masquant ainsi les clés d'API.
2. **Authentification** : Implémentation du flux OAuth2 pour la connexion au compte Spotify de l'utilisateur.
3. **Pivots techniques** : Suite à des restrictions imprévues de l'API Deezer à mi-projet, j'ai coordonné le pivot de l'équipe vers une solution axée principalement sur Spotify avec un fallback intelligent.
4. **Intégration UI** : Développement de composants front-end réactifs et intégration d'un player audio web sur mesure inspiré des standards du marché.

## Acteurs et Interactions

- **Mon rôle** : Lead développeur et facilitateur technique.
- **L'équipe** : 3 autres développeurs orientés front-end et UI.
- **Interactions majeures** : J'ai assuré la coordination via des rituels agiles (daily stand-ups allégés, revues de code) pour synchroniser la consommation des APIs backend avec le développement de l'interface par le reste de l'équipe.

## Résultats

- **Pour le projet** : L'application a été livrée dans les délais fixés. Toutes les fonctionnalités critiques du cahier des charges ont été implémentées et démontrées avec succès lors de la soutenance.
- **Pour moi** : Une montée en compétence majeure sur la gestion des architectures orientées services et l'authentification OAuth.

## Les lendemains du projet

- _Immédiatement après_ : Le projet a été évalué positivement par l'école, validant les modules liés au développement mobile et à l'intégration d'APIs tierces.
- _À distance_ : Le code source a servi de référence (template) pour d'autres projets nécessitant de l'OAuth.
- _Aujourd'hui_ : L'application n'est plus maintenue activement (clés d'API expirées), mais les principes architecturaux que j'y ai développés sont ceux que j'applique quotidiennement chez 3F.

## Regard Critique

**Ma valeur ajoutée** : J'ai apporté une structure technique qui a permis au reste de l'équipe d'avancer sereinement sur le front-end sans se soucier de la complexité des requêtes API.
**Enseignements** : Ne jamais considérer une API tierce gratuite comme un acquis permanent. Le pivot forcé à mi-projet m'a appris la valeur inestimable d'une architecture découplée (l'interface d'abstraction que j'avais créée a sauvé le projet).
