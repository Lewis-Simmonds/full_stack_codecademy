const Calculate = {
    factorial(num) {
        if (num === 0) {
            return 1;
        };
        return num * this.factorial(num - 1);
    }
};

module.exports = Calculate;


