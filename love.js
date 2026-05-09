/* Love Letter */

function openLetter(){

    document
    .getElementById("popup")
    .style.display = "flex";
}

function closeLetter(){

    document
    .getElementById("popup")
    .style.display = "none";
}

/* Gallery */

const galleryBtn =
document.getElementById("galleryBtn");

const galleryPopup =
document.getElementById("galleryPopup");

const galleryClose =
document.getElementById("galleryClose");

/* Open Gallery */

galleryBtn.addEventListener("click", () => {

    galleryPopup.style.display = "flex";

});

/* Close Gallery */

galleryClose.addEventListener("click", () => {

    galleryPopup.style.display = "none";

});

/* Close Outside */

window.addEventListener("click", (e) => {

    if(e.target === galleryPopup){

        galleryPopup.style.display = "none";
    }

});
const music = document.getElementById("bg-music");
const btn = document.getElementById("music-btn");

btn.addEventListener("click", () => {
    music.play();
});