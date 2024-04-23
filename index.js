// Calculator Program
const display = document.getElementById("container");

function onclick(value){
    display.value += input;
}

function container(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}