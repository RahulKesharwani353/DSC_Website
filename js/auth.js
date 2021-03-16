
  function login(){
    
  }
  
  function logout(){
    firebase.auth().signOut().then(() => {
        // Sign-out successful.
        window.location.href ="index.html"
      }).catch((error) => {
        // An error happened.
      });
  }
  document.getElementById("signIn").onclick = function () {
    var userEmail = document.getElementById("signInEmail").value;
    var userPass = document.getElementById("signInPassword").value;
    firebase
      .auth()
      .signInWithEmailAndPassword(userEmail, userPass)
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert("ERROR: " + errorMessage);
      })
  };
  