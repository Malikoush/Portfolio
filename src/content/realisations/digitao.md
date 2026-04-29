---
title: Digitao
description: Plateforme web interne de gestion des appels d'offres immobiliers pour le groupe 3F.
img: /assets/logo_3f.png
img_alt: Interface de travail illustrant un projet metier immobilier en entreprise
date: 2025-06-15
tags:
  - PHP
  - Oracle SQL
  - Full-Stack
  - Gestion de projet
  - Recette utilisateur
relatedCompetences:
  - bases-de-donnees
  - gestion-de-projet
  - communication
  - tests-debogage
  - adaptabilite
---

## Presentation du projet

Digitao est une application web métier développée en interne pour le groupe 3F, bailleur social et acteur majeur de l’immobilier locatif. L’application a pour objectif de centraliser et de structurer la gestion des appels d’offres ouverts et restreints, ainsi que les différentes étapes associées au cycle d’achat : suivi des commissions, gestion des éditions, validation des étapes et traitement des processus liés aux achats.

Cette réalisation s’inscrit dans un contexte professionnel réel, avec des utilisateurs métier, des contraintes réglementaires et des processus internes déjà existants. Contrairement à un projet académique où l’on part souvent d’une feuille blanche, Digitao devait s’intégrer dans un environnement d’entreprise, avec ses règles, son historique, ses habitudes de travail et ses exigences de fiabilité.

Pour moi, ce projet a été une expérience importante, car il m’a placé au contact d’une application métier complexe. J’ai découvert qu’un développement en entreprise ne consiste pas seulement à produire du code, mais aussi à comprendre un domaine fonctionnel, dialoguer avec des utilisateurs, respecter des contraintes d’existant et participer à la fiabilisation d’un outil utilisé dans un cadre opérationnel.

## Contexte et enjeux

Chez 3F, la gestion des appels d’offres mobilise plusieurs acteurs internes et suit des processus encadrés. Les équipes achats doivent pouvoir suivre les dossiers, préparer les commissions, produire des éditions, vérifier l’avancement des étapes et garantir la traçabilité des décisions. Dans ce type d’organisation, une erreur ou une information mal structurée peut avoir des conséquences importantes : perte de temps, incompréhension entre services, difficulté de suivi ou manque de fiabilité dans le traitement d’un dossier.

L’objectif de Digitao était donc de proposer un outil capable de rassembler ces flux dans une application plus cohérente. Il ne s’agissait pas simplement d’ajouter quelques écrans, mais de construire un support applicatif adapté à un processus métier exigeant. L’application devait aider les équipes à mieux suivre les appels d’offres, à sécuriser les étapes importantes et à disposer d’une information plus fiable.

Les enjeux techniques étaient également importants. L’application reposait sur une stack PHP / Oracle, avec une base de données devant représenter des objets métier nombreux : appels d’offres, commissions, étapes d’édition, rôles utilisateurs, statuts et flux de validation. La difficulté venait du fait que ces éléments ne sont pas indépendants les uns des autres. Une modification sur une étape du processus pouvait avoir des effets sur les écrans, les règles métier, les données en base et les éditions générées.

Pour les utilisateurs, le risque principal était d’avoir un outil trop éloigné de leurs pratiques réelles. Une application métier peut être techniquement correcte mais difficile à adopter si elle ne respecte pas la logique de travail des équipes. Pour moi, le risque était de rester dans une approche trop technique, sans suffisamment comprendre les enjeux fonctionnels derrière les demandes. Ce projet m’a donc obligé à développer une posture plus complète : comprendre, questionner, coder, tester et ajuster.

## Realisation

Mon intervention sur Digitao s’est faite en tant qu’alternant développeur full-stack. J’ai été impliqué à la fois sur le développement, la base de données, les spécifications et la recette utilisateur. Cette position m’a permis de suivre plusieurs étapes du cycle de vie d’une fonctionnalité, depuis sa compréhension jusqu’à sa validation.

Sur la partie développement, j’ai participé à l’implémentation de fonctionnalités métier en PHP, connectées à une base Oracle. Les fonctionnalités concernaient notamment la création, le suivi et la gestion d’appels d’offres ouverts ou restreints. Avant de coder, il fallait comprendre précisément la règle métier associée : quel acteur intervient, à quel moment, quelles données doivent être affichées, quelles actions sont autorisées et quelles conséquences une modification peut avoir sur la suite du processus.

Une partie importante de mon travail a également porté sur la modélisation des données. J’ai contribué à l’évolution du schéma Oracle afin de mieux représenter les commissions, les étapes d’édition et les flux d’achat. Cette étape était essentielle, car une base mal structurée aurait rendu les traitements plus difficiles à maintenir et les données moins fiables. J’ai donc appris à relier les besoins métier à une structure de données cohérente, capable de soutenir un processus suivi dans le temps.

J’ai aussi participé à la rédaction de spécifications fonctionnelles. Cette étape m’a permis de mieux comprendre comment formaliser une demande avant son développement. Rédiger une spécification oblige à clarifier le besoin, à identifier les cas particuliers et à éviter les interprétations ambiguës. Cela m’a aidé à mieux faire le lien entre les attentes des utilisateurs et la mise en œuvre technique.

Enfin, j’ai été impliqué dans la recette utilisateur. J’ai contribué à la rédaction de scénarios de test, puis au traitement des retours remontés pendant les validations. Cette phase a été particulièrement formatrice, car elle m’a montré que la qualité d’une application ne se mesure pas uniquement dans l’environnement de développement. C’est lors de la recette que l’on vérifie si l’outil correspond réellement aux usages, si les écrans sont compréhensibles et si les règles métier sont correctement appliquées.

## Acteurs et interactions

Digitao m’a amené à travailler avec plusieurs types d’acteurs. Il y avait d’abord l’équipe technique, avec laquelle j’échangeais sur les choix de développement, la structure du code, les impacts en base de données et les corrections à apporter. Ces échanges étaient essentiels pour maintenir une cohérence dans l’application et éviter les développements isolés.

J’ai également été en contact avec des interlocuteurs métier, notamment autour des phases de spécification et de recette. Ces interactions m’ont demandé d’adapter mon vocabulaire. Il ne s’agissait pas d’expliquer uniquement en termes de code ou de tables Oracle, mais de reformuler les problèmes selon leur impact fonctionnel : un écran qui ne correspond pas au processus attendu, une donnée manquante, une validation mal positionnée ou une étape qui ne reflète pas la réalité du travail des équipes achats.

Cette interaction entre technique et métier a été l’un des aspects les plus enrichissants du projet. Elle m’a permis de comprendre que le développeur n’est pas seulement celui qui exécute une demande. Il peut aussi aider à clarifier un besoin, signaler une incohérence, proposer une solution plus simple ou alerter sur un risque technique.

## Resultats et impact

Pour les équipes achats de 3F, Digitao contribue à rendre le processus de gestion des appels d’offres plus lisible et plus structuré. L’application permet de centraliser des informations qui pouvaient auparavant être dispersées, de mieux suivre les étapes d’un dossier et de renforcer la traçabilité des actions. Cela représente un gain important dans un contexte où les processus sont réglementés et où la fiabilité de l’information est essentielle.

Pour l’entreprise, l’intérêt du projet réside dans la consolidation d’un outil interne adapté à ses propres règles métier. Plutôt que de dépendre uniquement d’un outil générique, Digitao permet de répondre à des besoins spécifiques liés au fonctionnement de 3F. Ma contribution a participé à l’avancement de fonctionnalités clés, à l’amélioration de certains écrans et à la fiabilisation progressive du cycle de validation.

Pour moi, ce projet a été une étape importante dans ma professionnalisation. Il m’a permis de passer d’une logique de projet scolaire à une logique d’application métier réelle. J’ai progressé en développement PHP, en SQL Oracle, en modélisation de données, mais aussi en communication, en gestion de projet et en recette utilisateur. J’ai surtout appris à mesurer l’impact d’une correction : derrière une ligne de code, il peut y avoir un utilisateur, une règle métier, une étape réglementée ou une décision opérationnelle.

## Les lendemains du projet

À court terme, les travaux réalisés sur Digitao ont permis d’avancer sur des fonctionnalités utilisées dans le cadre des processus achats. Les phases de recette ont permis d’identifier des anomalies, d’ajuster certains comportements et d’améliorer progressivement l’adéquation entre l’application et les besoins des utilisateurs.

À distance, cette expérience continue d’influencer ma manière de travailler. Elle m’a donné des réflexes que je réutilise dans d’autres contextes : lire le besoin avant de toucher au code, vérifier l’impact d’une modification sur les données, tester les cas métier sensibles et ne pas sous-estimer la recette utilisateur.

Aujourd’hui, Digitao reste pour moi une réalisation structurante, car elle représente mon immersion dans un vrai système d’information d’entreprise. Ce projet m’a appris à travailler avec de l’existant, à respecter des contraintes métier et à produire des développements dans un environnement où la fiabilité compte autant que la rapidité.

## Regard critique

Avec le recul, ma principale valeur ajoutée sur Digitao a été ma capacité à adopter une posture transversale. Je n’ai pas seulement contribué au code : j’ai aussi participé à la compréhension du besoin, à la modélisation des données, à la rédaction de spécifications et à la recette. Cette polyvalence m’a permis de mieux comprendre le cycle complet d’une application métier.

Ce projet m’a aussi confronté à une réalité importante : dans une entreprise, la qualité d’un développement dépend beaucoup de sa capacité à s’intégrer à l’existant. Il faut composer avec une base de données déjà en place, des choix techniques antérieurs, des règles métier parfois complexes et des utilisateurs qui ont leurs habitudes. Cette contrainte peut ralentir le développement, mais elle oblige aussi à être plus rigoureux.

L’un des enseignements les plus forts que je retiens concerne la recette utilisateur. Avant ce projet, je voyais surtout les tests comme une vérification technique. Digitao m’a montré que la recette est aussi un moment de dialogue avec les utilisateurs. Elle permet de vérifier si l’application répond vraiment au besoin, si les écrans sont compréhensibles et si le processus métier est respecté.

Je retiens enfin qu’un bon développeur en contexte métier doit savoir dépasser la simple exécution technique. Il doit comprendre pourquoi une fonctionnalité existe, à qui elle sert et quelles conséquences elle peut avoir. C’est cette compréhension qui permet de produire des solutions plus utiles, plus fiables et mieux adaptées à l’entreprise.
