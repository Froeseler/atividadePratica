// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAiU8a7mK2CEYR7fyFEpqbAIk0wAB7DfsE",
    authDomain: "leao-do-dia-bd.firebaseapp.com",
    databaseURL: "https://leao-do-dia-bd-default-rtdb.firebaseio.com",
    projectId: "leao-do-dia-bd",
    storageBucket: "leao-do-dia-bd.appspot.com",
    messagingSenderId: "739566150042",
    appId: "1:739566150042:web:353e21b16440fd083f9a23"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addUser(){
    let userName = document.getElementById("useName").value;
    firebase.database().ref("/").child(userName).update({
        purpose: "adicionando usuário"
    });
  }