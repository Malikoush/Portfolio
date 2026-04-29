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

SpotyMike est une application web musicale conçue comme un agrégateur de services de streaming. L’objectif initial était de proposer une interface unique permettant à un utilisateur d’interagir avec les catalogues de Spotify et Deezer, de consulter ses contenus musicaux, de fusionner certaines playlists et d’obtenir des recommandations à partir de métadonnées musicales.

Le projet reposait sur une idée simple : les utilisateurs écoutent souvent leur musique sur plusieurs plateformes, mais disposent rarement d’un outil capable de centraliser leur expérience. SpotyMike cherchait donc à réduire cette fragmentation en proposant un espace commun, plus fluide, où l’utilisateur pouvait retrouver ses musiques, explorer des recommandations et interagir avec différents services sans changer d’environnement.

Cette réalisation a été menée dans un cadre académique, sur une durée de trois mois, au sein d’une équipe de quatre étudiants. Le projet simulait des conditions proches d’un démarrage de startup : un temps limité, un objectif produit ambitieux, des choix techniques à faire rapidement et la nécessité de livrer une preuve de concept convaincante.

## Objectifs, Contexte et Enjeux

Le projet avait pour objectif de produire un POC fonctionnel d’agrégateur musical. Il ne s’agissait pas seulement de créer une interface agréable, mais de démontrer qu’il était possible de connecter plusieurs plateformes musicales, d’unifier leurs données et de proposer une expérience utilisateur cohérente.

Pour l’utilisateur, l’enjeu principal était la simplicité. L’application devait masquer la complexité technique des API et présenter les informations musicales de manière claire : titres, artistes, pochettes, playlists et actions disponibles. Une expérience trop lente, trop instable ou trop confuse aurait rapidement réduit l’intérêt du produit, même si l’intégration technique fonctionnait.

Pour l’équipe, le premier défi était technique. Spotify et Deezer ne fonctionnent pas exactement de la même manière : leurs mécanismes d’authentification, leurs formats de réponse, leurs limites d’utilisation et leurs données disponibles diffèrent. Il fallait donc créer une couche d’intégration capable d’harmoniser ces différences, afin que le front-end puisse consommer des données propres et prévisibles.

Le second risque concernait les API publiques. Une partie du projet dépendait de services externes que nous ne maîtrisions pas. Les quotas, restrictions, changements de politique d’accès ou limites de rate limiting pouvaient bloquer certaines fonctionnalités. Ce risque s’est d’ailleurs concrétisé à mi-parcours avec les restrictions rencontrées sur l’API Deezer.

Enfin, le projet comportait un enjeu organisationnel. L’équipe était composée de quatre étudiants avec des emplois du temps différents. Il fallait donc se coordonner efficacement, répartir les tâches, maintenir une architecture cohérente et éviter que les développements front-end et back-end avancent dans des directions incompatibles.

## Mon rôle dans le projet

Sur SpotyMike, j’ai occupé un rôle de référent technique et de développeur full-stack. Mon objectif principal était de poser une base technique suffisamment claire pour permettre au reste de l’équipe d’avancer sans être bloqué par la complexité des API musicales.

J’ai pris en charge une grande partie de l’architecture back-end, notamment avec Node.js et Express. Le back-end jouait le rôle d’intermédiaire entre l’interface utilisateur et les services tiers. Ce choix était important, car il permettait de protéger les clés d’API, de centraliser la logique d’authentification et de normaliser les données avant de les envoyer au front-end.

Ce rôle de proxy a aussi permis de mieux découpler l’application. Au lieu que chaque composant front-end interroge directement Spotify ou Deezer, l’interface communiquait avec notre propre API. Cette organisation rendait le projet plus maintenable et permettait à l’équipe front-end de travailler avec des formats de données plus stables.

## Architecture et intégration des API musicales

La première étape importante a été la conception de l’architecture d’intégration. Nous avions besoin d’un système capable de dialoguer avec plusieurs API externes tout en offrant une interface plus simple au reste de l’application. J’ai donc travaillé sur une architecture back-end qui centralisait les appels aux services musicaux et isolait les spécificités de chaque plateforme.

L’un des points les plus sensibles a été l’authentification OAuth2 avec Spotify. Ce flux demandait de gérer plusieurs étapes : redirection de l’utilisateur, récupération du code d’autorisation, échange contre un token d’accès, stockage temporaire du token et gestion de son expiration. Une mauvaise compréhension de ce mécanisme aurait pu empêcher l’utilisateur de se connecter ou provoquer des erreurs difficiles à diagnostiquer.

Pour fiabiliser cette partie, j’ai également produit des diagrammes de séquence décrivant les échanges entre l’utilisateur, notre application et les services d’authentification. Ces schémas ont aidé l’équipe à comprendre les étapes du flux OAuth2 et à anticiper les cas d’erreur, notamment l’expiration du token ou l’échec de connexion.

L’autre enjeu technique concernait l’harmonisation des données. Les réponses de Spotify et Deezer n’avaient pas les mêmes structures. Pour éviter que cette différence contamine tout le front-end, j’ai travaillé sur une couche de normalisation des réponses. L’idée était de transformer les données récupérées en objets plus cohérents pour notre application : titre, artiste, pochette, identifiant, durée ou lien de lecture.

Cette couche d’abstraction a été déterminante pour la suite du projet. Elle a permis au front-end de rester plus simple, tout en rendant l’application plus résistante aux différences entre services.

## Le pivot technique lié à l’API Deezer

À mi-parcours, nous avons rencontré une difficulté importante : certaines restrictions de l’API Deezer limitaient les fonctionnalités que nous avions prévues. Ce problème aurait pu remettre en cause une partie du cahier des charges, car l’application reposait au départ sur une double intégration Spotify / Deezer.

Face à cette situation, il a fallu réagir rapidement. J’ai participé à la coordination du pivot technique vers une solution centrée principalement sur Spotify, tout en conservant une logique de fallback lorsque certaines données Deezer n’étaient pas disponibles. Cette décision a permis de préserver les fonctionnalités critiques au lieu de perdre du temps à maintenir une intégration devenue trop fragile.

Le fait d’avoir conçu une architecture découplée nous a beaucoup aidés. Comme le front-end ne dépendait pas directement des réponses brutes de Deezer, nous avons pu limiter l’impact du changement sur l’interface. Cette expérience a montré l’intérêt concret d’une architecture modulaire : lorsqu’un service externe devient instable ou limité, l’ensemble du projet n’est pas obligé d’être réécrit.

## Interface utilisateur et expérience musicale

En parallèle du back-end, j’ai aussi contribué à l’intégration de composants front-end réactifs. L’objectif était de proposer une interface proche des usages attendus dans une application musicale : affichage des pochettes, navigation fluide, lecteur audio visible, animations de lecture et retour visuel lors des interactions.

Nous avons choisi une identité visuelle inspirée des grandes plateformes de streaming, notamment avec un dark mode natif. Ce choix permettait de créer un environnement familier pour l’utilisateur, tout en donnant à SpotyMike une apparence plus immersive et plus professionnelle.

J’ai notamment participé à l’intégration d’un player audio web sur mesure. Ce composant était important, car il représentait le cœur de l’expérience musicale. Il ne devait pas seulement fonctionner techniquement : il devait aussi être lisible, réactif et agréable à utiliser.

## Acteurs et Interactions

Le projet a été réalisé par une équipe de quatre étudiants. Trois membres étaient davantage orientés front-end et interface utilisateur, tandis que j’ai pris un rôle plus central sur l’architecture, le back-end et les intégrations API.

Pour maintenir la coordination, nous avons mis en place des rituels agiles allégés : points réguliers, suivi du backlog, échanges sur les blocages et revues de code. Ces moments nous ont permis d’éviter que les développements se dispersent, surtout lorsque les contraintes des API ont commencé à modifier notre trajectoire initiale.

Mon rôle de facilitateur technique consistait aussi à rendre le back-end exploitable par l’équipe front-end. Je devais documenter les routes, expliquer les formats de données, signaler les limites connues et ajuster les endpoints lorsque les besoins de l’interface évoluaient. Cette interaction régulière entre front-end et back-end a été essentielle pour conserver une expérience utilisateur cohérente.

## Résultats

Pour l’utilisateur final, SpotyMike proposait une expérience musicale centralisée et fluide. L’application permettait d’accéder aux fonctionnalités critiques prévues dans le cahier des charges, avec une interface soignée et une logique de navigation compréhensible. Même après la restriction de l’API Deezer, le projet a conservé sa valeur principale : offrir une preuve de concept crédible autour de l’agrégation musicale et des recommandations.

Pour l’équipe, le principal résultat a été la livraison du projet dans les délais académiques, malgré un pivot technique en cours de route. Toutes les fonctionnalités essentielles ont été implémentées et démontrées lors de la soutenance. La structure back-end a aussi permis aux autres membres de se concentrer sur l’interface sans devoir gérer directement la complexité des API externes.

Pour moi, SpotyMike a représenté une montée en compétence importante sur les architectures orientées services, l’authentification OAuth2 et l’intégration d’API tierces. J’ai aussi progressé dans mon rôle de référent technique : poser une architecture, accompagner les autres développeurs, prendre des décisions en cas d’imprévu et garder le projet livrable malgré les contraintes.

## Les lendemains du projet

Juste après sa livraison, SpotyMike a été évalué positivement dans le cadre académique. Le projet a permis de valider des compétences liées au développement web, à l’intégration d’API tierces, à l’architecture back-end et au travail en équipe.

À distance, certaines parties du code ont servi de référence pour d’autres projets nécessitant une authentification OAuth ou une intégration avec des services externes. Les diagrammes et la couche d’abstraction construite autour des API ont également constitué des repères utiles pour aborder d’autres projets d’intégration.

Aujourd’hui, l’application n’est plus maintenue activement, notamment parce que les clés d’API ont expiré et que les services tiers évoluent régulièrement. Cependant, les principes développés dans ce projet restent importants dans ma pratique actuelle : isoler les dépendances externes, documenter les flux d’authentification, prévoir les cas d’erreur et éviter de lier toute une application au comportement d’une API tierce.

## Regard Critique

Avec le recul, ma principale valeur ajoutée sur SpotyMike a été d’avoir apporté une structure technique suffisamment solide pour protéger le projet des imprévus. La couche d’abstraction entre le front-end et les API externes n’était pas seulement un choix propre sur le plan architectural : elle a réellement permis de limiter les dégâts lorsque l’API Deezer est devenue plus restrictive.

Ce projet m’a appris qu’une API tierce gratuite ne doit jamais être considérée comme un acquis permanent. Les conditions d’accès peuvent changer, les quotas peuvent être atteints, certaines données peuvent devenir indisponibles et une fonctionnalité peut être fragilisée sans que l’équipe de développement ait un contrôle direct dessus. Depuis cette expérience, je suis plus attentif à la gestion des dépendances externes et aux stratégies de fallback.

Je retiens aussi que le rôle de référent technique demande autant de pédagogie que de compétence technique. Il ne suffit pas de concevoir une bonne architecture ; il faut aussi la rendre compréhensible, utilisable et exploitable par le reste de l’équipe. Sur SpotyMike, cette dimension a été essentielle pour permettre aux développeurs front-end d’avancer sans être bloqués par OAuth2, les tokens ou les différences entre API.

La principale limite du projet vient de sa dépendance aux plateformes musicales. À long terme, une application comme SpotyMike nécessiterait une veille constante sur les API utilisées, une gestion plus robuste des quotas et probablement des accords plus formels avec les fournisseurs de données. Mais dans le cadre d’un POC académique, le projet a rempli son objectif : démontrer une idée, valider une architecture et produire une expérience musicale fonctionnelle.
