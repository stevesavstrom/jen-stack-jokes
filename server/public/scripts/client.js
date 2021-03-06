console.log('client.js sourced');

$( document ).ready( onReady );

function onReady() {
    console.log('DOM ready');
	getJokes();
	$('#addJokeButton').on('click', addJokes);
} // end onReady

// AJAX function for GET request from server
function getJokes() {
	$.ajax({
	  method: 'GET',
	  url: '/jokes'
	})
	.then(function (response) {
	  console.log('getJokes Working!!!', response);
	  renderItems(response);
	})
	.catch(function (error) {
	  console.log('Error!', error);
	});
  } // end getJokes

// render function to display inputs and answers on DOM
function renderItems(jokeArray) {
	$('#outputDiv').empty();
  
	for (let joke of jokeArray) {
	  $('#outputDiv').append(`
		  <strong>Name:</strong> ${joke.whoseJoke}<span></span><br>
		  <strong>Joke:</strong> ${joke.jokeQuestion}<span></span><br>
		  <strong>Punchline:</strong> ${joke.punchLine}<span></span><br><br>
	  `);
	}
  } // end renderItems

// AJAX function for GET request from server
function addJokes() {
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
	  getJokes();
	})
	.catch(function (error) {
	  alert('request failed');
	});
	$('#whoseJokeIn').val(''),
	$('#questionIn').val(''),
	$('#punchlineIn').val('')
  } // end addJokes