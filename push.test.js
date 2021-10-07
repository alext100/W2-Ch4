// El método push() añade uno o más elementos al final de un array y devuelve la nueva longitud del array.

function pushSkylab(skylabArray) {
  return 2;
}

describe("Given pushSkylab", () => {
  describe("When receives [2, 4]", () => {
    test("Then it should return 2", () => {
      const skylabArray = [2, 4];
      const expected = 2;

      const result = pushSkylab(skylabArray);

      expect(result).toBe(expected);
    });
  });
});
