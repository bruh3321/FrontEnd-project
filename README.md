# FrontEnd-project

Projet de cours : template Vite + Vue 3 pour le développement frontend. Ce dépôt sert de point de départ pour les exercices et le projet final du cours.

## Objectifs
- Comprendre la structure d'une application Vue 3 avec Vite.
- Implémenter des composants, gérer l'état local et les appels API.
- Produire une version de production optimisée.

## Prérequis
- Node.js (version 14+ recommandée)
- npm ou yarn
- IDE recommandé : VS Code + extension Vue (Volar). Désactiver Vetur si présent.

## Installation
Cloner le dépôt puis installer les dépendances :
```sh
npm install
# ou
yarn
```

## Exécution en développement
Lancer le serveur de développement avec rechargement à chaud :
```sh
npm run dev
# ou
yarn dev
```

## Compilation pour la production
Générer les fichiers optimisés pour la mise en ligne :
```sh
npm run build
# ou
yarn build
```

## Structure du projet (aperçu)
- src/ — code source (components, views, assets, store)
- public/ — fichiers statiques servis tels quels
- index.html — point d'entrée
- package.json — scripts et dépendances
- vite.config.js — configuration Vite
- README.md — documentation

## Bonnes pratiques pour le cours
- Travailler sur une branche par fonctionnalité : `git checkout -b feat/nom-fonctionnalite`
- Commits clairs et fréquents : `git commit -m "feat: ajouter composant X"`
- Ouvrir une pull request pour revue avant fusion
- Documenter toute dépendance ou configuration spécifique dans ce README

## Outils recommandés pour le débogage
- Navigateurs Chromium : extension Vue.js devtools
- Firefox : extension Vue.js devtools
- Activer les formatters d'objet dans les devtools si nécessaire

## Contribution et évaluation
Pour les livrables de cours, suivre les consignes du professeur (format des livrables, date de rendu, critères d'évaluation). Pour contributions internes au dépôt : créer une branche, ouvrir une PR et demander une revue.
