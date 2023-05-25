function test(){

var First_Name = document.getElementById("firstName").value;
var Last_Name = document.getElementById("lastName").value;
var birthdaydate = document.getElementById("birthdayDate").value;
var email = document.getElementById("emailAddress").value;
var phone_number = document.getElementById("phoneNumber").value;
var pass= document.getElementById("password").value;
var con_pass = document.getElementById("confirm_password").value;
// var choose_option = document.getElementsByClassName("form-label select-labe").value;
// var femaleGender = document.getElementsByClassName("femaleGender").value;
// var malegender = document.getElementsByClassName("maleGender").value;




var First_Name = localStorage.setItem("First_Name" , First_Name )
var Last_Name = localStorage.setItem("Last_Name" , Last_Name )
var birthdaydate = localStorage.setItem("birthdaydate" , birthdaydate )
var email = localStorage.setItem("email" , email )
var phone_number = localStorage.setItem("phone_number" , phone_number )
var pass = localStorage.setItem("pass" , pass )
var con_pass = localStorage.setItem("con_pass" , con_pass )
// var femaleGender = localStorage.setItem("femaleGender" , femaleGender )
// var malegender = localStorage.setItem("malegender" , malegender )
// var choose_option = localStorage.setItem("choose_option" , choose_option )



var First_Name = localStorage.getItem("First_Name" , First_Name )
var Last_Name = localStorage.getItem("Last_Name" , Last_Name )
var birthdaydate = localStorage.getItem("birthdaydate" , birthdaydate )
var email = localStorage.getItem("email" , email )
var phone_number = localStorage.getItem("phone_number" , phone_number )
var pass = localStorage.getItem("pass" , pass )
var con_pass = localStorage.getItem("con_pass" , con_pass )
// var femaleGender = localStorage.getItem("femaleGender" , femaleGender )
// var malegender = localStorage.getItem("malegender" , malegender )
// var choose_option = localStorage.getItem("choose_option" , choose_option )

alert("saved successfully");




}