// 8 - valor default

const customGreeting = (name, greet = "Olá") => {
    return `${greet}, ${name}!`
};

console.log(customGreeting("Julia"));
console.log(customGreeting("Rafaela", "Bom dia"));

const repeatText = (text, repeat = 2) => {
    for (let i = 0; i < repeat; i++) {
        console.log(text);
    }
};

repeatText("Testando");
repeatText("Agora repita 5 vezes", 5);

// 9 - Closure

function someFunction() {
    let text = "Alguma coisa";

    function display() {
        console.log(text);
    }
    display();
}

someFunction();

// 10 - mais sobre closure

const multiplicationClosure = (n) => {
    return (m) => {
        return n * m;
    };
};

const c1 = multiplicationClosure(5);

const c2 = multiplicationClosure(10);

console.log(c1);
console.log(c2);

console.log(c1(5));
console.log(c2(10));

// 11 - recursion

const untilTen = (n, m) => {
    if(n < 10) {
        console.log("A função parou de executar!")
    } else {
        const x = n - m

        console.log(x)
        untilTen(x, m);
    }
};

untilTen(100, 7);

function factorial(x) {
    if (x === 0) {
        return 1;
    } else {
        return x * factorial(x - 1);
    }
}

const num = 6;

const result = factorial(num);

console.log(`O fatorial do número ${num} é ${result}`);
