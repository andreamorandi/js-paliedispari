const userWord = prompt("Inserisci una parola");

if(palindrome(userWord)) {
    alert("Palindroma!");
} else {
    alert("Non palindroma")
}

function palindrome (word) {
    for (let i = 0; i < Math.floor(word.length / 2); i++) {
        if (word[i] !== word[(word.length - 1) - i]) {
            return false;
        }
    }
    return true;
}