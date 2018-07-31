var song = ["./audio/Cahl_good_evening_typhoid_sun.mp3"];

var playButton = document.getElementById("play");
var audio = document.getElementById("audio-song");
var pic = document.getElementById("bg");

function randomNumber(n){
  return Math.floor(n * Math.random());
}

function randomAudio(arr) {
  audio.src = arr[randomNumber(arr.length)];
  audio.play();
}

function audioPlay() {
  if (playButton.className == "inactive") {
  playButton.className = "active";
  pic.className = "cahl";
  randomAudio(song);
  }
  else {
  audio.pause();
  playButton.className= "inactive";
  pic.className = "nimbus";
  }
  document.getElementById("audio-song").addEventListener("ended", function() {
  playButton.className = "inactive";
  pic.className = "nimbus";
  this.removeEventListener("ended", null);
  });
}