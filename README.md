# 🏠 Kasa - Application de location immobilière

![Kasa Homepage](./public/screenshot_HomePage.png)

## 📖 À propos du projet

Ce projet est le **Projet 5** de la formation **Développeur Web** d'[OpenClassrooms](https://openclassrooms.com/fr/paths/899-developpeur-web).

Kasa est une application web moderne de location immobilière entre particuliers, développée avec React. L'application permet aux utilisateurs de consulter un catalogue de logements disponibles avec leurs détails complets (photos, description, équipements, localisation, etc.).

## 🎯 Objectifs pédagogiques

- Initialiser une application avec Create React App / Vite
- Configurer la navigation entre les pages avec React Router
- Développer des éléments de l'interface avec des composants React
- Mettre en œuvre des animations CSS
- Créer une application web responsive

## ✨ Fonctionnalités implémentées

### 🏡 Page d'accueil
- **Hero Banner** : Bannière d'accueil avec image de fond et texte
- **Galerie de logements** : Affichage de tous les logements disponibles sous forme de cartes
- **Navigation** : Liens cliquables vers les fiches détaillées de chaque logement
- **Design responsive** : Adaptation automatique sur mobile, tablette et desktop

### 📋 Page Fiche Logement
- **Slideshow/Carrousel** : Navigation entre les photos du logement avec :
  - Flèches de navigation gauche/droite
  - Compteur de photos (ex: "1/5")
  - Transitions animées fluides avec effet de fondu
  - Préchargement des images pour une navigation instantanée
  - Adaptation responsive
- **Informations détaillées** :
  - Titre et localisation du logement
  - Tags/étiquettes descriptives
  - Profil de l'hôte (photo et nom)
  - Notation par étoiles (1-5 étoiles)
- **Collapses/Accordéons** :
  - Description du logement
  - Liste des équipements
  - Animation d'ouverture/fermeture
- **Gestion d'erreur 404** : Redirection automatique vers la page 404 si l'ID du logement n'existe pas

### ℹ️ Page À propos
- **Hero Banner** : Bannière décorative avec image de fond
- **Collapses informatifs** : Sections dépliables contenant les valeurs de l'entreprise (Fiabilité, Respect, Service, Sécurité)

### 🔍 Page 404
- **Page d'erreur personnalisée** : Affichage d'un message clair avec lien de retour vers l'accueil

### 🧭 Navigation
- **Header** : Logo Kasa et navigation principale (Accueil / À Propos)
- **Footer** : Logo blanc et copyright
- **Routing** : Navigation fluide sans rechargement de page grâce à React Router v7
- **URL dynamiques** : Routes paramétrées pour les fiches logement (`/accommodation/:id`)

### 🎨 Composants réutilisables
- `Card` : Carte de présentation d'un logement
- `Collapse` : Accordéon générique pour afficher/masquer du contenu
- `HeroBanner` : Bannière hero configurable
- `Slideshow` : Carrousel d'images avec navigation
- `RatingStars` : Affichage de la notation par étoiles
- `Layout` : Structure commune (Header + contenu + Footer)

### 💅 Styles et animations
- **SCSS/Sass** : Organisation modulaire des styles
- **Architecture CSS** :
  - Variables globales (couleurs, polices)
  - Mixins pour le responsive
  - Styles par composant
- **Animations CSS** :
  - Transitions douces sur les interactions
  - Effet de fondu pour le slideshow
  - Animation de rotation pour les flèches des collapses
  - Hover effects sur les boutons et liens
- **Design responsive** : 3 breakpoints (mobile, tablette, desktop)

## 🛠️ Technologies utilisées

### Frontend
- **React** 19.1.1 - Bibliothèque JavaScript pour créer l'interface utilisateur
- **React Router DOM** 7.9.3 - Gestion du routing et de la navigation
- **Sass** 1.93.2 - Préprocesseur CSS pour des styles avancés
- **React Transition Group** 4.4.5 - Gestion des animations de transition

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

## 🔗 Liens utiles

- 🌐 [Site en ligne](https://github.com/ProjetsDevFanny/Projet5_OCR_Kasa) _(à mettre à jour avec l'URL de déploiement)_
- 📘 [Formation OpenClassrooms](https://openclassrooms.com/fr/paths/899-developpeur-web)

## 📝 Licence

Ce projet est réalisé dans le cadre d'une formation OpenClassrooms et est destiné à des fins pédagogiques.

---

⭐ Si ce projet vous plaît, n'hésitez pas à lui donner une étoile sur GitHub !
