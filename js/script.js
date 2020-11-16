// Lista Cognomi
// Chiedere all’utente il cognome,
// inserirlo in un array con altri cognomi (Es: 'Pesce', ‘Castenetto’, 'Passaro', 'Grimaldi', ‘Rossi’, ‘Verdi’, ‘Bianchi’).
// Stampa la lista ordinata alfabeticamente.
// Scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova.

var listaCognomi = ["Rossi", "Busellato", "Fogo", "Dal Pozzolo", "Boschiero", "Aiello", "Dal Santo", "Oro", "Di Barbora", "Sartori"];

var cognomeUtente = prompt("Inserisci il tuo cognome");
listaCognomi.push(cognomeUtente);

// faccio in modo che la lista dei cognomi venga ordinata alfabeticamente
listaCognomi.sort();

var listaCognomiScritta = document.getElementById("surname_list");

// scrivo nella pagina la lista dei cognomi nell'ordine dell'Array
for (var i = 0; i < listaCognomi.length; i++) {
  listaCognomiScritta.innerHTML += "<li>" + listaCognomi[i] + "</li>";
}
var posizioneUtenteNuovo = (listaCognomi.indexOf(cognomeUtente)) + 1;
console.log(posizioneUtenteNuovo);
