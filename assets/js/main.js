//Firebase//
// Initialize Firebase

//  var provider = new firebase.auth.GoogleAuthProvider();  
 

//   function signIn() {
//   	firebase.auth().signInWithPopup(provider).then(function(result) {
//   // This gives you a Google Access Token. You can use it to access the Google API.
//   var token = result.credential.accessToken;
//   // The signed-in user info.
//    var user = result.user;
//   // ...
// }).catch(function(error) {
//   // Handle Errors here.
//   var errorCode = error.code;
//   var errorMessage = error.message;
//   // The email of the user's account used.
//   var email = error.email;
//   // The firebase.auth.AuthCredential type that was used.
//   var credential = error.credential;
//   // ...
// });
// }

// var auth2; // The Sign-In object.
// var googleUser; // The current user.

// /**
//  * Calls startAuth after Sign in V2 finishes setting up.
//  */
// var appStart = function() {
//   gapi.load('auth2', initSigninV2);
// };

// /**
//  * Initializes Signin v2 and sets up listeners.
//  */
// var initSigninV2 = function() {
//   auth2 = gapi.auth2.init({
//       client_id: 'CLIENT_ID.apps.googleusercontent.com',
//       scope: 'profile'
//   });

//   // Listen for sign-in state changes.
//   auth2.isSignedIn.listen(signinChanged);

//   // Listen for changes to current user.
//   auth2.currentUser.listen(userChanged);

//   // Sign in the user if they are currently signed in.
//   if (auth2.isSignedIn.get() == true) {
//     auth2.signIn();
//   }

//   // Start with the current live values.
//   refreshValues();
// };

// /**
//  * Listener method for sign-out live value.
//  *
//  * @param {boolean} val the updated signed out state.
//  */
// var signinChanged = function (val) {
//   console.log('Signin state changed to ', val);
//   document.getElementById('signed-in-cell').innerText = val;
// };

// /**
//  * Listener method for when the user changes.
//  *
//  * @param {GoogleUser} user the updated user.
//  */
// var userChanged = function (user) {
//   console.log('User now: ', user);
//   googleUser = user;
//   updateGoogleUser();
//   document.getElementById('curr-user-cell').innerText =
//     JSON.stringify(user, undefined, 2);
// };

// /**
//  * Updates the properties in the Google User table using the current user.
//  */
// var updateGoogleUser = function () {
//   if (googleUser) {
//     document.getElementById('user-id').innerText = googleUser.getId();
//     document.getElementById('user-scopes').innerText =
//       googleUser.getGrantedScopes();
//     document.getElementById('auth-response').innerText =
//       JSON.stringify(googleUser.getAuthResponse(), undefined, 2);
//   } else {
//     document.getElementById('user-id').innerText = '--';
//     document.getElementById('user-scopes').innerText = '--';
//     document.getElementById('auth-response').innerText = '--';
//   }
// };

// /**
//  * Retrieves the current user and signed in states from the GoogleAuth
//  * object.
//  */
// var refreshValues = function() {
//   if (auth2){
//     console.log('Refreshing values...');

//     googleUser = auth2.currentUser.get();

//     document.getElementById('curr-user-cell').innerText =
//       JSON.stringify(googleUser, undefined, 2);
//     document.getElementById('signed-in-cell').innerText =
//       auth2.isSignedIn.get();

//     updateGoogleUser();
//   }
// }



// //Information on user//
// function onSignIn(googleUser) {
//   var profile = googleUser.getBasicProfile();
//   console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
//   console.log('Name: ' + profile.getName());
//   console.log('Image URL: ' + profile.getImageUrl());
//   console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present
//   signIn();
//   var user = result.user;
  
// }

// //Signout//
// function signOut() {
//     var auth2 = gapi.auth2.getAuthInstance();
//     auth2.signOut().then(function () {
//       console.log('User signed out.');
//     });
//   }



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
      url: "https://taco-randomizer.herokuapp.com/random/?full-taco=true",
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
 	cosone.log (firstName)
 	})

$("#drinks-info").empty();
//DRINKS//

$("#recipe-btn").click(function(){
  	$("#drinks-info").empty();
	$.ajax({
    		url: "https://www.thecocktaildb.com/api/json/v1/1/random.php",
    		method:"GET"
    	}).done(function(response) {

    		console.log(response);

    	

    	function drinkRefresh (){

    	}
    		for (var i = 0; i < response.drinks.length; i++){
    			console.log(response.drinks[i].strDrink);
    			var bigDiv = $("<div>");
    			var textDiv = $("<div>")
    			var imageDiv = $("<div>")

    			// imageDiv.attr("id", "")

    			$("#drinks-info").append(bigDiv.append(imageDiv.addClass("col m6 s12 align center")));
    			$("#drinks-info").append(bigDiv.append(textDiv.addClass("col m4 s12 align center")));


    			
    			textDiv.append( "<p><strong>Drink Name: </strong>" + response.drinks[i].strDrink + "</p>");
    			textDiv.append( "<p><strong>Ingredients: </strong>" + response.drinks[i].strIngredient1 + ", " + response.drinks[i].strIngredient2 + ", " + response.drinks[i].strIngredient3 + ", " + response.drinks[i].strIngredient4 + "</p>");
    			textDiv.append( "<p><strong>Mixing Instructions: </strong>" + response.drinks[i].strInstructions + "</p>");
    			textDiv.append('<button class="btn-floating disabled " id="submit-taco-btn"><i class="material-icons teal lighten-2">add</i></a>');



    			var image = $("<img class='materialboxed'>");

    			image.attr('src', response.drinks[i].strDrinkThumb);

    			imageDiv.append(image.attr('src', response.drinks[i].strDrinkThumb));
    		}

    	});
})

 $(document).ready(function(){
    $('.materialboxed').materialbox();
  });
     
       
   

//////////////////////////Youtube//////////////////////////

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


