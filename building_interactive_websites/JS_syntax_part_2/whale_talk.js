/*Take a phrase like ‘turpentine and turtles’ and translate 
it into its “whale talk” equivalent: ‘UUEEIEEAUUEE’*/

/*There are no consonants. Only vowels excluding “y”*/

/*The u‘s and e‘s are extra long, so we must double them in our program*/

const input = "This will be converted to whale talk!";

const vowels = ['a', 'e', 'i', 'o', 'u'];

const resultArray = [];

for (i = 0; i < input.length; i++) {

    if (input.toLowerCase()[i] === 'e' || input.toLowerCase()[i] === 'u' ) {

        resultArray.push(input.toLowerCase()[i]);
    }

    for (j = 0; j < vowels.length; j++) {

        if (input.toLowerCase()[i] === vowels[j]) {

            resultArray.push(input.toLowerCase()[i]);

        }

    }

}

console.log(resultArray);

resultString = resultArray.join('').toUpperCase();

console.log(resultString);

