$('document').ready(function(){

	$('#login_form').submit(function(){



		//This will be for the ppl to see
		//$('#fade_wrapper').fadeIn("53000");


        //Login Functionality

        var username = $("input[name='username']").val();
        var password = $("input[name='password']").val();


		$.post('/_php/login.php', {username:username, password:password}, function(output){

            var json = JSON.parse(output);



            if(json.result){
                window.location = '/dashboard.php';
            }else{
                alert('an error occurred');
            }
		});



		return false;
	})

});