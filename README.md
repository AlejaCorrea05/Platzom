# Platzom

Platzm es un idioma inventado para el [Curso de fundamentos de JavaScript](https://platzi.com/js) de [Platzi](https://platzi.com), el mejor lugar de educación online.

## Descripción del idioma

- Si la palabra termina con 'ar', se le quitan esas dos letras
- Si la palabra inicia con Z, se le agrega 'pe' al final.
- Si la palabra traducida tiene 10 o más letras, se debe dividir a la mitad y unirse con un guión.
- Por último, si la palabra original es un palíndromo, ninguna regla anterior cuenta y se devuelve la misma, pero intercalando letras mayusculas y minusculas.

## Instalación
```
npm install platzom
```

## Uso

```
import platzom from 'platzom'

platzom("Programar") // Program
platzom("Zorro")// Zorrope
platzom("Zarpar")// Zarppe
platzom("abecedario")// abece-dario
platzom("sometemos")// SoMeTeMoS
```

## Creditos

- [Alejandra Correa](https://twitter.com/Aleja_M075)

## Licencia

[MIT](https://opensource.org/licenses/MIT)