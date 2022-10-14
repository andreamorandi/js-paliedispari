const userWord = prompt("Inserisci una parola");

if(palindrome(userWord)) {
    alert("Palindroma!");
} else {
    alert("Non palindroma")
}

function palindrome (word) {
    let palindrome = true;
    for (let i = 0; i < Math.floor(word.length / 2); i++) {
        if (word[i] !== word[(word.length - 1) - i]) {
            palindrome = false;
        }
    }
    return palindrome;
}