---
title: Let'Style
description: Plateforme web de personnalisation vestimentaire avec gestion utilisateur et boutique.
img: /assets/IMG-8413.jpg
img_alt: Interface de Let'Style montrant la personnalisation de vêtements
date: 2023-11-20
tags:
  - Full-stack
  - PHP
  - SQL
  - E-commerce
relatedCompetences:
  ["modelisation-uml", "securite-applicative", "bases-de-donnees"]
---

## Présentation du projet

Let’Style est une application web e-commerce consacrée à la mode sur mesure et inclusive. Le projet permet à un utilisateur de créer une tenue personnalisée, de choisir des couleurs ou des motifs, de visualiser le résultat, d’enregistrer ses créations dans un profil personnel, puis de passer commande via une boutique intégrée.

L’idée du projet reposait sur un besoin simple : proposer une expérience d’achat plus personnalisée qu’un e-commerce classique. Au lieu de choisir uniquement un vêtement déjà défini, l’utilisateur devait pouvoir composer une tenue adaptée à ses goûts, à son style et à sa morphologie. Cette dimension de personnalisation rendait le projet plus complexe qu’un simple catalogue en ligne, car il fallait gérer des produits modulables, des configurations, des profils utilisateurs, des paniers et des commandes.

Cette réalisation a été menée dans un cadre académique majeur, avec l’objectif de mobiliser plusieurs compétences à la fois : développement web full-stack, modélisation de données, sécurité applicative, conception d’API, UX et documentation d’architecture. Let’Style représente donc pour moi l’un des projets les plus complets de ma formation, car il m’a obligé à penser une application dans son ensemble, de la conception initiale jusqu’à la livraison d’une plateforme fonctionnelle.

## Objectifs, Contexte et Enjeux

Le projet s’inscrivait dans un contexte académique, mais il simulait un besoin proche d’un vrai projet client : construire une plateforme robuste capable de gérer un catalogue de vêtements personnalisables, des comptes utilisateurs, un panier d’achat, des commandes et une interface d’administration.

L’objectif pour le client simulé était de disposer d’un outil e-commerce crédible, à la fois fonctionnel et évolutif. La plateforme devait permettre de vendre des produits, mais aussi de proposer une expérience différenciante autour de la personnalisation vestimentaire. Cette exigence impliquait de concevoir une application plus riche qu’une boutique standard, avec une logique métier spécifique autour des combinaisons de vêtements, des options de personnalisation et du calcul dynamique des prix.

Les enjeux techniques étaient nombreux. Il fallait d’abord construire une architecture capable de relier correctement le front-end, le back-end et la base de données. Une mauvaise modélisation aurait rapidement rendu difficile la gestion des produits modulables, des paniers ou des commandes. Il fallait donc prendre le temps de formaliser les entités, leurs relations et les principaux flux avant de commencer le développement.

La sécurité représentait un autre enjeu important. Comme l’application manipulait des comptes utilisateurs, des profils, des paniers et des commandes, il était nécessaire de protéger les accès. J’ai donc dû intégrer une authentification par JWT, un contrôle d’accès par rôles avec une logique RBAC, et des vérifications côté serveur pour éviter qu’un utilisateur puisse accéder à des routes ou des données qui ne lui étaient pas destinées.

Pour moi, le principal risque était de sous-estimer la complexité d’un projet full-stack complet. Let’Style regroupait beaucoup de dimensions : architecture, base de données, sécurité, API, interface, logique métier, design et présentation finale. Le défi était donc de ne pas produire une juxtaposition de fonctionnalités, mais une application cohérente, maintenable et compréhensible.

## De la conception à l’architecture

Une partie importante de mon travail a commencé avant l’écriture du code. J’ai participé à la création du dossier d’architecture, qui regroupait plusieurs éléments de modélisation : diagrammes UML, cas d’usage, diagrammes de classes, diagrammes de séquence et réflexion sur la structure de la base de données.

Cette phase a été déterminante. Dans un projet comme Let’Style, les relations entre les entités sont nombreuses : utilisateurs, rôles, produits, options de personnalisation, paniers, commandes, profils et éléments visuels. Sans modélisation préalable, le développement aurait pu devenir confus très rapidement. Le schéma de données devait permettre de gérer des vêtements personnalisables sans bloquer les évolutions futures.

J’ai aussi travaillé sur le modèle entité-relation afin de structurer la logique de personnalisation. L’objectif était de permettre à l’utilisateur de composer une tenue tout en conservant une représentation claire côté base de données. Cette étape a permis de mieux anticiper les traitements nécessaires ensuite : sauvegarde d’une configuration, transformation d’un panier en commande, calcul du prix et récupération des informations dans le profil utilisateur.

Cette rigueur de conception a facilité la suite du projet. Le temps investi dans les diagrammes et la modélisation a évité de nombreux changements structurels pendant le développement. C’est l’un des enseignements les plus importants que je retiens de Let’Style : une bonne architecture en amont permet de réduire les blocages plus tard.

## Développement de l’API et sécurisation du back-end

Après la phase de conception, j’ai participé au développement d’une API REST en PHP. Cette API servait d’intermédiaire entre l’interface utilisateur, la logique métier et la base de données. Elle permettait notamment de gérer les utilisateurs, les produits, les paniers, les commandes et les actions liées à la personnalisation.

La mise en place de l’authentification a été une étape centrale. J’ai travaillé sur un système basé sur des tokens JWT, permettant d’identifier les utilisateurs connectés et de sécuriser les échanges avec l’API. Cette authentification devait être fiable, car elle conditionnait l’accès aux fonctionnalités personnelles comme le profil, le panier ou les commandes.

J’ai également intégré une gestion des rôles avec une logique RBAC. L’objectif était de distinguer les droits selon les profils : client, vendeur ou administrateur. Cette séparation était indispensable pour éviter qu’un utilisateur classique puisse accéder à des actions réservées à l’administration, comme la gestion du catalogue ou le suivi global des commandes.

L’un des choix importants a été d’intégrer la sécurité dès le début du développement. Chaque route sensible devait être protégée au moment de sa création, plutôt que sécurisée après coup. Cette approche Security by Design a permis d’éviter une refonte lourde en fin de projet et a renforcé la cohérence globale de l’API.

## Logique métier et expérience utilisateur

Let’Style ne se limitait pas à afficher des produits. L’application devait permettre à l’utilisateur de composer une tenue personnalisée et de transformer cette configuration en commande. Cette logique métier demandait de relier plusieurs éléments : les produits disponibles, les options choisies, le prix calculé, le panier et le profil utilisateur.

J’ai participé à l’implémentation de la gestion des paniers, avec la possibilité d’ajouter une configuration vestimentaire, de la modifier et de la convertir en commande. Le calcul dynamique des prix a également été intégré afin que le montant corresponde aux choix de personnalisation effectués par l’utilisateur.

Sur la partie front-end, j’ai contribué à la création d’une interface réactive, capable de gérer des formulaires complexes et un visualiseur de tenues. L’enjeu était de rendre la personnalisation compréhensible : l’utilisateur devait voir ce qu’il choisissait, comprendre l’impact de ses options et pouvoir avancer naturellement vers la commande.

J’ai également participé à la cohérence visuelle du projet. Un mini design system a été défini pour garder une unité entre les pages : couleurs, boutons, formulaires, espacements et comportements d’interface. Cette attention portée à l’UX a permis de rendre l’application plus professionnelle et plus lisible.

## Acteurs et Interactions

Le projet a été réalisé dans un cadre académique, avec un suivi par des intervenants professionnels. Ces échanges ont été importants, car ils nous ont permis de confronter nos choix à un regard extérieur, notamment sur la sécurité, l’architecture et la qualité du code.

Les intervenants ont notamment audité le projet à mi-parcours, ce qui a permis de vérifier si l’architecture tenait la route et si les choix techniques étaient cohérents. Ces retours ont joué un rôle utile dans l’amélioration du projet, car ils ont permis d’identifier des points à renforcer avant la livraison finale.

Dans mon rôle, j’ai eu une posture de concepteur-développeur polyvalent. J’ai été impliqué aussi bien dans la modélisation que dans le développement back-end, la sécurité, la logique métier et certains aspects UX. Cette position m’a permis de garder une vision globale de l’application et de mieux comprendre comment les différentes briques du projet dépendaient les unes des autres.

## Résultats

Pour le client simulé, Let’Style a permis de disposer d’une plateforme e-commerce complète, capable de gérer un catalogue, des utilisateurs, des paniers, des commandes et des produits personnalisables. L’application répondait au cahier des charges initial et proposait une expérience plus différenciante qu’une boutique classique grâce à la personnalisation vestimentaire.

Pour l’équipe projet, la réalisation a montré qu’il était possible de livrer une application full-stack cohérente, malgré la diversité des sujets à traiter. L’architecture back-end, en particulier la gestion des tokens JWT et des rôles utilisateurs, a passé les tests de sécurité prévus dans le cadre du projet. Le dossier d’architecture et la modélisation ont également contribué à maintenir une structure claire pendant le développement.

Pour moi, Let’Style a été une validation concrète de ma capacité à concevoir et développer une application complexe. J’y ai renforcé mes compétences en architecture, en API REST, en sécurité, en base de données, en UX et en gestion de projet. Ce projet m’a aussi aidé à prendre confiance dans ma capacité à intervenir sur plusieurs couches d’une application sans perdre la cohérence d’ensemble.

## Les lendemains du projet

À court terme, Let’Style a permis de valider plusieurs modules importants de ma formation, notamment en développement web, en base de données et en sécurité applicative. Le projet a également servi de support de soutenance, où nous avons pu présenter nos choix techniques, notre architecture et les fonctionnalités développées.

À distance, ce projet a eu un rôle important dans mon parcours. Le référentiel GitHub est devenu l’un de mes supports techniques principaux lors de mes recherches d’alternance. Il me permettait de montrer concrètement ma capacité à travailler sur une application complète, avec une vraie architecture et des problématiques proches d’un projet professionnel.

Aujourd’hui, Let’Style reste une réalisation de référence dans mon portfolio. Même si le projet n’a pas vocation à être commercialisé tel quel, il illustre bien ma progression en full-stack et ma capacité à structurer un projet de bout en bout, depuis la conception jusqu’à la livraison.

## Regard Critique

Avec le recul, ma plus grande valeur ajoutée sur Let’Style a été la rigueur apportée à la phase de conception. Le temps consacré à l’UML, au modèle de données et à la réflexion sur les flux a réellement facilité le développement. Cela m’a confirmé qu’une architecture bien pensée n’est pas une formalité scolaire : c’est un outil de travail qui permet d’éviter des erreurs coûteuses.

Le projet m’a aussi permis de comprendre l’importance de la sécurité dès la conception. Intégrer le contrôle d’accès dans les routes de l’API dès le début a évité de devoir sécuriser l’application dans l’urgence en fin de projet. Cette expérience m’a fait progresser dans ma manière de concevoir une API : chaque endpoint doit être pensé avec son usage, ses droits d’accès et ses risques.

Je vois aussi certaines limites au projet. Le périmètre était ambitieux, et certaines fonctionnalités auraient pu être approfondies, notamment la partie paiement, les tests automatisés ou l’accessibilité. Cependant, ces limites sont aussi formatrices : elles m’ont appris à prioriser les fonctionnalités essentielles et à livrer une application fonctionnelle plutôt qu’un ensemble trop large de fonctionnalités incomplètes.

Let’Style m’a finalement appris qu’un projet full-stack réussi repose sur l’équilibre entre plusieurs dimensions : une bonne modélisation, une API sécurisée, une interface compréhensible, une logique métier claire et une présentation convaincante. C’est cette vision d’ensemble que je retiens aujourd’hui.
