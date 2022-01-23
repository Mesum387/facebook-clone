  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.4/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.4/firebase-analytics.js";

  import { getDatabase, ref, query, orderByChild } from "firebase/database";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.4/firebase-auth.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCMXCaykDGQ80EIPVVArvykj1A0oy_Ut8o",
    authDomain: "authentication-and-datab-bb758.firebaseapp.com",
    projectId: "authentication-and-datab-bb758",
    storageBucket: "authentication-and-datab-bb758.appspot.com",
    messagingSenderId: "695157024408",
    appId: "1:695157024408:web:b0842c833c6332218d52ed",
    measurementId: "G-57H2QC5X6E"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getDatabase();
  const auth = getAuth();


var Loginbtn = document.getElementById("Loginbtn") ;
Loginbtn.addEventListener("click",function(){
var obj = {}
obj.email=document.getElementById("emaill").value;
obj.password=document.getElementById("passwordd").value;



const indexRef = ref(db, "index");
const newPostRef = push(indexRef);
obj.id = newPostRef.key;
set(newPostRef, obj)
.then(function () {
  console.log("success");
})
.catch(function (err) {
  console.log(err);
});









console.log(obj);





});


