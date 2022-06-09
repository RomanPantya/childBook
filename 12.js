const alphabet = 'qwertyuiopasdfghjklzxcvbnm';

let randomString = "";

let count = 0;

while (count < 14) {
    randomString += alphabet[Math.floor(Math.random() * alphabet.length)];
    count++;
}

console.log(randomString);