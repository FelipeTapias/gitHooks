# Notas de Desarrollador

## Objetivo del proyecto
* Demostrar la capacidad y/o el alcance que tienen los [Git Hooks](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks).

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

# Hooks

### Tipos de Hooks
- Del lado del cliente
- Del lado del servidor

### Ejemplos Hooks

* Determinar el correcto nombramiento de una rama: (pre-commit)
   ```bash
   #!/bin/bash

   # Obtiene el nombre de la rama actual
   branch_name=$(git symbolic-ref --short HEAD)
   categories=(feature hotfix bug)

   # Verifica el formato del nombre de la rama
   if [[ ! $branch_name =~ ^(feature|hotfix|bug)[/][0-9]{6,6}[a-z_-]+$ ]]; then
      echo "El nombre de la rama '$branch_name' no cumple con el formato permitido."
      echo "Formato permitido: [categoria]/[codigo WI]-[nombre-rama]"
      echo "Categorias permitidas:"
      for i in "${categories[@]}"
         do
            echo "$i"
         done
      echo "Ejemplo: ${categories[0]}/123456-not-found-message"
      exit 1
   fi
   ```

