---
title: Sécurité applicative
category: technique
level: 7
icon: "🔐"
shortDescription: Gestion des accès, chiffrement et application des bonnes pratiques OWASP.
relatedRealisations: ["cloudflop", "letstyle"]
---

## Définition

La sécurité applicative désigne l'ensemble des pratiques permettant de protéger une application contre les menaces (injection SQL, XSS, CSRF, exposition de données sensibles...). Elle s'appuie sur des référentiels reconnus comme le Top 10 OWASP et couvre l'authentification, les autorisations, le chiffrement des données, la gestion sécurisée des secrets et les audits de code.

La cybersécurité applicative est un sujet d'actualité brûlant : selon le Rapport Verizon 2024 sur les violations de données, 74 % des incidents impliquent la couche applicative. Un ingénieur qui intègre la sécurité dès la conception ("Secure by Design") est un profil très recherché.

## Éléments de preuve

### CloudFlop — Chiffrement côté client

CloudFlop est une application de stockage cloud où les fichiers sont chiffrés côté client avant tout envoi. J'ai implémenté le chiffrement AES-256 avec dérivation de clé (PBKDF2) à partir du mot de passe utilisateur, garantissant que le serveur n'a jamais accès au contenu.

**Résultat** : Architecture validée sur les critères de confidentialité (zéro-knowledge). Une analyse de sécurité réalisée dans le cadre d'un cours a relevé 0 vulnérabilité critique sur la couche chiffrement.

→ *Voir la réalisation [CloudFlop](/realisations/cloudflop)*

### Let'Style — Authentification JWT et RBAC

Sur Let'Style, j'ai mis en place un système d'authentification par tokens JWT avec gestion des rôles (admin, vendeur, client). J'ai appliqué les recommandations OWASP : validation des entrées, protection CSRF, rate limiting sur les endpoints sensibles.

**Résultat** : Aucun incident de sécurité lors des tests de pénétration automatisés (OWASP ZAP). Les rôles sont correctement cloisonnés : un client ne peut pas accéder aux routes admin, même en manipulant les tokens.

→ *Voir la réalisation [Let'Style](/realisations/letstyle)*

## Autocritique

Mon niveau est de 7/10. Je maîtrise les vulnérabilités courantes et les contre-mesures associées, mais la sécurité est un domaine où l'humilité est de rigueur — les failles les plus dangereuses sont souvent les plus subtiles. Ma marge de progression porte sur les tests de pénétration manuels et la sécurité des infrastructures (réseau, conteneurs Docker).

Cette compétence est indissociable du contexte : une application interne et une API publique n'ont pas les mêmes exigences de sécurité. Je conseille de toujours commencer par modéliser les menaces (Threat Modeling) avant de coder — cela évite de "sur-sécuriser" des points non critiques au détriment des vrais risques.

## Évolution

Je prépare une autoformation sur la certification **OSCP (Offensive Security Certified Professional)** à horizon 2-3 ans. À court terme, je vise la maîtrise des outils de SAST/DAST (SonarQube, Burp Suite) pour intégrer l'analyse de sécurité dans les pipelines CI/CD.

## Réalisations rattachées

- [CloudFlop — Application de stockage cloud sécurisée](/realisations/cloudflop)
- [Let'Style — Plateforme de personnalisation vestimentaire](/realisations/letstyle)
