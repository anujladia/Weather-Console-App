const request = require('request');
const yargs = require('yargs').argv;	//module that helps take input on the console

const apiKey = "b53eec7dc4712979e6d40acb11f09a81";
const city = yargs.c || "Delhi";
const url = "http://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid="+apiKey;

console.log("URL : ", url);

request(url, function(err, res, body) {
	if(err){
		console.log(err);
	} else {
		//console.log("Body: ",body);
		let weather = JSON.parse(body);
		let message = "It's "+weather.main.temp+" degrees in "+weather.name;
		console.log('Good Morning :', message);
	}
});