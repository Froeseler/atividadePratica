// Your web app's Firebase configuration
const firebaseConfig = {

  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addUser(){
    let userName = document.getElementById("useName").value;
    firebase.database().ref("/").child(userName).update({
        purpose: "adicionando usuário"
    });
  }
