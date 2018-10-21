//lets + const

cost player = 'bobby';
let experience = 100;
let wizardLevel = false;

if (experience > 90) {
	let wizardLevel = true;
	console.log('inside', wizardLevel);
}

console.log('outside', wizardLevel);

//var + conts
cost player = 'bobby';
let experience = 100;
var wizardLevel = false;

if (experience > 90) {
	var wizardLevel = true;
	console.log('inside', wizardLevel);
}

console.log('outside', wizardLevel);

//Destructuring

const obj = {
	player: 'bobby',
	experience: 100,
	wizardLevel: false
}

const player = obj.player;
const experience = obj.experience;
let wizardLevel = obj.wizardLevel;

const { player, experience } = obj;
let { wizardLevel } = obj;

//Object properties

const obj = {
	[name]: 'hello',
	[1 + 2]: 'hihi'
}

//Templete String

const name = "Sally";
const age = "34";
const pet = "horse";

//const greeting = "Hello" + name + "you seem to be doing " + greeting + "!"
const greetingBest = `Hello ${name} you seem to be ${age-10}. What a lovely ${pet} you have`;

//default argument

function greet(name='', age=30, pet='cat') {
	return `Hello ${name} you seem to be ${age-10}. What a lovely ${pet} you have`;
}

//arrow function

function add(a,b) {
	return a + b;
}

const add2 = (a,b) => a + b;