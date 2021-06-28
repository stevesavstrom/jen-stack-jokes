// creating express app...

// require express
const express = require('express');

// create an instance of express by calling a function
const app = express();
const port = 5000;

// express static file serving - public is folder name:
app.use(express.static('server/public'));

// app.use(bodyparser.urlencoded({extended: true})); // older
app.use(express.urlencoded({ extended: true }));

// JSON function
app.use(express.json());

// start up  server
app.listen(port, () => {
	console.log('listening on port', port);
  });

// global variable for existing jokes
// new jokes will be pushed to this array with user interface
let jokes = [
	{
		whoseJoke: "Edan",
		jokeQuestion: "How do you cheer up a JavaScript developer?",
		punchLine: "You console them!"
	},
	{
		whoseJoke: "dEv",
		jokeQuestion: "Why was the Prime student sad?",
		punchLine: "Because they didn't Node how to Express themself."
	},
	{
		whoseJoke: "Steve",
		jokeQuestion: "What is a programmer's favorite place to hangout after work?",
		punchLine: "Foo Bar"
	},
	{
		whoseJoke: "Chad",
		jokeQuestion: "Why did the developer quit her job?",
		punchLine: "Because she didn't get arrays."
		}

];

// GET route/request
app.get(`/jokes`, function(req,res) {
	console.log('Request for /jokes was made!');
	res.send(jokes);
   });

// POST route/request
app.post(`/jokes`, function(req,res) {
	console.log('Get a POST request!', req.body);

	let newJoke = req.body;
  
	// Push the new item into our array.
	console.log('Adding a new joke:', newJoke);
	jokes.push(newJoke);
  
	// send a response with a 201,
	res.sendStatus(201);
   });
  


