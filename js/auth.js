firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
  
      
      var user = firebase.auth().currentUser;
  
      if(user != null){
          window.location.href = "profile.html"
      }
  
    } else {
      // No user is signed in.
      
    }
  });
  
  function login(){
  
    var userEmail = document.getElementById("email_field").value;
    var userPass = document.getElementById("password_field").value;
      firebase.auth().signInWithEmailAndPassword(userEmail, userPass)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    // window.location.href = "profile.html";
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert("ERROR: "+ errorMessage);
  });
  
  }
  
  function logout(){
    firebase.auth().signOut().then(() => {
        // Sign-out successful.
        window.location.href ="index.html"
      }).catch((error) => {
        // An error happened.
      });
  }
  