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
relatedCompetences: ["design-ux", "api-integration"]
---

## Présentation du projet

ComicsApp est une application mobile cross-platform, pensée pour fonctionner à la fois sur iOS et Android. Elle s’adresse aux passionnés de bandes dessinées, de comics et de mangas qui souhaitent organiser leur collection, suivre leur progression de lecture et retrouver facilement les œuvres déjà lues ou à lire.

Cette réalisation a été menée dans un cadre académique, au sein d’une équipe de trois étudiants. L’idée du projet s’appuyait sur un besoin concret : remplacer un suivi de lecture peu pratique, de type fichier Excel, par une application plus fluide, plus visuelle et mieux adaptée à un usage mobile.

Le projet avait donc une double finalité : concevoir une application utile pour un public de lecteurs, tout en découvrant le développement mobile hybride avec React Native, une technologie que nous n’avions pas encore réellement pratiquée dans notre formation.

## Objectifs, Contexte et Enjeux

Le projet a été réalisé dans le cadre de notre formation, avec l’objectif de concevoir une application mobile complète. Nous avons choisi le thème de la bande dessinée et du manga, car il permettait de travailler sur un sujet concret, visuel et facilement testable auprès d’utilisateurs intéressés par ce type de contenu.

L’objectif utilisateur était de proposer une alternative plus agréable à un simple tableau de suivi. L’application devait permettre d’ajouter des œuvres, de consulter sa bibliothèque, de suivre sa progression de lecture et de rechercher de nouveaux albums grâce à une API spécialisée.

L’un des enjeux techniques concernait la découverte de React Native. Il fallait comprendre le cycle de vie des composants, la navigation entre les écrans, la gestion de l’état global et les différences entre un développement web classique et un développement mobile cross-platform. Même si le projet était académique, il nous a confrontés à des problématiques proches d’un contexte réel : compatibilité entre plateformes, performance, ergonomie mobile et gestion des dépendances natives.

Un autre enjeu portait sur la fluidité de l’application. Une bibliothèque de lecture repose beaucoup sur l’affichage de couvertures, parfois nombreuses et en haute résolution. Il fallait donc éviter que l’application ralentisse lorsque la liste grandissait. Pour moi, le risque était de produire une interface correcte en démonstration, mais peu crédible dès que le volume de données augmentait.

Enfin, le projet comportait un enjeu UX important. Une application mobile ne doit pas seulement être fonctionnelle : elle doit être agréable à parcourir, intuitive et adaptée aux habitudes tactiles des utilisateurs. Il fallait donc trouver un équilibre entre les exigences académiques, les choix techniques de l’équipe et la qualité de l’expérience utilisateur.

## Étapes de réalisation (Ce que j'ai fait)

Au sein de l’équipe, j’ai principalement contribué à la conception de l’expérience utilisateur, à l’implémentation d’écrans React Native et à l’intégration des données liées aux œuvres. La première étape a consisté à définir les parcours principaux de l’application : consulter sa bibliothèque, ajouter une œuvre, rechercher un album, suivre sa progression et accéder au détail d’un titre.

Nous avons ensuite travaillé sur les maquettes avec Figma. J’ai participé à la structuration des écrans mobiles en veillant à conserver une navigation simple, des boutons accessibles, une bonne lisibilité des informations et une place importante pour les couvertures. Dans une application centrée sur la BD et le manga, l’image joue un rôle essentiel : elle aide l’utilisateur à reconnaître rapidement une œuvre et rend la bibliothèque plus agréable à parcourir.

J’ai ensuite participé au développement des principales vues en React Native, notamment les écrans de bibliothèque, de recherche et de détail d’un album. J’ai porté une attention particulière à la fluidité de l’interface, aux transitions et aux retours visuels lors des interactions. Ces éléments ont permis de donner à l’application une impression plus aboutie, au-delà du simple fonctionnement technique.

Une autre partie importante de mon travail a concerné la persistance locale avec AsyncStorage. Cette fonctionnalité permettait de conserver les informations de bibliothèque et de rendre l’application utilisable même sans connexion Internet. Ce choix était important pour un usage mobile réaliste, par exemple dans les transports ou dans des situations où le réseau est limité.

J’ai également participé à l’intégration de l’API ComicVine, utilisée pour enrichir la recherche d’albums et éviter une saisie entièrement manuelle. Il a fallu gérer les appels API, l’affichage des résultats, la récupération des couvertures et les cas où l’API ne renvoyait pas de données exploitables. Cette étape a renforcé l’intérêt de l’application, car elle rendait l’ajout d’œuvres plus rapide et plus agréable pour l’utilisateur.

Enfin, nous avons testé l’application avec une bibliothèque importante pour vérifier sa stabilité. Les ajustements réalisés sur les listes et le chargement des images ont permis à ComicsApp de gérer plus de 500 albums sans ralentissement visible sur un smartphone de milieu de gamme.

## Acteurs et Interactions

Le projet a été réalisé par une équipe de trois étudiants. Cette organisation nous a obligés à répartir les responsabilités, à coordonner nos développements et à garder une cohérence entre les différentes parties de l’application.

Les échanges dans l’équipe ont principalement porté sur les choix d’interface, l’organisation des écrans, la gestion des données et les priorités de développement. Comme React Native était une technologie nouvelle pour nous, nous avons aussi dû partager nos découvertes, résoudre ensemble certains blocages techniques et harmoniser nos pratiques pour éviter que le code devienne difficile à maintenir.

Nous avons également réalisé une phase de bêta-test auprès de cinq amis grands lecteurs de BD et de mangas. Leurs retours nous ont aidés à améliorer l’ergonomie, notamment sur la page d’accueil, qui a été retravaillée pour rendre l’accès à la bibliothèque et aux lectures en cours plus direct. Ces interactions ont montré l’importance de confronter rapidement une interface à des utilisateurs extérieurs à l’équipe.

## Résultats

Pour les utilisateurs testeurs, ComicsApp a proposé une expérience plus agréable qu’un simple tableau de suivi. La bibliothèque devenait visuelle, consultable sur mobile et plus simple à parcourir. Le suivi de lecture était plus naturel, car l’application permettait de retrouver une œuvre, de voir sa couverture, de vérifier son avancement et d’ajouter de nouveaux titres plus rapidement.

Pour l’équipe, le projet a permis de produire une application mobile complète dans un cadre académique, en découvrant une technologie nouvelle et en respectant les objectifs fixés. La collaboration à trois nous a aussi permis de mieux comprendre les enjeux de coordination : répartir les tâches, intégrer le travail de chacun et maintenir une cohérence visuelle et technique.

Pour moi, ComicsApp a confirmé ma capacité à apprendre rapidement un nouveau framework et à contribuer à un projet mobile complet. React Native ne faisait pas partie de mes acquis principaux au départ, mais ce projet m’a permis de comprendre son fonctionnement, ses avantages et ses contraintes. J’ai aussi progressé en design d’interface, en intégration d’API et en optimisation d’affichage mobile.

## Les lendemains du projet

Dans un premier temps, ComicsApp a été déployée en version bêta auprès d’un cercle restreint, via TestFlight pour iOS et sous forme d’APK pour Android. Cette diffusion limitée nous a permis d’observer l’application dans des conditions plus proches d’un usage réel, avec des appareils différents et des habitudes utilisateur variées.

À distance, ce projet a surtout joué un rôle d’apprentissage pour l’équipe. Il nous a donné une première expérience concrète du développement mobile cross-platform, mais aussi des difficultés liées à l’écosystème mobile : configuration de l’environnement, builds, dépendances natives, permissions et résolution d’erreurs spécifiques à Android ou iOS.

Aujourd’hui, le projet est en pause. Il reste néanmoins une base intéressante si je souhaite reprendre le développement mobile ou approfondir React Native. Il constitue aussi une réalisation importante dans mon parcours, car il montre ma capacité à travailler en équipe sur une application mobile, à apprendre une technologie nouvelle et à transformer un besoin utilisateur en interface concrète.

## Regard Critique

Avec le recul, l’un de mes principaux apports sur ComicsApp a été l’attention portée à l’expérience utilisateur. Nous aurions pu nous limiter à une application fonctionnelle permettant d’ajouter et de lister des albums, mais j’ai contribué à orienter le projet vers une interface plus visuelle, plus fluide et plus agréable à utiliser.

Ce projet m’a également appris que le développement mobile hybride est très puissant, mais qu’il ne supprime pas complètement la complexité du mobile natif. Même en travaillant principalement avec JavaScript et React Native, nous avons dû comprendre des erreurs liées à Gradle, CocoaPods, Android ou iOS. J’ai donc appris à lire des logs plus techniques et à chercher des solutions dans des environnements que je ne maîtrisais pas encore.

La principale limite du projet concerne son périmètre. Dans le temps disponible, certaines fonctionnalités n’ont pas pu être approfondies, comme la synchronisation cloud, les recommandations personnalisées ou une meilleure gestion multi-appareils. Cependant, cette limite nous a aussi appris à prioriser : il valait mieux livrer une application cohérente et utilisable plutôt qu’une accumulation de fonctionnalités incomplètes.

ComicsApp m’a finalement permis de mieux comprendre ce qui fait la qualité d’une application mobile : une idée claire, une interface adaptée, des performances suffisantes et une coordination efficace entre les membres de l’équipe.
