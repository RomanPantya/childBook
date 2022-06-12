const words = ["javascript", "monkey", "amazing", "pancake", "teacher", "picnic", "mercuriy", "heart"];
const word = words[Math.floor(Math.random() * words.length)];
const answerArray = [];

for (let i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}

let remainingLetters = word.length;
let count = 3;

while (remainingLetters > 0 && count > 0) {
    alert(answerArray.join(" "));

    let guess = prompt("Guess a letter, or click Cancel to stop playing");
    if (guess === null) {
        break;
    } else if (guess.length !== 1) {
        alert("Please enter a single letter.");
    } else {
        let sms = "";
        let yes = "";

        for (let j = 0; j < word.length; j++) {
            if (answerArray[j] === "_" && word[j] === guess.toLocaleLowerCase()) {
                answerArray[j] = guess.toLowerCase();
                remainingLetters--;
                yes = "yes";
            } else if (answerArray[j] !== "_" && word[j] === guess.toLowerCase()) {
                sms = 'This letter was guess!'
            }
        }
        if (sms) {
            alert(sms);
        } else if (yes) {
            alert("This letter is right!!!")
        } else {
            alert("This letter is wrong, try again!")
            count--;
        }
    }
}
alert(answerArray.join(" "));
alert("Good job! The answer was " + word);

