const levelButton = document.querySelector(".level-button");

const levelOne = document.querySelector(".level-one");
const levelTwo = document.querySelector(".level-two");

const mazeLevel = document.querySelector(".maze-level");
const mazeMessage = document.querySelector(".maze-message");
const mazeMessage2 = document.querySelector(".maze-message2");

const endPicture = document.querySelector(".end-picture");
const endSound = document.querySelector(".end-sound");

const collisionCheck = (value) => {
  if (value === "maze-border") {
    alert("You lost! Try again!");
  }
  if (value === "finish") {
    levelButton.style.opacity = 1;
    levelButton.style.pointerEvents = "all";
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

levelButton.addEventListener("click", () => {
  levelOne.style.display = "none";
  levelTwo.style.display = "block";
  levelButton.style.opacity = 0;
  levelButton.style.pointerEvents = "none";
  mazeLevel.textContent = "Level 2";
  mazeMessage.textContent = "Nice try! One more to go!";
  mazeMessage2.textContent = "Don't touch the walls!";
});
