class SkylabArray {

  lenghtSkylab = 0;
  newObject = {};

  pushSkylab(newValue) {
    this.newObject[this.lengthSkylab] = newValue;
    this.lengthSkylab += 1;
  }

    some(callback) {
        for (let i = 0; i < this.length; i++) {
            if (callback.call(Object(this)[i])) {
                return true;
            }
        }
        return false;
    }
}

module.exports = { SkylabArray };
