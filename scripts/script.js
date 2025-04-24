const lightTheme = "styles/light.css";
const darkTheme = "styles/dark.css";
const results = document.getElementById("result");

function calculate(value){
    const calcValue = eval(value || null);
    if(NaN(calcValue)){
        res.value = "Cannot devide 0 with 0";
        setTimeout(()=>{
            res.value = "";

        },1300);
    }else{
        res.value = calcValue;
    }
}

function screen(enteredVal){
    if(!res.value){
        res.value = "";
        res.value += enteredVal;
    }

}

document.addEventListener("keydown",keyInputHandler);

function keyInputHandler(e){
    e.preventDefault();
    if(e.key === "0"){
        res.value += "0";
    }else if(e.key === "1"){
        res.value += "1";
    }else if(e.key === "2"){
        res.value += "2";
    }else if(e.key === "3"){
        res.value += "3";
    }else if(e.key === "4"){
        res.value += "4";
    }else if(e.key === "5"){
        res.value += "5";
    }else if(e.key === "6"){
        res.value += "6";
    }else if(e.key === "7"){
        res.value += "7";
    }else if(e.key === "8"){
        res.value += "8";
    }else if(e.key === "9"){
        res.value += "9";
    }

    if(e.key === "+"){
        res.value += "+";
    }else if(e.key === "-"){
        res.value += "-";
    }else if(e.key === "*"){
        res.value += "*";
    }else if(e.key === "/"){
        res.value += "/";
    }
    if(e.key === "Enter"){
        calculate(results.value);
    }

    if(e.key === "Backspace"){
        const resultInput = res.value;
        res.value = resultInput.substring(0,res.value.length-1);
    }
}