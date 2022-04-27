let body =document.getElementsByClassName('body');
let header = document.getElementById('sous-header');
header.style.backgroundColor = "rgb(255, 0, 221)";
const newElt = document.createElement("div");
body.appendChild(newElt);




elt.setAttribute("type", "password");   // Change le type de l'input en un type password
elt.setAttribute("name", "my-password");    // Change le nom de l'input en my-password
elt.getAttribute("name");               // Retourne my-password









const mafall=document.getElementById("maf");
mafall.addEventListener('click',function(){
  e.preventDefault();
    mafall.innerHTML = "C'est cliqué !";
})
elementInterieur.addEventListener('click', function(event) {
    event.stopPropagation();
    elementAvecMessage.innerHTML = "Message de l'élément intérieur";
});




document
  .getElementById("name")
  .addEventListener("input", function(e) {
    document
      .getElementById("res-name")
      .innerText = e.target.value;
});




document
  .getElementById("gender")
  .addEventListener("change", function(e) {
    document
      .getElementById("res-gender")
      .innerText = e.target.value;
});

let nouveau= document.createElement("p");
let parent= document.getElementById("main");
parent.appendChild(nouveau);
nouveau. innerHTML='Mon <strong>grand</strong> contenu';
nouveau.classList.add("important");
nouveau.style.color="rgb(255, 0, 221)";

document
  .getElementById("result")
  .addEventListener("mousemove", function(e) {
    document
      .getElementById("mouse-x")
      .innerText = e.offsetX;
    document
      .getElementById("mouse-y")
      .innerText = e.offsetY;
});





let parentClicks = 0;
let childClicks = 0;

document
  .getElementById("parent")
  .addEventListener("click", function() {
  document
    .getElementById("parent-count")
    .innerText = (++parentClicks) + '';
});

document
  .getElementById("child")
  .addEventListener("click", function(e) {
  e.preventDefault();
  e.stopPropagation();
  
  document
    .getElementById("child-count")
    .innerText = (++childClicks) + '';
});






function askHello() {
  fetch("https://mockbin.com/request?greetings=salut")
  .then(function(res) {
    if (res.ok) {
      return res.json();
    }
  })
  .then(function(value) {
    document
        .getElementById("hello-result")
        .innerText = value.queryString.greetings;
  })
  .catch(function(err) {
    // Une erreur est survenue
  });
}
document
  .getElementById("ask-hello")
  .addEventListener("click", askHello);



  


function getCodeValidation() {
  return document.getElementById("code-validation");
}

function disableSubmit(disabled) {
  if (disabled) {
    document
      .getElementById("submit-btn")
      .setAttribute("disabled", true);
  } else {
    document
      .getElementById("submit-btn")
      .removeAttribute("disabled");
  }
}
document
  .getElementById("code")
  .addEventListener("input", function(e) {
  if (/^CODE-/.test(e.target.value)) {
    getCodeValidation().innerText = "Code valide";
    disableSubmit(false);
  } else {
    getCodeValidation().innerText = "Code invalide";
    disableSubmit(true);
  }
});








function send(e) {
  e.preventDefault();
  fetch("https://mockbin.com/request", {
    method: "POST",
    headers: {
      'Accept': 'application/json', 
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({value: document.getElementById("value").value})
  })
  .then(function(res) {
    if (res.ok) {
      return res.json();
    }
  })
  .then(function(value) {
      document
        .getElementById("result")
        .innerText = value.postData.text;
  });
}

document
  .getElementById("form")
  .addEventListener("submit", send);

/*


clientX  /  clientY  : position de la souris dans les coordonnées locales (contenu du DOM) ;

offsetX  /  offsetY  : position de la souris par rapport à l'élément sur lequel on écoute l'événement ;

pageX  /  pageY  : position de la souris par rapport au document entier ;

screenX  /  screenY  : position de la souris par rapport à la fenêtre du navigateur ;

movementX  /  movementY  : position de la souris par rapport à la position de la souris lors du dernier événement  mousemove

*/



                    

/* localStorage.setItem nou permet de stocker le rusultat et de pouvoir le recuperer avec localStorage.getItem  
                             EXEMPLE DITULISATION:                         */
var resultat=document.getElementById("adresse").value;

localStorage.setItem("iciReposeLeResultat" , resultat);


document.getElementById("resultas").innerHTML=localStorage.getItem("iciReposeLeResultat");







// curl --location --request GET 'https://api.promptapi.com/email_verification/hello@promptapi.com' \
// --header 'apikey: ')



// CHBD1lyhNDHO4mWwaKaKYMdWhW2tu2qn