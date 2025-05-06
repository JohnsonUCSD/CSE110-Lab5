// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const voiceSelect = document.getElementById('voice-select');
  const textBox = document.getElementById('text-to-speak');
  const playButton = document.querySelector('button');
  const faceImage = document.querySelector('img');

  // Load available voices from Mozilla 
  const synth = window.speechSynthesis;
  let voices = [];

  function populateVoiceList() {
    voices = synth.getVoices();
  
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
  
      if (voices[i].default) {
        option.textContent += " — DEFAULT";
      }
  
      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      voiceSelect.appendChild(option);
    }
  }
  
  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  // Will text to speech when button is pressed
  playButton.addEventListener(`click`, () => {
    const utterance = new SpeechSynthesisUtterance(textBox.value);

    // Set selected voice
    const selectedVoiceName = voiceSelect.value;
    const selectedVoice = voices.find(voice => voice.name === selectedVoiceName);
    if (selectedVoice) {
      utterance.voice = selectedVoice;
    }
    
    // Open mouth smiley face when speaking
    utterance.onstart = function() {
      faceImage.src = 'assets/images/smiling-open.png'; 
    };
    // Change face image back after finish
    utterance.onend = function() {
      faceImage.src = 'assets/images/smiling.png';
    };

    speechSynthesis.speak(utterance);
  });

}