$(document).ready(function(){
    $("#btn1").click(function(){
       alert("Contect Us: 9876545623, 8912347865");
    });  
    $("#btn2").click(function(){
       //alert("Form is given bellow");
         $(".bg3").dialog({
             resizeable:true,
             dragable:true, 

         });
    });    
    $("#btn4").click(function(){
       $("#spn").slideToggle(3000);
    });   
  
});
function fun()
  {
   var a=document.getElementById("name").value;
   var b=document.getElementById("pswd").value;
   var c=document.getElementById("pswd1").value;
     if(a==""){
         alert("Please fill the name");
         true;
     }
     else if(b==""){
         alert("Please fill the password");
         true;}
     else if(b.localeCompare(c)!=0)
     {
       alert("Please fill the confirm password same as create password:");
     }
     else if(c.length<8){
       alert("Password must be greater then 8 character");
     }
  }
  
  const dbRef = firebase.database().ref().child('todo');
  const nameId = document.getElementById('name');
  const pswd1Id = document.getElementById('pswd1');
  const mailId = document.getElementById('mail');
  const qfId = document.getElementById('qf');
  const dobId = document.getElementById('dob');
  const password = pswd1Id.value;
  const btn3Id = document.getElementById('btn3');
  btn3Id.addEventListener('click', () => {
  
  const name =  nameId.value;
  const password = pswd1Id.value;
  const mail =  mailId.value;
  const qualificattion =  qfId.value;
  const dob =  dobId.value;
  if(name != ""){
  const db = dbRef.push();
  db.set({
  
    Name : name,
    Password : password,
    Email : mail,
    Qualification : qualificattion,
    DOB : dob   
   });
  }
});
