# Ocho HTML Video Player

## Description

Notre lecteur vidéo HTML est une solution légère et performante pour intégrer la lecture de vidéos sur votre site web, développée exclusivement en utilisant JavaScript vanilla. Cette approche élimine toute dépendance à des plugins, bibliothèques externes ou frameworks, offrant ainsi une flexibilité totale et une intégration transparente dans divers environnements web.

## Caractéristiques Clés

- **JavaScript Vanilla :** Développé sans dépendances externes pour garantir une exécution rapide et une intégration facile.
- **Interface Utilisateur Intuitive :** Contrôles de lecture, de volume et de progression conviviaux pour une expérience utilisateur optimale.
- **Personnalisation Facile :** Modularité du code permettant une personnalisation aisée de l'apparence et des fonctionnalités.
- **Léger et Rapide :** Évite les surcharges inutiles, assurant une lecture fluide et des performances optimales du site.
- **Compatibilité Multiplateforme :** Fonctionne de manière cohérente sur différents navigateurs pour une expérience utilisateur homogène.

## Technologies Utilisées

- **HTML5 :** Structure de base pour le lecteur vidéo.
- **CSS3 :** Styles et mises en forme de l'interface utilisateur.
- **JavaScript Vanilla :** Logique de lecture vidéo et gestion des événements.

## Comment Utiliser

1. Intégrez les fichiers HTML, CSS et JavaScript dans votre projet.
2. Personnalisez l'apparence et le comportement en modifiant le code selon vos besoins spécifiques.
3. Profitez d'une intégration légère et flexible de la lecture vidéo sur votre site web.

## Intégration (installation)

```html
<!-- Ajouter des balises ocho-player à votre code -->
<ocho-player src="votre-video.mp4" size="720"></ocho-player>

<!-- Liez la page au script de type module -->
<script type="module" src="https://ochokom.github.io/ocho-video-player/js/player.js"></script>
```

## Résultat

```html
<ocho-player src="vid.mp4" size="1080" autoplay poster="./poster.webp"></ocho-player>
```

## Cas d'Utilisation

### 1. Lecture de Vidéos Locales ou en Ligne

**Instructions :** Utilisez l'attribut `src` pour spécifier le chemin de la vidéo.

```html
<ocho-player src="video.mp4"></ocho-player>
```

### 2. Lecture de Vidéos YouTube

**Instructions :** Passez l'URL YouTube dans l'attribut `src`.

```html
<ocho-player src="https://www.youtube.com/watch?v=ABCD1234"></ocho-player>
```

### 3. Affichage d'une Image de Prévisualisation

**Instructions :** Ajoutez l'attribut `poster` avec le chemin de l'image.

```html
<ocho-player src="video.mp4" poster="preview.jpg"></ocho-player>
```

### 4. Lecture Automatique (Autoplay)

**Instructions :** Ajoutez l'attribut `autoplay` pour démarrer la lecture automatiquement.

```html
<ocho-player src="video.mp4" autoplay></ocho-player>
```

### 5. Gestion des Sources Multiples

**Instructions :** Ajoutez plusieurs balises `<source>` pour différentes résolutions.

```html
<ocho-player size="720">
    <source src="video_720.mp4" size="720">
    <source src="video_1080.mp4" size="1080">
</ocho-player>
```

### 6. Ajout de Sous-Titres

**Instructions :** Utilisez la balise `<track>` pour ajouter des fichiers VTT.

```html
<ocho-player src="video.mp4">
    <track kind="subtitles" label="Français" srclang="fr" src="sous-titres-fr.vtt">
    <track kind="subtitles" label="English" srclang="en" src="sous-titres-en.vtt">
</ocho-player>
```

### 7. Mode Mobile Optimisé

**Instructions :** Ajoutez l'attribut `mobile` pour activer le mode mobile.

```html
<ocho-player src="video.mp4" mobile></ocho-player>
```

### 8. Désactivation du Mode Mobile

**Instructions :** Ajoutez l'attribut `mobile-disabled` pour désactiver le mode mobile.

```html
<ocho-player src="video.mp4" mobile-disabled></ocho-player>
```

### 9. Gestion des Qualités Vidéo

**Instructions :** Utilisez plusieurs balises `<source>` avec l'attribut `size`.

```html
<ocho-player size="720">
    <source src="video_360.mp4" size="360">
    <source src="video_720.mp4" size="720">
</ocho-player>
```

### 10. Gestion des Sous-Titres

**Instructions :** Ajoutez des fichiers VTT avec la balise `<track>`.

```html
<ocho-player src="video.mp4">
    <track kind="subtitles" label="Français" srclang="fr" src="subs_fr.vtt">
    <track kind="subtitles" label="English" srclang="en" src="subs_en.vtt">
</ocho-player>
```

### 11. Personnalisation CSS

**Instructions :** Modifiez les fichiers `player.css` et `mobile-player.css` pour personnaliser l'apparence.

```html
<!-- Modifier les fichiers player.css et mobile-player.css -->
<link rel="stylesheet" href="custom-player.css">
```

### 12. Contrôles de Lecture

#### Instructions

1. **Lecture en boucle :** Ajoutez l'attribut `loop` pour activer la lecture en boucle par défaut.

    ```html
    <ocho-player src="video.mp4" loop></ocho-player>
    ```

2. **Affichage :** Les contrôles sont activés, au survol de la souris, au click du lecteur ou pendant que la video est en pause ou ne peut être lue.

3. **Vitesses de Lecture :** Utiliser le menu des paramètres dans l'interface pour ajuster la vitesse.

4. **Raccourcis clavier :** Vous pouvez utiliser les raccourcis clavier pour contrôler la lecture.

    - **Lecture/pause :** Cliquez sur le bouton dédié ou utilisez le raccourci clavier (K ou espace).
    - **Mode Picture-in-Picture (Image réduit) :** Cliquez sur le bouton dédié ou utilisez le raccourci clavier (I).
    - **Mode Cinéma :** Cliquez sur le bouton dédié ou utilisez le raccourci clavier (T).
    - **Plein écran :** Cliquez sur le bouton dédié ou utilisez le raccourci clavier (F).

5. **Contrôles tactiles :** Les contrôles tactiles sont activés automatiquement sur les appareils mobiles.

6. **Paramètres avancés :** Cliquez sur le bouton dédié pour accéder aux options avancées dans l'interface.

## Contribution

Les contributions sont les bienvenues. N'hésitez pas à ouvrir une issue pour discuter des fonctionnalités proposées ou à soumettre une pull request pour corriger des bugs.

### Comment Contribuer

1. Fork le projet.
2. Créez une nouvelle branche pour votre fonctionnalité (`git checkout -b feature/nouvelle-fonctionnalite`).
3. Committez vos modifications (`git commit -am 'Ajouter une nouvelle fonctionnalité'`).
4. Poussez la branche sur votre fork (`git push origin feature/nouvelle-fonctionnalite`).
5. Ouvrez une pull request.

### Guidelines de Contribution

- Assurez-vous de tester votre code.
- Suivez les conventions de codage du projet.
- Soyez respectueux envers les autres contributeurs.
- N'oubliez pas de mettre à jour la documentation si nécessaire.

### Rapport de Bugs

Si vous trouvez un bug, veuillez ouvrir une issue en fournissant des détails clairs et pertinents. Incluez des captures d'écran si possible.

## Licence

Ce projet est sous licence MIT - voir le fichier [LICENSE.md](https://ochokom.github.io/ocho-video-player/LICENCE.md) pour plus de détails.

---

### Martin Ocho

Notre projet de lecteur vidéo HTML custom représente une approche minimaliste et performante pour intégrer la lecture de vidéos sur votre site web, développée exclusivement en utilisant JavaScript vanilla. Cette approche élimine toute dépendance à des plugins, bibliothèques externes ou frameworks, offrant ainsi une flexibilité totale et une intégration transparente dans divers environnements web.

### Réseaux Sociaux

- [Youtube](https://youtube.com/@ochokom)
- [GitHub](https://github.com/OchoKOM/)
- [Facebook](https://facebook.com/ochokom)
- [Portfolio](https://ochokom.github.io/portfolio/)

---

Copyright &copy; 2025 OchoKOM. Designed by **Martin Ocho**.