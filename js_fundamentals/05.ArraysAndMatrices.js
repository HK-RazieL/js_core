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

function spiralMatrix(a, b) {
    let maxRows = a;
    let maxCols = b;
    let matrix = [];
    for (let i = 0; i < maxRows; i++) {
        matrix.push([]);
        for (let j = 0; j < maxCols; j++) {
            matrix[i].push(0);
        }
    }
    let element = 0;
    let col = -1;
    let row = 1;

    while (element < maxRows * maxCols) {
        row--;
        col++;
        while (col < maxCols && matrix[row][col] === 0) { // хоризонтално напред
            element++;
            matrix[row][col] = element;
            col++;
        }
        col--;
        row--;
        while (row >= 0 && matrix[row][col] === 0) {
            element++;
            matrix[row][col] = element;
            row--;
        }
        row++;
        col--;
        while (col >= 0 && matrix[row][col] === 0) {
            element++;
            matrix[row][col] = element;
            col--;
        }
        row++;
        col++;
        while (row < maxRows && matrix[row][col] === 0) {//
            element++;
            matrix[row][col] = element;
            row++;
        }
    }
    console.log(matrix.map(row => row.join(' ')).join('\n'));
}

function diagonalAttack(arr) {
    let matrix = arr
        .map(row => row.split(' ')
            .filter(x => x !== '')
            .map(Number));

    if (matrix.length !== matrix[0].length) {
        return printMatrix(matrix);
    }	// rows != cols -> not a square matrix

    let diagonalsSum = matrix.reduce((acc, cur, index) => {
        acc[0] += +matrix[index][index];
        acc[1] += +matrix[index][matrix.length - 1 - index];
        return acc;
    }, [0, 0]);

    if (diagonalsSum[0] === diagonalsSum[1]) {
        matrix.map((item, index) => {
            item.map((el, elIndex) => {
                if (elIndex !== index && elIndex !== matrix.length - 1 - index) {
                    item[elIndex] = diagonalsSum[0];
                }
            })
        });
    }
    printMatrix(matrix);

    function printMatrix(matrix) {
        matrix.forEach(row => console.log(row.join(' ')));
    }
}

function orbit(input) {
    let width = input[0];
    let height = input[1];
    let x = input[2];
    let y = input[3];

    let matrix = [];
    for (let i = 0; i < width; i++) {
        matrix.push([]);
        for (let j = 0; j < height; j++) {
            matrix[i].push(0);
        }
    }

    let element = 1;
    matrix[x][y] = element;

    let startRow = x - 1;
    let startCol = y - 1;
    let endRow = x + 1;
    let endCol = y + 1;

    while (startRow >= 0 || startCol >= 0 || endRow <= matrix.length - 1 || endCol <= matrix[0].length) {
        element++;
        if (startRow >= 0) {
            matrix[startRow].fill(element);
        }
        if (endRow <= matrix.length - 1) {
            matrix[endRow].fill(element);
        }

        if (startCol >= 0) {
            let sR = Math.max(startRow, 0);
            let eR = Math.min(endRow, matrix.length - 1);
            for (let r = sR; r <= eR; r++) {
                matrix[r][startCol] = element;
            }
        }

        if (endCol <= matrix[0].length - 1) {
            let sR = Math.max(startRow, 0);
            let eR = Math.min(endRow, matrix.length - 1);
            for (let r = sR; r <= eR; r++) {
                matrix[r][endCol] = element;
            }
        }

        startRow--;
        startCol--;
        endRow++;
        endCol++;
    }

    console.log(matrix.map(
        row => row.join(' ')
    ).join('\n'));
}