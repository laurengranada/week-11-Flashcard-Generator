
var inquirer = require('inquirer');
var fs = require('fs');
var cardInfo = require('basin.json')

// starts sequence	
startSequence();


// set variables for sequence call	
var current;
var cards = "";
var startScore = 0;
var index = 0;

// for loop 

//function setup for Basic Card
function BasicCard(front, back){
	this.front = front;
	this.back = back;
}

//User input for creating a Basic Card
inquirer.prompt([
		{
			type: "input",
			message: "Enter front side info: ",
			name: "front"
		},
		{
			type: "input",
			message: "Enter back side info: ",
			name: "back"
		}
	]).then (function(response){

		var QuestionOne = new BasicCard(response.front, response.back);

		console.log("Front-side: " + response.front, "\nBack-side: " + response.back);
});


//function set up for creating a Cloze Card
function ClozeCard(text, cloze){
	this.text = text;
	this.cloze = cloze;
}

//User input for Identifying the partial deleted card info
// inquirer.prompt([
// 		{
// 			type: "input",
// 			message: "What is the hidden info?"
// 			name: "hiddenInfo"
// 		}
// 	])

