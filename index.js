firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      
      document.getElementById("user_div").style.display ="block";
      document.getElementById("login_div").style.display = "none";
      document.getElementById("signup_div").style.display = "none";

      var user = firebase.auth().currentUser;
      document.getElementById("user_para").innerHTML = user.email;

      if (user != null) {
        var email_id = user.email;
        
        

      }
    } else {
      // No user is signed in.
      document.getElementById("user_div").style.display = "none";
      document.getElementById("login_div").style.display = "block";
      document.getElementById("signup_div").style.display = "none";
    }
  });

function login () {
    var userEmail = document.getElementById("email_field").value;

    var userPass = document.getElementById("password_field").value;
  
    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
      // Handle Errors here.
      
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
}

function logout () {

  firebase.auth().signOut();
  alert ("logged out")

}

function signup () {

  var userEmail = document.getElementById("email_field1").value;

  var userPass = document.getElementById("password_field1").value;
  alert ("welcome"+ userEmail);
  firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });
 
}

function open_signup () {

  document.getElementById("signup_div").style.display ="block";
  document.getElementById("login_div").style.display = "none";        

}

function add() {
  var item = document.getElementById("myInput").value;
  document.getElementById("todo_para").innerHTML += item + "<button>Done</button><br>" ;
  //make array for variable
}