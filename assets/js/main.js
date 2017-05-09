<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
<script src="http://code.jquery.com/jquery-2.1.3.min.js"></script>
  <script type="text/javascript">
$.ajax({
      
      method: curl -X GET \
 -H 'X-Access-Token: 2fb7e08a9f8fbce9' \
 'https://api.eatstreet.com/publicapi/v1/restaurant/search?method=both&street-address=316+W.+Washington+Ave.+Madison,+WI'
    }).done(function(response) {
      console.log(response);
  }
 </script>
</body>

</html>
