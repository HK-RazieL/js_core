function argumentInfo(...input) {
    let arr = input;
    let result = [];
    let types = {};
    let sortedTypes = [];

    arr.forEach((a) => {
        let type = typeof a;
        result.push(`${typeof a}: ${a}`);

        if (!(type in types)) {
            types[type] = 1;
        } else {
            types[type] += 1;
        }
    });

    for (let item in types) {
        sortedTypes.push([item, types[item]]);
    }

    sortedTypes.sort((a, b) => {
        return b[1] - a[1];
    });

    result.forEach((a) => {
        console.log(a);
    });

    sortedTypes.forEach((a) => {
        console.log(`${a[0]} = ${a[1]}`);
    });
}