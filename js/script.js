//Poimi elementit
const inputHarjoitus = document.querySelector("#inputHarjoitus");
const inputMatka = document.querySelector("#inputMatka");
const lomake = document.querySelector("#harjoitusForm");
const postIt = document.querySelector("#postIt");


//Satunnainen väri
const pastelliVarit = [
  "#faedb8", 
  "#fcc0c0", 
  "#c4e3f8", 
  "#d3cffa", 
  "#d1fad5", 
  "#fae6c7", 
  "#cddcf8"  
];

function satunnainenVari() {
  const i = Math.floor(Math.random() * pastelliVarit.length);
  return pastelliVarit[i];
}

//Virheviesti merkkimäärän loppuessa
inputHarjoitus.addEventListener("input", merkitTaynna);
function merkitTaynna() {
    const max = this.maxLength;
    const pituus = this.value.length;
    if (pituus === max) {
        alert("Merkkiraja täynnä. Maksimi on " + max + " merkkiä.")
    }
}

//Estää sivun reloadin
lomake.addEventListener("submit", function (e) {
  e.preventDefault();

const kuvaus = inputHarjoitus.value;
const km = inputMatka.value;

//Validointi
if (kuvaus === "") {
    naytaVirhe();
    return;
    }

if (km === "") {
    naytaVirhe();
    return;
}

//Lisää virhe
function naytaVirhe() {
        inputHarjoitus.placeholder = "Kirjoita harjoitus ennen lisäämistä";
        inputHarjoitus.classList.add("virhe");
        inputMatka.placeholder = "Kirjoita kilometrit ennen lisäämistä";
        inputMatka.classList.add("virhe");        
}

//Poista virhe
    function poistaVirhe() {
        inputHarjoitus.classList.remove("virhe");
        inputMatka.classList.remove("virhe");
}

inputHarjoitus.addEventListener("input", function(e) {
    if (e.target.value.length > 0) {
        poistaVirhe();
    }
});

//Luo uusi lappu
    const uusiLappu = document.createElement("div");
    uusiLappu.classList.add("lappu");
    uusiLappu.style.backgroundColor = satunnainenVari();
    

//Lisää teksti
const teksti = document.createElement("p");
    teksti.textContent = `${kuvaus} \n${km} km`;
    uusiLappu.appendChild(teksti);

//Yliviivaa tehdyt
uusiLappu.addEventListener("click", yliviivaaTehty)
function yliviivaaTehty() {
    teksti.classList.toggle("tehty");
    laskuri();
}

//Lisää poista nappi 
    const poistaNappi = document.createElement("button");
    poistaNappi.classList.add("poistaNappi");
    poistaNappi.type = "button";
    poistaNappi.textContent = "Poista"; 
 poistaNappi.addEventListener("click", function(e) {
    e.stopPropagation();
    uusiLappu.remove();
    laskuri();
  });
  uusiLappu.appendChild(poistaNappi);

postIt.appendChild(uusiLappu);
laskuri();

//Tyhjennä kentät
    inputHarjoitus.value = "";
    inputMatka.value = "";
    poistaVirhe();   
});
 
//Laskuri
function laskuri() {
    const kaikki = document.querySelectorAll(".lappu");
    const tehdyt = document.querySelectorAll(".lappu p.tehty");
    const tekematta = kaikki.length - tehdyt.length;

    document.querySelector("#tehdyt").textContent =
    "Tehdyt: " + tehdyt.length;

    document.querySelector("#tekematta").textContent =
    "Tekemättä: " + tekematta;
}






