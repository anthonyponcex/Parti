 //Initialize the Absolut Drinks Database 
 addb.init({
     appId: 5
 });

 addb.configuration.defaultPageSize = 10;

 addb.illHaveOnes().loadSet(function(query) { });
 addb.illHaveOnes().take(10).loadSet(function(query) { });

Eatstreet API

        var es = document.createElement('script'); es.type = 'text/javascript'; es.async = true;
        es.src = ('https:' == document.location.protocol ? 'https://' : 'http://developers.') + 'eatstreet.com/api-js-sdk/js/sdk-remote.js';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(es, s);
  

window.onload = function(){
				ESApi.init('2fb7e08a9f8fbce9');

				ESApi.searchRestaurants({ 'street-address': '316 W. Washington Ave. Madison, WI' }, function(response) {
				    var address = response.address;
				    var restaurants = response.restaurants;
				    console.log(address, restaurants);
				});

}

 $("#plan").on("click", function () {
        loader()
     });

     function loader() { 
         $.ajax({
           type: 'POST',
           dataType: 'json',
           url: '/echo/json/',
           data : { json: JSON.stringify( jsonData ) },
           success: function(data) {
               console.log(data.counters);
               var table = $('#example').DataTable();
               table.clear().draw();
               table.rows.add(data.counters).draw();

           }  
         }); 
     } 
    
    Table = $('#example').dataTable({
         "data": [],
             "columns": [{
             "title": "id",'data': 'id'
         }, {
             "title": "name",'data': 'name'
         } , {
             "title": "age",'data': 'age'
         } 

         ]
     });
     
 };



 var jsonData = {
 "success": true,
 "counters": [
     {
         "id": "1",
         "name": "Akhil",
         "age": "22"
     },
     {
         "id": "2",
         "name": "Dave",
         "age": "33"
     },
     {
         "id": "3",
         "name": "Chitrank",
         "age": "24"   
     } 

     ]
 }

