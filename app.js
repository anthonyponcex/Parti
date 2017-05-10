$(document).ready(function(){

//call the API Public Endpoints
$.ajax({
	type: "HTTP GET",
	url:"https://api.airbnb.com/v2/search_results?client_id=3092nxybyb0otqw18e8nh5nty",
	// accept: "application/json",
	dataType: "json"
	}).then(function(data){
		console.log(JSON.parse(data.search_results));
		// $('#air').append(data.);
	})
console.log();

// //
});