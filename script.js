//Poimi elementit
const inputLaatikko = document.querySelector("#inputLaatikko");
const listanSisalto = document.querySelector("#listanSisalto");
const lisaaNappi = document.querySelector("#lisaaNappi");

//Lisää uusi <li> painamalla nappia
lisaaNappi.addEventListener("click" , lisaaHarjoitus);
function lisaaHarjoitus() {
    let li = document.createElement("li");
    li.innerHTML = inputLaatikko.value;
    listanSisalto.appendChild(li);
    inputLaatikko.value = "";   
}
 //Lisää uusi <li> painamalla enteriä
inputLaatikko.addEventListener("keydown", painaEnter); 
function painaEnter(e) {
if (e.key === "Enter") {
    lisaaHarjoitus()
}
}


//Merkitse valmiiksi tehdyt
listanSisalto.addEventListener("click", merkkaaValmiiksi);
function merkkaaValmiiksi(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("valittu");
    }
}

