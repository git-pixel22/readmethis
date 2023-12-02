function speak(){
        
    let inputText = document.getElementById("inputText");

    let utterance = new SpeechSynthesisUtterance(inputText.value);
    speechSynthesis.speak(utterance);
    }