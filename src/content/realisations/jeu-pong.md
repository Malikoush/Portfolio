---
title: Jeu Pong
description: Recréation en C# du jeu rétro pour illustrer les algorithmes physiques.
img: /assets/stock-5.jpg
img_alt: Écran de jeu Pong en noir et blanc classique
date: 2022-12-05
tags:
  - C#
  - Algorithmique
  - Pédagogie
relatedCompetences: ["adaptabilite", "tests-debogage"]
---

## Présentation du projet

Jeu Pong est une recréation fidèle, développée en C#, du célèbre jeu vidéo d'arcade des années 70. Au-delà de l'aspect ludique, ce projet a été conçu comme un bac à sable technique pour expérimenter et illustrer visuellement des algorithmes mathématiques (calcul vectoriel, rebonds, détection de collisions AABB).

## Objectifs, Contexte et Enjeux

**Contexte** : Projet académique de première année de cycle ingénieur, destiné à valider les acquis en programmation orientée objet (POO) et en algorithmique.
**Objectif client (pédagogique)** : Démontrer une compréhension parfaite de la boucle de jeu (Game Loop) et des principes physiques de base dans un environnement fenêtré.
**Enjeux / Risques** :
- *Techniques* : Gérer le temps indépendamment de la fréquence d'affichage (Delta Time) pour que la balle bouge à la même vitesse sur n'importe quel ordinateur.
- *Algorithmiques* : Éviter le "tunneling" (la balle traversant une raquette si sa vitesse est trop élevée entre deux frames de calcul).

## Étapes de réalisation (Ce que j'ai fait)

1. **Architecture POO** : Définition des classes entités (`Ball`, `Paddle`, `ScoreBoard`) avec une stricte séparation des responsabilités.
2. **Boucle principale** : Implémentation de la logique `Update()` (calculs physiques) et `Draw()` (rendu graphique).
3. **Moteur physique maison** : Développement des algorithmes de collision rectangulaire (AABB - Axis-Aligned Bounding Box) et calcul de l'angle de rebond en fonction du point d'impact sur la raquette.
4. **Tests** : Mise en place de scripts pour tester la précision des collisions à très haute vitesse.

## Acteurs et Interactions

- **Mon rôle** : Développeur solo.
- **Interactions** : J'ai partagé le code source avec mes camarades éprouvant des difficultés en algorithmique, en commentant abondamment les sections mathématiques complexes.

## Résultats

- **Pour le projet** : Un jeu fluide, sans aucun bug de collision, même à vitesse extrême. L'ajout d'un mode "IA" basique a permis de tester le jeu en solo.
- **Pour moi** : La validation avec mention de l'unité d'enseignement "Programmation Orientée Objet".

## Les lendemains du projet

- *Immédiatement après* : Le projet a servi de support pour un court exposé en classe sur l'utilisation des vecteurs en programmation.
- *À distance* : Les algorithmes de collision écrits en C# ont été traduits et réutilisés dans des projets web ultérieurs impliquant des canvas HTML5.
- *Aujourd'hui* : Bien qu'académique, c'est le projet qui m'a enseigné la rigueur absolue requise par la programmation temps-réel.

## Regard Critique

**Ma valeur ajoutée** : L'effort pédagogique. J'ai structuré le code non pas seulement pour qu'il fonctionne, mais pour qu'il soit lisible et compréhensible par des débutants, en séparant drastiquement les mathématiques de l'affichage.
**Enseignements** : J'ai découvert l'importance vitale du *Delta Time*. Avant cela, je pensais qu'un programme s'exécutait toujours à la même vitesse. C'est une leçon d'architecture fondamentale que je garde à l'esprit même dans le monde du web (animations, requêtes asynchrones).

## Compétences rattachées

- [Adaptabilité](/competences/adaptabilite)
- [Tests & Débogage](/competences/tests-debogage)
