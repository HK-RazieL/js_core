let expect = require("chai").expect;

let mathEnforcer = {
    addFive: function (num) {
        if (typeof(num) !== "number") {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof(num) !== "number") {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof(num1) !== "number" || typeof(num2) !== "number") {
            return undefined;
        }
        return num1 + num2;
    }
};

describe("mathEnforcer functionality", function () {
    describe("addFive", function (){
        it("should accept only a number as a parameter", function () {
            expect(mathEnforcer.addFive("pesho")).to.equal(undefined, "The function accepts only numbers!");
        });

        it("should accept only a number as a parameter", function () {
            expect(mathEnforcer.addFive(null)).to.equal(undefined, "The function accepts only numbers!");
        });

        it("should accept only a number as a parameter", function () {
            expect(mathEnforcer.addFive({})).to.equal(undefined, "The function accepts only numbers!");
        });

        it("should accept only a number as a parameter", function () {
            expect(mathEnforcer.addFive()).to.equal(undefined, "The function accepts only numbers!");
        });

        it("should accept a number as a parameter", function () {
            expect(mathEnforcer.addFive(1)).to.equal(6, "The function returns incorrect result!");
        });

        it("should accept a number as a parameter", function () {
            expect(mathEnforcer.addFive(0)).to.equal(5, "The function returns incorrect result!");
        });

        it("should accept a number as a parameter", function () {
            expect(mathEnforcer.addFive(-2)).to.equal(3, "The function returns incorrect result!");
        });

        it("should work with floating numbers", function () {
            expect(mathEnforcer.addFive(3.12)).to.be.closeTo(8.12, 0.01, "The function should work with floating numbers!");
        });

        it("should work with floating numbers", function () {
            expect(mathEnforcer.addFive(-2.12)).to.be.closeTo(2.88, 0.01, "The function should work with floating numbers!");
        });
    });

    describe("substractTen", function () {
        it("should accept only a number as a parameter", function () {
            expect(mathEnforcer.subtractTen("pesho")).to.equal(undefined, "The function accepts only numbers!");
        });

        it("should accept only a number as a parameter", function () {
            expect(mathEnforcer.subtractTen({})).to.equal(undefined, "The function accepts only numbers!");
        });

        it("should accept only a number as a parameter", function () {
            expect(mathEnforcer.subtractTen()).to.equal(undefined, "The function accepts only numbers!");
        });

        it("should accept only a number as a parameter", function () {
            expect(mathEnforcer.subtractTen(null)).to.equal(undefined, "The function accepts only numbers!");
        });

        it("should accept a number as a parameter", function () {
            expect(mathEnforcer.subtractTen(11)).to.equal(1, "The function returns incorrect result!");
        });

        it("should accept a number as a parameter", function () {
            expect(mathEnforcer.subtractTen(-2)).to.equal(-12, "The function returns incorrect result!");
        });

        it("should accept a number as a parameter", function () {
            expect(mathEnforcer.subtractTen(0)).to.equal(-10, "The function returns incorrect result!");
        });

        it("should accept a number as a parameter", function () {
            expect(mathEnforcer.subtractTen(-2.5)).to.equal(-12.5, "The function returns incorrect result!");
        });

        it("should work with floating numbers", function () {
            expect(mathEnforcer.subtractTen(3.12)).to.be.closeTo(-6.88, 0.01, "The function should work with floating numbers!");
        });
    });

    describe("sum", function () {
        it("should accept a number as first parameter", function () {
            expect(mathEnforcer.sum("pesho", 3)).to.equal(undefined, "The function accepts only a number as first parameter!");
        });

        it("should accept a number as second parameter", function () {
            expect(mathEnforcer.sum(3, "pesho")).to.equal(undefined, "The function accepts only a number as second parameter!");
        });

        it("should accept a numbers as parameter", function () {
            expect(mathEnforcer.sum("gosho", "pesho")).to.equal(undefined, "The function accepts only a numbers as parameter!");
        });

        it("should accept a number as first parameter", function () {
            expect(mathEnforcer.sum(null, 3)).to.equal(undefined, "The function accepts only a number as first parameter!");
        });

        it("should accept a number as second parameter", function () {
            expect(mathEnforcer.sum(3, null)).to.equal(undefined, "The function accepts only a number as second parameter!");
        });

        it("should accept a number as parameters", function () {
            expect(mathEnforcer.sum("pesho")).to.equal(undefined, "The function accepts only a number as parameters!");
        });

        it("should accept a number as parameters", function () {
            expect(mathEnforcer.sum([1, 2])).to.equal(undefined, "The function accepts only a number as parameters!");
        });

        it("should accept a number as parameters", function () {
            expect(mathEnforcer.sum([1], [2])).to.equal(undefined, "The function accepts only a number as parameters!");
        });

        it("should accept a number as parameters", function () {
            expect(mathEnforcer.sum({}, {})).to.equal(undefined, "The function accepts only a number as parameters!");
        });

        it("should receive 2 parameters", function () {
            expect(mathEnforcer.sum(3)).to.equal(undefined, "The function requires 2 parameters!");
        });

        it("should receive 2 parameters", function () {
            expect(mathEnforcer.sum()).to.equal(undefined, "The function requires 2 parameters!");
        });

        it("should work with negative numbers", function () {
            expect(mathEnforcer.sum(-3, -7)).to.equal(-10, "The function should work with negative numbers!");
        });

        it("should work", function () {
            expect(mathEnforcer.sum(3, 7)).to.equal(10, "The function should work!");
        });

        it("should work", function () {
            expect(mathEnforcer.sum(0, 2)).to.equal(2, "The function should work!");
        });

        it("should work", function () {
            expect(mathEnforcer.sum(0, 0)).to.equal(0, "The function should work!");
        });

        it("should work with negative numbers", function () {
            expect(mathEnforcer.sum(-3, 5)).to.equal(2, "The function should work with negative numbers!");
        });

        it("should work with floating numbers", function () {
            expect(mathEnforcer.sum(1.004, 3.14)).to.be.closeTo(4.144, 0.01, "The function should work with floating numbers!");
        });

        it("should work with floating numbers", function () {
            expect(mathEnforcer.sum(-1.004, -3.14)).to.be.closeTo(-1.004 + -3.14, 0.01, "The function should work with floating numbers!");
        });

        it("should work with floating numbers", function () {
            expect(mathEnforcer.sum(-2.00014, 61.2)).to.be.closeTo(59.19986, 0.01, "The function should work with floating numbers!");
        });

        it("should work with floating numbers", function () {
            expect(mathEnforcer.sum(0.01, 0.02)).to.be.closeTo(0.03, 0.01, "The function should work with floating numbers!");
        });

        it("should work with negative floating number and int", function () {
            expect(mathEnforcer.sum(-1, -0.02)).to.be.closeTo(-1.02, 0.01, "The function should work with floating numbers!");
        });

        it("should work with floating number and int", function () {
            expect(mathEnforcer.sum(0.02, 1)).to.be.closeTo(1.02, 0.01, "The function should work with floating numbers!");
        });
    });
});
