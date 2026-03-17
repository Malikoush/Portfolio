---
title: Tests & Débogage
category: technique
level: 7
icon: "🧪"
shortDescription: Automatisation des tests, débogage systématique et culture qualité logicielle.
relatedRealisations: ["jeu-pong", "cloudflop"]
---

## Définition

Les tests et le débogage couvrent l'ensemble des pratiques garantissant la qualité logicielle : tests unitaires, tests d'intégration, tests end-to-end, utilisation de débogueurs et outils de profiling. Ils reposent sur une culture de la qualité (TDD/BDD) et sur l'automatisation (pipelines CI/CD).

Dans l'industrie, le coût d'un bug en production est en moyenne 10 fois plus élevé qu'en développement, et 100 fois plus qu'à la phase de conception. Mettre en place une stratégie de test efficace est donc un investissement, pas une perte de temps.

## Éléments de preuve

### Jeu Pong — Tests des algorithmes de collision

Le projet Jeu Pong a été conçu comme un laboratoire pour tester rigoureusement des algorithmes de collision physique. J'ai mis en place des tests unitaires sur chaque fonction de détection de collision, couvrant les cas nominaux, les cas limites (balle à vitesse maximale, coin de plateau) et les cas d'erreur.

**Résultat** : Aucun bug de collision en production. Les algorithmes testés ont ensuite été réutilisés dans d'autres projets, prouvant leur robustesse. Le projet a aussi servi de démonstration pédagogique à mes camarades.

→ *Voir la réalisation [Jeu Pong](/realisations/jeu-pong)*

### CloudFlop — Débogage du pipeline de chiffrement

Lors du développement de CloudFlop, un bug subtil dans la dérivation des clés de chiffrement provoquait des échecs aléatoires de déchiffrement (1 cas sur 200 environ). J'ai utilisé des outils de profiling et de logging détaillé pour isoler la condition de déclenchement : un problème d'encodage des caractères spéciaux dans les mots de passe.

**Résultat** : Bug résolu en 4 heures après une analyse méthodique. La démarche de débogage (hypothèse → test → validation) a été documentée et partagée avec l'équipe.

→ *Voir la réalisation [CloudFlop](/realisations/cloudflop)*

## Autocritique

Mon niveau est de 7/10. Ma pratique des tests est solide pour les tests unitaires et d'intégration, mais j'ai encore une marge de progression sur les tests E2E (Cypress, Playwright) et la mise en place complète de pipelines CI/CD automatisant les tests à chaque commit.

J'ai par le passé sous-estimé les tests dans des projets sous pression temporelle — une erreur que je regrette et que je m'efforce de ne plus répéter. Avec l'expérience, je conseille de commencer par tester les cas d'erreur plutôt que les cas nominaux : c'est là que se cachent les vrais bugs.

## Évolution

Je vise la mise en place de pipelines CI/CD complets sur mes projets personnels (GitHub Actions + tests automatisés + déploiement conditionnel). Je m'autoformé actuellement sur Playwright pour les tests E2E sur mes projets web.

## Réalisations rattachées

- [Jeu Pong — Recréation d'un jeu rétro en C#](/realisations/jeu-pong)
- [CloudFlop — Application de stockage cloud sécurisée](/realisations/cloudflop)
