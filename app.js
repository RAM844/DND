
  // Import the functions you need from the SDKs you need
//   import { initializeApp } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js";
//   import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyANYIfcZ5AVp4cM3v9ziOnl_6E5fnQG_Cc",
    authDomain: "hackathondatabase-ac2b1.firebaseapp.com",
    databaseURL: "https://hackathondatabase-ac2b1-default-rtdb.firebaseio.com",
    projectId: "hackathondatabase-ac2b1",
    storageBucket: "hackathondatabase-ac2b1.appspot.com",
    messagingSenderId: "806597109632",
    appId: "1:806597109632:web:b7517042fc1930a4210365",
    measurementId: "G-KB66MNZV2F"
  };

  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);


  var ref = firebase.database().ref("DND");
  function DND() {
    ref.once("value")
  .then(function(snapshot) {
    var data = snapshot.val();
    // do something with data
    if(data == 1){
        document.getElementById("dnd").innerHTML = `The phone is in DND`;
    }else{
        document.getElementById("dnd").innerHTML = `The phone is not in DND`;
    }
  });
  }
setInterval(DND, 1000);

