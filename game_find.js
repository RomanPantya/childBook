let getRandomNumber = function (size) {
    return Math.floor(Math.random() * size);
};
let isEnd = false;
let clicks = 0;
const clicksOver = 7;
const width = 400;
const height = 400;
let target = {
    x: getRandomNumber(width),
    y: getRandomNumber(height)
};

$("#map").click(function (event) {
    if (isEnd) {
        return;
    }
    clicks++;
    let distance = getDistance(event, target);
    let distanceHint = getDistanceHint(distance);
    $("#distance").text('"' + distanceHint + '"' + " - " + "you have " + (clicksOver - clicks) + " try!");
    if (distance < 7) {
        alert("Found the treasure in " + clicks + " clicks!");
    }
    if (clicks === clicksOver) {
        alert("GAME OVER");
        isEnd = true;
    }

});
const getDistance = function (event, target) {
    const diffX = event.offsetX - target.x;
    const diffY = event.offsetY - target.y;
    return Math.sqrt((diffX * diffX) + (diffY * diffY));
};
const getDistanceHint = function (distance) {
    if (distance < 10) {
        return "Boiling hot!";
    } else if (distance < 20) {
        return "Really hot";
    } else if (distance < 40) {
        return "Hot";
    } else if (distance < 80) {
        return "Warm";
    } else if (distance < 160) {
        return "Cold";
    } else if (distance < 320) {
        return "Really cold";
    } else {
        return "Freezing!"
    }
};