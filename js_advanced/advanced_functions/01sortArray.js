function sortArray(array, string) {
    let arr = array;
    let order = string;

    let ascending = function (a, b) {
        return a - b;
    };

    let descending = function (a, b) {
        return b - a;
    };

    let sorting = {
        "asc": ascending,
        "desc": descending,
    };

    return arr.sort(sorting[order]);
}