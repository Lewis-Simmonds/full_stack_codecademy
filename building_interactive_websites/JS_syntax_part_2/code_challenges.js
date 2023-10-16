/*various code challenges, try to avoid using in built methods for first four exercises*/

/*function to reverse an array*/
const reverseArray = (arr) => {
    let newArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      newArr.push(arr[i]);
    };
    return newArr;
};

/*function to create multiple greetings from input array*/
const greetAliens = (aliens) => {
    for (alien in aliens) {
        console.log(`Oh powerful ${aliens[alien]}, we humans offer our unconditional surrender!`);
    };
};

/*function to convert animals to babies*/
const convertToBaby = (animals) => {
    let newArr = [];
    for (animal in animals) {
      newArr.push(`baby ${animals[animal]}`);
    };
    return newArr;
};

/*return smallest power of 2 that is >= each number in input array*/
const smallestPowerOfTwo = arr => {
    let results = [];
    for (let i = 0; i < arr.length; i++) {
          number = arr[i];
          j = 1;
          while (j < number) {
                j = j * 2;
          };
          results.push(j);
    };
    return results;
};

/*can now use built-in methods*/

/*return array of all elements squared*/
const squareNums = nums => nums.map(num => num * num);

/*turn greetings into shouts (capitalise all letters and add exclamation point)*/
const shoutGreetings = (greetings) => {
    shouts = [];
    for (greeting in greetings) {
        shout = greetings[greeting].toUpperCase() + '!';
        shouts.push(shout);
    };
    return shouts;
};

/*sort array of years into descending order*/
const sortYears = (years) => {
    let sortedYears = years.sort();
    sortedYears.reverse();
    return sortedYears;
};

/*return items that are present in both arrays*/
const justCoolStuff = (arr1, arr2) => {
    return arr1.filter(word => arr2.includes(word));
};

/*check array of food items to see if vegan*/
const isTheDinnerVegan = meal => meal.every(item => item.source === 'plant');

/*sort array of species by number of teeth*/
const sortSpeciesByTeeth = species => {
    species.sort((a, b) => a.numTeeth - b.numTeeth);
    return species;
};

/*write function to create dog objects*/
const dogFactory = (name, breed, weight) => {
    return {
        _name: name,
        _breed: breed,
        _weight: weight,
        get name() {
            return this._name;
        },
        set name(newName) {
            this._name = newName;
        },
        get breed() {
            return this._breed;
        },
        set breed(newBreed) {
            this._breed = newBreed;
        },
        get weight() {
            return this._weight;
        },
        set weight(newWeight) {
            this._weight = newWeight;
        },
        bark() {
            return 'ruff! ruff!';
        },
        eatTooManyTreats() {
            this._weight++;
        }
    };
};