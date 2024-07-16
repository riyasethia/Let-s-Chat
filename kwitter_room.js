
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyBsfo8dT_Lzkh4LfzfLJ0aG_Xbdu7WFOtQ",
      authDomain: "kwitter-eda8d.firebaseapp.com",
      databaseURL: "https://kwitter-eda8d-default-rtdb.firebaseio.com",
      projectId: "kwitter-eda8d",
      storageBucket: "kwitter-eda8d.appspot.com",
      messagingSenderId: "92946827375",
      appId: "1:92946827375:web:33c6b08d0f41863bb8a59a"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name;
function Add_Room() {
      room_name=document.getElementById("Roomname").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"addingroomname"
      
      });
      localStorage.setItem("room_name", room_name);
      window.location="kwitter_page.html"
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log(Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirecttoroomname(this.id)'> #"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row
      //End code
      });});}
getData();
function redirecttoroomname(room){
      localStorage.setItem("room_name", room);
      window.location="kwitter_page.html";
}
