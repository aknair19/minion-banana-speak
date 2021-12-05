var txtinput=document.querySelector("#txt-input");
var btnTranslate = document.querySelector("#btn-translate");
var outputDiv=document.querySelector("#output");
var serverUrl= "https://api.funtranslations.com/translate/minion.json"

function getTranslationURl(text)
{
   return serverUrl + "?" + "text=" + text;
}


function eventClick(){

// outputDiv.innerText=("jbsjbsjbsjbh"+ txtinput.value)
var input= txtinput.value;
//calling server for processing
fetch(getTranslationURl(input))
.then(response => response.json())
.then (json=>{
    var translatedText= json.contents.translated;
    outputDiv.innerText= translatedText;

})
};


btnTranslate.addEventListener("click", eventClick);