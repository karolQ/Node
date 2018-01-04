var http = require('http')

function fetchPage(){
	console.log('fetching page');
	http.get({host:'trafficjamapp.com', path:'/?delay = 2000'}, function(res){
		console.log('data returned from requesting page');
	}).on('error', function(e){
		console.log('There was an error: '+ e);
	});
}

function fetchAPI(){
	console.log('fetching API');
	http.get({host:'trafficjamapp.herokuapp.com', path:'/?delay = 2000'}, function(res){
		console.log('data returned from API');

	}).on('error', function(e){
		console.log('There was an error: '+e);
	});
}

fetchPage();
fetchAPI();