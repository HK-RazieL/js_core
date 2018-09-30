function printArrayWithDelimiter(input) {
    let delimiter = input[input.length - 1];
    let array = input.splice(0, input.length - 1);
    return console.log(array.join(delimiter));
}

function printEveryNthElement(input) {
    let n = input[input.length - 1];
    let array = input.slice(0, input.length - 1);

    array.forEach((number, i) => {
        if (i % n === 0) {
            console.log(number);
        }
    })
}

function addAndRemoveElements(input) {
    let number = 1;
    let array = [];

    input.forEach((command) => {
        if (command === "add") {
            array.push(number);
            number++;
        } else {
            array.pop();
            number++;
        }
    });

    if (array.length === 0) {
        console.log("Empty");
    } else {
        array.forEach((a) => {
            console.log(a)
        })
    }
}

function rotateArray(input) {
    let rotation = Number(input[input.length - 1]);
    let print = input.slice(0, input.length - 1);

    for (let i = 0; i < rotation % print.length; i++) {
        let last = print.pop();
        print.unshift(last);
    }
    console.log(print.join(' '));
}

function extractNonDecreasingSubsequence(input) {
    let array = [].concat(input);
    let biggest = array[0];
    array.forEach((a, i) => {
        if (a >= biggest || i === 0) {
            biggest = a;
            console.log(biggest);
        }
    })
}

function sortArrayBy2Criteria(input) {
    let array = [].concat(input);

    array.sort().sort((a, b) => a.length > b.length).forEach((a) => {
        console.log(a);
    })
}

