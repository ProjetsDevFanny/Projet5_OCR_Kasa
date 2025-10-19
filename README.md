# 🏠 Kasa - Application de location immobilière

![Kasa Homepage](./public/screenshot_HomePage.png)

## 📖 À propos du projet

Ce projet est le **Projet 5** de la formation **Développeur Web** d'[OpenClassrooms](https://openclassrooms.com/fr/paths/899-developpeur-web).

Kasa est une application web moderne de location immobilière entre particuliers, développée avec React. L'application permet aux utilisateurs de consulter un catalogue de logements disponibles avec leurs détails complets (photos, description, équipements, localisation, etc.).

🌐 **[Voir le site en ligne](https://projet-kasa-fanny.netlify.app/)**

## 🎯 Objectifs pédagogiques

- Initialiser une application avec Vite
- Configurer la navigation entre les pages avec React Router
- Développer des éléments de l'interface avec des composants React
- Mettre en œuvre des animations CSS
- Créer une application web responsive

## ✨ Fonctionnalités implémentées

- **Page d'accueil** : Galerie de logements sous forme de cartes cliquables avec hero banner
- **Page Fiche Logement** : Carrousel d'images, informations détaillées, tags, notation par étoiles, collapses (description et équipements)
- **Page À propos** : Collapses informatifs sur les valeurs de l'entreprise
- **Page 404** : Gestion des erreurs avec redirection
- **Navigation** : Routing avec React Router, header et footer
- **Composants réutilisables** : Card, Collapse, HeroBanner, Slideshow, RatingStars, Layout
- **Design responsive** : Adaptation mobile, tablette et desktop avec SCSS/Sass et animations CSS

## 📁 Structure du projet

```
Projet5_OCR_Kasa/
├── public/                      # Fichiers statiques
│   ├── maison.png              # Favicon
│   └── screenshot_HomePage.png # Capture d'écran de l'app
├── src/
│   ├── assets/                 # Images et données JSON
│   │   ├── accommodations.json # Données des logements
│   │   ├── about.json          # Contenu de la page À propos
│   │   └── *.png               # Images (logos, icônes, bannières)
│   ├── components/             # Composants React réutilisables
│   │   ├── Card/
│   │   ├── Collapse/
│   │   ├── Footer/
│   │   ├── Header/
│   │   ├── HeroBanner/
│   │   ├── Layout/
│   │   ├── RatingStars/
│   │   ├── Slideshow/
│   │   └── Router.jsx
│   ├── pages/                  # Pages de l'application
│   │   ├── Home/
│   │   ├── About/
│   │   ├── Accommodation/
│   │   └── NotFound/
│   ├── styles/                 # Styles globaux et utilitaires
│   │   ├── _variables.scss
│   │   ├── _mixins.scss
│   │   └── main.scss
│   ├── App.jsx                 # Composant racine
│   └── main.jsx                # Point d'entrée React
├── index.html                  # Template HTML
├── package.json                # Dépendances et scripts
├── vite.config.js              # Configuration Vite
└── eslint.config.js            # Configuration ESLint
```

### Architecture du routing

L'application utilise une architecture centralisée pour le routing :

- **`Router.jsx`** : Fichier dédié regroupant toutes les routes de l'application
- **`Layout`** : Composant structurel commun à toutes les pages, intégrant le `Header` et le `Footer`
- **`Outlet`** : Utilisé dans le Layout pour insérer dynamiquement le contenu des pages en fonction de la route active

Cette approche permet une meilleure organisation du code et facilite la maintenance de la navigation.

### Hooks et fonctions JavaScript

L'application exploite les fonctionnalités modernes de React et JavaScript :

**Hooks React** :

- **`useState`** : Gestion des états locaux (ouverture/fermeture des collapses, navigation dans le carrousel)
- **`useEffect`** : Gestion des effets de bord (préchargement des images du slideshow)
- **`useParams`** : Récupération des paramètres d'URL (ID du logement)

**Méthodes JavaScript** :

- **`map()`** : Rendu dynamique des listes (cartes de logements, tags, équipements, étoiles)
- **`find()`** : Recherche d'un logement spécifique par son ID
- **`forEach()`** : Itération pour le préchargement des images
- **`split()`**, **`pop()`**, **`join()`** : Traitement et séparation du nom/prénom de l'hôte

## 🛠️ Technologies utilisées

### Frontend

- **React** 19.1.1 - Bibliothèque JavaScript pour créer l'interface utilisateur
- **React Router DOM** 7.9.3 - Gestion du routing et de la navigation
- **Sass** 1.93.2 - Préprocesseur CSS pour des styles avancés

### Outils de développement

- **Vite** 7.1.7 - Build tool moderne et rapide
- **ESLint** 9.36.0 - Linter JavaScript/React
- **SWC** - Compilateur JavaScript ultra-rapide

### Standards de code

- JSDoc pour la documentation du code
- Structure de fichiers organisée par fonctionnalité
- Convention de nommage BEM pour les classes CSS

## 📦 Installation

### Prérequis

- Node.js (version 14 ou supérieure)
- npm ou yarn

### Étapes d'installation

1. **Cloner le repository**

```bash
git clone https://github.com/ProjetsDevFanny/Projet5_OCR_Kasa.git
cd Projet5_OCR_Kasa
```

2. **Installer les dépendances**

```bash
npm install
```

3. **Lancer l'application en mode développement**

```bash
npm run dev
```

L'application s'ouvrira automatiquement dans votre navigateur à l'adresse `http://localhost:5173`

## 📜 Scripts disponibles

```bash
npm run dev      # Lance le serveur de développement
npm run build    # Crée une version de production optimisée
npm run preview  # Prévisualise la version de production
npm run lint     # Vérifie la qualité du code avec ESLint
```

## 🎨 Palette de couleurs

- **Rouge principal** : #FF6060
- **Blanc** : #FFFFFF
- **Gris foncé** : #333333
- **Gris clair** : #F6F6F6
- **Noir** : #000000

## 👤 Auteur

**Simon Fanny**

- Formation : Développeur Web - OpenClassrooms
- Projet : Projet 5 - Kasa
- Date : Octobre 2025

## 📝 Licence

Ce projet est réalisé dans le cadre d'une formation OpenClassrooms et est destiné à des fins pédagogiques.

---

⭐ Si ce projet vous plaît, n'hésitez pas à lui donner une étoile sur GitHub !
