console.log('client.js sourced');

$( document ).ready( onReady );

function onReady() {
    console.log('DOM ready');
	getJokes();
	$('#addJokeButton').on('click', addJokes);
}

function getJokes() {
	// Make the request to the server for the quotes!
	$.ajax({
	  method: 'GET',
	  url: '/jokes'
	})
	.then(function (response) { // The `response` is the result of our AJAX request in line 9.
	  console.log('getJokes Working!!!', response);
	  // #TODO - append item to the DOM
	  renderItems(response);
	})
	.catch(function (error) { // The error is a response from the server from our AJAX request in line 9.
	  // notify the user there was an error and then do something with the error.
	  console.log('Error!', error);
	});
  }

  function renderItems(jokeArray) {
	$('#outputDiv').empty();
  
	for (let joke of jokeArray) {
	  $('#outputDiv').append(`
		  <strong>Name:</strong> ${joke.whoseJoke}<span></span><br>
		  <strong>Joke:</strong> ${joke.jokeQuestion}<span></span><br>
		  <strong>Punchline:</strong> ${joke.punchLine}<span></span><br><br>
	  `);
	}
  }

  function addJokes() {
	// Make a AJAX POST request to the server
	$.ajax({
	  method: 'POST',
	  url: '/jokes',
	  data: {
		whoseJoke: $('#whoseJokeIn').val(),
		jokeQuestion: $('#questionIn').val(),
		punchLine: $('#punchlineIn').val(),
	  }
	})
	.then(function (response) {
	  console.log('Test!');
	  // refresh the quotes!
	  getJokes();
	})
	.catch(function (error) {
	  // notify the user:
	  alert('request failed');
	});
	$('#whoseJokeIn').val(''),
	$('#questionIn').val(''),
	$('#punchlineIn').val('')
  }