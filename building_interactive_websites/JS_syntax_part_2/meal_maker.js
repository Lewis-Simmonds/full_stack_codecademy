/*Create function for website to set meal and price each morning*/

const menu = {
    _meal: '',
    _price: 0,
    set meal(mealToCheck) {
        if (typeof mealToCheck === 'string') {
            return this._meal = mealToCheck;
        } else {
            return 'Please enter a valid meal option.';
        }
    },
    set price(priceToCheck) {
        if (typeof priceToCheck === 'number') {
            return this._price = priceToCheck;
        } else {
            return 'Please enter a valid price.';
        }
    },
    get todaysSpecial() {
        if (this._meal && this._price) {
            return `Today's Special is ${this._meal} for £${this._price}!`;
        } else {
            return 'Meal or price was not set correctly.';
        }
    }
};

menu.meal = 'Ham, Egg and Chips';
menu.price = 6.00;

console.log(menu.todaysSpecial);


