"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Git_1 = require("./Class/Git");
const hooks = [{ name: '1', function: 'post-commit' },
    { name: '1', function: 'post-commit' },
    { name: '1', function: 'post-commit' }];
// Instancia de la clase
const git = new Git_1.Git();
// Establecer valores
git.SetHooks(hooks);
// Obtener valores
const hookValues = git.GetHooks();
// Impresion de los valores
console.log(hookValues);
