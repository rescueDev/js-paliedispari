// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

//INPUT

//chiedo all'utente di inserire una parola
var askWord = prompt("Inserisci una parola");
console.log(askWord);
//creo variabile che mi inverte la parola inserita dall'utente
var reverseWord = reverseString(askWord);
console.log(reverseWord);

//variabile per output
var risultato = document.getElementById("risultato");

//funzione che mi verifica se la parola inserita è palindroma
function reverseString(str) {
  return str.split("").reverse().join("");
}

//verifico se la parola invertita è uguale alla parola iniziale e creo variabile per stampare dopo il testo
if (reverseWord.toUpperCase() === askWord.toUpperCase()) {
  console.log("La parola è palindroma");
  var palOrNot = "La parola " + askWord + " è palindroma";
} else {
  console.log("La parola non è palindroma");
  var palOrNot = "La parola " + askWord + " non è palindroma";
}

//OUTPUT

//dico all'utente se la parola inserita è o meno palindroma
risultato.innerHTML = palOrNot;
