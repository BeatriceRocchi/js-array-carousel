const btnArrowUp = document.querySelector(".arrow-up");
const btnArrowDown = document.querySelector(".arrow-down");

const imagesList = [
  "./assets/img/01.webp",
  "./assets/img/02.webp",
  "./assets/img/03.webp",
  "./assets/img/04.webp",
  "./assets/img/05.webp",
];

let counterImg = 0;

//Inserimento dinamico delle immagini
for (i = 0; i < imagesList.length; i++) {
  let image = imagesList[i];
  document.querySelector(".img-wrapper").innerHTML += `
  <img class="img hide" src="${image}" />
  `;
}

//Inserimento di tutti gli elementi creati in una collection e rimozione classe hide al primo elemento
const imageCollection = document.querySelectorAll(".img");
imageCollection[counterImg].classList.remove("hide");

//Inserimento logica cambio immagini al click
btnArrowDown.addEventListener("click", function () {
  imageCollection[counterImg].classList.add("hide");
  counterImg++;
  imageCollection[counterImg].classList.remove("hide");
});

btnArrowUp.addEventListener("click", function () {
  imageCollection[counterImg].classList.add("hide");
  counterImg--;
  imageCollection[counterImg].classList.remove("hide");
});
