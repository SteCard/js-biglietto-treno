function priceCalculator() {

    // KM
    let km = parseInt(prompt("Inserisci il numero di km da percorrere"));
    console.log(km + 'km');

    document.getElementById("km").innerHTML = km + "km";

    if (isNaN(km)) {
        document.getElementById("output").innerHTML = "Il valore inserito non è valido, assicurati di inserire solo un valore numerico.";
        return;
    }

    // ETA'
    let eta = parseInt(prompt("Inserisci l'età del passeggero"));
    console.log(eta + 'anni');

    document.getElementById("eta").innerHTML = eta + "anni";

    if (isNaN(eta)) {
        document.getElementById("output").innerHTML = "Il valore inserito non è valido, assicurati di inserire solo un valore numerico.";
        return;
    }

    // PREZZO 
    let prezzo = km * 0.21;
    console.log(prezzo + 'euro');

    // SCONTO
    if (eta < 18) {
        prezzo -= prezzo * 20 / 100;
    }


    if (eta >= 65) {
        prezzo -= prezzo * 40 / 100;
    }

    // PREZZO FINALE
    prezzo = (Math.round(prezzo * 100) / 100).toFixed(2);

    document.getElementById("output").innerHTML = prezzo + "€";
}