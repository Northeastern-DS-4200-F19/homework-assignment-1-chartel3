let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute ('src','images/firefox2.png');
    } else {
      myImage.setAttribute ('src','images/firefox-icon.png');
    }
}

/*
let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';


let myVariable;
myVariable = 'Ollie'
*/

let myCat = 'Ollie';
let myDog = 'Dudley';
//let isOllieCute = True;
let ollieAge = 1;
let myPets = [myCat, myDog];  // I have two other cats as well;

let whoAreMyPets = "I have a cat named " + myCat + " and a dog named " + myDog + ".";
/*
let bestPet;
if(bestPet !== 'Ollie') {
	bestPet = myCat}
	else {
	bestPet = bestPet;
	}
	
function multiple(num1, num2) {
	let result = num1 * num2;
	return result;
}

multiply(ollieAge, 100);
multiply(2, 10.2);
multiply(5, 0);
*/
let title = document.querySelector('h1');
title.onclick = function() {
	alert('Firefox stinks! Use Chrome!');
}

let body = document.querySelector('p');
body.onclick = function() {
	alert(whoAreMyPets);
}


let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setScore() {
	let ollieScore = prompt('Please enter how cute Ollie is on a scale of 10-10.');
	if(!ollieScore || ollieScore === null) {
		setScore(); }
	else {
	localStorage.setItem('score', ollieScore);
	myHeading.innerHTML = 'You gave ollie a ' + ollieScore + ' out of ' + ollieScore + '. He is Perfect!'; 
}

if(!localStorage.getItem('score')) {
	setScore();}
	else {
	let storedScore = localStorage.getItem('score');
	myHeading.textContent = 'You gave ollie a ' + ollieScore + ' out of ' + ollieScore + '. He is Perfect!'; 
}}

myButton.onclick = function() {
  setScore();
}