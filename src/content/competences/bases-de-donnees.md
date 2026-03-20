---
title: Bases de donnees
category: technique
level: 8
icon: "🗄️"
shortDescription: Conception, requetage et optimisation de bases de donnees relationnelles (SQL, Oracle, SQLite).
relatedRealisations:
  - letstyle
  - cloudflop
  - digitao
---

## Definition

La competence en bases de donnees couvre la modelisation des donnees, la conception de schemas relationnels, l'ecriture de requetes SQL optimisees et la gestion des contraintes d'integrite. Elle inclut aussi la securisation des acces, la gestion des transactions et les fondamentaux de performance.

Dans l'industrie logicielle, une mauvaise conception de base de donnees est l'une des sources les plus couteuses de dette technique. Un ingenieur qui comprend les donnees a la fois comme un developpeur et comme un administrateur est un profil rare et tres recherche.

## Elements de preuve

### Base Oracle volumineuse chez 3F

Chez 3F, je travaille quotidiennement avec une base Oracle de plusieurs dizaines de tables métier. J'ai écrit des requêtes complexes et optimisé plusieurs traitements critiques en analysant les plans d'exécution.

**Resultat** : une procédure critique de calcul auparavant instable a été stabilisée et rendue fiable en production, après analyse approfondie du plan d'exécution et restructuration des requêtes impliquées.

### Digitao - Modelisation des flux d'achat

Sur Digitao, j'ai participe a la conception et a l'evolution du schema Oracle pour representer des appels d'offres ouverts et restreints, les commissions, les etapes d'edition et les differents flux d'achat.

**Resultat** : une base plus coherente avec le fonctionnement metier, capable de soutenir un processus fiable et tracable dans le temps.

→ _Voir la realisation [Digitao](/realisations/digitao)_

### CloudFlop - Modelisation des metadonnees chiffrees

Sur le projet CloudFlop, j'ai concu la structure de donnees pour stocker les metadonnees des fichiers tout en garantissant que les donnees sensibles ne sont jamais stockees en clair.

**Resultat** : architecture de donnees robuste, validee lors d'une revue de securite.

→ _Voir la realisation [CloudFlop](/realisations/cloudflop)_

## Autocritique

Mon niveau est de 8/10 pour les bases relationnelles SQL. Ma progression porte sur les bases NoSQL et les architectures distribuees. Je tends naturellement a penser relationnel face a un probleme de donnees, ce qui peut etre une limite dans certains contextes.

Cette competence fonctionne dans tous les contextes, mais necessite de bien connaitre le SGBD utilise : Oracle et PostgreSQL ont des comportements tres differents en termes de performance et de syntaxe.

## Evolution

Je souhaite approfondir mes connaissances en bases de données et continuer à monter en compétences sur les problématiques de performance et de modélisation avancée, au fil des projets et des défis rencontrés en entreprise.
