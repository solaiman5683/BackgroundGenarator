const body = document.querySelector('body');
const color1 = document.querySelector("#color1");
const color2 = document.querySelector("#color2");
const css = document.querySelector("h3");

function colorChange(){
    body.style.background = `linear-gradient(to right, ${color1.value},${color2.value})`;
    console.log(color1.value)
}

console.log(color1.value);


color1.addEventListener("input", colorChange)
color2.addEventListener("input", colorChange)