const words = ["javascript", "monkey", "amazing", "pancake", "teacher"];
const word = words[Math.floor(Math.random() * words.length)];
const answerArray = [];

for (let i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}

let remainingLetters = word.length;

while (remainingLetters > 0) {
    alert(answerArray.join(" "));

    let guess = prompt("Guess a letter, or click Cancel to stop playing");
    if (guess === null) {
        break;
    } else if (guess.length !== 1) {
        alert("Please enter a single letter.");
    } else {
        let sms = '';

        for (let j = 0; j < word.length; j++) {
            if (answerArray[j] === "_" && word[j] === guess) {
                answerArray[j] = guess;
                remainingLetters--;
            } else if (answerArray[j] !== "_" && word[j] === guess) {
                sms = 'This letter was guess!'
            }
        }

        if (sms) {
            alert(sms);
        }
    }
}
alert(answerArray.join(" "));
alert("Good job! The answer was " + word);

