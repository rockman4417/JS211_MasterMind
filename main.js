// 'use strict';

// const assert = require('assert');
// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });




let board = [];
let letters = [];
let solution

const printBoard = () =>  {
  for (let i = 0; i < board.length; i++) {
    console.log(board[i]);
  }
}

const generateSolution = () =>  {
  letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  solution = ''
  for (let i = 0; i < 4; i++) {
    const randomIndex = getRandomInt(0, letters.length);
    solution += letters[randomIndex];
    letters.splice(randomIndex, 1)
    console.log(letters)
  }
}

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
}

const generateHint = (guess) =>  {
  // your code here
  // solution = 'abcd';
  let hint
  let correctLetters = 0
  let correctLetterLocations = 0
  console.log("solution", solution)
  let solutionArray = solution.split("") 
  console.log("solutionarray" ,solutionArray)
  let guessArray = guess.split("")
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
    console.log("targetindex" , targetIndex)
    console.log(guessArray[i])
    if(targetIndex > -1) {
      correctLetters += 1
      
      solutionArray[targetIndex] = null
    }
  }
  console.log("correctlocations" , correctLetterLocations)
  console.log("correctletters" , correctLetters)
  hint = correctLetters + "-" + correctLetterLocations
    board.push(guess + hint)
    return hint
}

const mastermind = (guess) => {
  // solution = 'abcd'; // Comment this out to generate a random solution
  // your code here
  if(guess === solution) {
    console.log("You guessed it!")
    solution = '';
    board = []
    return 'You guessed it!'
  }
  else if (board.length === 10) {
    console.log("You ran out of turns! The solution was " + solution) 
    solution = '';
    board = []
  }

  else {
    generateHint(guess)
    console.log("Guess again!" + board)
  }
}


// const getPrompt = () =>  {
//   rl.question('guess: ', (guess) => {
//     mastermind(guess);
//     printBoard();
//     getPrompt();
//   });
// }

// // Tests

// if (typeof describe === 'function') {
//   solution = 'abcd';
//   describe('#mastermind()', () => {
//     it('should register a guess and generate hints', () => {
//       mastermind('aabb');
//       assert.equal(board.length, 1);
//     });
//     it('should be able to detect a win', () => {
//       assert.equal(mastermind(solution), 'You guessed it!');
//     });
//   });
  
//   describe('#generateHint()', () => {
//     it('should generate hints', () => {
//       assert.equal(generateHint('abdc'), '2-2');
//     });
//     it('should generate hints if solution has duplicates', () => {
//       assert.equal(generateHint('aabb'), '1-1');
//     });

//   });

// } else {

//   generateSolution();
//   getPrompt();
// }

//EVENT LISTENERS FOR THE DRAG AND DROP FUNCTIONALITY

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

    const dropzone = event.target;
    // targetStack = dropzone.id
    // console.log(targetStack)
    // if(isLegal(stacks[selectedStack], stacks[targetStack])) {
    // towersOfHanoi(stacks[selectedStack], stacks[targetStack])

    dropzone.appendChild(draggableElement);

    
    
    event
  .dataTransfer
  .clearData();
}