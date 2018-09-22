function multiplyNumbers(a, b) {
    return a * b;
}

function boxesAndBottles(a, b) {
    console.log(Math.ceil(a / b));
}

function leapYear(year) {
    let leap = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    console.log(leap ? "yes" : "no");

}

function circleArea(r) {
    let area = Math.PI * r * r;
    console.log(area);
    let areaRounded = Math.round(area * 100) / 100;
    console.log(areaRounded);

}

function triangleArea(a, b, c) {
    let sp = (a + b + c) / 2;
    return Math.sqrt(sp * (sp - a) * (sp - b) * (sp - c));

}

function cone(r, h) {
    let s = Math.sqrt(r * r + h * h);
    let volume = Math.PI * r * r * h / 3;
    console.log("volume = " + volume);
    let area = Math.PI * r * (r + s);
    console.log("area = " + area);

}

function oddEven(num) {
    if (!Number.isInteger(num)) {
        console.log("invalid")

    } else if (num % 2 === 0) {
        console.log("even")

    } else {

        console.log("odd")
    }
}

function fruitAndVegetables(word) {
    switch (word) {
        case 'banana':
        case 'apple':
        case 'kiwi':
        case 'cherry':
        case 'lemon':
        case 'grapes':
        case 'peach':

            console.log('fruit');
            break;

        case 'tomato':
        case 'cucumber':
        case 'pepper':
        case 'onion':
        case 'parsley':
        case 'garlic':
            console.log('vegetable');
            break;

        default:
            console.log('unknown');
            break;
    }
}

function colorfulNumbers(n) {
    let html = '<ul>\n';

    for (let i = 1; i <= n; i++) {
        let color = 'blue';
        if (i % 2 !== 0) {
            color = 'green';
        }
        html += `<li><span style='color:${color}'>${i}</span></li>\n`;

    }
    html += '</ul>';

    return html;

}

function chessboard(size) {
    let html = '<div class="chessboard">\n';

    for (let row = 0; row < size; row++) {

        html += ' <div>\n';

        let color = (row % 2 === 0) ? 'black' : 'white';

        for (let col = 0; col < size; col++) {
            html += ` <span class="${color}"></span>\n`;
            color = (color === 'white') ? 'black' : 'white';

        }
        html += ' </div>\n';

    }
    return html + '</div>';

}

function binaryLogarithm(nums) {
    for (let x of nums) {
        console.log(Math.log2(x));

    }
}

function isPrime(num) {
    let prime = true;

    for (let d = 2; d < Math.sqrt(num); d++) {
        if (num % d === 0) {
            prime = false;
            break;

        }

    }
    return prime && (num > 1);

}