// Change text content of an element
let h1 = document.querySelector('h1');
console.log(h1.innerText);
h1.innerText = "Woof, Bark"

// Inner text gets unformatted text, while text content grabs formatting and any tags (CSS or JS)
let invisible = document.getElementById('#hidden');
console.log('Text Content grabs styles, formatting, etc. in addition to the text itself: ', invisible.textContent);

// Inner HTML returns a string containing every tag associated with element
let findForm = document.querySelector('form');
console.log('Inner HTML shows tags: ', findForm.innerHTML);
// Can also be used to dynamically add styled content to web page
h1.innerHTML += ", <u>Aryooooo!</u>"

// You can get and set attributes like so...
let range = document.querySelector('input[type="range"]')
// console.log(range.getAttribute('min'));
// Set takes two arguments -- what to set, and what to set it to
// range.setAttribute('min', '0');

// Access parents and children of selected element
let input = document.querySelector('input');
console.log('Form is parent of input: ', input.parentElement);
console.log('Inputs are children of form: ', findForm.children);

// You can also access the siblings like so:
let middleInput = input.nextElementSibling;
console.log('Third input sibling is ', middleInput.nextElementSibling);
console.log('First input sibling is ', middleInput.previousElementSibling);

// To change every element within a group:
const listItems = document.querySelectorAll('.change');
for (let li of listItems) {
    li.innerText = 'Ta-Da, Changed with a Loop'
}

// Style property only picks up styles set in-line, which is typically ill-advised... but you can set them that way
let firstP = document.querySelector('p');
firstP.style.color = 'white';
firstP.style.background = 'black';

// To update styles in a group, do something like this:
let colors = ['red', 'blue', 'green'];
listItems.forEach((li, i) => {
    let color = colors[i];
    li.style.color = color;
})

// Class list allows you to add new class and its styled to existing class
let todo = document.querySelectorAll('.todo');
// Can use add, remove, or (most common) toggle
todo.forEach(task => task.classList.toggle('done'))

// To add a new element: first use createElement
let newTask = document.createElement('li');
// Second, assign any relevant text/styles/classes
newTask.innerText = 'Beg for food';
newTask.classList.add('todo');
// Third, append or prepend to the proper parent
let todos = document.getElementById('todos');
todos.appendChild(newTask);

// Another implementation that prepends a link to top of page
let newLink = document.createElement('a');
newLink.innerText = 'Heads-up: we switched online homes. Click here to visit our new site!';
newLink.href = 'https://dogs.com';
let topSection = document.querySelector('.top');
topSection.prepend(newLink);

// Append is the same concept but allow you to insert multiple elements
let para1 = document.createElement('p');
let para2 = document.createElement('p');
para1.innerText = 'Double';
para2.innerText = 'Trouble';
topSection.append(para1, para2);

// One more that utilizes insertBefore: must pass in (insertMe, whereToInsert)
let fourthTask = document.createElement('li');
fourthTask.innerText = 'Fetch balls';
fourthTask.classList.add('todo');
todos.insertBefore(fourthTask, newTask);

// To remove a task, call removeChild on parent and pass child as an argument
todos.removeChild(fourthTask);
// Remove works same way as append but note that neither are supported in IE
topSection.remove(para1, para2);