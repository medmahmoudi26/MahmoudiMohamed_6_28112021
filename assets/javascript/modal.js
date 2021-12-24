export function modalSetUp() {
    // calling dom elements
    const modal = document.querySelector(".modal");
    const contactButton = document.querySelector(".button--contact");
    const closeButton = document.querySelector(".modal__close");

    contactButton.addEventListener("click", () =>{ // upon clicking on the contact button display and focus on firstname input
    modal.style.display = "block";
    document.getElementById("prenom").focus();
    })
    closeButton.addEventListener("click", () => { // close contact form event
    modal.style.display = "none";
    contactButton.focus();
    })
}

// constant elements
const firstName = document.getElementById("prenom");
const lastName = document.getElementById("nom");
const email = document.getElementById("mail");
const messsage = document.getElementById("message");
const form = document.querySelector('.modal__form');

form.addEventListener('submit', (e) => { // listening to submit event
    e.preventDefault(); // stop form from submitting
    lastName.style.border = "none";
    firstName.style.border = "none";
    messsage.style.border = "none";
    email.style.border = "none";
    if(textValidation()) { // on success of the validation alert
        alert("Message envoyé.");
        console.log(`
        Prenom: ${firstName.value}
        Nom: ${lastName.value}
        Email: ${email.value}
        Message: ${messsage.value}
        `);
       document.querySelector(".modal").style.display ="none"; // reset the form inputs
       lastName.value ="";
       firstName.value ="";
       email.value ="";
       messsage.value ="";
    }

})

function textValidation() {
    let validation = 0; // default validation variable
    if(lastName.value.length < 2 || /^[a-zA-Z]+$/.test(lastName.value) == false){
       lastName.style.border = "2px solid red"; // change the border width and color if condition not verified
       validation += 1; // increase the validation variable
    }
    if(firstName.value.length < 2 || /^[a-zA-Z]+$/.test(firstName.value) == false){
        firstName.style.border = "2px solid red";
        validation += 1;
    }
    if(messsage.value.length < 2 || /^[a-zA-Z]+$/.test(messsage.value) == false){
        messsage.style.border = "2px solid red";
        validation += 1;
    }
    if(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/.test(email.value) == false){
        email.style.border = "2px solid red";
        validation += 1;
    } 
    if(validation !=0) { // if any of the conditions is not verified return false
        return false;
    }
    return true
}