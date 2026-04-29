---
title: Modélisation UML
category: technique
level: 8
icon: "📐"
shortDescription: Conception technique et architecture logicielle via diagrammes UML.
relatedRealisations: ["letstyle", "spotymike"]
---

## Définition

La modélisation UML (Unified Modeling Language) est le langage standardisé de représentation des systèmes logiciels. Elle comprend les diagrammes de cas d'usage, de classes, de séquence, d'activité et de déploiement. C'est le langage commun entre architectes, développeurs et chefs de projet pour communiquer une vision technique de manière non ambiguë.

En 2025, l'UML reste incontournable dans les appels d'offres, les dossiers d'architecture et les revues de conception des grandes organisations. Même dans les équipes Agile, un diagramme de séquence ou de classes bien fait vaut mieux qu'une heure de réunion.

## Éléments de preuve

### Let'Style — Dossier d'architecture complet

Dans le cadre du projet Let’Style, l’un des enjeux était de construire une application suffisamment claire sur le plan fonctionnel et technique pour être développée en équipe. Avant de passer au développement, il fallait donc formaliser les principaux comportements attendus, les entités du système, les interactions entre les composants et l’organisation globale de l’architecture.

J’ai produit un dossier d’architecture complet comprenant plusieurs diagrammes UML : un diagramme de cas d’usage pour identifier les interactions entre les utilisateurs et le système, un diagramme de classes pour représenter les principales entités métier, des diagrammes de séquence pour les flux importants comme l’inscription, la commande ou la personnalisation, ainsi qu’un diagramme de déploiement pour visualiser l’organisation technique de l’application.

Ma valeur ajoutée a été de transformer des besoins parfois abstraits en représentations visuelles exploitables par l’équipe. Ces diagrammes ont servi de support commun pour aligner les membres du projet sur la même compréhension de l’application. Le dossier a également permis d’éviter certaines dérives architecturales pendant le développement, car l’équipe disposait d’une référence claire pour vérifier si les choix techniques restaient cohérents avec la conception initiale.

→ _Voir la réalisation [Let'Style](/realisations/letstyle)_

### SpotyMike — Modélisation du flux d'intégration API

Sur le projet SpotyMike, l’intégration des API Spotify et Deezer impliquait des flux techniques complexes, notamment autour de l’authentification OAuth2. Le risque était que chaque membre de l’équipe interprète différemment l’enchaînement des appels, les cas d’erreur ou le renouvellement des tokens, ce qui aurait pu provoquer des incohérences dans l’implémentation.

Pour clarifier ces échanges, j’ai produit des diagrammes de séquence détaillant les étapes du flux OAuth2 avec Spotify et Deezer. Ces diagrammes représentaient les interactions entre l’utilisateur, l’application, le serveur d’authentification et les API externes. J’y ai également intégré les principaux états possibles : succès de l’authentification, erreur d’accès, expiration du token ou renouvellement nécessaire.

Ma contribution a permis de rendre visible une logique technique qui aurait été difficile à expliquer uniquement à l’écrit. Grâce à cette modélisation, l’équipe a pu mieux anticiper les cas limites et éviter plusieurs erreurs d’intégration. La première itération de mise en œuvre s’est déroulée sans bug majeur sur le flux d’authentification, ce qui montre que les diagrammes ont réellement facilité le passage de la conception au code.

→ _Voir la réalisation [SpotyMike](/realisations/spotymike)_

## Autocritique

J’évalue mon niveau actuel à 8/10 en modélisation UML. Je maîtrise les diagrammes les plus utilisés dans les projets applicatifs, notamment les diagrammes de cas d’usage, les diagrammes de classes et les diagrammes de séquence. Je sais les utiliser pour clarifier un besoin, expliquer un fonctionnement technique ou préparer le développement d’une fonctionnalité.

Cette compétence est importante dans mon profil, car elle me permet de prendre du recul avant de coder. Elle m’aide à structurer ma réflexion, à détecter des incohérences en amont et à communiquer plus facilement avec une équipe. Dans un projet informatique, un diagramme bien construit peut faire gagner du temps, car il évite les malentendus entre les développeurs, les responsables fonctionnels ou les membres du jury.

Ma principale marge de progression concerne les diagrammes d’état, que je dois pratiquer davantage pour représenter des objets ayant des cycles de vie complexes. Je souhaite aussi progresser sur des notations plus orientées architecture, comme le C4 Model ou ArchiMate, car UML seul n’est pas toujours suffisant pour représenter clairement une architecture moderne, notamment lorsqu’il y a plusieurs services, environnements ou composants techniques.

Avec l’expérience, j’ai aussi identifié une limite dans ma manière de modéliser : j’ai parfois tendance à produire des diagrammes trop détaillés. Or, un bon modèle n’est pas forcément celui qui montre tout, mais celui qui montre ce qui est utile à la compréhension et à la décision. Je dois donc continuer à progresser sur le principe du modèle “juste assez précis”, c’est-à-dire suffisamment clair pour guider le projet, mais pas trop lourd à maintenir.

Cette compétence n’a pas la même valeur selon le moment où elle est utilisée. Elle est particulièrement utile en amont du développement, lorsqu’elle aide à structurer les choix et à aligner l’équipe. Utilisée uniquement après coup pour décrire ce qui a déjà été développé, elle devient souvent moins utile, car elle sert davantage à documenter qu’à guider. Avec le recul, je conseille donc de modéliser avant de coder, même de façon simple, surtout lorsque le projet implique plusieurs acteurs ou des flux complexes.

## Évolution

À moyen terme, je souhaite atteindre un niveau 9/10 en modélisation UML, non pas en multipliant les diagrammes, mais en étant capable de choisir le bon niveau de représentation selon le besoin : fonctionnel, métier, technique ou architectural.

Pour progresser, je prévois de renforcer ma pratique sur les diagrammes d’état et les diagrammes d’activité, car ils sont particulièrement utiles pour représenter des workflows, des processus métier ou des objets qui changent de statut au fil du temps. Cela me permettra de mieux modéliser des systèmes comme des commandes, des validations, des demandes d’achat ou des parcours utilisateur complexes.

Je souhaite également approfondir le C4 Model, qui me semble plus adapté que certains diagrammes UML pour expliquer l’architecture globale d’une application moderne. Cette autoformation passera par la lecture de ressources dédiées au C4 Model, puis par son application sur l’un de mes projets existants afin de produire plusieurs niveaux de représentation : contexte, conteneurs, composants et éventuellement code.

Enfin, je veux continuer à m’intéresser à l’Architecture Driven Development, afin de mieux relier mes choix de conception à des décisions techniques concrètes. L’objectif est que mes modèles ne soient pas seulement des documents de présentation, mais de vrais outils d’aide à la décision, capables de guider le développement, la maintenance et l’évolution d’un projet.
