var SpeechRecognition=window.webkitSpeechRecognition;
var recognition= new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML="";
    recognition.start();

    //write code to change the button image with id microphone to "speak.gif" image
     document.getElementById("microphone").src="microphone-gif.gif"; 
     //change the gif image back to original image "mic.png" after 6 seconds as computer tries to listen to you for 6 seconds 
     setTimeout(function() { document.getElementById("microphone").src="microphone pic.png"; }, 6000);
}

recognition.onresult=function(event)
{
    console.log(event);
    var content=event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML=content;
    console.log(content);
    speak();
}


function speak()
{
    var synth=window.speechSynthesis;
    speak_data=document.getElementById("textbox").value;
    var utterthis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterthis);
    Webcam.attach(camera);
}
camera=document.getElementById("camera");

Webcam.set({
    width:300,
    height:300,
    image_format:'jpeg',
    jpeg_quality:90
});

