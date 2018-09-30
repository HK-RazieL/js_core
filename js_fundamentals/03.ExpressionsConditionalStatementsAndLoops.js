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
    let day = input[1].toLowerCase();

    let theGodfather = 0;
    let schindlersList = 0;
    let casablanca = 0;
    let theWizardOfOz = 0;

    switch(day){
        case "monday":
            theGodfather = 12;
            schindlersList = 8.50;
            casablanca = 8;
            theWizardOfOz = 10;
            break;
        case "tuesday":
            theGodfather = 10;
            schindlersList = 8.50;
            casablanca = 8;
            theWizardOfOz = 10;
            break;
        case "wednesday":
            theGodfather = 15;
            schindlersList = 8.50;
            casablanca = 8;
            theWizardOfOz = 10;
            break;
        case "thursday":
            theGodfather = 12.5;
            schindlersList = 8.50;
            casablanca = 8;
            theWizardOfOz = 10;
            break;
        case "friday":
            theGodfather = 15;
            schindlersList = 8.50;
            casablanca = 8;
            theWizardOfOz = 10;
            break;
        case "saturday":
            theGodfather = 25;
            schindlersList = 15;
            casablanca = 10;
            theWizardOfOz = 15;
            break;
        case "sunday":
            theGodfather = 30;
            schindlersList = 15;
            casablanca = 10;
            theWizardOfOz = 15;
            break;
        default:
            theGodfather = "error";
            schindlersList = "error";
            casablanca = "error";
            theWizardOfOz = "error";
            break;
    }
    let movie = input[0].toLowerCase();

    if (movie === "the godfather") {
        return theGodfather;
    } else if (movie === "schindler's list") {
        return schindlersList;
    } else if (movie === "casablanca") {
        return casablanca;
    } else if (movie === "the wizard of oz") {
        return theWizardOfOz;
    } else {
        return "error";
    }
}

function quadraticEquation (a, b, c) {
    if (Math.pow(b , 2) - (4 * a * c) > 0){
        let resultOne = (-b + (Math.sqrt(Math.pow(b , 2) - (4 * a * c)))) / (2 * a);
        let resultTwo = (-b - (Math.sqrt(Math.pow(b , 2) - (4 * a * c)))) / (2 * a);
        console.log(Math.min(resultOne, resultTwo));
        console.log(Math.max(resultOne, resultTwo));

    } else if (Math.pow(b , 2) - (4 * a * c) === 0) {
        let resultOne = -b / (2 * a);
        console.log(resultOne);
    } else if (Math.pow(b , 2) - (4 * a * c) < 0) {
        console.log("No");
    }

}

function multiplicationTable (input) {
    console.log('<table border=\"1\">');
    let row = "";
    for (let i = 0; i <= input; i++) {
        row += "<tr>";

        if (i !== 0){
            row += `<th>${i}</th>`;

            for (let j = 1; j <= input; j++) {
                row += `<td>${j * i}</td>`;
            }

        } else {
            row += `<th>x</th>`;

            for (let k = 1; k <= input; k++) {
                row += `<th>${k}</th>`;

            }
        }

        row += "</tr>";
        console.log(row);
        row = "";
    }
    console.log('</table>');
}


function figureOf4Squares(input) {
    if (input===2){
        console.log("+++")
        return;
    }
    let kindOfLine = (num, str1, str2) => {
        let result = "";
        for (let i = 2; i < num; i++) {
            result += str2;
        }
        result += str1;
        return result;
    };

    let firstKindOfLine = "+" +
        kindOfLine(input, "+", "-") +
        kindOfLine(input, "+", "-");
    let secondKindLine = "|" +
        kindOfLine(input, "|", " ") +
        kindOfLine(input, "|", " ");

    console.log(firstKindOfLine);
    for (let i = 2; i < Number(input)/2; i++) {
        console.log(secondKindLine);
    }
    console.log(firstKindOfLine);
    for (let i = 2; i < Number(input)/2; i++) {
        console.log(secondKindLine);
    }
    console.log(firstKindOfLine);
}

function monthlyCalendar([day, month, year]) {
    month--;
    let daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0))
        daysInMonth[1] = 29;

    let html = '<table>\n';
    html += '  <tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>\n';

    let week = 0;
    let date = new Date(year, month, 1);
    let dayOfWeek = date.getDay();
    let firstDayPrevMonth = daysInMonth[(month-1 + 12) % 12]-dayOfWeek;
    if (dayOfWeek > 0)
        html += '  <tr>';
    for (let i=1; i<=dayOfWeek; i++) {
        html += '<td class="prev-month">' + (firstDayPrevMonth + i) + '</td>';
        week++;
    }

    let monthDaysCount = daysInMonth[month];
    for (let i=1; i<=monthDaysCount; i++) {
        if (week == 0)
            html += '  <tr>';
        if (day == i)
            html += '<td class="today">' + i + '</td>';
        else
            html += '<td>' + i + '</td>';
        week++;
        if (week == 7) {
            html += '</tr>\n';
            week=0;
        }
    }

    for (let i=1; week!=0; i++) {
        html += '<td class="next-month">' + i + '</td>';
        week++;
        if (week == 7) {
            html += '</tr>\n';
            week = 0;
        }
    }

    html += '</table>';
    return html;
}