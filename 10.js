const pickRandomWord = function (words) {
    return words[Math.floor(Math.random() * words.length)];
};
generateRandomInsult = function () {
    const randomBodyParts = ["Face", "Nose", "Hair"];
    const randomAdjectives = ["Smelly", "Boring", "Stupid"];
    const randomWords = ["Fly", "Marmont", "Stick", "Monkey", "Rat"];

    const randomString = "Your " + pickRandomWord(randomBodyParts) + " is like a " + pickRandomWord(randomAdjectives) + " " + pickRandomWord(randomWords) + "!!!";

    return randomString;
};
console.log(generateRandomInsult());
console.log(generateRandomInsult());