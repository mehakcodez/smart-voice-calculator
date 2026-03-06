const display = document.getElementById("display");
const historyList = document.getElementById("history");

function append(value){
display.value += value;
}

function clearDisplay(){
display.value = "";
}

function deleteLast(){
display.value = display.value.slice(0,-1);
}

function calculate(){

try{

let result = eval(display.value);

addHistory(display.value + " = " + result);

display.value = result;

}

catch{
display.value = "Error";
}

}

function addHistory(item){

let li = document.createElement("li");
li.textContent = item;
historyList.prepend(li);

}

function startVoice(){

let recognition = new(window.SpeechRecognition || window.webkitSpeechRecognition)();

recognition.lang = "en-US";

recognition.onresult = function(event){

let speech = event.results[0][0].transcript;

display.value = speech
.replace(/plus/gi,"+")
.replace(/minus/gi,"-")
.replace(/into|multiply/gi,"*")
.replace(/divide/gi,"/");

};

recognition.start();

}
