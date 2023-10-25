class Media {

    constructor(title) {
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];
    };

    get title() {
        return this._title;
    };

    get isCheckedOut() {
        return this._isCheckedOut;
    };

    get ratings() {
        return this._ratings;
    };

    set isCheckedOut(checkOutStatus) {
        this._isCheckedOut = checkOutStatus;
    };

    toggleCheckOutStatus() {
        this._isCheckedOut = !this._isCheckedOut;
    };

    getAverageRating() {
        const ratingsSum = this._ratings.reduce((currentSum, rating) => currentSum + rating, 0);
        const numOfRatings = this._ratings.length;
        return Math.round((ratingsSum / numOfRatings) * 10) / 10;
    };

    addRating(newRating) {
        this._ratings.push(newRating);
    };

};