//firebase



var firebaseConfig = {
    apiKey: "AIzaSyDLQ8X9WRGDWtFsL4A02zuj21p27vffP9c",
    authDomain: "travel-and-explore-17631.firebaseapp.com",
    databaseURL: "https://travel-and-explore-17631.firebaseio.com",
    projectId: "travel-and-explore-17631",
    storageBucket: "travel-and-explore-17631.appspot.com",
    messagingSenderId: "784291422197",
    appId: "1:784291422197:web:d7fde6eeac84dd1a654abc",
    measurementId: "G-DD87QK5HE8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

var messagesRef = firebase.database().ref('messages');

document.getElementById('contactForm').addEventListener('submit',submitForm);


function submitForm(e){
e.preventDefault();
var name = getInputVal('name');
var company = getInputVal('company');
var email = getInputVal('email'); 
var phone = getInputVal('phone');
var message = getInputVal('message');
var subject= getInputVal('subject');

saveMessage(name,company,email,phone,subject,message);



document.querySelector('.alert').style.display = 'block';


setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);


document.getElementById('contactForm').reset();

setTimeout(function(){
    document.location.href="./index.html";
  },3050);

}

function getInputVal(id){
    return document.getElementById(id).value;
}

function saveMessage(name,company,email,phone,subject,message){

    var newMessageRef= messagesRef.push();

    newMessageRef.set({
    name:name,
    address:company,
    email:email,
    phone:phone,
    subject:subject,
    message:message
    

    });
}