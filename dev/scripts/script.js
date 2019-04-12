// Insert JavaScript here...
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("back-to-top").style.display = "block";
  } else {
    document.getElementById("back-to-top").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 

function validateForm(){
  console.log("validate form")
  if(formIsValid()){
    document.getElementById("formCorrect").click();
  }else{
    document.getElementById("formIncorrect").click();
  }   
}

function formIsValid(){
    var emailID = document.getElementById("inputEmail").value;
    var fname = document.getElementById("inputFName").value;
    var lname = document.getElementById("inputLName").value;
    var msg = document.getElementById("inputMsg").value;
    atpos = emailID.indexOf("@");
    dotpos = emailID.lastIndexOf(".");

    console.log(fname.length)
    if(fname.length < 1 || lname.length < 1 || msg.length < 1){
      return false;
    }
    
    if (atpos < 1 || ( dotpos - atpos < 2 )) {
       return false;
    }
    return( true ); 
}