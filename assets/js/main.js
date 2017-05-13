//Firebase//
// Initialize Firebase

 var provider = new firebase.auth.GoogleAuthProvider();  
 

  function signIn() {
  	firebase.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a Google Access Token. You can use it to access the Google API.
  var token = result.credential.accessToken;
  // The signed-in user info.
   user = result.user;
  // ...
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});
}

function success(){
  if(result.user === "no_errors") location.href = "steptwo.html"
}



// //Information on user//
// function onSignIn(googleUser) {
//   var profile = googleUser.getBasicProfile();
//   console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
//   console.log('Name: ' + profile.getName());
//   console.log('Image URL: ' + profile.getImageUrl());
//   console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present
//   signIn();
//   var user = result.user;
//   firebase.auth().onAuthStateChanged(function(user) {
//   if (user) {
//     window.location.href = "/dashboard"
//   }
// });
// }

//Signout//
function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
  }



// $("#login-btn").on('click', function() {
// 	signIn();
// })


// $("signout-btn").on('click', function(){
// 	signOut();
// })



  //modal functions//
$(document).ready(function(){
  // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
  $('.modal').modal();
  })
$(document).ready(function(){
  // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
  $('.modal3').modal();
  })


//Random Taco Generator AJAX//
//Create outputs in "itemized list" for Name, Recipe, Condiment Name, Condiment Recipes & Base Layer//
	

$("#random-taco-div").empty();

 $("#taco-btn").click(function() {
 	$("#random-taco-div").empty();
 	event.preventDefault(); 	
	$.ajax({
      url: "http://taco-randomizer.herokuapp.com/random/?full-taco=true",
      method: "GET"
    }).done(function(response) {
    	var name = response.name
    	var recipe = response.recipe    	
      $("#random-taco-div").append("<div id='random-taco'>"+ "<h4>" + name + "</h4>" + "</div>" + '<button class="btn-floating disabled " id="submit-taco-btn"><i class="material-icons teal lighten-2">add</i></a>');
      
 		console.log(response.name);
 	
  })

      })

 	$("#submit-taco-btn").click(function() {
 	var firstName = snapshot.val(response.name);
 	console.log (firstName)
 	})
   

//////////////////////////Youtube//////////////////////////
var playlistId = "PLx_tr69QV8CByyL_jpBdCrta0cUCDAlQ3",
        APIKey = "AIzaSyDMF67YvmIVd7_ruOVcXg3ZSeTBbM2XfLk",
        baseURL = "https://www.googleapis.com/youtube/v3/";

    $.get(baseURL + "playlistItems?part=snippet&maxResults=50&playlistId=" + playlistId + "&key=" + APIKey, function(data) {
        $("#music-container").append("<div class='row'>")
    });

// //Auth Request//
// function youtubeApiCall(){
//  $.ajax({
// 	 cache: false,
// 	 data: $.extend({
// 		 key: 'AIzaSyDMF67YvmIVd7_ruOVcXg3ZSeTBbM2XfLk',
// 		 q: $('#music-search').val(),
// 		 part: 'snippet'
// 	 }, {maxResults:20,pageToken:$("#pageToken").val()}),
// 	 dataType: 'json',
// 	 type: 'GET',
// 	 timeout: 5000,
// 	 url: 'https://www.googleapis.com/youtube/v3/search'
//  })
// .done(function(data) {
// 	$('.btn-group').show();
// 	 if (typeof data.prevPageToken === "undefined") {
// 	 	$("#pageTokenPrev").hide();}else{$("#pageTokenPrev").show();
// 	 }
// 	 if (typeof data.nextPageToken === "undefined") {
// 	 	$("#pageTokenNext").hide();}else{$("#pageTokenNext").show();
// 	 }
// 	 var items = data.items, videoList = "";
// 	 $("#pageTokenNext").val(data.nextPageToken);
// 	 $("#pageTokenPrev").val(data.prevPageToken);
// 	 $.each(items, function(index,e) {
// 		 videoList = videoList + '<li class="hyv-video-list-item"><div class="hyv-content-wrapper"><a href="" class="hyv-content-link" title="'+e.snippet.title+'"><span class="title">'+e.snippet.title+'</span><span class="stat attribution">by <span>'+e.snippet.channelTitle+'</span></span></a></div><div class="hyv-thumb-wrapper"><a href="" class="hyv-thumb-link"><span class="hyv-simple-thumb-wrap"><img alt="'+e.snippet.title+'" src="'+e.snippet.thumbnails.default.url+'" width="120" height="90"></span></a></div></li>';
// 	 });
// 	 $("#hyv-watch-related").html(videoList);
// 	 // JSON Responce to display for user
// 	 new PrettyJSON.view.Node({
// 		 el:$(".hyv-watch-sidebar-body"), 
// 		 data:data
// 	 });
//  });
// }


// APIKey: AIzaSyDMF67YvmIVd7_ruOVcXg3ZSeTBbM2XfLk

// ///////////////////////////////Leafly API Call/////////////////////////////////


