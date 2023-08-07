const photos0 = [
  "bird.png",
  "cow.png",
  "elephant.png",
  "lion.png",
  "kangaroo.png",
];
const photos = photos0.concat(photos0);
const game = document.getElementById("game");
const start0 = document.getElementById("start");
const shuffle = function (array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
};
const createPhotos = function (photos) {
  photos.forEach((photo, index) => {
    const image = document.createElement("img");
    const button = document.createElement("button");
    image.src = photo;
    image.id = index;
    button.id = `${index}0`;
    game.appendChild(button);
    button.appendChild(image);
    image.src = "q.png";
  });
};
const show = function () {
  const myTimeout = setTimeout(hide, 1000);
  photos.forEach((photo, i) =>  {
    const image = document.getElementById(`${i}`);
    image.src = photo;
  });
};
const hide = function () {
  photos.forEach((photo, i) => {
    const image = document.getElementById(`${i}`);
    image.src = "q.png";
  });
};
const play = function () {
  const game = document.getElementById("game");
  game.innerHTML = "";
  shuffle(photos);
  createPhotos(photos);
  start0.innerHTML = "";
  const start = document.createElement("button");
  start.innerHTML = "START";
  start0.appendChild(start);
  start.id = "startButton";
  start.onclick = function () {
    show();
    start.style.visibility = "hidden";
  };
  let image10 = document.getElementById("00");
  let ex = 0;
  let image1 = [];
  const trial = [];
  const ids0 = [];
  let j = 0;
  for (let i = 0; i < photos.length; i++) {
    image10 = document.getElementById(`${i}0`);
    image1.push(document.getElementById(`${i}`));
    image10.onclick = function () {
      trial.push(photos[i]);
      ids0.push(i);
      image1[i].src = photos[i];
      j++;
      if (j % 2 === 0 && trial[trial.length - 1] === trial[trial.length - 2]) {
        ex++;
      } else if (j % 2 === 0 && j !== 0) {
        setTimeout(() => {
          image1[ids0[ids0.length - 1]].src = "q.png";
          image1[ids0[ids0.length - 2]].src = "q.png";
        }, 500);
      }
      if (ex === photos.length / 2) {
        play();
      }
    };
  }
};

play();
