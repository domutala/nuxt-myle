# Checkbox

## description

Le composant **MCheckbox** est une case à cocher personnalisable utilisée pour sélectionner une ou plusieurs options.

## example

```Vue
<m-checkbox is-switcher>mon label</m-checkbox>
```

## Props

| Prop          | Type           | Description                                                                                                                       |
| ------------- | -------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| model-value   | any            | La valeur liée au modèle de la case à cocher.                                                                                     |
| value         | any            | La valeur de la case à cocher. Utilisée pour déterminer si la case est cochée ou non.                                             |
| true-value    | any            | La valeur associée à la case cochée lorsque celle-ci est utilisée comme un commutateur.                                           |
| false-value   | any            | La valeur associée à la case non cochée lorsque celle-ci est utilisée comme un commutateur.                                       |
| primary       | Boolean        | Définit le thème de couleur de la case à cocher sur "primary".                                                                    |
| danger        | Boolean        | Définit le thème de couleur de la case à cocher sur "danger".                                                                     |
| success       | Boolean        | Définit le thème de couleur de la case à cocher sur "success".                                                                    |
| info          | Boolean        | Définit le thème de couleur de la case à cocher sur "info".                                                                       |
| dark          | Boolean        | Définit le thème de couleur de la case à cocher sur "dark".                                                                       |
| light         | Boolean        | Définit le thème de couleur de la case à cocher sur "light".                                                                      |
| theme         | String         | Le thème de couleur personnalisé pour la case à cocher. Accepte des valeurs prédéfinies ou des valeurs de couleur personnalisées. |
| size          | String, Number | La taille de la case à cocher. Peut être spécifiée en pixels ou en nombre.                                                        |
| border-radius | String, Number | Le rayon de bordure de la case à cocher. Peut être spécifié en pixels ou en nombre.                                               |
| border        | Number, String | L'épaisseur de la bordure de la case à cocher.                                                                                    |
| disabled      | Boolean        | Indique si la case à cocher est désactivée.                                                                                       |
| readonly      | Boolean        | Indique si la case à cocher est en mode lecture seule.                                                                            |
| is-switcher   | Boolean        | Indique si la case à cocher est utilisée comme un commutateur.                                                                    |
| show-back     | Boolean        | Indique si l'arrière-plan de la case à cocher doit être affiché.                                                                  |

## Slots

`Default` : Le contenu à afficher.
