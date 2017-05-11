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
// Modals function //
$(document).ready(function(){
  // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
  $('.modal').modal();
  })

//Random Taco Generator AJAX//
//Create outputs in "itemized list" for Name, Recipe, Condiment Name, Condiment Recipes & Base Layer//
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

//////////////////////////Youtube//////////////////////////

//Auth Request//
function youtubeApiCall(){
 $.ajax({
	 cache: false,
	 data: $.extend({
		 key: 'AIzaSyDMF67YvmIVd7_ruOVcXg3ZSeTBbM2XfLk',
		 q: $('#music-search').val(),
		 part: 'snippet'
	 }, {maxResults:20,pageToken:$("#pageToken").val()}),
	 dataType: 'json',
	 type: 'GET',
	 timeout: 5000,
	 url: 'https://www.googleapis.com/youtube/v3/search'
 })
.done(function(data) {
	$('.btn-group').show();
	 if (typeof data.prevPageToken === "undefined") {
	 	$("#pageTokenPrev").hide();}else{$("#pageTokenPrev").show();
	 }
	 if (typeof data.nextPageToken === "undefined") {
	 	$("#pageTokenNext").hide();}else{$("#pageTokenNext").show();
	 }
	 var items = data.items, videoList = "";
	 $("#pageTokenNext").val(data.nextPageToken);
	 $("#pageTokenPrev").val(data.prevPageToken);
	 $.each(items, function(index,e) {
		 videoList = videoList + '<li class="hyv-video-list-item"><div class="hyv-content-wrapper"><a href="" class="hyv-content-link" title="'+e.snippet.title+'"><span class="title">'+e.snippet.title+'</span><span class="stat attribution">by <span>'+e.snippet.channelTitle+'</span></span></a></div><div class="hyv-thumb-wrapper"><a href="" class="hyv-thumb-link"><span class="hyv-simple-thumb-wrap"><img alt="'+e.snippet.title+'" src="'+e.snippet.thumbnails.default.url+'" width="120" height="90"></span></a></div></li>';
	 });
	 $("#hyv-watch-related").html(videoList);
	 // JSON Responce to display for user
	 new PrettyJSON.view.Node({
		 el:$(".hyv-watch-sidebar-body"), 
		 data:data
	 });
 });
}


APIKey: AIzaSyDMF67YvmIVd7_ruOVcXg3ZSeTBbM2XfLk

///////////////////////////////Leafly API Call/////////////////////////////////



