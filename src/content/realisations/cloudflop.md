---
title: CloudFlop
description: Application de stockage cloud sécurisée avec chiffrement côté client.
img: /assets/IMG_cloudf.png
img_alt: Interface de l'application CloudFlop
date: 2024-10-10
tags:
  - Sécurité
  - Cryptographie
  - P2P
relatedCompetences:
  ["securite-applicative", "tests-debogage", "bases-de-donnees"]
---

## Présentation du projet

CloudFlop est une plateforme expérimentale de stockage de fichiers dans le cloud, conçue autour d’un objectif principal : garantir la confidentialité des données de l’utilisateur. Le projet repose sur une logique dite zéro-knowledge, c’est-à-dire que les fichiers sont chiffrés localement sur l’appareil de l’utilisateur avant d’être envoyés vers le serveur.

L’idée centrale du projet était simple : même si le serveur stocke les fichiers, il ne doit jamais pouvoir les lire. Cette approche inverse la logique de nombreux services cloud classiques, dans lesquels l’utilisateur doit faire confiance à l’hébergeur pour protéger ses données. Avec CloudFlop, la confidentialité ne repose pas uniquement sur les droits d’accès du serveur, mais sur une architecture où le contenu reste illisible sans la clé détenue par l’utilisateur.

Cette réalisation m’a particulièrement marqué, car elle m’a obligé à penser la sécurité non pas comme une option ajoutée en fin de projet, mais comme un principe structurant dès la conception de l’application.

## Objectifs, Contexte et Enjeux

CloudFlop a été réalisé dans un contexte de spécialisation en sécurité des systèmes d’information. L’objectif était de concevoir une alternative expérimentale aux solutions de stockage cloud classiques, avec une exigence forte : empêcher l’accès aux fichiers en clair, même en cas de compromission du serveur ou d’erreur d’administration.

L’enjeu principal pour l’utilisateur était la confidentialité. Un service cloud peut être pratique, mais il pose toujours la question de la confiance : qui peut accéder aux fichiers ? Que se passe-t-il si le serveur est compromis ? Les fichiers peuvent-ils être lus par un administrateur ou par un attaquant ? CloudFlop répondait à ces questions en plaçant le chiffrement côté client au cœur du fonctionnement.

Le projet comportait aussi plusieurs risques techniques. Le premier concernait la cryptographie. Il ne suffisait pas d’utiliser un algorithme reconnu comme AES : il fallait aussi éviter les erreurs d’implémentation, notamment dans la dérivation des clés, la gestion des sels, la protection des métadonnées et le traitement des fichiers volumineux. Une mauvaise utilisation d’un bon algorithme peut créer une faille importante.

Un autre risque concernait la performance. Le chiffrement de fichiers volumineux pouvait entraîner une consommation mémoire trop élevée ou des temps de traitement trop longs. Il fallait donc éviter de charger entièrement les fichiers en mémoire, sous peine de rendre l’application inutilisable dans un scénario réel.

Enfin, le projet présentait un enjeu UX particulier. Dans une architecture zéro-knowledge, il n’est pas possible de proposer une procédure classique de “mot de passe oublié”. Si l’utilisateur perd sa clé ou son mot de passe, les données deviennent irrécupérables. Il fallait donc accepter un compromis fort : plus de confidentialité, mais moins de possibilités de récupération. Pour moi, le risque était de produire une solution techniquement solide, mais difficile à expliquer ou à faire accepter à l’utilisateur.

## Étapes de réalisation (Ce que j'ai fait)

La première étape a consisté à étudier les principes de chiffrement applicables au projet. Je ne voulais pas inventer un mécanisme de sécurité “maison”, car c’est précisément l’une des erreurs les plus dangereuses en cryptographie. J’ai donc orienté mes choix vers des standards reconnus, notamment AES-256 pour le chiffrement des fichiers et PBKDF2 pour la dérivation de clé à partir du mot de passe utilisateur.

Cette phase de recherche m’a permis de mieux comprendre que la sécurité ne dépend pas seulement du choix de l’algorithme. Elle dépend aussi de la manière dont les clés sont générées, stockées, utilisées et supprimées. J’ai donc porté une attention particulière au cycle de vie de la clé, afin que le serveur ne reçoive jamais le contenu en clair ni les informations nécessaires pour le reconstituer.

La deuxième étape a été le développement du moteur de traitement des fichiers. Le problème principal était de permettre le chiffrement de fichiers volumineux sans saturer la mémoire du navigateur. Une solution naïve aurait consisté à charger tout le fichier en mémoire, puis à le chiffrer en une seule fois. Cette approche aurait pu fonctionner sur de petits fichiers, mais elle aurait rapidement montré ses limites.

J’ai donc mis en place un traitement par chunks, c’est-à-dire par morceaux successifs. Chaque partie du fichier est traitée progressivement, ce qui permet de limiter la consommation mémoire et d’améliorer la stabilité de l’application. Cette décision technique a été déterminante, car elle a permis de rapprocher CloudFlop d’un usage réaliste plutôt que d’un simple prototype fonctionnant uniquement sur de petits fichiers.

La troisième étape a porté sur la gestion des métadonnées. Même si le contenu des fichiers est chiffré, certaines informations annexes peuvent révéler des éléments sensibles : nom du fichier, taille, organisation des dossiers ou dates associées. J’ai donc conçu une base de métadonnées en veillant à ne pas exposer inutilement d’informations confidentielles côté serveur.

Enfin, j’ai participé à la mise en place de tests autour du module de chiffrement. L’objectif était de vérifier que les fichiers pouvaient être chiffrés puis déchiffrés correctement, mais aussi de s’assurer qu’aucune donnée en clair n’était transmise par erreur au backend. Cette étape a été importante, car dans un projet de sécurité, une fonctionnalité ne peut pas être considérée comme terminée simplement parce qu’elle fonctionne : elle doit aussi être vérifiée contre les scénarios d’erreur.

## Acteurs et Interactions

Sur ce projet, j’ai occupé un rôle de développeur principal orienté sécurité applicative. J’étais particulièrement impliqué dans les choix liés au chiffrement, au traitement des fichiers et à la protection des données sensibles.

Le projet a également donné lieu à des échanges avec d’autres étudiants, notamment lors de revues de code et d’analyses critiques. Certains jouaient le rôle de relecteurs ou de “red team”, en cherchant à identifier les faiblesses possibles de l’implémentation. Ces interactions ont été utiles, car elles m’ont obligé à justifier mes choix techniques et à vérifier que la solution ne reposait pas seulement sur une impression de sécurité.

Ces échanges m’ont aussi appris à communiquer sur un sujet technique complexe. Expliquer pourquoi certaines données ne devaient jamais être envoyées au serveur, pourquoi une procédure de récupération de mot de passe posait problème, ou pourquoi le traitement par morceaux était nécessaire m’a permis de renforcer ma capacité à vulgariser des choix de sécurité.

## Résultats pour l’utilisateur, l’organisation et moi

Pour l’utilisateur, CloudFlop apporte une garantie forte : les fichiers sont protégés avant même d’être envoyés au serveur. Cela renforce la maîtrise des données personnelles, car l’hébergeur ne peut pas consulter le contenu stocké. L’application répond donc à une attente importante dans un contexte où la confidentialité numérique devient un sujet central.

Pour l’organisation ou le cadre pédagogique du projet, cette réalisation a démontré qu’il était possible de construire une solution de stockage cloud plus respectueuse de la confidentialité, tout en conservant une expérience d’utilisation exploitable. Le projet a notamment montré sa solidité lors d’une analyse de sécurité, qui n’a pas relevé de faille conceptuelle critique sur la couche de chiffrement.

Pour moi, CloudFlop a été une étape importante dans ma progression en sécurité applicative. Ce projet m’a permis d’approfondir la cryptographie appliquée, la gestion des fichiers volumineux, la protection des métadonnées et les limites d’une architecture zéro-knowledge. Il m’a aussi fait comprendre que la sécurité ne se résume pas à ajouter une bibliothèque de chiffrement : elle repose sur une architecture complète, cohérente et pensée dès le départ.

## Les lendemains du projet

À court terme, CloudFlop a servi de support d’analyse et de démonstration dans le cadre de ma formation. Le projet a permis de valider plusieurs choix de conception, notamment le chiffrement côté client, la dérivation de clé et le traitement progressif des fichiers.

À distance, cette réalisation a continué à m’être utile dans d’autres projets. Même lorsque je ne réutilise pas directement le code de CloudFlop, j’en conserve les réflexes : identifier les données sensibles, éviter de stocker des informations inutiles, penser au cycle de vie des clés et ne jamais considérer la sécurité comme une couche secondaire.

Aujourd’hui, CloudFlop reste un Proof of Concept académique. Il n’a pas vocation à être commercialisé tel quel, car une mise en production réelle demanderait des audits plus poussés, une analyse juridique, une documentation utilisateur complète et une stratégie claire autour de la récupération ou de la perte des accès. En revanche, il constitue une réalisation forte dans mon portfolio, car il démontre ma capacité à concevoir une application en plaçant la confidentialité au centre de l’architecture.

## Regard Critique

Avec le recul, ma principale contribution sur CloudFlop a été d’avoir cherché à rendre la sécurité compatible avec l’usage. Le chiffrement côté client était le principe de base, mais le traitement par chunks a été l’élément qui a rendu l’application plus réaliste. Sans cette optimisation, le projet aurait pu fonctionner en démonstration sur de petits fichiers, mais il aurait été beaucoup moins crédible dans un scénario de stockage cloud.

Ce projet m’a aussi appris une leçon essentielle : en sécurité, il ne faut jamais inventer son propre algorithme de chiffrement. Le vrai travail ne consiste pas à créer une méthode secrète, mais à utiliser correctement des standards éprouvés et à protéger tout ce qui les entoure : les clés, les métadonnées, les flux, les erreurs, les logs et les comportements utilisateurs.

Je retiens également que la sécurité implique souvent des compromis. Le principe zéro-knowledge protège fortement les données, mais il rend certaines fonctionnalités habituelles plus difficiles, comme la récupération de mot de passe. Un ingénieur responsable doit donc être capable d’expliquer ces compromis clairement, sans promettre une sécurité absolue ni masquer les contraintes à l’utilisateur.

Cette réalisation m’a permis de renforcer mon regard d’ingénieur : concevoir une application fiable ne consiste pas seulement à faire fonctionner une fonctionnalité, mais à anticiper ses limites, ses risques et ses conséquences pour les utilisateurs.
