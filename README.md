# Lecteur Vidéo HTML Custom en JavaScript Vanilla

## Description

Notre lecteur vidéo HTML custom est une solution légère et performante pour intégrer la lecture de vidéos sur votre site web, développée exclusivement en utilisant JavaScript vanilla. Cette approche élimine toute dépendance à des plugins, bibliothèques externes ou frameworks, offrant ainsi une flexibilité totale et une intégration transparente dans divers environnements web.

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

## Exemple d'Intégration

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mon Lecteur Vidéo</title>
</head>
<body>
    <ocho-player src="votre-video.mp4" size="720"></ocho-player>
    <script type="module" src="https://ochokom.github.io/ocho-video-player/js/player.js"></script>
</body>
</html>
```
## Cas d'Utilisation du Lecteur Vidéo

### 1. **Lecture de Vidéos Locales ou en Ligne**
- **Attribut :** `src`
- **Description :** Le lecteur peut lire des vidéos locales (fichiers MP4, WebM, etc.) ou des vidéos en ligne via une URL.
- **Exemple :**
  ```html
  <ocho-player src="votre-video.mp4"></ocho-player>
  ```

### 2. **Lecture de Vidéos YouTube**
- **Description :** Le lecteur peut intégrer des vidéos YouTube en convertissant l'URL de la vidéo en un embed.
- **Exemple :**
  ```html
  <ocho-player src="https://www.youtube.com/watch?v=VIDEO_ID"></ocho-player>
  ```

### 3. **Affichage d'une Image de Prévisualisation (Poster)**
- **Attribut :** `poster`
- **Description :** Une image de prévisualisation peut être affichée avant la lecture de la vidéo.
- **Exemple :**
  ```html
  <ocho-player src="votre-video.mp4" poster="image-preview.jpg"></ocho-player>
  ```

### 4. **Lecture Automatique (Autoplay)**
- **Attribut :** `autoplay`
- **Description :** La vidéo commence à jouer automatiquement dès que le lecteur est prêt.
- **Exemple :**
  ```html
  <ocho-player src="votre-video.mp4" autoplay></ocho-player>
  ```

### 5. **Gestion des Sources Multiples**
- **Balise :** `<source>`
- **Description :** Permet d'ajouter plusieurs sources de vidéos pour différentes résolutions ou formats.
- **Exemple :**
  ```html
  <ocho-player size="720">
    <source src="votre-video_720.mp4" size="720">
    <source src="votre-video_1080.mp4" size="1080">
  </ocho-player>
  ```

### 6. **Ajout de Sous-Titres**
- **Balise :** `<track>`
- **Description :** Permet d'ajouter des fichiers de sous-titres (format VTT) pour différentes langues.
- **Exemple :**
  ```html
  <ocho-player src="votre-video.mp4">
    <track kind="subtitles" label="Français" srclang="fr" src="sous-titres-fr.vtt">
    <track kind="subtitles" label="English" srclang="en" src="sous-titres-en.vtt">
  </ocho-player>
  ```

### 7. **Mode Mobile Optimisé**
- **Attribut :** `mobile` ou détection automatique
- **Description :** Le lecteur s'adapte automatiquement aux appareils mobiles ou peut être forcé en mode mobile avec l'attribut `mobile`.
- **Exemple :**
  ```html
  <ocho-player src="votre-video.mp4" mobile></ocho-player>
  ```

### 8. **Désactivation du Mode Mobile**
- **Attribut :** `mobile-disabled`
- **Description :** Désactive le mode mobile même sur les appareils mobiles.
- **Exemple :**
  ```html
  <ocho-player src="votre-video.mp4" mobile-disabled></ocho-player>
  ```

### 9. **Contrôles de Lecture**
- **Fonctionnalités :**
  - Lecture/Pause (`play_pause_btn`)
  - Barre de progression (`timeline`)
  - Volume (`volume_slider`)
  - Mute/Unmute (`mute_btns`)
  - Plein écran (`fullscreen_btn`)
  - Mode Cinéma (`cinema_btn`)
  - Mode Picture-in-Picture (`pip_btn`)
- **Description :** Le lecteur propose une interface utilisateur complète avec des contrôles intuitifs pour gérer la lecture.

### 10. **Gestion des Qualités Vidéo**
- **Menu :** `quality_ul`
- **Description :** Permet à l'utilisateur de sélectionner la qualité de la vidéo si plusieurs sources sont disponibles.
- **Exemple :**
  ```html
  <ocho-player size="720">
    <source src="votre-video_720.mp4" size="720">
    <source src="votre-video_1080.mp4" size="1080">
  </ocho-player>
  ```

### 11. **Gestion de la Vitesse de Lecture**
- **Menu :** `playbacks`
- **Description :** Permet à l'utilisateur de modifier la vitesse de lecture (0.5x, 1x, 1.5x, 2x, etc.).
- **Exemple :**
  ```html
  <ocho-player src="votre-video.mp4"></ocho-player>
  ```

### 12. **Mode Cinéma**
- **Bouton :** `cinema_btn`
- **Description :** Active un mode cinéma qui agrandit la vidéo et assombrit l'arrière-plan pour une expérience immersive.
- **Exemple :**
  ```html
  <ocho-player src="votre-video.mp4"></ocho-player>
  ```

### 13. **Mode Picture-in-Picture (PIP)**
- **Bouton :** `pip_btn`
- **Description :** Permet de passer en mode Picture-in-Picture pour continuer à regarder la vidéo tout en naviguant sur d'autres pages.
- **Exemple :**
  ```html
  <ocho-player src="votre-video.mp4"></ocho-player>
  ```

### 14. **Plein Écran**
- **Bouton :** `fullscreen_btn`
- **Description :** Active le mode plein écran pour une expérience de visionnage optimale.
- **Exemple :**
  ```html
  <ocho-player src="votre-video.mp4"></ocho-player>
  ```

### 15. **Gestion des Sous-Titres**
- **Bouton :** `subtitle_btn`
- **Menu :** `subtitle_ul`
- **Description :** Permet à l'utilisateur d'activer ou de désactiver les sous-titres et de choisir parmi plusieurs langues.
- **Exemple :**
  ```html
  <ocho-player src="votre-video.mp4">
    <track kind="subtitles" label="Français" srclang="fr" src="sous-titres-fr.vtt">
  </ocho-player>
  ```

### 16. **Paramètres Avancés**
- **Menu :** `settings_menu`
- **Description :** Un menu de paramètres permet d'accéder à des options avancées comme la qualité vidéo, la vitesse de lecture, et les sous-titres.
- **Exemple :**
  ```html
  <ocho-player src="votre-video.mp4"></ocho-player>
  ```

### 17. **Gestion des Événements Clavier**
- **Fonctionnalités :**
  - `Espace` ou `K` : Lecture/Pause
  - `M` : Mute/Unmute
  - `Flèche Gauche` ou `J` : Reculer de 5 secondes
  - `Flèche Droite` ou `L` : Avancer de 5 secondes
  - `I` : Activer/Désactiver le mode Picture-in-Picture
  - `T` : Activer/Désactiver le mode Cinéma
  - `F` : Activer/Désactiver le mode Plein Écran
- **Description :** Le lecteur prend en charge les raccourcis clavier pour une utilisation plus fluide.

### 18. **Gestion des Événements Tactiles**
- **Fonctionnalités :**
  - Contrôles tactiles pour les appareils mobiles.
  - Gestion de l'orientation (portrait/paysage) en mode plein écran.
- **Description :** Le lecteur s'adapte aux écrans tactiles et gère les changements d'orientation.

### 19. **Personnalisation CSS**
- **Fichiers :** `player.css` et `mobile-player.css`
- **Description :** Les styles du lecteur peuvent être personnalisés via des fichiers CSS distincts pour le bureau et les mobiles.

### 20. **Boucle de Lecture (Loop)**
- **Bouton :** `loop_mode_check`
- **Description :** Permet de lire la vidéo en boucle.
- **Exemple :**
  ```html
  <ocho-player src="votre-video.mp4" loop></ocho-player>
  ```

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

Ce projet est sous licence MIT - voir le fichier [LICENSE.md](LICENSE.md) pour plus de détails.



Voici les cas d'utilisation de votre lecteur vidéo personnalisé, structurés dans un format Markdown (`.md`) pour une intégration facile dans votre documentation :

---

