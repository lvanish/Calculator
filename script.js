// var a, b, result;
// function add() {
//     a = parseInt(document.getElementById("First").value);
//     b = parseInt(document.getElementById("Second").value);
//     result = a + b;
//     document.getElementById("Result").value = result;
//     console.log(result);
// }
// function sub() {
//     a = parseInt(document.getElementById("First").value);
//     b = parseInt(document.getElementById("Second").value);
//     result = a - b;
//     document.getElementById("Result").value = result;
//     console.log(result);
// }
// function mul() {
//     a = parseInt(document.getElementById("First").value);
//     b = parseInt(document.getElementById("Second").value);
//     result = a * b;
//     document.getElementById("Result").value = result;
//     console.log(result);
// }
// function div() {
//     a = parseInt(document.getElementById("First").value);
//     b = parseInt(document.getElementById("Second").value);
//     result = a / b;
//     document.getElementById("Result").value = result;
//     console.log(result);
// }
let screen= document.getElementById('screen');
buttons= document.querySelectorAll('button');
let screenValue='';
for(item of buttons){
    item.addEventListener('click', (e)=>{
        buttonText= e.target.innerText;
        console.log("button text", buttonText);

        if(buttonText=='X'){
            buttonText= '*';
            screenValue+=buttonText;
            screen.value=screenValue;
        }
        else if (buttonText=='C'){
            screenValue= "";
            screen.value= screenValue;
        }
        else if(buttonText=='='){
            screen.value= eval(screenValue);
        }

        else if(buttonText=="B"){
            screen.value=screenValue.substr(0,screenValue.length-1);
            screenValue=screen.value;
        }
        
        else{
            screenValue+=buttonText;
            screen.value= screenValue;
        }
    })
}
