const speak = function () {
    console.log(this.sound + "! My name is " + this.name + "!");
};

const cat = {
    sound: "Miaow",
    name: "Mittens",
    speak: speak
};

const pig = {
    sound: "Oink",
    name: "Charlie",
    speak: speak 
};

const horse = {
    sound: "Neigh",
    name: "Marie",
    speak: speak
};

cat.speak();
pig.speak();
horse.speak();
