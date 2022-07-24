let gamePattern = [];
let userClickedPattern = [];
let buttonColors = ["red","blue","green", "yellow"];
let level=0;


//Adding event listeners
for(let i=0; i<document.querySelectorAll(".card").length; i++){
    document.querySelectorAll(".card")[i].addEventListener("click", sound);
    document.querySelectorAll('body')[i].addEventListener("click", starting);
}

function starting(){ 
  if(n=0){
    n=1;
    document.querySelector("h1").innerHTML = "Level "+ n;
  }
}

//Flashing game pattern
  for(let i=0; i<gamePattern.length; i++) {
    buttonAnimation(gamePattern[i]);
  }


//Check the user response
 function checkAnswer(currentLevel) {
  let x = currentLevel-1;
  if( gamePattern[x] == userClickedPattern[x])
  {
    return 1;
  }
    
  else
  {
    return 0;
  }
  };



//Audio feature, userArray and buttonAnimation
function sound() {
  userClickedPattern.push(this.id);
  soundPlay(this.id);
  buttonAnimation(this.id);
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
  userClickedPattern=[];
  let randomChosenColor = buttonColors[Math.floor(Math.random()*4)];
  buttonAnimation(randomChosenColor);
  gamePattern.push(randomChosenColor);
  n++;
  document.querySelector("h1").innerHTML = "Level "+ n;
}

//Call this function to flash the button 
function buttonAnimation (btnID) {
  document.getElementById(btnID).classList.add('flash');
  setTimeout(()=>{
    document.getElementById(btnID).classList.remove('flash');
    document.getElementById(btnID).classList.add(btnID);
  }
  ,500)
  
  
}