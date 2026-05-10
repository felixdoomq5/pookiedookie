const questions = [

  {
  title: "Funny You",

  reward:
  "Unlocked the version of you that makes everything feel brighter without even realizing it. Your random jokes, chaotic energy, dramatic reactions, and the way you somehow make even boring moments unforgettable genuinely became one of my favorite parts of life. Some memories still replay in my head for no reason other than how hard you made me laugh that day. Being around your funny side feels like comfort, happiness, and complete chaos all at the same time 😂✨",

  image:
  "assets/images/polaroid-1.jpg"
},

  {
  title: "Goofy You",

  reward:
  "Unlocked the version of you that somehow turns even the most ordinary moments into chaos, laughter, and memories I randomly smile about later. Your goofy side feels like comfort in human form  the weird faces, random noises, dramatic reactions, and the way you somehow make everything feel lighter without even trying. I genuinely think some of my favorite memories exist because of this version of you 🌙✨",

  image:
  "assets/images/polaroid-2.jpg"
},

{
  title: "Angry But Cute You",

  reward:
  "Unlocked the dangerously adorable version of you that tries so hard to be intimidating but somehow just becomes even more lovable. The little attitude, the dramatic silence, the tiny annoyed expressions, the way you pretend not to care for exactly five seconds before saying something cute again  it’s unfair honestly. Even your angry moments somehow became memories I secretly treasure ⚠️❤️",

  image:
  "assets/images/polaroid-3.jpg"
},

{
  title: "Things I Adore About You",

  reward:
  "Unlocked a tiny collection of things you probably don’t even realize about yourself  the way your eyes change when you’re excited, the little habits you do unconsciously, the random things you say that stay in my head for days, the softness hidden behind your personality, and the comfort your existence brings without trying. There are honestly so many tiny things about you that quietly became some of my favorite things in the world ❤️✨",

  image:
  "assets/images/polaroid-4.jpg"
}

];

const container =
document.getElementById("questionCards");

questions.forEach((q) => {

  const card = document.createElement("div");

  card.classList.add("question-card");

  card.innerHTML = `
    <h3>${q.title}</h3>
    <button>Unlock</button>
  `;

  card.querySelector("button")
  .addEventListener("click", () => {
    if(card.classList.contains("unlocked")){
    return;
  }

    unlockMemory(q);
     card.classList.add("unlocked");

  card.querySelector("button").innerText =
  "Unlocked ✨";

  card.querySelector("button").disabled = true;

  });

  container.appendChild(card);

});

function unlockMemory(question){

  document
  .querySelector(".memories")
  .classList.remove("hidden");

  const memoryContainer =
  document.getElementById("memoryContainer");

  const memory = document.createElement("div");

  memory.classList.add("memory-card");

  memory.innerHTML = `

    <img
      src="${question.image}"
      alt="Memory"
      class="memory-image"
    >

    <h3>
      ✨ ${question.title}
    </h3>

    <p>
      ${question.reward}
    </p>

  `;

  memoryContainer.appendChild(memory);
  memoriesUnlocked++;

checkFinalUnlock();

}