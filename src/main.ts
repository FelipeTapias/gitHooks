import { Git } from "./Class/Git";
import { Hook } from "./models/Hook";

const hooks: Array<Hook> = [{name: '1', function: 'post-commit'}, 
                            {name: '1', function: 'post-commit'},
                            {name: '1', function: 'post-commit'}];

// Instancia de la clase
const git = new Git();

// Establecer valores
git.SetHooks(hooks);

// Obtener valores
const hookValues = git.GetHooks();

// Impresion de los valores
console.log(hookValues);


