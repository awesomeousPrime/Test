@extends('snippets/header')

@section('content')
        <div id="form_wrapper">
            <form id="login_form">
            <p><input type="text" name="username" placeholder="Username"></p>
            <p><input type="password" name="password" placeholder="Password"></p>
            <input type="Submit" value="Sign In">
        </form>
        </div>
        <!--Fade in Div-->
        <div id="fade_wrapper">
            <img src="{{asset('/img/loading2.gif')}}">
        </div>
@stop

