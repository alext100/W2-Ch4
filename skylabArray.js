class SkylabArray {
    lenghtSkylab = 0;
    newObject = {};

    pushSkylab(newValue) {
        this.newObject[this.lengthSkylab] = newValue;
        this.lengthSkylab += 1;
    }

    someSkylab(callback) {
        for (let i = 0; i < this.lenght; i++) {
            if (callback(this[i])) {
                return true;
            }
        }
        return false;
    }

    filterSkylab(callback) {
        const result = [];
        for (let i = 0; i < lenghtSkylab; i++) {
            if (i in newObject) {
                if (callback.call(newObject[i], i, newObject)) {
                    result.pushSkylab(newObject[i]);
                }
            }
        }
        return result;
    };
}

//  module.exports = { SkylabArray };
module.exports = SkylabArray;