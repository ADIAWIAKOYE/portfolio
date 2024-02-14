/* ========================= Theme Light and Dark Mode ========================= */
const dayNight = document.querySelector(".day-night")
dayNight.addEventListener("click", () => {
    dayNight.querySelector("em").classList.toggle("fa-sun")
    dayNight.querySelector("em").classList.toggle("fa-moon")
    document.body.classList.toggle("dark")
})

window.addEventListener("load", () => {
    if(document.body.classList.contains("dark")) {
        dayNight.querySelector("em").classList.add("fa-sun")
    }
    else {
        dayNight.querySelector("em").classList.add("fa-moon")
    }
})


// function validateForm() {
//     var name = document.forms["myForm"]["name"].value;
//     var email = document.forms["myForm"]["email"].value;
//     var subject = document.forms["myForm"]["subject"].value;
//     var message = document.forms["myForm"]["message"].value;
  
//     // valider les entrées utilisateur
//     if (name == "" || email == "" || subject == "" || message == "") {
//       alert("Veuillez remplir tous les champs du formulaire.");
//       return false;
//     }
  
//     // vérifier si l'email est valide
//     if (!validateEmail(email)) {
//       alert("L'adresse email saisie n'est pas valide.");
//       return false;
//     }
  
//     return true;
//   }
  
//   function validateEmail(email) {
//     var re = /\S+@\S+\.\S+/;
//     return re.test(email);
//   }