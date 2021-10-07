class SkylabArray {
  lenghtSkylab = 0;
  newObject = {};

  pushSkylab(newValue) {
    this.newObject[this.lengthSkylab] = newValue;
    this.lengthSkylab += 1;
  }
}

module.exports = { SkylabArray };
