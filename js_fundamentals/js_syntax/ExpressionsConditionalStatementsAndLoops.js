function helloJavaScript(name){
    return `Hello, ${name}, I am JavaScript!`
}

function areaAndPerimeter (a, b) {
    console.log(a * b);
    console.log(2*(a + b));
}

function distanceOverTime (input) {
    let absoluteDistance = Math.abs(input[0] - input[1]);

    return (absoluteDistance * ((input[2] / 60) / 60) * 1000);
}

function distanceIn3D (input) {
    return Math.sqrt(Math.pow((input[3] - input[0]), 2) + Math.pow((input[4] - input[1]), 2) + Math.pow((input[5] - input[2]), 2));
}

function gradsToRadians (input) {
    if (input > 0) {
        return (input * 0.9) % 360;
    } else {
        return 360 - ((input * -0.9) % 360);
    }
}

function Compound_Interest(input) {
    let principalSum = input[0];
    let interestRate = input[1];
    let compoundingPeriodInMonths = input[2];
    let totalTimespan = input[3];
    let result = principalSum * Math.pow((1 + ((interestRate / 100) / (12 / compoundingPeriodInMonths))), (12 / compoundingPeriodInMonths) * totalTimespan);

    return result.toFixed(2);
}

function rounding (input) {
    let number = +input[0];
    let precision = +input[1];

    if (precision > 15) {
        precision = 15
    }

    return +number.toFixed(precision);
}

function imperialUnits (input) {
    let feet = input / 12;
    let inches = input % 12;
    return `${parseInt(feet)}'-${parseInt(inches)}"`;
}

function nowPlaying (input) {
    return `Now Playing: ${input[1]} - ${input[0]} [${input[2]}]`;
}

function composeTag (input) {
    return `<img src="${input[0]}" alt="${input[1]}">`;
}

function binaryToDecimal (input) {
    console.log(parseInt(input, 2).toString());
}

function assignProperties (input) {
    let object = {};
    object[`${input[0]}`] = input[1];
    object[`${input[2]}`] = input[3];
    object[`${input[4]}`] = input[5];

    return object;
}

function lastMonth (input) {
    let date = new Date(input[2], input[1] - 1, 0);
    return date.getDate()
}

function biggestOf3Numbers (input) {
    return Math.max.apply(null, input);
}

function pointInRectangle (input) {
    let [x, y, xMin, xMax, yMin, yMax] = input;

    if (x >= xMin && x <= xMax && y >= yMin && y <= yMax){
        return "inside";
    } else {
        return "outside";
    }
}

function oddNumbers1ToN (input) {
    for (let i = 0; i <= input; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
}

function triangleOfDollars (input) {
    for (let i = 1; i <= input; i++) {
        console.log("$".repeat(i));
    }
}

function moviePrices (input) {

}