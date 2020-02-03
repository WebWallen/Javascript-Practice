// String Methods
let mad = 'i am mad!';
mad = mad.toUpperCase();
console.log(mad);

let calm = 'I AM CALM.';
calm = calm.toLowerCase();
console.log(calm);

let spaces = '            why so much whitespace                                                   ';
let no_spaces = spaces.trim();
// Only removes leading and laging spaces, not ones in the middle
console.log(no_spaces);

console.log("first word".indexOf("first"));
// Position 0 (first instance of string)
console.log("second word".indexOf("word"));
// Position 7 (ditto)
console.log("not a word".indexOf("nope"));
// -1 (means it doesn't exist)

let second_word = "second word";
// Slices string starting with index position to the end
let word = second_word.slice(7);
console.log(word);

let super_hero = "superhero";
// Starts with first arg, stops at second arg (not inclusive)
let super_ = super_hero.slice(0, 5);
console.log(super_);

let price = "$7.50";
// Common use case of slice
let numOnly = price.slice(1);
console.log(numOnly);

console.log("Dogs are okay".replace("okay", "magnificent"));

// Note to self: brackets on MDN mean that part of syntax is optional

let animal = "dog";
let sound = "woof";
console.log(`The ${animal} says ${sound}`);

const minAge = 21;
let yourAge = 18;
console.log(`You must be ${minAge} or older to enter. Come back in ${minAge - yourAge} years`)

let loggedInUser = null
// Null is an intentional absence of value that must be declared
// loggedInUser = `${user.daniel}`
// Useful when combine with loop/large data set to plug in 

// Generate random number between 1 and 10
console.log(Math.floor(Math.random() * 10) + 1)

// If users insert a number as a string and needs to be converted to an integer...
let input = '21';
let output = parseInt(input);
console.log(output);
// If it has a decimal...
let input2 = '22.94292';
let output2 = parseFloat(input2);
console.log(output2);

let day = 6;
switch (day) {
    case 1:
        console.log('Monday')
        break;
    case 2: 
        console.log('Tuesday')
        break;
    case 3: 
        console.log('Wednesday')
        break;
    case 4:
        console.log('Thursday')
        break;
    case 5: 
        console.log('Friday')
        break;
    case 6:
        console.log('Saturday')
        break;
    case 7:
        console.log('Sunday')
        break;
    default:
        console.log('invalid day')
        break;
}

let emoji = 'sad face';
switch (emoji) {
    case 'sad face':
    case 'happy face':
        console.log('Yellow');
        break;
    case 'heart':
    case 'roses':
        console.log('Red');
        break;
    default:
        console.log('Wrong');
        break;
}

// Terinary logic (one line if/else statement)
let luck_num = 7;
// Condition          If true                If false
luck_num === 7 ? console.log('Lucky') : console.log('Unlucky');

let status = 'Online';
let color = status === 'Online' ? 'green' : 'red';

// Pop removes from end of array, push adds. Unshift adds to front, shift removes. Gotcha with unshift:

dishes = ['bowl'];
// Multiple elements all go to front in given order
dishes.unshift('spoon', 'knife');
console.log(dishes);
// Single elements go to front by themselves
dishes.unshift('fork');
dishes.unshift('plate')
console.log(dishes)

// Concat combines several arrays in order given
let fruits = ['apple', 'banana'];
let veggies = ['brocoli', 'lettuce'];
let meats = ['chicken', 'beef'];
let foods = fruits.concat(veggies, meats);
console.log(foods);
// Includes tells you whether or not element is inside array
console.log(foods.includes('fish'))
// Can add an index if you want to confirm it's in a certain spot
console.log(foods.includes('banana', 1));
// Index of tells you exactly where the specified element lives
console.log(foods.indexOf('lettuce'));

// Reverse flips the order of existing array. 
let flipMe = ['c', 'b', 'a'];
console.log(flipMe.reverse());

// Join converts an array into a joined string. If you want to add another character between, specify in ().
let joinMe = ['hyphens', 'are', 'neat'];
console.log(joinMe.join('-'));

// Slice doesn't mutate original array, creates a new array based on input criteria, last num not inclusive
let animals = ['dog', 'cat', 'gerbil', 'bear', 'whale'];
let pets = animals.slice(0, 3);
console.log(pets);
// Leaving out second input means "go to the end"
let not_pets = animals.slice(3);
console.log(not_pets);

// Splice is good for updating middle of array (push/pop, shift/unshift easier for beginning/end)
pets.splice(3, 0, 'fish');
// First input specifies where to insert, second how many items to delete, last what to add
console.log(pets);
// If we use just to remove, specify index and how many items to remove
not_pets.splice(1, 1);
console.log(not_pets);

// Sort mutates the array and puts in alphabetical order -- numeric doesn't work without helper function
let wrong_order = ['Zatana', 'Superman', 'Green Lantern', 'Flash', 'Batman', 'Aquaman'];
wrong_order.sort();
console.log(wrong_order);

// You can manipulate arrays even if assigned as a cont because it stores reference to memory vs values
const changing_array = ['woof', 'meow'];
changing_array[0] = 'bark';
changing_array[1] = 'purr';
changing_array.push('chirp');
console.log(changing_array);

// Multi-dimensional arrays are mostly used for games where you need to store multiple moves, etc
const array_of_arrays = [
    ['X', null, 'O'],
    [null, 'X', 'O'],
    ['X', null, 'O']
]
console.log(array_of_arrays);
// To access actual content have to add an index because the arrays are nested
console.log(array_of_arrays[0]);

// Sample object with key/val pairs
const myStats = {
    height: "6'3",
    weight: 230,
    age: 32,
    'weird var': 100
}
// Typically it's best to use dot notation with object properties
console.log(myStats.age)
// But if you use a 'wrong' property, you can only access with square brackets
console.log(myStats['weird var'])

// Nesting objects and arrays (good example of what they'd look like in real world)
const student = {
    firstName: "Daniel",
    lastName: "Wallen",
    cohort: "Full Stack Web Development",
    strengths: ["Responsive Design", "Tweeting Too Much", "Writing Good Comments"],
    scores: {
        html: 100,
        css: 95,
        javascript: 90,
        node: 85,
        react: 80
    }
};
average_score = (student.scores.html + student.scores.css + student.scores.javascript + student.scores.node + student.scores.react) / 5;
console.log(average_score);

// Nesting arrays and objects (another common structure in the wild)
const koontzBooks = [
    {
        title: 'Watchers',
        published: 'February 1987',
        villain: 'The Outsider'
    },
    {
        title: 'From the Corner of His Eye',
        published: 'December 2000',
        villain: 'Junior Cain'
    }
]

// Or nesting objects and other objects
const game = {
    player1: {
        username: 'Bud',
        hours_logged: 20
    },
    player2: {
        username: 'Weiser',
        hours_logged: 200
    }
}

// For loops
for (let i = 1; i <= 10; i++) {
    console.log('Hello: ', i);
}

// Or with some math attached
for (let i = 200; i >= 0; i-= 25) {
    console.log(i);
}

// Or with an array
const grades = [100, 90, 80, 70, 60];

for (let i = 0; i < grades.length; i++) {
    console.log(grades[i])
}

// Or with an object inside an array
const studentGrades = [
    {
        name: 'Bob',
        grade: 50
    },
    {
        name: 'Steve',
        grade: 75
    },
    {
        name: 'Dave',
        grade: 100
    }
]

let total = 0;
for (i = 0; i < studentGrades.length; i++) {
    let student = studentGrades[i];
    console.log(`${student.name} scored a ${student.grade} on their test!`);
    total += student.grade;
}
console.log(`The average score is: ${total / studentGrades.length}`);

// For loop to reverse a word
const reverseMe = "stressed";
let reversedWord = "";
for (i = reverseMe.length - 1; i >= 0; i--) {
    reversedWord += reverseMe[i];
}
console.log(reversedWord);

// Nested for loops with indented inner loop to make difference clear
for (let i = 0; i <= 10; i++) {
    console.log('OUTER LOOP: ', i);
    // Note: every time the outer loop iterates (++), the inner loop runs through its full cycle
    for (let j = 10; j >= 0; j--) {
        console.log('    INNER LOOP: ', j)
    }
}

// Nested for loops that tally a total score based on game's point system

const gameBoard = [
    [4, 32, 8, 4],
    [64, 8, 32, 2],
    [8, 32, 16, 4],
    [2, 8, 4, 2]
];

let totalScore = 0;
for (let i = 0; i < gameBoard.length; i++) {
    // Assign row(i) to specific variable
    let row = gameBoard[i];
    // Increment through every row value
    for (let j = 0; j < row.length; j++) {
        // Add row value (points) to total score
        totalScore += row [j];
    }
}
console.log(totalScore);

// While loop is basically a for loop with if statement logic attached
let j = 0;
while (j <= 5) {
    console.log(j);
    j++
}

// Above logic wouldn't be used IRL - better to use while when # of loops unknown
const target = Math.floor(Math.random() * 10);
// Const because target stays same, but guess should be a dynamic value
let guess = Math.floor(Math.random() * 10);
while (guess !== target) {
    // Could be refactored to include a "break" statement, which breaks out of *current* loop (not EVERY loop)
    console.log(`Target: ${target} Guess: ${guess}`)
    guess = Math.floor(Math.random() * 10);
}
console.log('GOOD GUESS, YOU GOT IT!')
console.log(`Target: ${target} Guess: ${guess}`)

// You can use for...of with pre-defined iritable elements like array
let breeds = ['Pitbull', 'Chihuahua', 'Dachshund', 'Beagle']
// Define element used to iterate through the array
for (breed of breeds) {
    console.log(breed);
}

// For... of can also be used with strings
let bark = "woof";
for (char of bark) {
    console.log(char.toUpperCase());
}

// For...of nested with some math
const magicSquare = [
    [2, 7, 6],
    [9, 5, 1],
    [4, 3, 8]
]

let sum = 0;
for (let row of magicSquare) {
    for (let num of row) {
        sum += num
    }
    console.log(`${row} added equals new sum ${sum}`)
}
console.log(`Final sum: ${sum}`)

// Situation where it's better to use for loop because you need index
const words1 = ['milk', 'bar', 'psycho'];
const words2 = ['shake', 'bell', 'path'];

for (let i = 0; i < words1.length; i++) {
    // Okay to use one loop here since equal arrays and we're just combining them
    console.log(`${words1[i]}${words2[i]}`)
};

const movieReviews = {
    Clerks: 10,
    'Dark Knight': 9.5,
    'Mean Girls': 9,
    Joker: 8.5,
    'Jay and Silent Bob Strike Back': 8
}

for (let movie of Object.keys(movieReviews)) {
    // Must use square brackets to access object value when it's defined as a variable
    console.log(movie, movieReviews[movie]);
}

const ratings = Object.values(movieReviews);
// Define variable containing values first for ease of access
let totalRatings = 0;
// Set total at 0 and loop through every individual rating
for (let r of ratings) {
    // Increment the total
    totalRatings += r;
}
// Divide total by length and assign to average
let avg = totalRatings / ratings.length;
console.log('Average review: ', avg);

// For...in is a more straightforward way to loop through keys (can't do values though)
const jeopardyWinnings = {
    regularPlay: 2522700,
    watsonChallenge: 300000,
    tournamentOfChampions: 500000,
    battleofTheDecades: 100000
};

let totalWinnings = 0;
// Prop or key is good since many objects contain lots of general info
for (let prop in jeopardyWinnings) {
    totalWinnings += jeopardyWinnings[prop];
}
console.log(`Total Winnings: $${totalWinnings}`);
// Note: do NOT use for... in with arrays. For... of is better for those.

// Simple function -- parenthesis is a PARAMETER when defined and an ARGUMENT when called
function square(num) { // param
    console.log(num * num);
}
square(4); // arg

// Can't do anything with console statements in program -- requires a return statement to store value
function add(num1, num2) {
    return num1 + num2;
    // Can't have logic after a return because this tells the program to exit a function
}
const addedVals = add(4, 8);
console.log(addedVals);

// You can leave out the else statement for simpler code due to return's behavior
function isRed(color) {
    if (color === 'red') {
        return true;
    }
    return false;
}
console.log(isRed('blue'));
console.log(isRed('red'));

// Return automatically registers true or false so you can also do this
function isGreen(color) {
    // Good practice just in case they use caps or type incorrectly
    return color.toLowerCase() === 'green';
}
console.log(isGreen('GreeN'));
console.log(isGreen('grey'));

// You have to be careful with placement of return statement as wrong spot ends execution early
function containsPurple(arr) {
    for (let color of arr) {
        if (color === 'purple' || color === 'magenta' || color === 'lavender') {
            return true;
        }
        // Returning false here would stop loop upon first non-purple val even if that color came later
    }
    // This is the right place to return because now the loop is complete
    return false;
}
console.log(containsPurple(['green', 'black', 'purple', 'red', 'lavender', 'pink', 'orange', 'magenta']))

function checkPassword(user, password) {
    if (password.length < 8) {
        return false;
    }
    else if (password.includes(' ')) {
        return false;
    }
    else if (password.includes(user)) {
        return false;
    }
    else {
        return true;
    }
}
console.log(checkPassword('DoggoDan', 'DoggoDan10302029'));
console.log(checkPassword('DoggoDan', 'Doggos Rock'));
console.log(checkPassword('DoggoDan', 'TheyAreTheBest'));

function checkAverage(arr2) {
    let arrTotal = 0;
    // Don't use "for in" here, unexpected result!
    for (number of arr2) {
        arrTotal += number;
    }
    return arrTotal / arr2.length;
}
console.log(checkAverage([10, 20, 30, 40, 50, 60]));

function isPangram(str) {
    let lowercased = str.toLowerCase();
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    for (let char of alphabet) {
        // -1 index means it doesn't exist -- could also use includes as seen above
        if (lowercased.indexOf(char) === -1) {
            return false;
        }
    }
    return true;
}
console.log(isPangram('The five boxing wizards jump quickly'));
console.log(isPangram('This is not a pangram'));

// Function to generate random card and its suit from a deck

function dealer(arr) {
    // Calculate a random index based on array length
    const idx = Math.floor(Math.random() * arr.length);
    // Return the array value based on its [index]
    return arr[idx];
}

function getCard() {
    const cards = ['A', 'K', 'Q', 'J', '10', '9', '8', '7', '6', '5', '4', '3', '2'];
    const suits = ['diamonds', 'spades', 'hearts', 'clubs'];
    // Return an object containing card and suit based on what the "dealer" draws
    return {Card: dealer(cards), Suit: dealer(suits)};
}

console.log(getCard());
console.log(getCard());
console.log(getCard());

// Can also attach functions to a variable (function expression) -- compare difference with console.dir()
let doubleMe = function(n) {
    return n * 2;
}
console.log(doubleMe(100));

// Functions can be stored in an array if you want to perform many different operations on the same input

// const operations = [plus, minus, multiply, divide] -- then do a "for func of operations" loop

// You can also put the function calls in an object and store all the results together

function allTheMaths(x, y) {

    const plus = (x, y) => x + y;
    const minus = (x, y) => x - y;
    const multiply = (x, y) => x * y;
    const divide = (x, y) => x / y;

    let results = {
        plus: plus(x,y),
        minus: minus(x, y),
        multiply: multiply(x, y),
        divide: divide(x, y)
    }

    return results;
    
}

console.log(allTheMaths(100, 10));
console.log(allTheMaths(340, 18));

// Functions may be passed to another function as an argument, which is helpful when you wanna do an action a certain amount of times

function depression() {
    console.log("Life isn't fairrrrrr")
}

function enthusiasm() {
    console.log("Life is the bestttttttttt")
}

function callNTimes(emotion, num) {
    for (let i = 0; i < num; i++) {
        emotion()
    }
}

callNTimes(depression, 1);
callNTimes(enthusiasm, 4);

// You could pass in two functions and add logic to result in a random choices (perhaps useful in games?)
function pickOne(f1, f2) {
    let rand = Math.random();
    if (rand < 0.5) {
        f1();
    } 
    else {
        f2();
    }
}

pickOne(depression, enthusiasm);

// Make a function factory to quickly replicate a behavior you want to reproduce with slight differences

function multiplyBy(num) {

    return function (x) {
        // Function factories = probably the only time you will see a return within a return
        return x * num;
    } 
}

const quadruple = multiplyBy(4);
const double = multiplyBy(2);
const triple = multiplyBy(3)
const halve = multiplyBy(0.5);
const quarter = multiplyBy(0.25);

console.log(`Quadruple: ${quadruple(25)} \n Triple: ${triple(33.3)} \n Double: ${double(10)} \n Half: ${halve(500)} \n Quarter: ${quarter(2000)}`)

// One more function factory example that tells you whether a number falls in a certain range or not

function isBetween(x, y) {
    return function(num) {
        return num >= x && num <= y;
    }
}

const isChild = isBetween(0, 18);
const isSenior = isBetween(65, 122);
// Fun fact: the oldest person ever, according to Lord Google, lived to be 122 years old
const isNiceOutside = isBetween(60, 80);
const isLava = isBetween(700, 1200);

console.log(`Child: ${isChild(5)} \n Senior: ${isSenior(100)} \n Pretty Day: ${isNiceOutside(75)} \n Lava Pit: ${isLava(1000)}`)

// Anonymous call back function example = setTimeout, which requires another function before it will do anything

setTimeout(function() {
    alert('ANNOYING WELCOME MESSAGE');
}, 5000)