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

Dans mon contexte professionnel chez 3F, je travaille quotidiennement avec une base de données Oracle composée de plusieurs dizaines de tables métier. Cette base soutient des traitements importants liés au fonctionnement de l’application, ce qui implique une forte exigence de fiabilité, de lisibilité des requêtes et de performance.

L’un des enjeux rencontrés concernait une procédure critique de calcul qui était instable en production. Le problème ne venait pas seulement de la logique métier, mais aussi de la manière dont certaines requêtes SQL étaient structurées et exécutées par Oracle. J’ai donc analysé les plans d’exécution afin d’identifier les opérations coûteuses, les jointures problématiques et les parties de requêtes qui pouvaient provoquer des lenteurs ou des comportements instables.

Ma valeur ajoutée a été de ne pas me limiter à une correction superficielle. J’ai pris le temps de comprendre le fonctionnement du traitement, les dépendances entre les tables et l’impact réel des requêtes sur la production. J’ai ensuite restructuré les requêtes impliquées afin de rendre la procédure plus stable et plus fiable.

Résultat : une procédure critique auparavant instable a été stabilisée et rendue fiable en production. Cette intervention prouve ma capacité à travailler sur une base volumineuse, à diagnostiquer des problèmes de performance SQL et à sécuriser des traitements importants pour l’entreprise.

### Digitao - Modelisation des flux d'achat

Dans le cadre du projet Digitao, l’objectif était de représenter en base de données des processus d’achat complexes, notamment les appels d’offres ouverts et restreints, les commissions, les étapes d’édition et les différents flux de validation. Le défi principal était de concevoir une structure de données capable de refléter correctement le fonctionnement métier, tout en restant maintenable et évolutive.

J’ai participé à la conception et à l’évolution du schéma Oracle afin de mieux représenter ces différents objets métier et leurs relations. Cette mission demandait de bien comprendre les règles fonctionnelles avant de les traduire en tables, relations, contraintes et structures exploitables par l’application.

Ma valeur ajoutée a été de faire le lien entre le besoin métier et sa traduction technique. J’ai contribué à rendre le modèle de données plus cohérent avec les flux réels d’achat, en veillant à préserver la traçabilité des étapes et la fiabilité des informations stockées.

Résultat : la base de données est devenue plus cohérente avec le fonctionnement métier, capable de soutenir un processus d’achat fiable, structuré et traçable dans le temps.

→ _Voir la realisation [Digitao](/realisations/digitao)_

### CloudFlop - Modelisation des metadonnees chiffrees

CloudFlop — Modélisation des métadonnées chiffrées

Dans le projet CloudFlop, l’objectif était de concevoir une solution de stockage de fichiers en tenant compte d’un enjeu important : la protection des données sensibles. Il ne s’agissait donc pas uniquement de créer une structure de données fonctionnelle, mais aussi de réfléchir à la manière de stocker les informations sans exposer de données confidentielles en clair.

J’ai conçu la structure permettant de stocker les métadonnées des fichiers tout en garantissant que les informations sensibles ne soient jamais directement enregistrées en clair dans la base. Cette réflexion a demandé de distinguer les données nécessaires au fonctionnement de l’application des données devant rester protégées ou chiffrées.

Ma valeur ajoutée a été d’intégrer les contraintes de sécurité dès la phase de modélisation. Au lieu de traiter la sécurité comme une couche ajoutée après coup, j’ai conçu le modèle de données en tenant compte de la confidentialité, de la robustesse et de la maintenabilité de l’architecture.

Résultat : une architecture de données robuste, validée lors d’une revue de sécurité. Cette réalisation montre ma capacité à concevoir une base de données en prenant en compte à la fois les besoins fonctionnels et les exigences de sécurité.

→ _Voir la realisation [CloudFlop](/realisations/cloudflop)_

## Autocritique

J’évalue mon niveau actuel à 8/10 sur les bases de données relationnelles et le langage SQL. Je suis à l’aise avec la modélisation relationnelle, l’écriture de requêtes complexes, les jointures, les contraintes d’intégrité, ainsi que l’analyse de problèmes de performance, notamment dans un environnement Oracle.

Cette compétence occupe une place importante dans mon profil d’Expert en Ingénierie, car la donnée est au cœur de la majorité des applications professionnelles. Une mauvaise modélisation peut rendre une application difficile à maintenir, ralentir les traitements ou provoquer des incohérences métier. À l’inverse, une base bien conçue facilite l’évolution du projet, la fiabilité des traitements et la compréhension globale du système.

Ma principale marge de progression concerne les bases NoSQL, les architectures distribuées et les problématiques de très forte volumétrie. Je tends encore naturellement à raisonner en modèle relationnel lorsqu’un problème de données se présente. Cette approche est pertinente dans beaucoup de contextes, mais elle peut devenir une limite lorsque le besoin correspond davantage à du document, du graphe, du temps réel ou du stockage distribué.

Cette compétence ne s’applique pas de la même manière dans tous les contextes. Une base Oracle utilisée dans une grande entreprise, avec des contraintes fortes de performance et de production, ne se gère pas comme une petite base PostgreSQL sur un projet étudiant. Les choix de modélisation, d’indexation, de normalisation ou de dénormalisation dépendent du SGBD, du volume de données, des usages métier et des contraintes de maintenance.

J’ai acquis cette compétence progressivement. Au départ, je savais surtout écrire des requêtes SQL classiques. Avec l’expérience, notamment chez 3F et sur des projets comme Digitao ou CloudFlop, j’ai appris à mieux comprendre l’impact d’un modèle de données sur l’ensemble de l’application. J’ai aussi développé davantage de recul sur les performances, la sécurité et la cohérence métier.

Avec l’expérience que j’ai aujourd’hui, je conseille de ne jamais concevoir une base de données uniquement à partir d’une vision technique. Il faut d’abord comprendre le métier, les flux, les règles de gestion et les usages futurs. Une table mal pensée au départ peut créer beaucoup de dette technique par la suite.

## Evolution

À moyen terme, je souhaite atteindre un niveau 9/10 en bases de données relationnelles, notamment sur les sujets de performance, d’optimisation SQL, de modélisation avancée et d’exploitation de bases volumineuses en environnement professionnel.

Pour progresser, je prévois de poursuivre une autoformation centrée sur l’optimisation SQL avancée, notamment l’analyse des plans d’exécution, l’indexation, les stratégies de jointure et les bonnes pratiques propres à Oracle. Mon objectif est d’être capable d’identifier plus rapidement les causes de lenteur et de proposer des optimisations fiables en production.

Je souhaite également me former davantage aux bases NoSQL, en particulier MongoDB pour les bases orientées documents et Redis pour les usages liés au cache et à la performance. Cette montée en compétence me permettra de mieux choisir le type de base adapté à chaque contexte, au lieu de raisonner uniquement avec une approche relationnelle.

Enfin, je souhaite approfondir les notions d’architecture de données distribuée, de réplication, de sauvegarde, de scalabilité et de sécurité des données. Ces sujets sont directement liés à mon projet professionnel, car je veux être capable de concevoir des applications robustes, performantes et adaptées aux contraintes réelles des entreprises.
