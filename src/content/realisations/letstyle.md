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
  [
    "developpement-web",
    "modelisation-uml",
    "securite-applicative",
    "bases-de-donnees",
  ]
---

## Présentation du projet

Let'Style est une application web e-commerce dédiée à la mode sur mesure. Elle offre aux utilisateurs la possibilité de créer des tenues personnalisées (choix des coupes, couleurs, motifs), de les visualiser en temps réel, de les sauvegarder dans un profil utilisateur et de les commander via une boutique intégrée.

## Objectifs, Contexte et Enjeux

**Contexte** : Projet académique majeur visant à synthétiser les apprentissages en développement web full-stack, modélisation de bases de données et sécurité.
**Objectif client (simulé)** : Disposer d'une plateforme robuste capable de gérer un catalogue de produits modulables, des paniers d'achat et des commandes sécurisées.
**Enjeux / Risques** :

- _Techniques_ : Complexité du modèle de base de données pour gérer des produits "configurables" plutôt que des produits simples.
- _Sécurité_ : Protection des données personnelles des utilisateurs et sécurisation des processus d'authentification.

## Étapes de réalisation (Ce que j'ai fait)

J'ai participé à la construction de l'application de A à Z :

1. **Modélisation** : Création du dossier d'architecture (UML) et définition du schéma entité-relation pour supporter la logique de personnalisation.
2. **Backend sécurisé** : Développement d'une API REST maison (PHP) avec authentification par token JWT et contrôle d'accès basé sur les rôles (RBAC).
3. **Logique métier** : Implémentation de la gestion des paniers, de la conversion de configurations vestimentaires en commandes, et du calcul dynamique des prix.
4. **Interface utilisateur** : Création d'une interface réactive intégrant des formulaires complexes et un visualiseur de tenues.

## Acteurs et Interactions

- **Mon rôle** : J'ai agi comme concepteur-développeur "couteau suisse", intervenant de la conception de la base de données jusqu'aux détails UX du front-end.
- **Équipe et encadrement** : Travail supervisé par des intervenants professionnels qui ont audité la sécurité et la propreté du code à mi-parcours.

## Résultats

- **Pour le projet** : Une plateforme complètement fonctionnelle répondant à 100 % du cahier des charges initial. L'architecture backend, notamment la gestion des tokens JWT, a passé les tests de sécurité avec succès.
- **Pour moi** : La validation pratique de ma capacité à concevoir et livrer une application full-stack complexe de manière autonome.

## Les lendemains du projet

- _Immédiatement après_ : Le projet a validé des modules critiques de ma formation en développement et en base de données.
- _À distance_ : Le référentiel GitHub du projet est devenu mon portfolio technique principal lors de mes recherches d'alternance.
- _Aujourd'hui_ : Ce projet a été le tremplin qui m'a permis de décrocher mon poste actuel chez 3F, les recruteurs ayant été convaincus par la rigueur de l'architecture.

## Regard Critique

**Ma valeur ajoutée** : La rigueur apportée à la phase de conception (UML, MCD). Le temps investi dans la modélisation s'est rentabilisé au centuple lors de la phase de développement où très peu de remaniements structurels ont été nécessaires.
**Enseignements** : J'ai compris l'importance de la règle "Sécurité by Design". L'intégration du contrôle d'accès dans chaque route de l'API dès le premier jour a évité d'immenses casse-têtes de refactorisation par la suite.

## Compétences rattachées

- [Développement Web](/competences/developpement-web)
- [Modélisation UML](/competences/modelisation-uml)
- [Sécurité applicative](/competences/securite-applicative)
- [Bases de données](/competences/bases-de-donnees)
