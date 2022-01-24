const nextButton = document.querySelector(".next-button");

const levelOne = document.querySelector(".level-one");
const levelTwo = document.querySelector(".level-two");

const uiLevel = document.querySelector(".ui-level");
const uiMessage = document.querySelector(".ui-message");
const uiMessage2 = document.querySelector(".ui-message2");

const endPicture = document.querySelector(".end-picture");
const endSound = document.querySelector(".end-sound");

const collisionCheck = (value) => {
  if (value === "maze-border") {
    alert("You lost! Try again!");
  }
  if (value === "finish") {
    nextButton.style.opacity = 1;
    nextButton.style.pointerEvents = "all";
    levelOne.style.pointerEvents = "none";
  }
  if (value === "end-game") {
    endSound.play();
    endPicture.style.display = "block";
    document.body.style.background = "black";
  }
};

window.addEventListener("mousemove", (e) => {
  console.log(e.target.classList.value);
  let check = e.target.classList.value;
  collisionCheck(check);
});

nextButton.addEventListener("click", () => {
  levelOne.style.display = "none";
  levelTwo.style.display = "block";
  nextButton.style.opacity = 0;
  nextButton.style.pointerEvents = "none";
  uiLevel.textContent = "Level 2";
  uiMessage.textContent = "Nice try! One more to go!";
  uiMessage2.textContent = "Don't touch the walls!";
});
