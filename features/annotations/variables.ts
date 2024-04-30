// Variables
let apples: number = 5;
let speed: string = "fast";
let hasname: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

//built-in objects
let now: Date = new Date();

// Arrays
let colors: string[] = ['red', 'blue', 'green']
let mynumbers: number[] = [1, 2, 3, 4]
let truths: boolean[] = [true, true, false]

// Class
class Car {

}

let car: Car = new Car();

// Object
let point: {x: number; y: number} = {
    x : 3,
    y : 5
}

// Functions

const logNumber: (i: number) => void = (i) => {
    console.log(i)
}

// When to use annotations
// 1) Function that returns the 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates: {x: number; y: number} = JSON.parse(json);
console.log(coordinates);

// 2) When we declare a variable on one line
// //and initialise it later

let words = ['red', 'green', 'blue'];
let foundWord: boolean = false;

for (let i = 0; i < words.length; i++){
    if (words[i] === 'green') {
        foundWord = true;
        
    }
    console.log(foundWord)
}

// //Values which cannot be assigned!!!
// apples = "s";
// speed = 5;
// hasname = null;
// nothingMuch = 4;
// nothing = null;

// now = 4


