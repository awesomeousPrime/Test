$('document').ready(function(){

	$('#login_form').submit(function(){
        //Login Functionality
        var username = $("input[name='username']").val();
        var password = $("input[name='password']").val();

        if (username == "" || password == "") {
            alert('Please enter a value for both fields');
            return;
        }

        //This will be for the ppl to see
        $('#fade_wrapper').fadeIn("53000");

		$.post('/login', {username:username, password:password}, function(output){

            var json = JSON.parse(output);

            if(json.result){
                window.location = '/admin/';
            }else{
                alert('an error occurred');
            }
		});

		return false;
	})
});
