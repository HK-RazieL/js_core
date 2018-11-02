function extensibleObject(input) {
    let myObj = {
        extend: function (a) { Object.assign(myObj, a) }
    };

}