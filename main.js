//console is an class/object and it have different methods. log , error and warn are some methods
//search mdn console
console.log('Hello world');
console.error('This is an error');
console.warn('this is a warning');

//constant always need initializer
//var usually get conflicts wih same names, so we won't use that
//let is the general way to use variables
let score = 30;
score = 31;
console.log(score);

//------------------------------------------------------------------------------------

//datatypes: string, numbers, boolean, null, undefined
const name = 'Anohba'; //terminator is not mandatory
const age = 21;
const isCool = true;
const rating = 4.5;
const x = null;
const y = undefined;
let z;

console.log(typeof rating);
console.log(typeof age);
console.log(typeof x); //not really an object. search for js null object
console.log(typeof y);
console.log(typeof z);
console.log(typeof isCool);
console.log(typeof name);

//------------------------------------------------------------------------------------------

//concatenation
console.log('my name is ' + name + ' and i am ' +age);

//template string
console.log(`my name is ${name} and i am ${age}`);

//we can  also declare it as variable 
const hello = `my name is ${name} and i am ${age}`;
console.log(hello);

//length of string
const s = 'hello world!';
console.log(s.length); 

//changing the cases
console.log(s.toUpperCase()); //or console.log(s.toLowerCase());
//methods are actually functions related to objects

//pulling substring out of string
console.log(s.substring(0,5)); //takes indexes

//aslo do
console.log(s.substring(0,5) .toLowerCase());

//split method,by letter
console.log(s.split('')); 

//splitting into arrays
const d = 'technology, computer, laptop, mobile';
console.log(d.split(','));

//--------------------------------------------------------------------------

//arrays - vriables that holds multiple values
const numbers = new Array(1,2,3,4,5);
console .log(numbers);

//another way
const fruits = ['apple', 'orange', 'mango', 'banana'];
console.log(fruits);

//different datatypes in same array
const car = ['fruits', 'apple', 10, true];
console.log(car);

//superscript - javascript with some added features

//accessng specific elements of array
console.log(fruits[2]);
console.log(numbers[4]);
console.log(car[3]);

//adding more elements into array
//const can be manipulated by applying methods on it
//we can assignm more elements to it in arrays
//however we can't do this, fruits=[];
fruits[4] = 'peach'; //not the best way to do it
console.log(fruits);

//best way to do more assigning
//in the above case, we may not know the exact number of elements in array
fruits.push('pineapple');//assignimg to end
console.log(fruits);
fruits.unshift('strawberries'); // to beginning
console.log(fruits);
fruits.pop(); //pop the last one off
console.log(fruits);

//to check if somethung is in array
console.log(Array.isArray('hello'));
console.log(fruits.indexOf('orange')); //to get index

//-------------------------------------------------------------------

//object literals - key/value pairs
//terminator is , //assignment :
const person = {
    firstName: 'Anohba', 
    lastName: 'Jehad',
    age: 21,
    hobbies: ['painting', 'reading','sports'],
    //object within object
    address: {
        street: 11,
        houseno: 239,
        sector: 'K2',
    }
}
console.log(person);

//accessing specific value, . operator
console.log(person.firstName);

//accessing multiple value, . operator
console.log(person.firstName, person.lastName);

//accessing arrays
console.log(person.hobbies[1]);
console.log(person.address.sector);

//pulling out certain infor of array
//const { firstName, lastName } = person;
//console.log(firstName,lastName);

//embedded object
//const { firstName, lastName, address= {houseno} } = person;
//console.log(houseno);

//adding properties
person.email = 'anohba@hmail.com';
console.log(person);

//---------------------------------------------------------------

//arrays of objects
const todo = [
    {
        id: 1,
        text: 'take trash out',
        isCompleted: true,
    },
    {
        id: 2,
        text: 'meeting with boss',
        isCompleted: true,
    },
    {
        id: 3,
        text: 'dentist appointment',
        isCompleted: false,
    },
];
 
console.log(todo);
//or accessing certain id
console.log(todo[2].text);

//--------------------------------------------------------------

//jason - very similar to object literals
//search jason formattor
//double quotes around all keys
//use for sending and recieving data over a server, APIs

const todoJSON = JSON.stringify(todo); //json method
console.log(todoJSON);

//---------------------------------------------------------------

//loops
//for loop
for(let i = 0; i < 10; i++) {
    console.log(i);
    //or
    console.log(`forr loop number: ${i}`);
}

//while loop
let i = 0;
while (i < 0) {
    console.log(`while loop numbers: ${i}`);
    i++;
}

//loop through arrays
for(let i = 0; i < todo.length; i++) {
    console.log(todo[i].text); //isn't best way
}  

//best way
for(let t of todo) {
    console.log(todo);
    console.log(todo.text); //giving me error
}

//forEach, map, filter
todo.forEach( function(tod){
    console.log(todo.id);
});

const todoText = todo.map(function(todo) {
return todo.text;
});
console.log(todoText);

const todoCompleted = todo.filter(function(todo) {
return todo.isCompleted === true;
}); todo.map(function(todo) {
return todo.text;
});
console.log(todoCompleted);

//--------------------------------------------------------------
//conditionals
//if-else, else-if
const n = 10;
if (n === 10){     //== doesnt match datatype while === matches datatype. its better to use ===
    console.log('n is 10');
}
else if(x > 10){
    console.log('n is greater than 10');
}
else{
    console.log('n is less han 10');
}

//if
const a = 4;
const b = 10;
if(a > 5 && b > 10){
    console.log('a is more than 5 and b is more than 10');
}

//ternary operatore
const u = 10;
const color = u > 10 ? 'red': 'blue';
console.log(color);

//switches
switch (color){
    case 'red':
        console.log('color is red');
        break;
        case 'blue':
        console.log('color is blue');
        break;
        default:
            console.log('color is not red or blue');
}

//------------------------------------------------------------------------
//functions
function addnums(num1, num2){
    console.log(num1 + num2);
}
addnums(5,4);

//returning value
function add(num = 7, numbi = 7){
    return num + numbi;
}
console.log(add());

//overriding
console.log(add(1,6));

//arrow functions

//--------------------------------------------------------------------------
//oop
//constructor function
function pert(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = dob;
    this.getbirthyear = function(){
        return this.dob.getfullyear();
    }
}

// instanteous object
const person1 = new pert('john', 'doe', '4-3-1998');
const person2 = new pert('mary', 'smith', '3-6-1981');
console.log(pert);
// or 
console.log(person1.firstName); //or log whatever info we want
//console.log(pert.getfullyear());

//best practice
//class pers(firstName, lastName){
//}

//-----------------------------------------------------------------------

//dom
console.log(window);

//selecting things from dom
//selectors
// single element
// console.log(document.getElementById('my-form')); //we can also assign it to a variable
//console.log(document.querySelector('container')); //query selector is recommendede

// multiple elements
console.log(document.querySelectorAll('.item')); /*we can also assign it to a variable
 it gives us a node which is sort of array in js*/

console.log(document.getElementsByClassName('item')); //onlyforclasses //html collection: can't use array methods on it, we have to manually do that
// we also have getbytag in which we can select tags, input is also tag
console.log(document.getElementsByTagName('li'));

const items = document.querySelectorAll('.item'); //alot easier 
//ul.remove(); //the whole ul will get remove
//ul.lastElementChild.remove(); //remove the last element 
ul.firstElementChild.textContent = 'hello'; //adding content
ul.children[1].innerText = 'Brad'; //second element
ul.lastElementChild.innerHTML = '<h1>Hello</h1>'

//-------------------------------------------------------------------------------------

const btn = document.querySelector('.btn');
btn.style.background = 'red';

btn.addEventListener('click', (e) => { //first is event, second is the action/function that happens
    //we can also do it on hover by using mouseover instead of click, mouseout (output event)
    //we also have input events
    e.preventDefault(); //to stop the flashing or default action
    console.log(e);
    console.log(e.target); //it will give the element on which the function is performing
    // in this case its a button
    console,log(e.target.classname); //or we can also get the id, or type etc

    //document.querySelector('#my-form').computedStyleMap.background = '#ccc'; //is for grabbing the id
    document.querySelector('#my-form').style.background = '#ccc';//same as above
    document.querySelector('body').classList.add('bg-dark'); //we can also remove it
    document.querySelector('.item').lastElementChild.innerHTML = '<h1>Hello</h1>';
 });

 //-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

 //comenting list in index to make something applicable

 const myForm = document.querySelector('#my-form');
 const nameInput = document.querySElector('#name');
 const emailInput = document.querySelector('#email');
 //we have empty msg and email div and we are going to grab that from dom and add content to it
 const msg = document.querySelector('.msg');
 const userList = document.querySelector('#users'); 

 myForm.addEvenetListener('submit',onSubmit);

 //if the user didn't enter name or email
 function onSubmit(e){
    e.preventDefault();
    //way 1
    console.log(nameInput.value);
    //way 2
    if(nameInput.value === ''|| emailInput.value === ''){
        alert('please enter fields!');
    } else {
        console.log('success');
    }
    //way 3, instead of alert, alert is ugly
    if (nameInput === '' || emailInput === ''){
        msg.innerHTML = 'please enter fields!';
    } else {
        console.log('success');
    }
 }
//we can style the error msg with msg.classList.add('error');
//if we want to disappear the error msg after some time, we can
// setTimeout(() => msg.remove(), 3000); this function is using for setting time for the eror to disappear, or any other msg

 

