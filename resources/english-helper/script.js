const button = document.querySelector('#record-input');
const content = document.querySelector('#record-output');


const speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition  = new speechRecognition;

recognition.onstart = function(){
    console.log("Voice is activated")
}

recognition.onresult = function(event){
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.innerHTML =  content.innerHTML + '<br>' +transcript;
    readOutLoud(transcript);
}

button.addEventListener('click', () => {
    recognition.start();


});
function readOutLoud(message){
    const speech  = new SpeechSynthesisUtterance();
    speech.text = message
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
}
