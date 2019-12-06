//Open Close Pop Up windw


//Start Sign In Form
function subscribe(){
    var modal = document.getElementById("modal");
    if(modal.style.display == "none"){
        modal.style.display = "block";
        bg.style.display = "block";
        body.style.fillOpacity = ".7";
    }
    else{
        modal.style.display ="block";
    }
};

function closeModal(){
    var modal = document.getElementById("modal");
    if(modal.style.display == "block"){
        modal.style.display ="none";
        bg.style.display ="none"
    }
    else{
        modal.style.display ="none";
        bg.style.display ="none";
    }
};

function signIn(){
    var login = document.getElementById('login');
    var logup = document.getElementById('signup');
    
    if(login.style.display == "none"){
        login.style.display = "block";
        logup.style.display = "none";
    }
    else{
        login.style.display = "block";
        logup.style.display = "none";
    }
};

function signUp(){
    var login = document.getElementById('login');
    var logup = document.getElementById('signup');
    
    if(logup.style.display == "none"){
        logup.style.display = "block";
        login.style.display = "none";
    }
    else{
        login.style.display = "none";
        logup.style.display = "block";
        
    }
};
//End Sign In Form

//Start Contact Form

function contact(){
    var contactmodal = document.getElementById("contactusmodal");
    if(contactmodal.style.display == "none"){
        contactmodal.style.display = "block";
    }
    else{
        contactmodal.style.display ="block";
    }
};

function contactClose(){
    var contactmodal = document.getElementById("contactusmodal");
    if(contactmodal.style.display == "block"){
        contactmodal.style.display ="none";
    }
    else{
        contactmodal.style.display ="none";
    }
};



function findform(){
    var findus = document.getElementById("map");
    var contact = document.getElementById("queries");
    if(map.style.display == "none"){
        map.style.display = "block";
        contact.style.display = "none";
    }
    else{
        map.style.display = "block";
        contact.style.display = "none";
    }
}

function contactform(){
    var findus = document.getElementById("map");
    var contact = document.getElementById("queries");
    if(contact.style.display == "none"){
        map.style.display = "none";
        contact.style.display = "block";
    }
    else{
        map.style.display = "none";
        contact.style.display = "block";
    }
};  

function validate(){
    var name = document.forms["myform"]["fname"].value;
    var lname = document.forms["myform"]["lname"].value;
    var email = document.forms["myform"]["email"].value;
    var address = document.forms["myform"]["address"].value;
    var pass = document.getElementById("pass").value;
    var confirm = document.getElementById("confirm").value;
    var term = document.getElementById("terms");
    
    if(name == "" || name == null){
        alert("Please Fill The Name Field");
        return false;
    }
    else if(lname == "" || lname == null){
        alert("Please Fill The Last Name Field");
        return false;
    }
    else if(email == "" || email == null){
        alert("Please Fill The Email Field");
        return false;
    }
    else if(address == "" || address == null){
        alert("Please Fill The Address Field");
        return false;
    }
    else if (pass != confirm || pass == null || pass == ""){
        alert("Please Ensure you wrote the password correctly");
        return false;
    }
    else if (term.checked == 0){
        alert("Please Read The Terms & Condition and check the box to proceed");
    }
    else{
        alert("Well Done " + name + " You Can Log In Now");
        return true;
    }
}
//End Contact Form

//End




//jQuerry
