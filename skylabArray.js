class SkylabArray {
    length = 0;

    some(callback) {
        for (let i = 0; i < this.length; i++) {
            if (callback.call(Object(this)[i])) {
                return true;
            }
        }
        return false;
    }
}

module.exports = SkylabArray;