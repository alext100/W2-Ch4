const SkylabArray = require("./skylabArray");

describe("Given class SkylabArray creates new Object with a metod filter()", () => {
    describe("when it recives callback function item => item > 10 and array [12, 5, 8, 130, 44, 11]", () => {
        test("will return [12, 130, 44, 11]", () => {
            let newArr = new SkylabArray();
            newArr = [12, 5, 8, 130, 44, 11];
            const callback = item => item > 10;

            const expected = [12, 130, 44, 11];

            const result = newArr.filterSky(callback);

            expect(result).toStrictEqual(expected);
        });
    });
    describe("when it recives callback function item => item < 10 and array [12, 5, 8, 130, 44, 1]", () => {
        test("will return [5, 8, 1]", () => {
            let newArr = new SkylabArray();
            newArr = [12, 5, 8, 130, 44, 1];
            const callback = item => item < 10;

            const expected = [5, 8, 1];

            const result = newArr.filterSky(callback);

            expect(result).toStrictEqual(expected);
        });
    });
});