// p5js_click2playsound
// Created: Rob Duarte 4/3/2023

// This sketch plays a sound file from a list, whenever the mouse is clicked.
// The sound files are in the assets folder, numbered 0.wav, 1.wav, etc.

let numberOfTracks = 6; // number of sound files we have
let soundFiles = []; // the array that will store the sound files

let trackNumber = -1; // the number of the track to play
let triggerTrack = false; // signals that it's time to play a track

// we load the sound files in preload(), which happens before anything else...
function preload() {
  // load sound files into the array
  for (let i = 0; i < numberOfTracks; i++) {
    soundFiles[i] = loadSound('assets/' + i + '.wav');
  }
}

// setup() runs once, when the program starts...
function setup() {
  createCanvas(600,600);
  background(150);
  textSize(30);
  textAlign(CENTER, CENTER);
  text("Click the mouse to play a random sound", width/2, height/2);
}

// draw() runs continuously...
function draw() {
  if (triggerTrack) {
    console.log("Playing track " + trackNumber);
    // play the track...
    soundFiles[trackNumber].play();
    triggerTrack = false;  // reset the trigger
  }
}

// mouseClicked() is called when the mouse is clicked...
function mouseClicked() {
  // pick a random track number
  trackNumber = floor(random(numberOfTracks));
  // or play them in order by using this line instead...
  // trackNumber = (trackNumber + 1) % numberOfTracks;
  triggerTrack = true;
}
