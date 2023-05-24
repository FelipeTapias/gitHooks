// Librerias necesarias.
const fs   = require('fs');
const path = require('path');
const exec = require('child_process').exec;

// Variables para almacenar el nombre de las carpetas.
const carpetaOrigen = '../carpetaPrueba';
const carpetaDestino = '../carpetaDestino';

// Path de las carpetas origen y destino.
const carpetaOrigenPath = path.join(__dirname, carpetaOrigen);
const carpetaDestinoPath = path.join(__dirname, carpetaDestino);

// Variable para almacenar el comando, este utilizado para dar permiso al Hook.
const comando = 'chmod +x ';

// Variable que almacena en un arreglo el contenido de la carpeta origen.
const archivos = fs.readdirSync(carpetaOrigenPath);

ProcesarArchivo(archivos);

function ProcesarArchivo(archivos) {
    if(archivos.length) {
        console.log("Iniciando proceso...");
        console.log(`Total archivos a procesar ${archivos.length}`);
        // Se recorre cada uno de los archivos para llevar a la carpeta destino.
        archivos.forEach(archivo => {
            try {    
                var origen = path.join(carpetaOrigenPath, archivo);
                var destino = path.join(carpetaDestinoPath, archivo);
        
                var archivoOriginal = fs.createReadStream(origen);
                var archivoCopiado = fs.createWriteStream(destino);
        
                archivoOriginal.pipe(archivoCopiado);
                console.log(`Archivo ${archivo} copiado y agregado a su destino.`);
                OtorgarPermisos(destino);
            } catch (error) {
                console.log(`Ha ocurrido un error: ${error}`);
            }
        });
        console.log(`Total archivos procesados ${archivos.length}`);
        console.log("Fin del proceso.");
    } else {
        console.log("No se encontraron archivos en la carpeta origen.");
    }
}

function OtorgarPermisos(archivo) {
    exec(comando + archivo, (error) => {
        if(!error) {
            console.log(`El archivo de la ruta: ${archivo} convertido a ejecutable.`);
        } else {
            console.log(`Error al otorgar permisos: ${error}.`);
        }
    });
}