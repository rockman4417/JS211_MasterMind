//SAVING THE BALLS INTO AN HTML COLLECTION//
let lettersBallCollection = document.getElementsByClassName("solution-ball")
//SENDING THOSE BALLS INTO A SEPERATE ARRAY SO THEY CAN BE MANIPULATED//
let lettersBallsArray = []
//EMPTY ARRAY TO STORE THE PICKED RANDOM BALLS//
let solutionBalls = []
//SAVING THE LITTLE BLACK CIRCLES SO THEY CAN BE MOVED AROUND//
let dropCircles = document.getElementsByClassName("drop-circle")
let dropCirclesArray = []
for(let i=0; i<dropCircles.length; i++) {
    dropCirclesArray.push(dropCircles[i])
}
//STORING ALL THE ROWS IN AN HTML COLLECTION//
let rowsCollection = document.getElementsByClassName('stack-container')
//ARRAY TO STORE THOSE ROWS AND MANIPULATE//
let rows = []
for(let i = 0; i < rowsCollection.length; i++) {
    rows.push(rowsCollection[i])
}
rows.reverse()
console.log(rows)
let eyeBalls = document.getElementsByClassName("fas")
let currentRow = 0
let alerts = document.getElementsByTagName('p')
let headerContainer = document.getElementsByClassName("header-container")
let gameElement = document.getElementsByClassName("game")
let clonedBallsArray = []
let guessedBallsArray = []
let draggableBalls = document.getElementsByClassName("draggable")

let pegsCollection = document.getElementsByClassName("pegscript")


let pegsArray = [[],[],[],[],[],[],[],[],[],[]]

const pegsPush = () => {
//PUSHING ALL THE PEGS TO THEIR RESPECTIVE ARRAYS//
for(let i = 0; i < 10 ; i++){
    pegsArray[i].push(pegsCollection[0])
    pegsCollection[0].classList.remove("pegscript")
    pegsArray[i].push(pegsCollection[0])
    pegsCollection[0].classList.remove("pegscript")
    pegsArray[i].push(pegsCollection[0])
    pegsCollection[0].classList.remove("pegscript")
    pegsArray[i].push(pegsCollection[0])
    pegsCollection[0].classList.remove("pegscript")
    
}

let pegsCollectionRefill = document.getElementsByClassName("peg")
for (let i = 0; i < pegsCollectionRefill.length; i++) {
    pegsCollectionRefill[i].classList.add("pegscript")
}
pegsArray.reverse()


//////////////////////////////////////////////////
}

pegsPush()

const resetPegs = () => {
    for(let i = 0; i <pegsCollection.length; i++) {
        pegsCollection[i].classList.remove("peg-green")
        pegsCollection[i].classList.remove("peg-yellow")
        pegsCollection[i].classList.add("peg-blue")

    }
}


//JAVASCRIPT LOGIC//
let board = [];
let letters = [];
let guess = []
let guessArray
let solution
let solutionArray
let correctLetters = 0
let correctLetterLocations = 0

const printBoard = () =>  {
  for (let i = 0; i < board.length; i++) {
    console.log(board[i]);
  }
}


const turnPegsBlue = () => {
  //CLEARING THE PEGS//
for(let i = 0; i<10 ; i++) {

  for(let x = 0; x<4; x++){
    pegsArray[i][x].classList.remove("peg-yellow")
    pegsArray[i][x].classList.remove("peg-green")
    pegsArray[i][x].classList.add("peg-blue")
  }
  // pegsCollection[i].classList.remove("peg-yellow")
  // pegsCollection[i].classList.remove("peg-green")
  // pegsCollection[i].classList.add("peg-blue")
  ////////////////////
}
}


const disguiseSolutionBalls = () => {

}

// const clearBoardAndNodes = () =>{
//   clearBoard()
//   for(i = 0; i<4; i ++){
//     if(rows[currentRow].children[i].children[1]){
//       rows[currentRow].children[i].removeChild(rows[currentRow].children[i].children[1])
//     }
    
//   }

// }


const clearBoard = () => {
//PUTTING THE DRAGGABLE BALLS BACK IN THEIR STARTING PLACE//
    console.log("clearing board!")
    document.getElementById('initial-container1').appendChild(document.getElementById('a'))
    document.getElementById('initial-container1').appendChild(document.getElementById('b'))
    document.getElementById('initial-container1').appendChild(document.getElementById('c'))
    document.getElementById('initial-container1').appendChild(document.getElementById('d'))
    document.getElementById('initial-container2').appendChild(document.getElementById('e'))
    document.getElementById('initial-container2').appendChild(document.getElementById('f'))
    document.getElementById('initial-container2').appendChild(document.getElementById('g'))
    document.getElementById('initial-container2').appendChild(document.getElementById('h'))
    for(i = 0; i < draggableBalls.length ; i++) {
        draggableBalls[i].setAttribute("draggable", true)
    }
  

}

const resetGame = () => {
    console.log("resetting game!")
    headerContainer[0].classList.add("red-box-shadow")
    headerContainer[0].classList.add("red-text-shadow")
    headerContainer[0].classList.remove("green-box-shadow")
    headerContainer[0].classList.remove("green-text-shadow")
    headerContainer[0].classList.remove("purple-box-shadow")
    headerContainer[0].classList.remove("purple-text-shadow")
    gameElement[0].classList.add("red-box-shadow")
    gameElement[0].classList.remove("green-box-shadow")
    gameElement[0].classList.remove("purple-box-shadow")
    clearBoard()
    resetAllValues()
    resetRows()
    generateSolution()
    populateSolutionDiv()
    turnPegsBlue()
    for(let i = 0; i <eyeBalls.length; i++){
      eyeBalls[i].classList.add("fa-eye")
    }
    
}

const resetAllValues = () => {

////RESETTING ALL VARIABLES TO DEFAULT VALUES////
  guess = []
  lettersBallCollection = document.getElementsByClassName("solution-ball")
  letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  solution = ''
  solutionBalls = []
  lettersBallsArray = []
  console.log("clearing lettersBallsArray" , lettersBallsArray)
  for(let i =0; i < lettersBallCollection.length; i ++){
    lettersBallsArray.push(lettersBallCollection[i])
    }
    lettersBallsArray.sort(function(a,b){
        return a.id - b.id
    })
    console.log("regenerating lettersBallsArray" , lettersBallsArray)
    alerts[0].innerHTML = "GET READY TO PLAY!"
///////////////////////////////////////////////


}

const generateSolution = () =>  {

//PICKING 4 RANDOM BALLS AND SAVING THEM IN A NEW ARRAY//
   for (let i = 0; i < 4; i++) {
    const randomIndex = getRandomInt(0, letters.length);
    solution += letters[randomIndex];
    solutionBalls.push(lettersBallsArray[randomIndex])
    lettersBallsArray.splice(randomIndex, 1)
    letters.splice(randomIndex, 1)
    }
    console.log("solution balls array" , solutionBalls)
    console.log("letters balls array" , lettersBallsArray)
    solutionArray = solution.split("") 
    console.log(solutionArray)
////////////////////////////////////////////////////////
}

const populateSolutionDiv = () => {

//MOVING ALL SOLUTION BALLS BACK TO THE HIDDEN CONTAINER//
    for(let i = 0; i <lettersBallsArray.length; i++) {
        document.getElementById("solution-hidden-container").appendChild(lettersBallsArray[i])
        lettersBallsArray[i].classList.add("hide")
    }
/////////////////////////////////////////////////////////
    
//MAKING THE SOLUTION BALLS VISIBLE AND MOVING THEM TO THE SOLUTION CONTAINER//
    console.log("generating solution balls!")
    for(let i = 0; i <solutionBalls.length; i ++) {
      console.log("starting the for loo[p")
      console.log("disguising balls")
        solutionBalls[i].classList.add("disguised-ball")
        solutionBalls[i].classList.remove("hide")
        document.getElementById('solution').appendChild(solutionBalls[i])
    }
//////////////////////////////////////////////////////////////////////////////

}

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
}


//EVENT LISTENER TO CHECK THE GUESS//
const checkGuess = () => {
console.log("checking guess!")
//convert guess to an array with split
guess = []
console.log("guess" , guess)
//store the dom element where the balls are placed//

//store the balls within that dom element//

//loop through those balls and add their ids to the guess variable
for(let i =0; i <4; i++) {
    guess.push(rows[currentRow].children[i].children[0].children[1].id)
}

guess = guess.join("")
console.log("guess" , guess)

mastermind(guess) 
if(currentRow !== 9) {
  moveUpRow()
clearBoard()
}

}

////////////////////////////////////
const resetRows = () => {

    currentRow = 0
    dropCirclesArray.sort()
    for(i = 0; i < 10; i++) {
        for(let x = 0; x<4; x++) {
            rows[i].children[x].children[0].classList.add('hide')
            
            //REMOVING THE GUESS BALLS//
            if(rows[i].children[x].childNodes.length === 4) {
                rows[i].children[x].removeChild(rows[i].children[x].childNodes[3])
            }
            ////////////////////////////
            
        } 
    }
    for(let x = 0; x<4; x++) {
        console.log(dropCircles[x])
        rows[currentRow].children[x].children[0].classList.remove('hide')
        rows[currentRow].children[x].children[0].appendChild(dropCirclesArray[x])
    } 

}

const moveUpRow = () => {

//saving the guessed balls in the current row

//disabling drag and drop functionality for current row
console.log(rows[currentRow])
dropCirclesArray.sort()
for(let i = 0; i < 4; i++) {
    console.log("i",i)
    console.log(rows[currentRow].children[i])
    rows[currentRow].children[i].children[0].classList.add('hide')
    rows[currentRow +1].children[i].children[0].classList.remove('hide')
    rows[currentRow +1].children[i].children[0].appendChild(dropCirclesArray[i])
    
}

for(let i = 0; i < 4 ; i ++) {
    clonedBallsArray[i].classList.remove("hide")
}

clonedBallsArray = []

// populateCurrentRowWithGuessBalls()

currentRow +=1

//enabling drag and drop functionality for next row

//moving the black drop circles to the next row

}

const colorizePegs = () => {
  "colorizing pegs!"
  for (let i = 0; i< correctLetters; i ++){
    console.log("peg", pegsArray[currentRow][i])
    pegsArray[currentRow][i].classList.remove("peg-blue")
    pegsArray[currentRow][i].classList.add("peg-yellow")

  }

  for (let i = 0; i < correctLetterLocations ; i++) {
    console.log("peg for green peg",pegsArray[currentRow][i+ correctLetters])
    pegsArray[currentRow][i+ correctLetters].classList.remove("peg-blue")
    pegsArray[currentRow][i+ correctLetters].classList.add("peg-green")
  }



}



const generateHint = (guess) =>  {
  console.log("guess", guess)
  solutionArray = solution.split("")
  let hint
   correctLetters = 0
   correctLetterLocations = 0
  console.log("solution", solution)
  console.log("solutionarray" ,solutionArray)
  
  guessArray = guess.split("")
  console.log("guess" , guess)
  console.log("guessarray" , guessArray)
  for(let i = 0; i < solutionArray.length; i++) {
    if (solutionArray[i] === guessArray[i]){
      correctLetterLocations += 1
      console.log("correctLetterLocations" + correctLetterLocations) 
      solutionArray[i] = null
    }
    
  }

  for(let i = 0; i <solutionArray.length; i++) {
    
    let targetIndex = solutionArray.indexOf(guessArray[i])
    console.log(guessArray[i])
    if(targetIndex > -1) {
      correctLetters += 1
      
      solutionArray[targetIndex] = null
    }
  }
  console.log("correctlocations" , correctLetterLocations)
  console.log("correctletters" , correctLetters)
  hint = correctLetters + "-" + correctLetterLocations
    board.push(guess + "hint" , hint)
    colorizePegs()
    
}

const mastermind = (guess) => {
  
  if(guess === solution) {
    console.log("You guessed it!")
    alerts[0].innerHTML = "YOU ARE THE MASTERMIND!"
    headerContainer[0].classList.remove("red-box-shadow")
    headerContainer[0].classList.remove("red-text-shadow")
    headerContainer[0].classList.add("green-box-shadow")
    headerContainer[0].classList.add("green-text-shadow")
    gameElement[0].classList.remove("red-box-shadow")
    gameElement[0].classList.add("green-box-shadow")
    for(let i = 0; i <solutionBalls.length; i++) {
      solutionBalls[i].classList.remove("disguised-ball")
    }
    for(let i = 0; i <eyeBalls.length; i++){
      eyeBalls[i].classList.remove("fa-eye")
    }
    for(let i = 0; i<4; i++){
      pegsArray[currentRow][i].classList.remove("peg-blue")
      pegsArray[currentRow][i].classList.add("peg-green")
    }
    
    
    solution = '';
    board = []
    
  }
  else if (currentRow === 9) {
    console.log("You ran out of turns! The solution was " + solution) 
    alerts[0].innerHTML = "YOU RAN OUT OF TURNS!"
    for(let i = 0; i <eyeBalls.length; i++){
      eyeBalls[i].classList.remove("fa-eye")
    }
    for(let i = 0; i <solutionBalls.length; i++) {
      solutionBalls[i].classList.remove("disguised-ball")
    }
    headerContainer[0].classList.remove("red-box-shadow")
    headerContainer[0].classList.remove("red-text-shadow")
    headerContainer[0].classList.add("purple-box-shadow")
    headerContainer[0].classList.add("purple-text-shadow")
    gameElement[0].classList.remove("red-box-shadow")
    gameElement[0].classList.add("purple-box-shadow")
    generateHint(guess)
    solution = '';
    board = []
  }

  else {
    generateHint(guess)
    console.log("Guess again!" + board)
    alerts[0].innerHTML = "GUESS AGAIN!"
    
  }
}


////////EVENT LISTENERS FOR THE DRAG AND DROP FUNCTIONALITY////////

function onDragStart(event) {
  // selectedIndex = event.target.id
  // selectedStack = event.target.parentElement.id
  event
    .dataTransfer
    .setData('text/plain', event.target.id);
    // console.log(selectedIndex)
    // console.log(selectedStack)
}

function onDragOver(event) {
  event.preventDefault();
}

function onDrop(event) {
  
  const id = event
    .dataTransfer
    .getData('text');

    const draggableElement = document.getElementById(id);
    const clonedBall = draggableElement.cloneNode(false)
    clonedBall.classList.add("hide")
    clonedBall.setAttribute("id", "cloned")
    clonedBall.setAttribute("draggable", false)
    draggableElement.setAttribute("draggable", false)
    clonedBallsArray.push(clonedBall)
    

    const dropzone = event.target;
    // console.log("dropzone" , dropzone)
    dropzone.appendChild(draggableElement);
    const parent = dropzone.parentElement
    console.log(parent)
    
    
    parent.appendChild(clonedBall)


    event
  .dataTransfer
  .clearData();
}

//////////////////////////////////////////////////////////////////

resetGame()