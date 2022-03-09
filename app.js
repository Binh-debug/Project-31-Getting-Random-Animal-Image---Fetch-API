const imgDog = document.querySelector("#dog");
const imgCat = document.querySelector("#cat");
const imgFox = document.querySelector("#fox");

const btnDog = document.querySelector(".btn-dog");
const btnCat = document.querySelector(".btn-cat");
const btnFox = document.querySelector(".btn-fox");

btnDog.addEventListener("click", getImgDog);
btnCat.addEventListener("click", getImgCat);
btnFox.addEventListener("click", getImgFox);

function getImgDog() {
  fetch("https://random.dog/woof.json")
    .then((response) => response.json())
    .then((responseData) => {
      imgDog.innerHTML = `<img src = ${responseData.url}>   `;
    });
}

function getImgCat() {
  fetch("https://aws.random.cat/meow")
    .then((response) => response.json())
    .then((responseData) => {
      imgCat.innerHTML = `<img src =${responseData.file}>`;
    });
}

function getImgFox() {
  fetch("https://randomfox.ca/floof/")
    .then((response) => response.json())
    .then((responseData) => {
      imgFox.innerHTML = `<img src = ${responseData.image}>`;
    });
}
