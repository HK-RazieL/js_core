function carFactory(input) {
    let smallEngine = {
        power: 90,
        volume: 1800
    };

    let normalEngine = {
        power: 120,
        volume: 2400
    };

    let monsterEngine = {
        power: 200,
        volume: 3500
    };


    let hatchBack = {
        type: "hatchback",
        color: ""
    };

    let coupe = {
        type: "coupe",
        color: ""
    };

    let car = Object.assign(input);

    if (car.power <= 90){
        car.engine = smallEngine;
    } else if (car.power > 90 && car.power <= 120) {
        car.engine = normalEngine;
    } else {
        car.engine = monsterEngine;
    }

    delete car.power;

    if (car.carriage === "hatchback") {
        hatchBack.color = car.color;
        car.carriage = hatchBack;
    } else if (car.carriage === "coupe") {
        coupe.color = car.color;
        car.carriage = coupe;
    }
    delete car.color;


    if (Math.floor(car.wheelsize) % 2 === 0) {
        car.wheelsize -= 1;
    }

    car.wheels = [car.wheelsize, car.wheelsize, car.wheelsize, car.wheelsize];
    delete car.wheelsize;

    return car;
}

console.log(carFactory({ model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14 }));