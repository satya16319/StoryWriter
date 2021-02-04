import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyBp0zsio5uXOABGewM_a98ZcaMkLa4VKCI",
    authDomain: "asteroidapp-a84a2.firebaseapp.com",
    databaseURL: "https://asteroidapp-a84a2.firebaseio.com",
    projectId: "asteroidapp-a84a2",
    storageBucket: "asteroidapp-a84a2.appspot.com",
    messagingSenderId: "883000131563",
    appId: "1:883000131563:web:9f98992e805a21ad55e3ae",
    measurementId: "G-QWP5QP4GQ9"
  };
  // Initialize Firebase
  const fire=firebase.initializeApp(firebaseConfig);
  //  const preobj=document.getElementById('Object');
  //  const dbrefObject=firebase.database().ref().child('object');
  //  dbrefObject.on('value',snap=>{
  //    console.log(snap.val());
  //  });

  //  dbrefObject.on('child_added',snap=>{
  //    const li=document.createElement('li');
  //    li.innerText=snap.val();
  //    console.log(li);
     
   
  //  })
  export default fire;