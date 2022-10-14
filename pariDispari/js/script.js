let userEvenOdd = "";
while (userEvenOdd !== "pari" && userEvenOdd !== "dispari") {
    userEvenOdd = prompt("Scegli pari o dispari");
}
if (userEvenOdd === "pari") {
    userEvenOdd = "even";
} else {
    userEvenOdd = "odd";
}

let userNumber = 0;
while (userNumber < 1 || userNumber > 5) {
    userNumber = parseInt(prompt("Scegli un numero da 1 a 5"));
}

const cpuNumber = randomNumber(1, 5);

const sum = userNumber + cpuNumber;

if (userEvenOdd === evenOrOdd(sum)) {
    alert("Hai vinto!");
} else{
    alert("Ha vinto il computer");
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function evenOrOdd (number) {
    if (number % 2 === 0) {
        return "even";
    } else {
        return "odd";
    }
}