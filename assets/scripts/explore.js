// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const voiceSelect = document.getElementById('voice-select');
  const textBox = document.getElementById('text-to-speak');
  const playButton = document.querySelector('button');
  const faceImage = document.querySelector('img');


  playButton.addEventListener(`click`, () => {
    let utterance = new SpeechSynthesisUtterance(textBox.value);
    speechSynthesis.speak(utterance);
  });

  
}