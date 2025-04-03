function zaladujoceny(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    var ocena = urlParams.get('ocena')
    document.getElementById("ocenat").innerHTML = ocena

    var kategoria = urlParams.get('kategoria')
    document.getElementById("kategoriat").innerHTML = kategoria

    var data = urlParams.get('data')
    document.getElementById("datat").innerHTML = data
    
    var nauczyciel = urlParams.get('nauczyciel')
    document.getElementById("nauczycielt").innerHTML = nauczyciel
    
    var przedmiot = urlParams.get('przedmiot')
    document.getElementById("przedmiott").innerHTML = przedmiot
    
    var waga = urlParams.get('waga')
    document.getElementById("wagat").innerHTML = waga
    
    var dodal = urlParams.get('dodal')
    document.getElementById("dodalt").innerHTML = dodal
    
    var komentarz = urlParams.get('komentarz')
    document.getElementById("komentarzt").innerHTML = komentarz

    document.getElementById("ocena").classList.remove("ukryte")
}

window.addEventListener('load', function() {
    zaladujoceny()
})