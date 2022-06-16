let direction = 'right';
let leftoffset = 300;
let downoffset = 100;
let intervalLength = 200;
let clicks = 1;

$("#heading").offset({ left: leftoffset, top: downoffset });
const moveHeading = function () {
    if (direction === 'right') {
        $("#heading").offset({ left: leftoffset });
        leftoffset++;
        if (leftoffset > 900) {
            leftoffset = 900;
            direction = 'down';
        }
    } else if (direction === 'down') {
        $("#heading").offset({ top: downoffset });
        downoffset++;
        if (downoffset > 500) {
            downoffset = 500;
            direction = 'left';
        }
    } else if (direction === 'left') {
        $("#heading").offset({ left: leftoffset });
        leftoffset--;
        if (leftoffset < 300) {
            leftoffset = 300;
            direction = 'up';
        }
    } else if (direction === 'up') {
        $("#heading").offset({ top: downoffset });
        downoffset--;
        if (downoffset < 100) {
            downoffset = 100;
            direction = 'right';
        }
    }
};
let intervalId = setInterval(moveHeading, intervalLength);

$("#heading").click(function () {
    $("#heading").text("Click " + clicks);
    clearInterval(intervalId);
    intervalLength /= 2;
    clicks++;

    if (clicks > 9) {
        $("#heading").text("You Win!");
    } else {
        intervalId = setInterval(moveHeading, intervalLength);
    }
});
