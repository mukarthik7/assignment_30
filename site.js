var email;
var password;
var name;
var login_btn = document.getElementById("loginbtn");
var signup_btn = document.getElementById("signupbtn");
var logout_btn = document.getElementById("logout");


login_btn.addEventListener("click", loginForm);
signup_btn.addEventListener("click", signUpForm);
logout_btn.addEventListener("click", logout);


function loginForm()
{
	document.getElementById("login_form").style.display = 'block';
	document.getElementById("form_setup").style.display = 'none';
}
function signUpForm()
{
	document.getElementById("form_setup").style.display = 'none';
	document.getElementById("signup_form").style.display = 'block';

}
function logout()
{
	document.getElementById("form_setup").style.display = 'block';
	document.getElementById("welcome").style.display = 'none';
}

function returnBack(element)
{
	$(element).parents(".panel").hide();
	$("#form_setup").show();
}

    
function signIn()
{

	var uEmail = document.forms["login"].email.value;
	var uPassword = document.forms["login"].password.value;

	if( uEmail == email && password == uPassword)
	{
		document.getElementById("login_form").style.display = 'none';
		document.getElementById("form_setup").style.display = 'none';
		document.getElementById("signup_form").style.display = 'none';
		document.getElementById("welcome").style.display = 'block';

		$("#welcome h1 span").text(name);
	}
	else
	{
		alert("Email/Password do not match");
	}

}
function signUp()
{

	name = document.forms["submit"].fname.value;
	if(name == "")
	{
		alert('Name field is required');
		return false;
	}
	email = document.forms["submit"].email.value;
	password = document.forms["submit"].password.value;
	alert("Successfully registered");

	document.getElementById("form_setup").style.display = 'block';
	document.getElementById("signup_form").style.display = 'none';

}