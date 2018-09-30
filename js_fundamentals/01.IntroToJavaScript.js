function sum3Numbers(a, b, c) {
    return a + b + c;
}

function sumAndVat(input) {
    let sum = 0;
    for (let num of input) {
        sum += num;
    }

    return "sum = " + sum + "%n" + "VAT = " + sum * 0.2 + "%n" + "total = " + sum * 1.2;
}

function letters(a, b) {
    let count = 0;

    for (let i = 0; i < a.length; i++) {
        if (a[i] === b)
            count++
    }

    return count;
}


function filterByAge(minAge, nameA, ageA, nameB, ageB) {
    let personA = {name: nameA, age: ageA};
    let personB = {name: nameB, age: ageB};
    if (personA.age >= minAge) console.log(personA);
    if (personB.age >= minAge) console.log(personB);

}


function numbers(n) {
    let str = '';
    for (let i = 1; i <= n; i++) str += i;
    return str;

}


function figureArea(w, h, W, H) {
    let [s1, s2, s3] = [w * h, W * H, Math.min(w, W) * Math.min(h, H)];
    return s1 + s2 - s3;

}

function calcNextDay(year, month, day) {
    let date = new Date(year, month - 1, day);
    let oneDay = 24 * 60 * 60 * 1000; // milliseconds in 1 day
    let nextDate = new Date(date.getTime() + oneDay);

    return nextDate.getFullYear() + "-" + (nextDate.getMonth() + 1) + '-' + nextDate.getDate();

}

function distanceBetweenPoints(x1, y1, x2, y2) {
    let pointA = {x: x1, y: y1};
    let pointB = {x: x2, y: y2};
    let distanceX = Math.pow(pointA.x - pointB.x, 2);
    let distanceY = Math.pow(pointA.y - pointB.y, 2);

    return Math.sqrt(distanceX + distanceY);
}
