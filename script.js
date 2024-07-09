let backgroundContainerElement = document.getElementById("backgroundContainer");

function redColor(){
    backgroundContainerElement.style.backgroundColor = "#eb4034";
}

function greenColor(){
    backgroundContainerElement.style.backgroundColor = "#3deb34";
}

let reduniqueId = setInterval(redColor,500);

let greenuniqueId = setInterval(greenColor,1000);

let counterValue = 10;
let countDownId = setInterval(function(){
    counterValue = counterValue - 1;
    countDownElement.textContent = counterValue;
    if(counterValue === 0){
        clearInterval(reduniqueId);
        clearInterval(greenuniqueId);
        clearInterval(countDownId);
        userInputElement.disabled = true;
        imageElement.src = "./bang.png";
        countDownElement.textContent = "";
        backgroundContainerElement.style.backgroundColor = "#eb4034";
    }
},1000);


let imageElement = document.getElementById("bombImage");
let userInputElement = document.getElementById("userInput");
let countDownElement = document.getElementById("countDown");

let diffusionKey = "diffuse"; // this is the key to diffuse the bomb
userInputElement.addEventListener("keydown",check);
function check(event){
    if(event.key === "Enter"){
        clearInterval(reduniqueId);
        clearInterval(greenuniqueId);
        if(userInputElement.value === diffusionKey){
            backgroundContainerElement.style.backgroundColor = "#3deb34";
            imageElement.src = "./safe.png";
        }
        else{
            backgroundContainerElement.style.backgroundColor = "#eb4034";
            imageElement.src = "./bang.png";
        }
        userInputElement.disabled = true;
        clearInterval(countDownId);
    }
}

