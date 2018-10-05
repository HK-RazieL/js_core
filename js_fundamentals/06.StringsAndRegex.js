function splitAStringWithADelimiter(inputOne, inputTwo) {
    let array = inputOne.split(`${inputTwo}`);
    array.map((a) => {
        console.log(a)
    });
}

function repeatAStringNTimes(input, n) {
    return input.repeat(n);
}

function startsWith(input, substring) {
    return input.startsWith(substring);
}

function endsWith(input, substring) {
    return input.endsWith(substring);
}

function capitalizeTheWords(input) {
    let array = input.split(" ");
    let capitalized = array.map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
    console.log(capitalized.join(" "));
}

function captureTheNumbers(input) {
    let numbers = input.join(" ").match(/\d+/g);
    console.log(numbers.join(" "));
}

function findVariableNamesInSentences(input) {
    let words = input.match(/\b_[A-Za-z\d]+\b/g);
    console.log(words.join().replace(/_/g, ""));
}

findVariableNamesInSentences("__invalidVariable _evenMoreInvalidVariable __validVariable");