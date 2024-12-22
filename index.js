
function generate(length,LC,UC,NC,SC)
{
    const  LowerCaseChars="abcdefghijklmnopqrstuvwxyz";
    const UpperCaseChars="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const NumberChars="0123456789";
    const SymbolChars="!@#$%^&*()_+=-:;<>?/`~";

    let result1=document.getElementById("label2");

     let allowedChars="";
     let password="";

     allowedChars+= LC ? LowerCaseChars : "";
     allowedChars+=UC ? UpperCaseChars : "";
     allowedChars+=NC ? NumberChars : "";
     allowedChars+=SC ? SymbolChars : "";

    if(length<6 || length>12)
    {
        result1.innerHTML="password length must be >=6 and <=12";
        return "";
    }

    if(allowedChars.length===0)
    {
        result1.innerHTML= "At least one category (lowercase, uppercase, numbers, symbols) should be selected";
        return "";
    }

    for(let i=0; i<length;i++)
    {
        const RandomIndex= Math.floor(Math.random()*allowedChars.length);
        password+=allowedChars[RandomIndex];
    }

    return password;
}


function callgenerate()
{

let passwordLength=Number(document.getElementById("textbox").value);
let lowerChecked= document.getElementById("lower");
let upperChecked=document.getElementById("upper");
let  NumberChecked=document.getElementById("numbers");
let symbolsChecked=document.getElementById("symbol");
let result=document.getElementById("result");
let result1=document.getElementById("label2");

let LowerCase = lowerChecked.checked;
let UpperCase = upperChecked.checked;
let NumberCase = NumberChecked.checked;
let SymbolsCase = symbolsChecked.checked;

result1.innerHTML="";
result.textContent="";
const Password=generate(passwordLength,LowerCase,UpperCase,NumberCase,SymbolsCase);

if(Password){
result.textContent= Password;
}
}
    