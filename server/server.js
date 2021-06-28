// creating express app...

// required express - give us function
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

  let jokes = [
	{
	  whoseJoke: "Danny",
	  jokeQuestion: "Why do scuba divers fall backwards out of boats?",
	  punchLine: "If they fell forwards they’d still be in the boat!"
	},
	{
	  whoseJoke: "Luke",
	  jokeQuestion: "Two fish are in a tank. What did one fish say to the other?",
	  punchLine: "Do you know how to drive this thing?"
	},
	{
	  whoseJoke: "Millie",
	  jokeQuestion: "What do you call a pile of cats?",
	  punchLine: "A meowntain!"
	},
	{
	  whoseJoke: "dEv",
	  jokeQuestion: "Why should you not play cards in the forest?",
	  punchLine: "Too many Cheetahs!"
	},
	{
	  whoseJoke: "Scott",
	  jokeQuestion: "I went to the zoo the other day, it had one dog...",
	  punchLine: "It was a shih tzu."
	}
  ];

  app.get(`/jokes`, function(req,res) {
	console.log('Request for /jokes was made!');
	res.send(jokes);
   });

   app.post(`/jokes`, function(req,res) {
	console.log('Get a POST request!', req.body);

	let newJoke = req.body;
  
	// Push the new item into our array.
	console.log('Adding a new joke:', newJoke);
	jokes.push(newJoke);
  
	//ALWAYS have to send a response!
	// send a response with a 201,
	res.sendStatus(201);
   });
  


