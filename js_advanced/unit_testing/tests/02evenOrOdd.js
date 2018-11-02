let expect = require('chai').expect;
let $ = require("jquery");

function isOddOrEven(string) {
    if (typeof(string) !== "string") {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even"
    }
    return "odd";
}

describe("Tests for this task", function () {

    describe("Function tests - checks if the it is string", function () {
        it("should be a string", function () {
            expect(typeof isOddOrEven("32")).to.equal("string");
        });

        it("should be a undefined if not a string", function () {
            expect(isOddOrEven(13)).to.be.undefined;
        });
    });

    describe("Check the length of the string", function () {
        it("should be even", function () {
            expect(isOddOrEven("32")).to.equal("even");
        });

        it("should be odd", function () {
            expect(isOddOrEven("323")).to.equal("odd");
        });
    });
});