let completedGames = 0;
let memoriesUnlocked = 0;


// ======================================
// DATE SECTION UNLOCK
// ======================================

function checkDateUnlock(){

  if(completedGames >= 1){

    document
    .querySelector(".dates")
    .classList.remove("hidden");

  }

}


// ======================================
// GHIBLI SECTION UNLOCK
// ======================================

function checkGhibliUnlock(){

  if(completedGames >= 3){

    document
    .getElementById("ghibliSection")
    .classList.remove("hidden");

    setTimeout(() => {

      alert(
        "✨ Secret Ghibli World Unlocked 🎐"
      );

    }, 300);

  }

}
// REWARD FUNCTION

function showReward(title, text, image){

  const rewardBox =
  document.getElementById("gameReward");

  document.getElementById("rewardTitle")
  .innerText = title;

  document.getElementById("rewardText")
  .innerText = text;

  document.getElementById("rewardImage")
  .src = image;

  rewardBox.classList.remove("hidden");

  rewardBox.scrollIntoView({
    behavior:"smooth"
  });

}


// ======================================
// FIND THE HIDDEN HEART
// ======================================

const realHeart =
document.querySelector(".real-heart");

realHeart.addEventListener("click", () => {

  realHeart.innerHTML = "💖";

  showReward(
    "You Found The Hidden Heart ❤️",
    "I love how curious you are. You always find the tiny beautiful things.",
    "assets/images/polaroid-6.jpg"
  );
  completedGames++;

checkDateUnlock();

checkGhibliUnlock();

});


// ======================================
// MEMORY MATCH
// ======================================

let selectedEmoji = null;
let matchedPairs = 0;

function matchCard(button, emoji){

  if(selectedEmoji === null){

    selectedEmoji = {
      emoji: emoji,
      button: button
    };

    button.style.background = "#ffd6e7";

  } else {

    if(
      selectedEmoji.emoji === emoji &&
      selectedEmoji.button !== button
    ){

      button.style.background = "#d4ffd4";
      selectedEmoji.button.style.background = "#d4ffd4";

      matchedPairs++;

      if(matchedPairs === 3){

        setTimeout(() => {

          showReward(
            "Memory Match Complete 🎉",
            "You unlocked a tiny memory because you deserve soft things.",
            "assets/images/polaroid-7.jpg"
          );
          completedGames++;
          checkDateUnlock();
          checkGhibliUnlock();

        }, 300);

      }

    } else {

      button.style.background = "#ffd4d4";

      setTimeout(() => {

        button.style.background = "white";

        selectedEmoji.button.style.background =
        "white";

      }, 500);

    }

    selectedEmoji = null;

  }

}


// ======================================
// PUZZLE UNLOCK
// ======================================

function unlockPuzzle(){

  showReward(
    "Puzzle Solved ✨",
    "You somehow make even ordinary moments feel magical.",
    "assets/images/polaroid-8.jpg"
  );
  
  completedGames++;

checkDateUnlock();

checkGhibliUnlock();

}

function checkFinalUnlock(){

  // 4 questionnaire memories + 3 games = 7 total items
  if(memoriesUnlocked >= 4 && completedGames >= 3){

    document
    .querySelector(".final-section")
    .classList.remove("hidden");

    setTimeout(() => {

      document
      .querySelector(".final-section")
      .scrollIntoView({
        behavior: "smooth"
      });

    }, 500);

  }

}