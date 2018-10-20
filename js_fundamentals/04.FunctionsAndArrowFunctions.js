function insideVolume(input) {
    for (let i = 0; i < input.length; i += 3) {
        if (input[i] >= 10 && input[i] <= 50 &&
            input[i + 1] >= 20 && input[i + 1] <= 80 &&
            input[i + 2] >= 15 && input[i + 2] <= 50) {
            console.log("inside");
        } else {
            console.log("outside");
        }
    }
}

function roadRadar(input) {
    let driverSpeed = input[0];
    let location = input[1];
    let speedLimit = 0;

    switch (location) {
        case "city":
            speedLimit = 50;
            break;
        case "residential":
            speedLimit = 20;
            break;
        case "interstate":
            speedLimit = 90;
            break;
        case "motorway":
            speedLimit = 130;
            break;
    }

    if (driverSpeed <= speedLimit) {

    } else if (driverSpeed > speedLimit && driverSpeed <= speedLimit + 20) {
        return "speeding";
    } else if (driverSpeed > speedLimit + 20 && driverSpeed <= speedLimit + 40) {
        return "excessive speeding";
    } else {
        return "reckless driving";
    }
}

function templateFormat(input) {
    console.log("<?xml version=\"1.0\" encoding=\"UTF-8\"?>");
    console.log("<quiz>");

    let questions = input.map((a, index) => {
        if (index % 2 === 0) {
            console.log("  <question>");
            console.log("    " + a);
            console.log("  </question>");
        } else {
            console.log("  <answer>");
            console.log("    " + a);
            console.log("  </answer>");
        }
    });
    console.log("</quiz>");
}

function cookingByNumbers(input) {
    let result = [].concat(input);
    let number = result[0];

    return result.map((a) => {
        if (a === "chop") {
            number /= 2;
            console.log(number);
        } else if (a === "dice") {
            number = Math.sqrt(number);
            console.log(number);
        } else if (a === "spice") {
            ++number;
            console.log(number);
        } else if (a === "bake") {
            number *= 3;
            console.log(number);
        } else if (a === "fillet") {
            number *= 0.8;
            console.log(number);
        }
    });
}

function modifyAverage(input) {
    let numberToString = input.toString();
    let numberToArray = numberToString.split("");
    let arrayToNumbers = numberToArray.map((a) => {
        return parseInt(a, 10);
    });

    let numbersSum = arrayToNumbers.reduce((a, b) => {
        return a + b;
    });

    let average = numbersSum / arrayToNumbers.length;

    if (average <= 5) {
        numberToString = numberToString.concat("9");
        modifyAverage(numberToString);

    } else if (average > 5) {
        console.log(parseInt(numberToString));
    }
}

function validityChecker(input) {
    let [x1, y1, x2, y2] = input;

    function distance(x1, y1, x2, y2) {
        let distance = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));

        if (Number.isInteger(distance)) {
            return `{${x1}, ${y1}} to {${x2}, ${y2}} is valid`;
        } else {
            return `{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`;
        }
    }

    console.log(distance(x1, y1, 0, 0));
    console.log(distance(x2, y2, 0, 0));
    console.log(distance(x1, y1, x2, y2));
}

function treasureLocation(input) {
    let locations = [].concat(input);

    let islands = {
        Tonga: [0, 2, 6, 8],
        Tuvalu: [1, 3, 1, 3],
        Samoa: [5, 7, 3, 6],
        Cook: [4, 9, 7, 8],
        Tokelau: [8, 9, 0, 1]
    };

    for (let i = 0; i < locations.length - 1; i += 2) {
        let counter = 0;
        let treasureHunter = Object.keys(islands).forEach((islandName, j) => {
            let island = islands[islandName];
            if (locations[i] >= island[0] && locations[i] <= island[1] && locations[i + 1] >= island[2] && locations[i + 1] <= island[3]) {
                console.log(islandName);
                counter++;
            } else if (j === Object.keys(islands).length - 1 && counter === 0) {
                console.log("On the bottom of the ocean");
                counter = 0;
            }
        });
    }
}

function solve(input) {
    let [x1, y1, x2, y2, x3, y3] = input;

    let distance12 = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
    let distance23 = Math.sqrt(Math.pow((x3 - x2), 2) + Math.pow((y3 - y2), 2));
    let distance13 = Math.sqrt(Math.pow((x3 - x1), 2) + Math.pow((y3 - y1), 2));


    if ((distance12 <= distance13) && (distance13 => distance23)) {
        let a = distance12 + distance23;
        console.log('1->2->3: ' + a);
    }
    else if ((distance12 <= distance23) && (distance13 < distance23)) {
        let b = distance13 + distance12;
        console.log('2->1->3: ' + b);
    }
    else {
        let c = distance23 + distance13;
        console.log('1->3->2: ' + c);
    }

}

function radioCrystal(input) {
    let target = Number(input[0]);

    function process(crystalThickness, action) {
        switch (action) {
            case "cut":
                crystalThickness = crystalThickness >> 2;
                cutCount++;
                break;
            case "lap":
                crystalThickness /= 1.25;
                lapCount++;
                break;
            case "grind":
                crystalThickness -= 20;
                grindCount++;
                break;
            case "etch":
                crystalThickness -= 2;
                etchCount++;
                break;
            case "xRay":
                crystalThickness += 1;
                xrayCount++;
                return crystalThickness;
        }

        return transportingWashing(crystalThickness);
    }

    function transportingWashing(crystalThickness) {
        return Math.floor(crystalThickness);
    }

    for (let i = 1; i < input.length; i++) {
        let current = input[i];
        var cutCount = 0, lapCount = 0, grindCount = 0, etchCount = 0, xrayCount = 0;
        let used = false;

        console.log(`Processing chunk ${current} microns`);

        while (current !== target) {
            while (current >> 2 >= target - 1) {
                current = process(current, "cut");
            }
            while (current / 1.25 >= target - 1) {
                current = process(current, "lap");
            }
            while (current - 20 >= target - 1) {
                current = process(current, "grind");
            }
            while (current - 2 >= target - 1) {
                current = process(current, "etch");
            }
            if (current + 1 === target && used === false) {
                used = true;
                current = process(current, "xRay");
            }
        }

        if (cutCount > 0) {
            console.log(`Cut x${cutCount}`);
            console.log("Transporting and washing");
        }

        if (lapCount > 0) {
            console.log(`Lap x${lapCount}`);
            console.log("Transporting and washing");
        }

        if (grindCount > 0) {
            console.log(`Grind x${grindCount}`);
            console.log("Transporting and washing");
        }

        if (etchCount > 0) {
            console.log(`Etch x${etchCount}`);
            console.log("Transporting and washing");
        }

        if (used) {
            console.log(`X-ray x1`)
        }

        console.log(`Finished crystal ${target} microns`)
    }
}

function dnaHelix(input) {
    let number = input;
    let str = 'ATCGTTAGGG';
    let counter = 0;
    for (let i = 0; i < number; i++) {
        if (i % 4 === 0) {
            console.log(`**${str[counter % 10]}${str[counter % 10 + 1]}**`);
        } else if (i % 4 === 1) {
            console.log(`*${str[counter % 10]}--${str[counter % 10 + 1]}*`);
        } else if (i % 4 === 2) {
            console.log(`${str[counter % 10]}----${str[counter % 10 + 1]}`);
        } else if (i % 4 === 3) {
            console.log(`*${str[counter % 10]}--${str[counter % 10 + 1]}*`);
        }

        counter += 2
    }
}