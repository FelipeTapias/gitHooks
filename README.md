# Notas de Desarrollador

## Objetivo del proyecto
Demostrar la capacidad y/o el alcance que tienen los Git Hooks.

 ## Arquitectura del encarpetado
 - dist: Se encuentran los archivos transpilados.
 - src: Archivos originales de typescript listos para ser transpilados.
 ```
 dist
    -- class: Contenedor de las clases.
    -- models: Contenedor de las interfaces.
    main.js: Contenedor de las instancias principales.
 src
    -- class: Contenedor de las clases.
    -- models: Contenedor de las interfaces.
    main.js: Contenedor de las instancias principales.
 ```
# Transpilar y Ejecutar
```ts
Para transpilar: 
- Debemos de estar en la carpeta src
- Ejecutar el siguiente comando: tsc --outDir ../dist
(En el archivo tsconfig.json se especifica para que es el uso de la bandera outDir)
```

```js
Para ejecutar: 
- Debemos de estar en la carpeta dist
- Ejecutar el siguiente comando: node main.js
```