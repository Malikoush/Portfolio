---
title: ComicsApp
description: Application mobile de lecture et classement de bandes dessinées.
img: /assets/IMG_comics.png
img_alt: Capture d'écran de l'application mobile ComicsApp
date: 2023-04-10
tags:
  - Mobile
  - React Native
  - UI/UX
relatedCompetences: ["developpement-web", "design-ux", "api-integration"]
---

## Présentation du projet

ComicsApp est une application mobile cross-platform (iOS/Android) dédiée aux passionnés de bandes dessinées et de mangas. Elle permet aux utilisateurs de créer une bibliothèque virtuelle, de tracker leur progression de lecture, et de découvrir de nouvelles œuvres grâce à l'intégration d'APIs spécialisées (ComicVine).

## Objectifs, Contexte et Enjeux

**Contexte** : Projet initié pour découvrir le développement mobile hybride.
**Objectif client (moi-même)** : Disposer d'une application fluide et esthétique remplaçant mon fichier Excel de suivi de lecture.
**Enjeux / Risques** :

- _Techniques_ : Comprendre le cycle de vie des composants React Native et gérer l'état global de l'application (Redux, Zustand).
- _Performance_ : Assurer un défilement fluide (60 fps) sur des listes contenant des centaines de couvertures d'albums en haute résolution.

## Étapes de réalisation (Ce que j'ai fait)

1. **Maquettage UX/UI** : Création complète du design sur Figma, en respectant les guidelines Android (Material Design) et iOS (Human Interface Guidelines).
2. **Développement Front-End** : Implémentation des écrans en React Native, avec une attention particulière portée aux micro-animations (transitions de pages, feedback visuel au clic).
3. **Persistance locale** : Configuration de AsyncStorage pour permettre une utilisation hors-ligne de l'application (consultation de la bibliothèque en mode avion).
4. **Intégration API** : Connexion à l'API publique ComicVine pour l'auto-complétion des recherches d'albums.

## Acteurs et Interactions

- **Mon rôle** : Concepteur et développeur unique.
- **Interactions** : Bêta-testing réalisé auprès de 5 amis grands lecteurs de BD pour ajuster l'ergonomie. Leur retour a conduit à la refonte complète de la page d'accueil.

## Résultats

- **Pour le projet** : L'application gère parfaitement une bibliothèque de 500+ albums sans ralentissement visible sur un smartphone de milieu de gamme.
- **Pour moi** : Une validation de mes capacités d'apprentissage autonome sur un nouveau framework (React Native n'était pas au programme de ma formation initiale).

## Les lendemains du projet

- _Immédiatement après_ : Déploiement d'une version bêta via TestFlight (iOS) et APK (Android) pour mon cercle proche.
- _À distance_ : Ce projet m'a permis de découvrir concrètement le développement mobile cross-platform avec React Native, une technologie que je n'avais pas eu l'occasion d'explorer en cours.
- _Aujourd'hui_ : Le projet est en pause, mais il reste une bonne base si je souhaite reprendre le développement mobile à l'avenir.

## Regard Critique

**Ma valeur ajoutée** : L'effort mis sur le design. Beaucoup de projets personnels de développeurs négligent l'esthétique ; j'ai pris le temps de concevoir une interface qui n'a rien à envier aux applications commerciales.
**Enseignements** : Le développement mobile hybride est puissant, mais les problèmes de dépendances (npm, Gradle, CocoaPods) peuvent vite devenir cauchemardesques si l'environnement de développement n'est pas parfaitement maîtrisé. J'ai appris à lire des logs d'erreurs natifs (Java/Objective-C) même en écrivant du JavaScript.
