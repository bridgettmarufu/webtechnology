/**
This class validates the password counts and sets a temporary password
*/
//A variable that counts the number of times someone tried a password
function validate(){
var username = document.getElementById("uname").value;
var password = document.getElementById("psw").value;

if ( username == "ngoma" && password == "music123"){
 //window.moveTo("index.html");
 window.open("home.html");
 window.close("index.html")
}
else if(username==""){

document.getElementById("uname").style.borderColor="red";
}
else if(password==""){

document.getElementById("psw").style.borderColor="red";

}
else if(!/^[a-zA-Z\-]+$/.test( username )) {
    alert("Username must contain only letters, numbers and underscores!");
    }
else if(password.length<6){
	alert("The password is too short")
}
else if(username==password){
 alert("Username and password should be different")
}
else if(!/[0-9]/.test(password)){
  alert("Password must contain alert one number(0-9)")
}
else if(!/[a-z]/.test(password)){
  alert("Password must contain atleast one lowercase character(a-z)")
}
else if(!/[A-Z]/.test(password)){
  alert("Password must contain atleast one uppercase character(A-Z)")
}
else{
	alert("Wrong Password or Username")
}
}
function cancel(){
        window.open("index.html");
    }
