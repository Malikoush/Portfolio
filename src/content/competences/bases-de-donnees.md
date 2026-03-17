---
title: Base de données
category: technique
level: 8
icon: "🗄️"
shortDescription: Conception, requêtage et optimisation de bases de données relationnelles (SQL, Oracle, SQLite).
relatedRealisations: ["letstyle", "cloudflop"]
---

## Définition

La compétence en bases de données couvre la modélisation des données (MCD, MLD, diagrammes entité-relation), la conception de schémas relationnels, l'écriture de requêtes SQL optimisées, et la gestion des contraintes d'intégrité. Elle inclut aussi la sécurisation des accès, la gestion des transactions (ACID) et les fondamentaux de performance (indexation, plans d'exécution).

Dans l'industrie logicielle, une mauvaise conception de base de données est l'une des sources les plus coûteuses de dette technique. Un ingénieur qui comprend les données à la fois comme un développeur et comme un administrateur est un profil rare et très recherché.

## Éléments de preuve

### Base Oracle volumineuse chez 3F

Chez 3F, je travaille quotidiennement avec une base Oracle de plusieurs dizaines de tables métier (gestion locative, facturation, interventions). J'ai écrit des requêtes complexes (sous-requêtes corrélées, CTEs, fenêtrage) et optimisé plusieurs procédures stockées qui causaient des timeouts.

**Résultat** : Une procédure critique de calcul des loyers a vu son temps d'exécution passer de 45 secondes à 3 secondes après analyse du plan et ajout d'index composites. Cela a supprimé des incidents de production récurrents.

### CloudFlop — Modélisation des métadonnées chiffrées

Sur le projet CloudFlop, j'ai conçu la structure de données pour stocker les métadonnées des fichiers tout en garantissant que les données sensibles ne sont jamais stockées en clair. La base SQLite locale gère les index de fichiers, les permissions et les clés dérivées côté client.

**Résultat** : Architecture de données robuste, validée lors d'une revue de sécurité par notre référent ESIEA. Aucune donnée sensible exposée en base.

→ *Voir la réalisation [CloudFlop](/realisations/cloudflop)*

## Autocritique

Mon niveau est de 8/10 pour les bases relationnelles SQL. Ma progression porte sur les bases NoSQL (MongoDB, Redis) et les architectures Event Sourcing / CQRS. Je tends à naturellement penser "relationnel" face à un problème de données, ce qui peut être une limite quand un modèle documentaire ou graphe serait plus adapté.

Cette compétence fonctionne dans tous les contextes, mais nécessite de bien connaître le SGBD utilisé — Oracle et PostgreSQL ont des comportements très différents en termes de performance et de syntaxe.

## Évolution

Je souhaite approfondir les bases de données distribués et le cloud data (Azure SQL, Cosmos DB). Je prévois de suivre une formation spécialisée sur l'optimisation Oracle dans le cadre de mon alternance chez 3F.

## Réalisations rattachées

- [CloudFlop — Application de stockage cloud sécurisée](/realisations/cloudflop)
- [Let'Style — Plateforme de personnalisation vestimentaire](/realisations/letstyle)
