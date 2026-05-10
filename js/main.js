// LOADER

window.addEventListener("load", () => {

  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
  }, 3000);

});


// START JOURNEY

document
.getElementById("startJourney")
.addEventListener("click", () => {

  // Show questionnaire
  document
  .querySelector(".questionnaire")
  .classList.remove("hidden");

  // Show mini games
  document
  .querySelector(".games")
  .classList.remove("hidden");

  // Smooth scroll
  window.scrollTo({
    top: window.innerHeight,
    behavior: "smooth"
  });

});


// MUSIC TOGGLE

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicToggle");

let isPlaying = false;

musicBtn.addEventListener("click", async () => {

  try {

    if (!isPlaying) {

      await music.play();

      musicBtn.innerHTML = "⏸";

    } else {

      music.pause();

      musicBtn.innerHTML = "🎵";

    }

    isPlaying = !isPlaying;

  } catch (err) {

    console.log("Audio play failed:", err);

  }

});


// TYPEWRITER LETTER

const text =
`Replace this with your actual emotional letter.
Make it personal, soft, cinematic and real.`;

let i = 0;

function typeWriter(){

  if(i < text.length){

    document
    .getElementById("typewriterText")
    .innerHTML += text.charAt(i);

    i++;

    setTimeout(typeWriter, 40);

  }

}

setTimeout(typeWriter, 4000);


// OPTIONAL PARALLAX EFFECT

window.addEventListener("scroll", () => {

  const hero =
  document.querySelector(".hero");

  let scrollY = window.scrollY;

  hero.style.backgroundPositionY =
  scrollY * 0.5 + "px";

});

document
.getElementById("resetBtn")
.addEventListener("click", () => {

  // optional confirmation
  const confirmReset =
  confirm("Reset all memories and restart journey?");

  if(confirmReset){

    location.reload(); // full reset

  }

});
window.addEventListener("DOMContentLoaded", () => {

  const resetBtn = document.getElementById("resetBtn");

  if(resetBtn){

    resetBtn.addEventListener("click", () => {

      console.log("Reset clicked");

      const confirmReset =
      confirm("Reset all memories and restart journey?");

      if(confirmReset){

        location.reload(true); // force reload

      }

    });

  }

});