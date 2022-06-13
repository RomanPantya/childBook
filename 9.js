function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

    const abc = [];
    
    for (let i = 0; i < birds.length; i++) {
        for (let j = 0; j < geese.length; j++) {
            if (birds[i] !== geese[j]) {
                abc.push(birds[i]);
            }

        }
    }
    return abc;
    
    
  };
console.log(gooseFilter(["African", "dfgsdfghkjhg", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]));