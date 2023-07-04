# Composant Button

## example

```Vue
<m-button>My Button</m-button>
```

## Props

| Prop           | Description                                                                                                                                                   | Valeur par défaut |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| `tag`          | Type de balise HTML à utiliser pour le bouton. Les valeurs possibles sont **a**, **button**, **div** et **router-link**.                                      | -                 |
| `to`           | Destination de la navigation lorsque le bouton est cliqué. Un objet **RouteLocationRaw** pour une utilisation avec **router-link**.                           | -                 |
| `theme`        | Thème du bouton. Les valeurs possibles sont **dark**, **light**, **danger**, **info**, **success**, **primary** ou une couleur au format hexadécimal ou rgba. | -                 |
| `primary`      | Définit si le bouton utilise le thème **primary**.                                                                                                            | `false`           |
| `danger`       | Définit si le bouton utilise le thème **danger**.                                                                                                             | `false`           |
| `success`      | Définit si le bouton utilise le thème **success**.                                                                                                            | `false`           |
| `info`         | Définit si le bouton utilise le thème **info**.                                                                                                               | `false`           |
| `dark`         | Définit si le bouton utilise le thème **dark**.                                                                                                               | `false`           |
| `light`        | Définit si le bouton utilise le thème **light**.                                                                                                              | `false`           |
| `flat`         | Définit si le bouton a un style plat.                                                                                                                         | `false`           |
| `transparent`  | Définit si le bouton a un arrière-plan transparent.                                                                                                           | `false`           |
| `block`        | Définit si le bouton occupe toute la largeur disponible.                                                                                                      | `false`           |
| `textAlign`    | Alignement du texte à l'intérieur du bouton. Les valeurs possibles sont "left", "right" et "center".                                                          | "center"          |
| `border`       | Définit si le bouton a une bordure. (Déprécié, utilisez `borderWidth` à la place)                                                                             | -                 |
| `borderWidth`  | Largeur de la bordure du bouton.                                                                                                                              | `false`           |
| `round`        | Définit si le bouton a des coins arrondis. (Déprécié, utilisez `borderRadius` à la place)                                                                     | -                 |
| `borderRadius` | Rayon des coins du bouton.                                                                                                                                    | "16em"            |
| `lg`           | Définit si le bouton a une taille **large**.                                                                                                                  | `false`           |
| `sm`           | Définit si le bouton a une taille **small**.                                                                                                                  | `false`           |
| `elevate`      | Définit si le bouton a un effet d'élévation.                                                                                                                  | `false`           |
| `icon`         | Définit si le bouton est un bouton d'icône.                                                                                                                   | `false`           |
| `disabled`     | Définit si le bouton est désactivé.                                                                                                                           | `false`           |
| `type`         | Type du bouton (**button**, **submit**, **reset**).                                                                                                           | "button"          |

## Slots

`Default` : Le contenu à afficher à l'intérieur du bouton.
