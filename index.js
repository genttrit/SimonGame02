let gamePattern = [];
let userClickedPattern = [];
let buttonColors = ["red","blue","green", "yellow"];
let started = false;
let level = 0;
let randomChosenColor;



//Adding event listeners
for(let i=0; i<document.querySelectorAll(".card").length; i++){
    document.querySelectorAll(".card")[i].addEventListener("click", sound);
}




document.addEventListener('keypress',starting);
document.addEventListener('click',starting);

document.getElementById("resetButton").addEventListener('click', startOver);



function starting(){
  console.log("started: " +started);
if(started !== true){
  started = true;
  nextSequence();
  document.querySelector("h1").innerHTML = "Level "+ level;
  }
}






//Flashing game pattern
  for(let i=0; i<gamePattern.length; i++) {
    buttonAnimation(gamePattern[i]);
  }


//Check the user response
 function checkAnswer(currentLevel) {
  let x = currentLevel-1;
  let check=true;
  
  
  
  for(let n=0; n<=x; n++){
    if(userClickedPattern[n] !== gamePattern[n]) {
      check=false;
    }
  }
  if (check) {setTimeout(function () {
    nextSequence();
    }, 1000);
  }
  else {
    soundPlay("wrong");
    
    document.getElementsByTagName("h1")[0].classList.add('game-over');
    
    document.querySelector("h1").innerHTML = "Game Over, you reached level: "+ level +"               Refresh to Restart";

    setTimeout(function () {
      document.getElementsByTagName("h1")[0].classList.remove('game-over');
    }, 200);

    document.getElementById("resetButton").style.visibility = "visible";
}
 }


function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
  document.getElementById("resetButton").style.visibility = "hidden";
  setTimeout(function () {
    document.getElementsByTagName("h1")[0].classList.remove('game-over');
  }, 200);
}

//Audio feature, userArray and buttonAnimation
function sound() {
  if(started == true){
  userClickedPattern.push(this.id);
  soundPlay(this.id);
  buttonAnimation(this.id);
  if(userClickedPattern.length == gamePattern.length){
    checkAnswer(userClickedPattern.length);
  }
  }
}

function soundPlay(buttonClicked) {
  let buttonID = buttonClicked;
  switch (buttonID) {
    case "green":
      let green = new Audio("sounds/green.mp3");
      green.play();
      break;
    case "red":
      let red = new Audio("sounds/red.mp3");
      red.play();
      break;
    case "blue":
      let blue = new Audio("sounds/blue.mp3");
      blue.play();
      break;
    case "yellow":
      let yellow = new Audio("sounds/yellow.mp3");
      yellow.play();
      break;
    case "wrong":
      let wrong = new Audio("sounds/wrong.mp3");
      wrong.play();
      break;
    
    default:
      console.log(buttonID);
}
}


//random color selection
function nextSequence() {
  if(started == true){
  userClickedPattern=[]; //
  randomChosenColor = buttonColors[Math.floor(Math.random()*4)];
  buttonAnimation(randomChosenColor);
  soundPlay(randomChosenColor);
  gamePattern.push(randomChosenColor);
  level++;
  document.querySelector("h1").innerHTML = "Level "+ level;
  buttonAnimation(gamePattern[gamePattern.length-1]);
}
}

//Call this function to flash the button 
function buttonAnimation (btnID) {
  
  document.getElementById(btnID).classList.add('flash');
  setTimeout(()=>{
    document.getElementById(btnID).classList.remove('flash');
  }
  ,300)
}