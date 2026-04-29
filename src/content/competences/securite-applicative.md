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

Dans le cadre du projet CloudFlop, l’objectif était de concevoir une application de stockage cloud permettant aux utilisateurs d’envoyer et de récupérer leurs fichiers en ligne. Le principal enjeu n’était pas seulement de stocker correctement les fichiers, mais de garantir leur confidentialité, même en cas d’accès non autorisé au serveur ou à la base de données.

Pour répondre à cette contrainte, j’ai travaillé sur une architecture de chiffrement côté client. Les fichiers sont chiffrés avant leur envoi vers le serveur, ce qui signifie que le serveur ne reçoit jamais le contenu en clair. J’ai implémenté un chiffrement AES-256 avec une dérivation de clé via PBKDF2 à partir du mot de passe utilisateur. Cette approche permet de renforcer la confidentialité des données, car le mot de passe n’est pas utilisé directement comme clé de chiffrement.

Ma valeur ajoutée a été d’intégrer la sécurité dès la conception du projet, et non comme une correction ajoutée en fin de développement. J’ai dû réfléchir à la séparation entre les données réellement sensibles, les métadonnées nécessaires au fonctionnement de l’application et les éléments qui ne devaient jamais être accessibles côté serveur. Cette logique a permis de construire une architecture proche du principe zéro-knowledge, dans laquelle le serveur ne peut pas lire le contenu des fichiers stockés.

L’architecture a été validée sur les critères de confidentialité attendus pour le projet, et l’analyse de sécurité réalisée dans le cadre du cours n’a relevé aucune vulnérabilité critique sur la couche de chiffrement. Cette réalisation montre ma capacité à appliquer des principes de sécurité concrets dans une application manipulant des données sensibles.

→ _Voir la réalisation [CloudFlop](/realisations/cloudflop)_

### Let'Style — Authentification JWT et RBAC

Sur le projet Let’Style, l’application devait gérer plusieurs types d’utilisateurs : administrateurs, vendeurs et clients. L’enjeu était donc de protéger les accès en fonction du rôle de chacun, afin qu’un utilisateur ne puisse pas consulter ou modifier des informations qui ne lui sont pas destinées. Une mauvaise gestion des droits aurait pu exposer des données sensibles ou permettre à un client d’accéder à des fonctionnalités réservées à l’administration.

J’ai mis en place un système d’authentification basé sur des tokens JWT, associé à une gestion des rôles de type RBAC. Chaque utilisateur dispose de droits correspondant à son profil, et les routes sensibles sont protégées par des contrôles d’accès côté serveur. J’ai également appliqué plusieurs recommandations de sécurité inspirées de l’OWASP, notamment la validation des entrées, la protection des endpoints sensibles et la limitation des abus grâce au rate limiting.

Ma contribution a permis de structurer une séparation claire entre les différents profils utilisateurs. Au-delà de la simple connexion, j’ai veillé à ce que les droits soient vérifiés à chaque accès critique, afin d’éviter qu’un utilisateur contourne l’interface front-end pour appeler directement une route interdite. Les tests automatisés réalisés avec OWASP ZAP n’ont pas révélé d’incident de sécurité majeur, et les rôles sont restés correctement cloisonnés, y compris lors de tentatives de manipulation des tokens.

Cette expérience prouve ma capacité à sécuriser une application web sur des aspects essentiels comme l’authentification, l’autorisation, la validation des entrées et la protection des routes sensibles.

→ _Voir la réalisation [Let'Style](/realisations/letstyle)_

## Autocritique

J’évalue mon niveau actuel à 7/10 en sécurité applicative. Je maîtrise les bases importantes pour développer des applications plus sûres : authentification, autorisation, validation des entrées, chiffrement, gestion des rôles, protection des routes sensibles et prise en compte des vulnérabilités courantes comme celles listées dans l’OWASP Top 10.

Cette compétence demande cependant beaucoup d’humilité. En sécurité, le fait qu’une application fonctionne ne signifie pas qu’elle est sûre. Certaines failles peuvent être invisibles lors d’un usage normal et n’apparaître que dans des scénarios d’attaque précis. C’est pourquoi je considère que mon niveau est solide pour un développeur applicatif, mais encore perfectible pour atteindre une approche réellement avancée en audit ou en pentest.

Ma principale marge de progression concerne les tests de pénétration manuels. Je sais utiliser des outils automatisés comme OWASP ZAP, mais je dois encore progresser dans l’analyse manuelle des failles, l’exploitation contrôlée de vulnérabilités et la compréhension fine des scénarios d’attaque. Je souhaite aussi renforcer mes connaissances sur la sécurité des infrastructures, notamment autour des conteneurs Docker, des réseaux, des secrets d’environnement et des configurations serveur.

La sécurité applicative dépend fortement du contexte. Une application interne, utilisée par un nombre limité de collaborateurs, ne présente pas les mêmes risques qu’une API publique exposée à Internet ou qu’une application manipulant des données sensibles. Il faut donc adapter le niveau de protection au niveau de risque réel. Sur CloudFlop, par exemple, la confidentialité était centrale, alors que sur Let’Style, l’enjeu principal était surtout la gestion des accès et la protection des rôles.

Dans mon parcours, cette compétence est devenue de plus en plus importante à mesure que mes projets manipulaient des données utilisateurs, des comptes, des fichiers ou des rôles différenciés. J’ai d’abord appliqué des règles de sécurité de manière assez scolaire, puis j’ai progressivement compris l’importance de raisonner en termes de risques, de menaces et d’impact métier.

Avec le recul, je conseille de ne pas attendre la fin d’un projet pour penser à la sécurité. Il est préférable d’identifier les risques dès la conception, par exemple avec une démarche de Threat Modeling simple : qui peut attaquer le système, quelles données sont sensibles, quels accès doivent être protégés, et quelles seraient les conséquences d’une faille. Cette approche évite de sécuriser uniquement les aspects visibles tout en oubliant les véritables points critiques.

## Évolution

À moyen terme, je souhaite atteindre un niveau 8/10 en sécurité applicative, avec une approche plus systématique dans mes développements. Mon objectif n’est pas de devenir pentester à court terme, mais d’être capable de concevoir des applications web robustes, de repérer les principales failles avant la mise en production et d’intégrer naturellement la sécurité dans mon cycle de développement.

Pour progresser, je prévois de m’appuyer sur le référentiel OWASP Top 10 afin d’approfondir les vulnérabilités les plus fréquentes : injections, failles d’authentification, mauvaise gestion des accès, exposition de données sensibles, erreurs de configuration et failles liées aux composants tiers. Je souhaite reprendre chaque catégorie avec des exemples pratiques pour mieux comprendre les causes, les impacts et les contre-mesures.

Je souhaite également me former davantage aux outils d’analyse statique et dynamique. Côté analyse statique, je veux pratiquer des outils comme SonarQube ou Semgrep afin de repérer plus tôt les mauvaises pratiques dans le code. Côté analyse dynamique, je veux continuer à utiliser OWASP ZAP de manière plus avancée, notamment en configurant des scénarios de test plus réalistes plutôt qu’en me limitant aux scans automatiques de base.

En complément, je prévois de réaliser des exercices pratiques sur des plateformes d’entraînement comme PortSwigger Web Security Academy ou Root Me, afin de progresser sur les tests manuels dans un cadre légal et pédagogique. Cela me permettra de mieux comprendre la logique d’un attaquant, et donc de mieux anticiper les failles dans mes propres développements.

Cette évolution est directement liée à mon projet professionnel, car je souhaite développer des applications fiables et crédibles dans un contexte d’entreprise. Plus mes responsabilités techniques augmenteront, plus je devrai être capable de faire des choix de sécurité pertinents, proportionnés et justifiables.
