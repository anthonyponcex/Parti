// //Initialize the Absolut Drinks Database 
// addb.init({
//     appId: 5
// });

// addb.configuration.defaultPageSize = 10;

// addb.illHaveOnes().loadSet(function(query) { });
// addb.illHaveOnes().take(10).loadSet(function(query) { });

//Eatstreet API

        var es = document.createElement('script'); es.type = 'text/javascript'; es.async = true;
        es.src = ('https:' == document.location.protocol ? 'https://' : 'http://developers.') + 'eatstreet.com/api-js-sdk/js/sdk-remote.js';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(es, s);
  

window.onload = function(){
				ESApi.init('2fb7e08a9f8fbce9');

								var signin = {
				    'email': 'newuser@eatstreet.com',
				    'password': 'password'
				};
				ESApi.signinUser(signin, function(user) {
				    console.log(user);
				});

};


$("#login").on("click" , function(){
		$('#modal1').modal('open');
})
  

