function speak(){
        
    let inputText = document.getElementById("inputText");
    var audio = new Audio('btn-tap.mp3');

    let utterance = new SpeechSynthesisUtterance(inputText.value);

    audio.play()
    speechSynthesis.speak(utterance);
}