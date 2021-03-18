document.getElementById("submit_btn").onclick = function(){

    var fName = document.getElementById("fname").value;
    var lName = document.getElementById("lname").value;
    var gender = document.getElementById("gender").value;
    var phn = document.getElementById("phno").value;
    var phn_2 = document.getElementById("phno_2").value;
    var course = document.getElementById("course").value;
    var branch = document.getElementById("branch").value;
    var colle = document.getElementById("college").value;
    var passYr = document.getElementById("passYear").value;
    var skill = document.getElementById("skill").value;
    var bio = document.getElementById("bio").value;
    var github = document.getElementById("github").value;
    var LinkedIn = document.getElementById("LinkedIn").value;
    var discord = document.getElementById("discord").value;
    var Twitter = document.getElementById("Twitter").value;
    var country = document.getElementById("country").value;
   
    if(fName==""||lName==""||phn==""||course==""||branch==""||colle==""||passYr==""
    ||skill==""||bio==""||github==""||LinkedIn==""||discord==""||gender==""||country==""){
      alert("Enter All The Required Details");
      location.reload();
    }
    else{
      var user =firebase.auth().currentUser;
    var UID = firebase.auth().currentUser.uid;

    var database = firebase.database();
      firebase.database().ref("members/"+UID).set({
        email: user.email,
        gender: gender,
        name: fName+" "+lName,
        phone: phn,
        altPhone: phn_2,
        country: country,
        course: course,
        branch: branch,
        college: colle,
        passYear: passYr,
        UID: UID,
        skill: skill,
        bio: bio,
        github: github,
        linkedIn: LinkedIn,
        discord: discord,
        twitter: Twitter

      }).then(() => {
        alert("Welcome");
        window.location.href ="profile.html";
    });
    }
     
   }


   function push() {
    var UID = firebase.auth().currentUser.uid;
    var database = firebase.database().ref();
    
database.child("members").child(UID).get().then(function(snapshot) {
    if (snapshot.exists()) {
      document.getElementById("headFullName").innerHTML = snapshot.val().name;
      document.getElementById("headSkill").innerHTML = snapshot.val().skill;
      document.getElementById("headBio").innerHTML = snapshot.val().bio;
      document.getElementById("linkedIn").innerHTML = snapshot.val().linkedIn;
      document.getElementById("github").innerHTML = snapshot.val().github;
      document.getElementById("twitter").innerHTML = snapshot.val().twitter;
      document.getElementById("discord").innerHTML = snapshot.val().discord;
      document.getElementById("dispName").innerHTML = snapshot.val().name;
      document.getElementById("dispEmail").innerHTML = snapshot.val().email;
      document.getElementById("dispPhn").innerHTML = snapshot.val().phone;
      document.getElementById("dispAltPhn").innerHTML = snapshot.val().altPhone;
      document.getElementById("dispCollege").innerHTML = snapshot.val().college;
      document.getElementById("dispCourse").innerHTML = snapshot.val().course;
      document.getElementById("dispBanch").innerHTML = snapshot.val().branch;
      document.getElementById("dispPassYear").innerHTML = snapshot.val().passYear;
      document.getElementById("dispGender").innerHTML = snapshot.val().gender;
      document.getElementById("dispCountry").innerHTML = snapshot.val().country;
    }
    else {
      alert("Please File The Profile Form First");
      window.location.href = "newdetail.html";

    }
  }).catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert("ERROR: " + errorMessage);
        location.reload();
      });
  }
