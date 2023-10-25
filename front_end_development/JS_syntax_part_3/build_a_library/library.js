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

class Book extends Media {

    constructor(title, author, pages) {
        super(title);
        this._author = author;
        this._pages = pages;
    };

    get author() {
        return this._author;
    };

    get pages() {
        return this._pages;
    };

};

class Movie extends Media {

    constructor(title, director, runTime) {
        super(title);
        this._director = director;
        this._runTime = runTime;
    };

    get director() {
        return this._director;
    };

    get runTime() {
        return this._runTime;
    };

};

class CD extends Media {

    constructor(title, artist, songs) {
        super(title);
        this._artist = artist;
        this._songs = songs;
    };

    get artist() {
        return this._artist;
    };

    get songs() {
        return this._songs;
    };

};