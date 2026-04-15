// Dev Tools CLI

const args = process.argv.slice(2);

function greet(name) {
    return `Hello, ${name}!`;
}

function sum(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

function isEven(number) {
    return number % 2 === 0 ? "Even" : "Odd";
}

function showHelp() {
    console.log(`
Dev Tools - Commands:

node app.js greet [name]
node app.js sum [a] [b]
node app.js multiply [a] [b]
node app.js even [number]
    `);
}

const command = args[0];

switch (command) {
    case "greet":
        console.log(greet(args[1] || "world"));
        break;

    case "sum":
        console.log(sum(Number(args[1]), Number(args[2])));
        break;

    case "multiply":
        console.log(multiply(Number(args[1]), Number(args[2])));
        break;

    case "even":
        console.log(isEven(Number(args[1])));
        break;

    default:
        showHelp();
}
