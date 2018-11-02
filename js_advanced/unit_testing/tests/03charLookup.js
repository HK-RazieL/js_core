let expect = require("chai").expect;

function lookupChar(string, index) {
    if (typeof(string) !== "string" || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }
    return string.charAt(index);
}

describe("lookupChar", function () {
    it("should accept only a string as first parameter", function () {
        expect(lookupChar(13,0)).to.equal(undefined, "The function did not return the correct result!");
    });

    it("should accept only a number as a second parameter", function (){
        expect(lookupChar("pesho", "gosho")).to.equal(undefined, "The function did not return the correct result!");
    });

    it("should accept only integer as a second parameter", function () {
        expect(lookupChar("pesho", 3.14)).to.equal(undefined, "The function did not return the correct message!");
    });
    //---

    it("should have a correct index value", function () {
        expect(lookupChar("pesho", 13)).to.equal("Incorrect index", "The function did not return the correct value!");
    });

    it("should have a positive index value", function () {
        expect(lookupChar("pesho", -1)).to.equal("Incorrect index", "The function did not return the correct value!");
    });

    it("should have index value lower than string length", function () {
        expect(lookupChar("pesho", 5)).to.equal("Incorrect index", "The function did not return the correct value!");
    });
    //---

    it("should return a correct answer with correct parameters", function () {
        expect(lookupChar("pesho", 0)).to.equal("p", "The function did not return the correct result!");
    });

    it("should return a correct answer with correct parameters", function () {
        expect(lookupChar("stamat", 2)).to.equal("a", "The function did not return the correct result!");
    });
});
