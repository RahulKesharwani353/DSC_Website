document.getElementById("submit_btn").onclick = function(){

    var fName = document.getElementById("fname").value;
    var lName = document.getElementById("lname").value;
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
   
    if(fName==""||lName==""||phn==""||course==""||branch==""||colle==""||passYr==""
    ||skill==""||bio==""||github==""||LinkedIn==""||discord==""){
      alert("Enter All The Required Details");
      location.reload();
    }
    else{
      var user =firebase.auth().currentUser;
    var UID = firebase.auth().currentUser.uid;

    var database = firebase.database();
      firebase.database().ref("members/"+UID).set({
        email: user.email,
        name: fName+" "+lName,
        phone: phn,
        altPhone: phn_2,
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