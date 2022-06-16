const Car = function (x, y) {
    this.x = x;
    this.y = y;
    this.draw();
    this.speed = 5;
};

Car.prototype.draw = function (car) {
    const carHtml = '<img id="map" width=100 height=100 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBM-MxL6UpYVF0kR78o0iXJC1DPuDVcg1ivw&usqp=CAU">';
    this.carElement = $(carHtml);

    this.carElement.css({
        position: "absolute",
        left: this.x,
        top: this.y
    });
    $("body").append(this.carElement);
};
Car.prototype.moveRight = function (distance) {
    this.x += distance;

    this.carElement.css({
        left: this.x,
        top: this.y
    });
};
Car.prototype.moveLeft = function (distance) {
    this.x -= distance;

    this.carElement.css({
        position: "absolute",
        left: this.x,
        top: this.y
    });
};
Car.prototype.moveUp = function (distance) {
    this.y -= distance;

    this.carElement.css({
        left: this.x,
        top: this.y
    });
};
Car.prototype.moveDown = function (distance) {
    this.y += distance;

    this.carElement.css({
        left: this.x,
        top: this.y
    });
};

const tesla = new Car(20, 20);
const nissan = new Car(50, 200);

const asd = setInterval(function () {
    tesla.moveRight(Math.random() * 5);
    nissan.moveRight(Math.random() * 5);
    if (tesla.x > 1200) {
        clearInterval(asd);
        alert("Tesla win!");
    }
    if (nissan.x > 1200) {
        clearInterval(asd);
        alert("Nissan win!");
    }
}, 30);