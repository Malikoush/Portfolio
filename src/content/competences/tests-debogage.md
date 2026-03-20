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

Sur Digitao chez 3F, j'ai redige des scenarios de test, participe aux sessions de recette avec les utilisateurs metier et traite les retours remontes pendant les validations. Cette phase etait critique car l'application couvre un processus d'achat reglemente, avec plusieurs roles et etapes sensibles.

**Resultat** : les anomalies ont ete identifiees plus tot, les ecrans ont ete ajustes en fonction des usages reels, et la fiabilite fonctionnelle de l'outil a progresse avant mise a disposition des equipes.

→ _Voir la realisation [Digitao](/realisations/digitao)_

### CloudFlop - Debogage du pipeline de chiffrement

Lors du developpement de CloudFlop, un bug subtil dans la derivation des cles de chiffrement provoquait des echecs aleatoires de dechiffrement. J'ai utilise des outils de profiling et de logging detaille pour isoler la condition de declenchement.

**Resultat** : bug resolu en 4 heures apres une analyse methodique. La demarche de debogage a ete documentee et partagee avec l'equipe.

→ _Voir la realisation [CloudFlop](/realisations/cloudflop)_

## Autocritique

Mon niveau est de 7/10. Ma pratique des tests est solide pour les tests unitaires et d'integration, mais j'ai encore une marge de progression sur les tests E2E et la mise en place complete de pipelines CI/CD.

Avec l'experience, je conseille de commencer par tester les cas d'erreur plutot que les cas nominaux : c'est la que se cachent les vrais bugs.

## Evolution

Je vise la mise en place de pipelines CI/CD complets sur mes projets personnels. Je me forme actuellement sur Playwright pour les tests E2E sur mes projets web.
