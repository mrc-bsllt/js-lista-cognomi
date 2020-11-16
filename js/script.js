// Lista Cognomi
// Chiedere all’utente il cognome,
// inserirlo in un array con altri cognomi (Es: 'Pesce', ‘Castenetto’, 'Passaro', 'Grimaldi', ‘Rossi’, ‘Verdi’, ‘Bianchi’).
// Stampa la lista ordinata alfabeticamente.
// Scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova.

var listaCognomi = ["Rossi", "Busellato", "Fogo", "Dal Pozzolo", "Boschiero", "Aiello", "Dal Santo", "Oro", "Di Barbora", "Sartori"];

var inputUtente = prompt("Inserisci il tuo cognome");
var cognome = inputUtente = inputUtente[0].toUpperCase() + inputUtente.slice(1);

var condizione = false;
for(var i = 0; i < listaCognomi.length; i++) {
  if (cognome == listaCognomi[i]) {
    condizione = true;
  }
}

if (condizione == true) {
  alert("Il cognome è già presente nella lista")
} else {
  // inserisco il cognome nella lista e ordino tutto in ordine alfabetico
  listaCognomi.push(cognome);
  listaCognomi.sort();
  // prendo l'elemento dove poi inserirò tutta la lista
  var surname_list = document.getElementById("surname_list");
  // scrivo nella pagina la lista dei cognomi nell'ordine dell'Array
  for (var i = 0; i < listaCognomi.length; i++) {
    surname_list.innerHTML += "<li>" + listaCognomi[i] + "</li>";
  }
  // aggiungo la posizione dell'Utente all'interno della lista
  var posizioneUtenteNuovo = (listaCognomi.indexOf(cognome)) + 1;

  var position = document.getElementById("position").innerHTML = "Sei il numero " + "<span class='red'>" + posizioneUtenteNuovo + "</span>" + " della lista.";
}
