const photos = [
  "bird.png",
  "cow.png",
  "elephant.png",
  "lion.png",
  "kangaroo.png",
  "bird.png",
  "cow.png",
  "elephant.png",
  "lion.png",
  "kangaroo.png",
];
const page = document.getElementById("page");
const game = document.getElementById("game");
const startDiv = document.getElementById("start");
const scoreDiv = document.createElement("div");
const status = document.createElement("div");
const statusDiv = document.createElement("div");
page.appendChild(statusDiv);
statusDiv.appendChild(status);
statusDiv.appendChild(scoreDiv);
let score = 0;
const shuffle = function (array) {
  const myArray = array.sort(() => Math.random() - 0.5);
  console.log(photos);
  return myArray;
};
const createPhotos = function (photos) {
  photos.forEach((photo, index) => {
    const image = document.createElement("img");
    const button = document.createElement("button");
    image.src = photo;
    image.id = `image ${index}`;
    button.id = `button ${index}`;
    game.appendChild(button);
    button.appendChild(image);
    image.src = "q.png";
  });
};
const show = function () {
  const myTimeout = setTimeout(hide, 1000);
  photos.forEach((photo, i) => {
    const image = document.getElementById(`image ${i}`);
    image.src = photo;
  });
};
const hide = function () {
  photos.forEach((photo, i) => {
    const image = document.getElementById(`image ${i}`);
    image.src = "q.png";
  });
};
const HandleClicks = function () {
  let button = document.getElementById("00");
  let right = 0;
  let images = [];
  const trial = [];
  const ids0 = [];
  let clicks = 0;
  let failure = 0;
  for (let i = 0; i < photos.length; i++) {
    button = document.getElementById(`button ${i}`);
    images.push(document.getElementById(`image ${i}`));
    button.onclick = function () {
      clicks++;
      trial.push(photos[i]);
      ids0.push(i);
      images[i].src = photos[i];
      if (
        clicks % 2 === 0 &&
        trial[trial.length - 1] === trial[trial.length - 2]
      ) {
        right++;
        failure = 0;
      } else if (clicks % 2 === 0 && clicks !== 0) {
        setTimeout(() => {
          images[ids0[ids0.length - 1]].src = "q.png";
          images[ids0[ids0.length - 2]].src = "q.png";
        }, 100);
        failure++;
      }
      if (right === photos.length / 2) {
        score += 100;
        displayScore("YOU WON");
        play();
      }
      if (failure === 3) {
        score -= 100;
        displayScore("YOU LOST");
        play();
      }
    };
  }
};
const play = function () {
  game.innerHTML = "";
  shuffle(photos);
  console.log(photos);
  createPhotos(photos);
  startDiv.innerHTML = "";
  const startButton = document.createElement("button");
  if (score === 0) {
    startButton.innerHTML = "START";
  } else {
    startButton.innerHTML = "Play Again";
  }
  startDiv.appendChild(startButton);
  startButton.id = "startButton";
  startButton.onclick = function () {
    show();
    startButton.style.visibility = "hidden";
  };
  HandleClicks();
};
const displayScore = function (str) {
  scoreDiv.innerHTML = `Score : ${score}`;
  status.innerHTML = str;
  scoreDiv.id = "score";
  status.id = "status";
  statusDiv.id = "statusDiv";
};
play();
