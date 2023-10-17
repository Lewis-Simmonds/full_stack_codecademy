//set-up list of all planets in solar system
const planets = ['mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune'];

//set-up properties of each planet
const properties = {
    mercury: {
        color: "light brown",
        pressure: 10 ** -14,
        oxygen: 42,
        sodium: 29,
        hydrogen: 22,
        other: 7 
    },
    venus: {
        color: "orange",
        pressure: 90,
        carbon_dioxide: 96,
        nitrogen: 3,
        other: 1
    },
    earth: {
        color: "blue and green",
        pressure: 1,
        nitrogen: 78,
        oxygen: 21,
        argon: 1,
        other: 1 
    },
    mars: {
        color: "red",
        pressure: 0.006,
        carbon_dioxide: 95,
        nitrogen: 3,
        argon: 1.5,
        other: 0.5 
    },
    jupiter: {
        color: "light brown",
        pressure: 1000,
        hydrogen: 90,
        helium: 9.5,
        other: 0.5
    },
    saturn: {
        color: "pale yellow",
        pressure: 1000,
        hydrogen: 96,
        helium: 3,
        other: 1
    },
    uranus: {
        color: "pale blue",
        pressure: 1000,
        hydrogen: 83,
        helium: 15,
        methane: 2.5,
        other: 0.5
    },
    neptune: {
        color: "blue",
        pressure: 1000,
        hydrogen: 80,
        helium: 19,
        methane: 0.5,
        other: 0.5
    }
};

//message generator function
const messageGenerator = () => {

    //pick a random planet
    const planet = planets[Math.floor(Math.random() * 8)];

    //get color and pressure of planet
    const color = properties[planet].color;
    const pressure = properties[planet].pressure;

    //get random element property (not color or pressure)
    const element_index = Math.floor((Math.random() * (Object.keys(properties[planet]).length - 2)) + 2);
    const element = Object.keys(properties[planet])[element_index];
   
    //capitalize first letter of planet name
    const planet_format = planet.charAt(0).toUpperCase() + planet.slice(1);

    //print out random planet fact
    console.log(`Facts about ${planet_format}!`);
    console.log(`${planet_format} is ${properties[planet].color} in color.`);
    console.log(`The surface pressure on ${planet_format} is ${properties[planet].pressure === 1000 ? ">>1000" : properties[planet].pressure}atm.`);
    console.log(`${planet_format}'s atmosphere is made up of ${properties[planet][element]}% ${element === 'other' ? element + ' gases' : element}.`)
}

messageGenerator();
