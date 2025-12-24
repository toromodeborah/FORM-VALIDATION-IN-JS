function validate(e){
    e.preventDefault();
    const email =document.getElementById("email").value;
    const pass =document.getElementById("password").value;
    const age =document.getElementById("age").value;
    const MSGbox =document.getElementById("message");
    var message = "";

    if(email===""){
        message="Please enter an email";
        MSGbox.style.color="red";
    }
    else if(pass===""){
        message="please enter a password";
        MSGbox.style.color="red";
    }
    else if(age===""){
        message="Please enter your age";
        MSGbox.style.color="red";
}
    else{
        message="Form submitted successfully!";
        MSGbox.style.color="green";
    }
    MSGbox.innerText=message;
    
}