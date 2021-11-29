// Scale and rescale navbar based on mouse scrolling
var x = window.matchMedia("(min-width: 768px)");
// Matching media query for when to rescale navbar
window.onscroll = function() {scrollFunction(x)};

function scrollFunction(x) {
    if(x.matches){
  if (document.body.scrollTop > 80 || x.matches && document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.height = "100px";
    document.getElementById("logo").style.fontSize = "25px";
  } else {
    document.getElementById("navbar").style.height = "210px";
    document.getElementById("logo").style.fontSize = "35px";
  }
}
}

// Form validation of text field for email with regex
function ValidateEmail() {
var email = document.myForm.email.value;
var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

if(email.match(regex)) {
alert("Information var korrekt / Test besked");
document.myForm.email.focus();
return true;

// If wrong info is typed mark the border of the form in red
} else {
document.myForm.email.focus();
document.getElementById("email").style.border = '2px solid red';
return false;

}

}