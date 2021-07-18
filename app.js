function Grammarcheck()
{
console.log("hello g");
location.replace("grammar.html");

}


var fetchgrammar=[];
function letscheckgrammar()
{

name = document.getElementById("name").value;
console.log(name);
const endpoint1= "http://9caf33fa0ec3.ngrok.io/";
fetch(endpoint1,{
mode: 'cors',
method:"POST",
body:name,
    }).catch(console.error)
 }


var fetchsummarizer=[];

function Summarizer()
{

console.log("hello s");
location.replace("Summarizer.html");

}



function letschecksummarizer()
{
names = document.getElementById("names").value;	
const endpoint1= "http://9caf33fa0ec3.ngrok.io/summarizer1";
fetch(endpoint1,{
mode: 'cors',
method:"POST",
body:names,
    }).catch(console.error)



}


function Sentenceformation()
{
console.log("hello sf");
location.replace("sentenceformation.html");

}



function letschecksentences()
{
namesf=document.getElementById("namesf").value;	
const endpoint1= "http://9caf33fa0ec3.ngrok.io/sentenceformation";
fetch(endpoint1,{
mode: 'cors',
method:"POST",
body:namesf,
    }).catch(console.error)
}