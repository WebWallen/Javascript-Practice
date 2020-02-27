// It's not advised to use in-line events or onClick because they can only listen for 1 thing
const btn = document.querySelector('#normal');
// The best alternative = event listeners so you can use multiple events as needed
// btn.addEventListener("click", function() {
//     alert('Clicked!')
// })
// btn.addEventListener("mouseover", function() {
//     btn.innerText = "STOP TOUCHING ME!"
// })
// btn.addEventListener("mouseout", function() {
//     btn.innerText = "Ok, that's better..."
// })

// const annoy = document.querySelector('#annoyer');
// annoy.addEventListener("mouseover", () => {
//     const height = Math.floor(Math.random() * window.innerHeight);
//     const width = Math.floor(Math.random() * window.innerWidth);
//     annoy.style.left = `${width}px`;
//     annoy.style.top = `${height}px`;
// })
// annoy.addEventListener('click', () => {
//     annoy.innerText = 'You did it, speedy!';
//     annoy.style.background = 'black';
//     annoy.style.color = 'white';
// })

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'indigo', 'violet'];

const pickColor = function() {
    // *This* refers to individual element clicked on
    console.log(this.style.background);
    const h1 = document.querySelector('h1');
    h1.style.color = this.style.background;
};

const container = document.querySelector('#boxes');

for (let color of colors) {
    const box = document.createElement('div');
    box.style.background = color;
    container.appendChild(box);
    box.classList.add('box');
    box.addEventListener('click', pickColor);
}

const input = document.querySelector('#username');

// The act of pressing a key down (whether or not it types anything)
input.addEventListener('keydown', (e) => {
    console.log('Key down!');
})

// When you release the key
input.addEventListener('keyup', (e) => {
    console.log('Key up!');
})

// Only triggers when something is typed into an input, with exception of enter
input.addEventListener('keypress', (e) => {
    console.log('Key press!');
})

// Select the target input field 
const addItemInput = document.querySelector('#addItem');
// Select the parent below which we want to store new list items
const itemsUL = document.querySelector('#items');
// Below code breaks when you use arrow function (due to the If?)
addItemInput.addEventListener('keypress', function (e) {
    // Can grab a key by attaching to the event handler
    if (e.key === 'Enter') {
        // Store the value with this and assign to newItemText
        const newItemText = this.value;
        // Create a new list item 
        const newItem = document.createElement('li');
        // Attach the text value to actual element's inner text
        newItem.innerText = newItemText;
        // Append the new item to its parent list
        itemsUL.appendChild(newItem);
        // Reset the value to an empty string after submission
        this.value = '';
    }
})

const cc = document.querySelector('#cc');
const terms = document.querySelector('#terms');

const formData = {};
for (let input of [cc, terms]) {
    // Destructure the event object to pull out target property
    input.addEventListener('input', ({ target }) => {
        // Destructure some more to grab the form information we want
        const { name, type, value, checked } = target;
        // Set the name of our form data to checked (terms) or value (CC #)
        formData[name] = type === 'checkbox' ? checked : value
        // Confirm we are getting the right information
        console.log(formData);
        // Without the terinary and destructuring, we wouldn't access true/false for checkbox
    })
}