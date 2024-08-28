/*select element
  addEventListener()
  what event, what to do
  click - fires after full action occurs
*/

//const btn = document.querySelector(".btn");
//const heading = document.querySelector("h2");

// function changeColors(){
//     let hasClass = heading.classList.contains('red');
//     // check if class is red
//     if (hasClass){
//         heading.classList.remove('red');
//     } else {
//         heading.classList.add('red');
//     }
// }

// btn.addEventListener('click', function(){
//     //console.log("click me");
//     heading.classList.add('blue');
// });

//btn.addEventListener('click', changeColors);

/*
    mousedown - button is pressed
    mouseup - button is released
    mouseenter - moved onto an element
    mouseleave - moved out of an element
*/

// btn.addEventListener('click', function(){
//     console.log("click me");
    
// });

// btn.addEventListener('mousedown', function(){
//     console.log("pressed");
    
// });

// btn.addEventListener('mouseup', function(){
//     console.log("relased");
    
// });

// heading.addEventListener('mouseenter', function(){
//     heading.classList.add('blue');
// });

// heading.addEventListener('mouseleave', function(){
//     heading.classList.remove('blue');
// });

/*
    keypress - when key is pressed
    keydonw - when key is down
    keyup - when key is released
*/

//const nameInput = document.getElementById('name');

// nameInput.addEventListener('keypress', function(){
//     console.log('you pressed a key');
// });

// nameInput.addEventListener('keydown', function(){
//     console.log('you pressed down a key');
// });


// nameInput.addEventListener('keyup', function(){
//     //console.dir(nameInput);
//     console.log(nameInput.value);
// });

/*
    event object argument e,evt
    info about triggered event
    event.type
    event.currentTarget
    this keyword
    preventDefault() - prevents default behaviour
*/   

// const heading = document.querySelector('h1');
// const btn = document.querySelector('.btn');
// const link = document.getElementById('link');

// heading.addEventListener('click', function(event){
//     console.log(event.currentTarget);
// });

// btn.addEventListener('click', function(event){
//     console.log(event.currentTarget);
//     event.currentTarget.classList.add('blue');
//     console.log(event.type);
//     console.log(this);
// });

// function someFunc(e){
//     e.preventDefault();
// }

// link.addEventListener('click', someFunc);

/**
 * currentTarget - always refers to the element to which the event handler has been attached to
 * target - identifies the element to which the event occured
 * 
 */

// const btns = document.querySelectorAll('.btn');

// btns.forEach(function(btn){
//     btn.addEventListener('click', function(e){
//         console.log(e.currentTarget);
//         e.currentTarget.style.color= 'green';
//         e.target.style.color='yellow';
//     });
// });

/**
 * allows select dynamic elements
 * event propagation - order the events are fired
 * event bubbling - clicked element first then bubbled up
 * event capturing - fired at the root and fires until reaches target
 */

// const container = document.querySelector('.container');
// const list = document.querySelector('.list-items');

// function showBubbling(e){
//     console.log('current target', e.currentTarget);
//     console.log('target', e.target);
//     if (e.target.classList.contains('link')){
//         console.log('you clicked a link');
//     }
// }

// function stopPropagation(e){
//     e.stopPropagation;
// }

// //list.addEventListener('click', showBubbling);
// list.addEventListener('click', stopPropagation);
// container.addEventListener('click', showBubbling, {capture:true});
// document.addEventListener('click', showBubbling, {capture:true});

/**
 * submit event listener
 * prevent default
 * how to get a value
 */

// const form = document.getElementById('form');
// const name = document.getElementById('name');
// const password = document.getElementById('password');

// form.addEventListener('submit', function(e){
//     e.preventDefault();
//     console.log('form submitted');
//     console.log(name.value);
//     console.log(password.value);
//});

/**
 * Web Storage API - provided by browser
 * session storage, local storage
 * setItem, getItem, removeItem, clear
 * 
 * localStorage.setItem('name', 'john');
 * sessionStorage.setItem('name', 'john');
 */


/**
 * JSON.stringfy(), JSON.parse()
 */

// const friends = ['john', 'peter', 'bob'];
// //localStorage.setItem('friends', friends);
// localStorage.setItem('friends', JSON.stringify(friends));
// values = JSON.parse(localStorage.getItem('friends'));
// console.log(values[0],'-',values[1],'-',values[2]);

// let fruits;

// if (localStorage.getItem('fruits')){
//     fruits = JSON.parse(localStorage.getItem('fruits'));
// } else {
//     fruits = [];
// }

// console.log(fruits);
// fruits.push('apple');
// localStorage.setItem('fruits',JSON.stringify(fruits));

/***
 * SetTimeout - run function once after specific time
 * 
 * - pass function reference
 * - duration in ms (1000ms = 1 sec)
 * - default 0, will cover more extensively in async/await
 * - returns unique identifier
 * - clearTimeout to cancel
 * - on windows object
 */


// function sayHello(){
//     console.log('Hello');
// }

// setTimeout(sayHello, 3000);
// console.log("ciao");

// Will not work
//setTimeout(sayHello(), 3000);

// setTimeout(function(){
//     console.log("Hello Again");
// },3000);

// function showScore(name, score){
//     console.log(`Hello ${name} your score is ${score}`);    
// }

// const firstId = setTimeout(showScore, 1000, 'John', 3300);
// const secondId = setTimeout(showScore, 1000, 'Marc', 6600);

// clearTimeout(firstId);

/**
 * SetInterval - runs function repeatedly, at specific
 * - pass function reference
 * - duration in ms (1000ms = 1 sec)
 * - default 0, will cover more extensively in async/await section
 * - returns unique identifier
 * - clearInterval to cancel
 */

// function sayHello(){
//     console.log('Hello');
// }

// const id = setInterval(sayHello,2000);
// console.log(id);
// clearInterval(id);

/**
 * The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for 
 * stylesheets, images, and subframes to finishe loading.
 */

// window.addEventListener('DOMContentLoaded', function(){
//     console.log('I will run first');
//     const img = document.querySelector('img');
//     console.log(img);
//     console.log(img.width);
// })

/**
 * The load event is fired when the whole page has loaded, including all dependent resources
 * such as stylesheets and images. This is in contrast to DOMContentLoaded, which is fired as soon as the 
 * page DOM has been loaded, without waiting for resources to finish loading
 */


// window.addEventListener('load', function(){
//     console.log('I will run second');
//     const img = document.querySelector('img');
//     console.log(img);
//     console.log(img.width);
// })

/**
 * Scroll event - on element or document
 * ScrollY - returns the number of pixels the document is currently scrolled along the vertical axis (pageYOffset)
 * ScrollX - returns the number of pixels the document is currently scrolled along the horizontal axis
 * The Element.getBoundingClientRect() method returns a DOMRect object providing information about the size of an element
 * and its relative position to the viewport.
 */

// window.addEventListener('scroll', function(){
//     console.log(window.scrollY + 'px');
//     console.log(window.scrollX + 'px');
// })

/**
 * The resize event fires when the document view (window) has been resized
 */

window.addEventListener('resize', function (){
    console.log('Lunghezza finestra: ', window.innerWidth, 'Altezza finestra: ', window.innerHeight);
})