// //Initialize the Absolut Drinks Database 
// addb.init({
//     appId: 5
// });

// addb.configuration.defaultPageSize = 10;

// addb.illHaveOnes().loadSet(function(query) { });
// addb.illHaveOnes().take(10).loadSet(function(query) { });

// Eatstreet API

//         var es = document.createElement('script'); es.type = 'text/javascript'; es.async = true;
//         es.src = ('https:' == document.location.protocol ? 'https://' : 'http://developers.') + 'eatstreet.com/api-js-sdk/js/sdk-remote.js';
//         var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(es, s);
  

// window.onload = function(){
// 				ESApi.init('2fb7e08a9f8fbce9');

// 								var signin = {
// 				    'email': 'newuser@eatstreet.com',
// 				    'password': 'password'
// 				};
// 				ESApi.signinUser(signin, function(user) {
// 				    console.log(user);
// 				});

// }

//Random Taco Generator Call//
$.ajax({
      url: "http://taco-randomizer.herokuapp.com/random/?full-taco=true",
      method: "GET"
    }).done(function(response) {
      console.log(response.name); 
      console.log(response.recipe); 
      console.log(response.condiment.name);
      console.log(response.condidemnt.recipe)
      console.log(response.base_layer)

})

// Modals function //
$(document).ready(function(){
  // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
  $('.modal').modal();
  });
