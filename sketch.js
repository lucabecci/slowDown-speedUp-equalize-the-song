let song;
let slider;

function setup() {
  createCanvas(400, 400);
  song = loadSound("./sounds/song2.mp3", loaded)
  song.setVolume(0.2)
  sliderRate = createSlider(0, 1.5, 1, 0.01);
  sliderPan = createSlider(-1, 1, 0, 0.01);
}

loaded = () => song.play();

function draw() {
  background(0);
  song.rate(sliderRate.value());
  song.pan(sliderPan.value());
}


