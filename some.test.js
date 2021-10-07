const SkylabArray = require("./skylabArray");

describe("Given class SkylabArray creates new Object with a metod some()", () => {
    describe("when it recives callback function x => x > 10 and array [2, 5, 9, 11]", () => {
        test("will return true", () => {
            let newArr = new SkylabArray();
            newArr = [2, 5, 9, 11];
            const callback = x => x > 10;

            const expected = true;

            const result = newArr.someSkylab(callback);

            expect(result).toBe(expected);
        });
    });
    describe("when it recives callback function x => x < 8 and array [20, 50, 90, 11]", () => {
        test("will return false", () => {
            let newArr = new SkylabArray();
            newArr = [20, 50, 90, 11];
            const callback = x => x < 8;

            const expected = false;

            const result = newArr.someSkylab(callback);

            expect(result).toBe(expected);
        });
    });
});