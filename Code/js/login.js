function form(){
var email = document.getElementById("typeEmailX").value;
var pass = document.getElementById("typePasswordX").value;


var email = localStorage.setItem("email" , email )
var pass = localStorage.setItem("pass" , pass )


var email = localStorage.getItem("email" , email )
var pass = localStorage.getItem("pass" , pass )


alert("login successfully");


}