---
title: Tests & Debogage
category: technique
level: 7
icon: "🧪"
shortDescription: Automatisation des tests, debogage systematique et culture qualite logicielle.
relatedRealisations:
  - digitao
  - cloudflop
---

## Definition

Les tests et le debogage couvrent l'ensemble des pratiques garantissant la qualite logicielle : tests unitaires, tests d'integration, tests end-to-end, utilisation de debogueurs et outils de profiling. Ils reposent sur une culture de la qualite et sur l'automatisation.

Dans l'industrie, le cout d'un bug en production est bien plus eleve qu'en developpement. Mettre en place une strategie de test efficace est donc un investissement, pas une perte de temps.

## Elements de preuve

### Digitao - Recette utilisateur et correction en contexte metier

Dans le cadre du projet Digitao chez 3F, l’application devait accompagner un processus d’achat réglementé, avec plusieurs rôles, plusieurs étapes de validation et des règles métier sensibles. Dans ce contexte, les tests ne pouvaient pas se limiter à vérifier que les écrans fonctionnaient techniquement : il fallait aussi s’assurer que l’outil correspondait aux usages réels des utilisateurs métier.

J’ai participé à la rédaction de scénarios de test couvrant les principaux parcours utilisateurs, notamment les appels d’offres, les étapes de validation et les interactions entre les différents profils. J’ai également pris part aux sessions de recette avec les utilisateurs métier, ce qui m’a permis de confronter le fonctionnement de l’application aux besoins concrets du terrain.

Ma valeur ajoutée a été de faire le lien entre les retours utilisateurs, les règles métier et les corrections techniques à apporter. En traitant les anomalies remontées pendant les validations, j’ai contribué à identifier plus tôt les points bloquants, à ajuster certains écrans selon les usages réels et à améliorer la fiabilité fonctionnelle de l’outil avant sa mise à disposition aux équipes.

→ _Voir la realisation [Digitao](/realisations/digitao)_

### CloudFlop - Debogage du pipeline de chiffrement

Pendant le développement de CloudFlop, un problème complexe est apparu dans le pipeline de chiffrement : certains fichiers échouaient de manière aléatoire lors du déchiffrement. Ce type de bug était particulièrement critique, car l’application reposait sur la capacité à chiffrer puis restituer les fichiers de façon fiable. Une erreur à ce niveau pouvait remettre en cause la confiance dans tout le système.

Le problème était difficile à diagnostiquer, car il ne se produisait pas systématiquement. J’ai donc adopté une démarche méthodique en ajoutant des logs détaillés aux différentes étapes du chiffrement et du déchiffrement, puis en utilisant des outils de profiling pour mieux comprendre le comportement du pipeline. Cette analyse m’a permis d’isoler une condition particulière liée à la dérivation des clés de chiffrement.

Ma valeur ajoutée a été de ne pas traiter le bug de manière approximative, mais de remonter progressivement jusqu’à sa cause réelle. Après environ quatre heures d’analyse, j’ai pu corriger le problème et fiabiliser le processus de déchiffrement. J’ai ensuite documenté la démarche de débogage et partagé les conclusions avec l’équipe, afin que chacun comprenne l’origine du bug et puisse éviter des erreurs similaires par la suite.

→ _Voir la realisation [CloudFlop](/realisations/cloudflop)_

## Autocritique

J’évalue mon niveau actuel à 7/10 en test et débogage. Je suis à l’aise avec les tests unitaires, les tests d’intégration et l’analyse méthodique de bugs applicatifs. Je sais rédiger des scénarios de test, reproduire une anomalie, isoler une cause probable et vérifier qu’une correction règle bien le problème sans créer de régression évidente.

Cette compétence est importante dans mon profil, car elle influence directement la qualité finale d’une application. Un développement peut sembler terminé parce que la fonctionnalité fonctionne dans un cas simple, mais ce sont souvent les tests et le débogage qui révèlent si elle est réellement fiable dans des situations variées. Sur des projets comme Digitao ou CloudFlop, j’ai compris qu’un bon test ne sert pas seulement à valider le code, mais aussi à sécuriser l’usage métier et à renforcer la confiance dans l’outil.

Ma marge de progression concerne surtout les tests end-to-end et l’automatisation complète des tests dans des pipelines CI/CD. Je maîtrise les bases des tests unitaires et d’intégration, mais je dois encore progresser dans la mise en place de chaînes de validation plus complètes, capables d’exécuter automatiquement différents niveaux de tests à chaque modification du code.

Cette compétence ne s’applique pas de la même manière selon les projets. Sur une application métier comme Digitao, les tests doivent beaucoup tenir compte des règles fonctionnelles, des rôles utilisateurs et des validations métier. Sur un projet plus technique comme CloudFlop, le débogage demande davantage d’attention sur les traitements internes, les cas limites et la reproductibilité des erreurs. Cela m’a appris qu’il n’existe pas une seule manière de tester : la stratégie doit être adaptée au risque principal du projet.

J’ai acquis cette compétence progressivement. Au début, je testais surtout les cas nominaux, c’est-à-dire les scénarios où tout se passe comme prévu. Avec l’expérience, j’ai compris que les bugs les plus importants se trouvent souvent dans les cas d’erreur : données invalides, permissions insuffisantes, échec d’un service externe, expiration d’une session ou comportement inattendu de l’utilisateur.

Avec le recul, je conseille de ne pas considérer les tests comme une étape secondaire ou une contrainte de fin de projet. Ils doivent accompagner le développement dès le départ. Je conseille aussi de toujours commencer par rendre un bug reproductible avant de chercher à le corriger, car une correction appliquée sans compréhension précise du problème risque de masquer l’erreur au lieu de la résoudre réellement.

## Evolution

À moyen terme, je souhaite atteindre un niveau 8/10 en test et débogage, en renforçant surtout ma capacité à automatiser les validations et à intégrer les tests dans un cycle de développement continu.

Pour progresser, je me forme actuellement à Playwright afin de mieux maîtriser les tests end-to-end sur les applications web. L’objectif est de pouvoir simuler des parcours utilisateurs complets, comme une inscription, une connexion, une commande ou une validation, et de vérifier automatiquement que ces parcours restent fonctionnels après chaque évolution du projet.

Je souhaite également mettre en place des pipelines CI/CD plus complets sur mes projets personnels, par exemple avec GitHub Actions. L’idée est d’exécuter automatiquement les tests unitaires, les tests d’intégration et certains tests end-to-end à chaque push ou pull request. Cela me permettrait de détecter plus rapidement les régressions et d’améliorer la qualité globale de mes livrables.

En parallèle, je veux continuer à améliorer ma méthode de débogage, notamment en travaillant sur la qualité des logs, la lecture des traces d’erreur et l’utilisation d’outils de monitoring ou de profiling. Mon objectif est de devenir plus rapide dans l’identification des causes profondes, tout en gardant une démarche rigoureuse et documentée.

Cette évolution est importante pour mon projet professionnel, car je souhaite produire des applications plus fiables, plus maintenables et plus simples à faire évoluer. Plus un projet grandit, plus les tests deviennent essentiels pour éviter que chaque nouvelle fonctionnalité fragilise l’existant.
