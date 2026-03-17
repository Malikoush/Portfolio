---
title: CloudFlop
description: Application de stockage cloud sécurisée avec chiffrement côté client.
img: /assets/stock-3.jpg
img_alt: Interface de l'application CloudFlop
date: 2024-10-10
tags:
  - Sécurité
  - Cryptographie
  - P2P
relatedCompetences: ["securite-applicative", "tests-debogage", "bases-de-donnees"]
---

## Présentation du projet

CloudFlop est une plateforme expérimentale de stockage de fichiers dans le cloud focalisée sur la confidentialité absolue. Son principe fondamental est le concept "Zéro-Knowledge" : tous les fichiers sont chiffrés localement sur l'appareil de l'utilisateur avant d'être envoyés vers les serveurs de stockage, rendant impossible la lecture des données par l'hébergeur.

## Objectifs, Contexte et Enjeux

**Contexte** : Projet de spécialisation en sécurité des systèmes d'information.
**Objectif client** : Développer une alternative auto-hébergeable aux solutions cloud grand public, garantissant que même un administrateur système compromis ne puisse accéder aux données.
**Enjeux / Risques** :
- *Techniques* : Maîtriser les primitives cryptographiques (AES, PBKDF2) sans créer de failles par une mauvaise implémentation maison.
- *Performance* : Le chiffrement côté client via JavaScript/WebCrypto API au sein du navigateur impacte les performances pour les fichiers volumineux.
- *Risque UX* : La sécurité absolue implique l'absence de procédure logicielle de "mot de passe oublié" (la perte de la clé = perte des données). Résoudre le défi pédagogique de le faire accepter à l'utilisateur.

## Étapes de réalisation (Ce que j'ai fait)

1. **Recherche cryptographique** : Étude et sélection des algorithmes standards (AES-GCM pour les fichiers, dérivation PBKDF2 avec sel fort pour générer la clé de chiffrement à partir du mot de passe utilisateur).
2. **Implémentation Core** : Développement du moteur de traitement des fichiers (découpage en chunks, chiffrement progressif, hachage d'intégrité).
3. **Backend & BDD** : Création d'une base de métadonnées chiffrées (noms de fichiers, tailles, dossiers) stockée sur le serveur.
4. **Détection de fuites** : Mise en place de tests unitaires intensifs sur les modules de chiffrement pour s'assurer qu'aucune mémoire contenant le texte clair ne soit pas effacée ou transmise par erreur au backend.

## Acteurs et Interactions

- **Mon rôle** : Développeur principal avec une forte orientation sur l'ingénierie sécurité du produit.
- **Interactions** : Revues de code strictes et "peer-audits" avec d'autres étudiants agissant comme pentesteurs "Red Team" cherchant à casser l'implémentation.

## Résultats

- **Pour le projet** : CloudFlop est capable de traiter des fichiers jusqu'à 1 Go directement dans le navigateur sans fuite de mémoire (memory leak) et d'assurer un stockage étanche.
- **Pour moi** : Approfondissement massif de ma compréhension de la cryptographie appliquée et de la gestion de la mémoire dans les environnements web.

## Les lendemains du projet

- *Immédiatement après* : Le projet a fait l'objet d'une analyse de vulnérabilité où aucune faille conceptuelle grave n'a été détectée.
- *À distance* : J'ai réutilisé les briques cryptographiques développées ici pour sécuriser ponctuellement des données sensibles dans des projets ultérieurs.
- *Aujourd'hui* : S'agissant d'un projet "Proof of Concept" académique, il n'a pas vocation à être commercialisé, mais sert de démonstration forte de mes compétences en sécurité.

## Regard Critique

**Ma valeur ajoutée** : L'implémentation du traitement des fichiers par "chunks" (morceaux fluides) plutôt qu'en chargeant tout le fichier en RAM d'un coup. C'est l'optimisation qui a rendu l'application utilisable dans un scénario réel de stockage au lieu de planter le navigateur.
**Enseignements** : On ne crée jamais son propre algorithme de chiffrement. La difficulté de la sécurité applicative n'est pas dans l'algorithme lui-même, mais dans la gestion du cycle de vie des clés et la protection de tous les éléments annexes (métadonnées, logs).

## Compétences rattachées

- [Sécurité applicative](/competences/securite-applicative)
- [Tests & Débogage](/competences/tests-debogage)
- [Bases de données](/competences/bases-de-donnees)
