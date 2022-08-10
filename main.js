var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
camera = document.getElementById("camera");
var selfie = 1;
function save() {
    recognition.start();
}
function speak() {
    synth = window.speechSynthesis;
    speakdata = "taking your selfie in 5 seconds";
    utterthis = new SpeechSynthesisUtterance(speakdata);
    synth.speak(utterthis);
    Webcam.attach(camera);
    setTimeout(() => {
        snapshot();
        if (selfie < 3) {
            speak();
            selfie++;
        }

    }, 5000);
}
recognition.onresult = function (event) {
    content = event.results[0][0].transcript;
    if (content.includes("take my selfie")) {
        speak();
        selfie = 1;
    }
}
Webcam.set({

    width: 400,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

function snapshot() {

    Webcam.snap(function (data) {
        document.getElementById("result"+selfie).innerHTML = "<img id='selfie_image' src='" + data + "'>";
    })
}