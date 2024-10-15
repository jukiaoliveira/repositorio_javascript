// 1 - Criando uma função
function minhaFuncao() {
    console.log("testando");
}

minhaFuncao();
minhaFuncao();

const minhaFuncaoEmVariavel = function () {
    console.log("Função em Variável");
}

minhaFuncaoEmVariavel();

function funcaoComParametro(txt) {
    console.log(`Imprimindo: ${txt}`);
}

funcaoComParametro("Imprimindo alguma coisa"); 
funcaoComParametro("outra função");

// 2 - Return

const a = 10
const b = 20
const c = 30
const d = 40

function soma(n1, n2) {
    return n1 + n2;
}

const resultado = soma(a, b);

console.log(resultado);
console.log(soma(c, d));

// 3 - Escopo da Função

let y = 10

function testandoEscopo() {
    let y = 20
    console.log(`Y dentro da Função é: ${y}`)
}

testandoEscopo();

console.log(`Y fora da Função é: ${y}`);

testandoEscopo();

// 4 - Escopo Aninhado
let m = 10

function escopoAninhado() {
    let m = 20

    if(true){
        let m = 30
    
        if(true) {
            let m = 40

            console.log(m)
        }
        console.log(m)
    }
    console.log(m)
}

escopoAninhado();

console.log(m);

// 5 - arrow function

const testeArrow = () => {
    console.log("Está é uma arrow function")
}

testeArrow();

const parOuImpar = (n) => {
    if(n % 2 === 0) {
        console.log("Par");
        return;
    }

    console.log("Impar");
};

parOuImpar(5);

parOuImpar(10);

// 6 - mais sobre arrow functions

const raizQuadrada = (x) => {
    return x * x;
};

console.log(raizQuadrada(4)); 

// Ou, de forma mais concisa:
const raizQuadrada2 = (x) => x * x;

console.log(raizQuadrada2(5)); 
console.log(raizQuadrada(12));

const helloWorld = () => console.log("Hello World");

helloWorld();


// 7 - parametro opcional

const multiplication = function(m, n) {
    if(n === undefined) {
        return m * 2;
    } else {
       return m * n 
    }
}

console.log(multiplication(5));
console.log(multiplication(2, 4));

const greeting = (name) => {
    
    if(!name) {
        console.log("Olá!")
        return
    } 

    console.log(`Olá ${name}!`)
}

greeting();
greeting("Jukia");