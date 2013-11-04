###Demo

	<!doctype html>
	<html>
	  <head>
	    <title>jquery.basicrouter demo</title>
	    <script src="http://code.jquery.com/jquery-1.10.1.min.js"></script>
	    <script src="scripts/jquery.basicrouter.js"></script>
	  </head>
	
	  <body>
	
	    <script>
	
	      <!-- page.com/#hello -->
	      BasicRouter.route(/hello/, function() {
	        alert("Hello :)");
	      });
	
	      <!-- page.com/#goodbye -->
	      BasicRouter.route(/goodbye/, function() {
	        alert("Bye, I guess :(");
	      });
	
	      BasicRouter.finish();
	
	    </script>
	  </body>
	</html>