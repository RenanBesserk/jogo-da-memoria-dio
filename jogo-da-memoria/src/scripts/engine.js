const chars = [
    "./src/images/gaara.jpg",
    "./src/images/gaara.jpg",
    "./src/images/hinata.jpg",
    "./src/images/hinata.jpg",
    "./src/images/kakashi.jpg",
    "./src/images/kakashi.jpg",
    "./src/images/kiba.jpg",
    "./src/images/kiba.jpg",
    "./src/images/lee.jpg",
    "./src/images/lee.jpg",
    "./src/images/naruto.jpg",
    "./src/images/naruto.jpg",
    "./src/images/sakura.jpg",
    "./src/images/sakura.jpg",
    "./src/images/sasuke.jpg",
    "./src/images/sasuke.jpg"
];

let openCards = []; // cartas viradas

let shuffleChars = chars.sort(() => (Math.random() > 0.5 ? 2 : -1));

for (let i=0; i < chars.length; i++) {
    let box = document.createElement ("div");
    box.className = "item";
    box.innerHTML = `<img src="${shuffleChars[i]}" class="carta-img" />`;
    box.onclick = handleClick;
    document.querySelector(".game").appendChild(box);
}

function handleClick () {
    if (openCards.length < 2) {
        this.classList.add("boxOpen");
        openCards.push(this);
    }

    if (openCards.length == 2) {
        setTimeout(checkMatch, 500);
    }
}

function checkMatch () {
    if (openCards[0].innerHTML === openCards[1].innerHTML) {
        openCards[0].classList.add ("boxMatch");
        openCards[1].classList.add ("boxMatch");
    }

    else {
        openCards[0].classList.remove ("boxOpen");
        openCards[1].classList.remove ("boxOpen")
    }

    openCards = [];

    if(document.querySelectorAll (".boxMatch").length === chars.length) {
        {alert("Você venceu!")}
    }
}