let caseACocher = document.getElementById('tirer');
let caseACocher2 = document.getElementById('tirer2');
let navigation = document.getElementById('menue');
let header = document.getElementsByClassName("header");
document
  .getElementById("recherche")
  .addEventListener("change", function(e) {
    e.preventDefault();
    document
      .getElementById("")
      .innerText = document.getElementById("recherche").value;
});
document
.getElementById("recerchee")
.addEventListener("submit", function(e) {
    
    
});


caseACocher.addEventListener("click", function() {
  // navigation.classList.toggle("l'element a ajouter sur la classe ")  le toggle permet dajouter au premier click et de suprimer au secong
  
  navigation.style.width="150px";
  navigation.style.transition='0.5s';
  document.getElementById('tirerr2').style.display="initial";
  document.getElementById('tirerr').style.display="none";
  

});
caseACocher2.addEventListener("click", function() {
 
  navigation.style.width="0px";
  navigation.style.transition='0.5s';
  document.getElementById('tirerr2').style.display="none";
  document.getElementById('tirerr').style.display="initial";
  

});

