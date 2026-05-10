// ======================================
// SECRET MESSAGE POPUP
// ======================================

function createSecretPopup(message){

  const popup =
  document.createElement("div");

  popup.classList.add("secret-popup");

  popup.innerText = message;

  document.body.appendChild(popup);

  setTimeout(() => {
    popup.classList.add("show");
  }, 100);

  setTimeout(() => {

    popup.classList.remove("show");

    setTimeout(() => {
      popup.remove();
    }, 500);

  }, 3500);

}


// ======================================
// SECRET KEYBOARD WORD
// PRESS "h"
// ======================================

document.addEventListener("keydown", (e) => {

  if(e.key.toLowerCase() === "t"){

    createSecretPopup(
      "❤️ Hidden Message: You make even ordinary days feel special."
    );

  }

});


// ======================================
// CLICK FLOATING STARS
// ======================================

document.querySelectorAll(".star")
.forEach((star) => {

  star.addEventListener("click", () => {

    createSecretPopup(
      "✨ Tiny secret unlocked."
    );

  });

});


// ======================================
// RANDOM TIME MESSAGE
// ======================================

setTimeout(() => {

  createSecretPopup(
    "🌙 You're still exploring? I knew you'd look through every little detail ❤️"
  );

}, 50000);


// ======================================
// KONAMI CODE SECRET
// ======================================

let secretCode = [];

const konami = [
  "ArrowDown",
  "ArrowDown",
  "ArrowDown"
];

document.addEventListener("keydown", (e) => {

  secretCode.push(e.key);

  secretCode =
  secretCode.slice(-konami.length);

  if(
    JSON.stringify(secretCode) ===
    JSON.stringify(konami)
  ){

    createSecretPopup(
      "🎐 B   O   K   A"
    );

    document.body.classList.add("night-mode");

  }

});
