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

Chez 3F, je travaille quotidiennement avec une base Oracle de plusieurs dizaines de tables metier. J'ai ecrit des requetes complexes et optimise plusieurs traitements qui causaient des timeouts.

**Resultat** : une procedure critique de calcul a vu son temps d'execution passer de 45 secondes a 3 secondes apres analyse du plan et ajout d'index composites.

### Digitao - Modelisation des flux d'achat

Sur Digitao, j'ai participe a la conception et a l'evolution du schema Oracle pour representer des appels d'offres ouverts et restreints, les commissions, les etapes d'edition et les differents flux d'achat.

**Resultat** : une base plus coherente avec le fonctionnement metier, capable de soutenir un processus fiable et tracable dans le temps.

→ *Voir la realisation [Digitao](/realisations/digitao)*

### CloudFlop - Modelisation des metadonnees chiffrees

Sur le projet CloudFlop, j'ai concu la structure de donnees pour stocker les metadonnees des fichiers tout en garantissant que les donnees sensibles ne sont jamais stockees en clair.

**Resultat** : architecture de donnees robuste, validee lors d'une revue de securite.

→ *Voir la realisation [CloudFlop](/realisations/cloudflop)*

## Autocritique

Mon niveau est de 8/10 pour les bases relationnelles SQL. Ma progression porte sur les bases NoSQL et les architectures distribuees. Je tends naturellement a penser relationnel face a un probleme de donnees, ce qui peut etre une limite dans certains contextes.

Cette competence fonctionne dans tous les contextes, mais necessite de bien connaitre le SGBD utilise : Oracle et PostgreSQL ont des comportements tres differents en termes de performance et de syntaxe.

## Evolution

Je souhaite approfondir les bases de donnees distribuees et le cloud data. Je prevois de suivre une formation specialisee sur l'optimisation Oracle dans le cadre de mon alternance chez 3F.

## Realisations rattachees

- [CloudFlop - Application de stockage cloud securisee](/realisations/cloudflop)
- [Let'Style - Plateforme de personnalisation vestimentaire](/realisations/letstyle)
- [Digitao - Plateforme de gestion des appels d'offres immobiliers](/realisations/digitao)
