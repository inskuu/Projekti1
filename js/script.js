//Poimi elementit
const inputHarjoitus = document.querySelector("#inputHarjoitus");
const inputMatka = document.querySelector("#inputMatka");
const lomake = document.querySelector("#harjoitusForm")
const postIt = document.querySelector("#postIt");  

lomake.addEventListener("submit", function (e) {
  e.preventDefault();

const kuvaus = inputHarjoitus.value;
const km = inputMatka.value;

if (kuvaus === "") {
    naytaVirhe();
    return;
    }

if (km === "") {
    naytaVirhe();
    return;
}

//Lisää uusi lappu
    const uusiLappu = document.createElement("textarea");
    uusiLappu.classList.add("lappu");
    uusiLappu.value = `${kuvaus} \n\n${km} km`
    uusiLappu.style.backgroundColor = satunnainenVari();
    postIt.appendChild(uusiLappu);
    
    inputHarjoitus.value = "";
    inputMatka.value = "";
    poistaVirhe();   
})

//Satunnainen väri
const pastelliVarit = [
  "#fcedb0", // vaalea keltainen
  "#fccbdf", // vaalea pinkki
  "#c4ebf8", // hyvin vaalea turkoosi
  "#d3cffa", // laventeli
  "#d1fad5", // minttu
  "#fae4c7", // aprikoosi
  "#cddcf8"  // haalea sininen
];

function satunnainenVari() {
  const i = Math.floor(Math.random() * pastelliVarit.length);
  return pastelliVarit[i];
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
}

inputHarjoitus.addEventListener("input", function(e) {
    if (e.target.value.length > 0) {
        poistaVirhe();
    }
});

//Laske kilometrit
function laskeKilometrit() {
    laskuri = 0;
    
}









