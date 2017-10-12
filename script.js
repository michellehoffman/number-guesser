var min = 0;
var max = 100;
var randomNumber = Math.floor(Math.random() * (max - min) + min);
var resetButton = document.querySelector('.reset-game');
var guessButton = document.querySelector('.guess-button');
var userGuess = document.getElementById('guess');
var lastGuessText = document.getElementById('last-guess-text');
var guessNumber = document.getElementById('guessNumber');
var feedback = document.getElementById('feedback');
var clearButton = document.querySelector('.clear');
var userSetMinNum = document.getElementById('userSetMinNum');
var userSetMaxNum = document.getElementById('userSetMaxNum');
var updateNumRange = document.getElementById('updateNumRange');



function ifElseFeedback() {
  if (parseInt(userGuess.value) > randomNumber) {
    return('That is too high');
  } else if (userGuess.value == randomNumber) {
    min -= 10
    max += 10
    randomNumber = Math.floor(Math.random() * (max - min) + min);
    displayMinMaxVals()
    return('BOOM!');
  } else if (userGuess.value < randomNumber) {
    return('That is too low');
  }
}

guessButton.addEventListener('click', function () {
  var int = parseInt(userGuess.value);
  lastGuessText.innerText = 'Your last guess was';
  guessNumber.innerText = int;
  feedback.innerText = ifElseFeedback();
  userGuess.value = '';
});




resetButton.addEventListener('click', function() {
  window.location.reload('true');
});

resetButton.setAttribute('disabled', 'true');

userGuess.addEventListener('keyup', function() {
  resetButton.removeAttribute("disabled");
})


function disableGuessButton() {
  if (userGuess.value === ''){
    guessButton.setAttribute("disabled", "true");
  }
}

disableGuessButton()


updateNumRange.addEventListener('click', function () {
  min = parseInt(userSetMinNum.value)
  console.log(min);
  displayMinVal.innerText = min;
  userSetMinNum.value = '';
  max = parseInt(userSetMaxNum.value) 
  console.log(max);
  displayMaxVal.innerText = max;
  userSetMaxNum.value = '';
})



userGuess.addEventListener('keyup', function() {
  if ((parseInt(userGuess.value) > min) && (parseInt(userGuess.value)) <= max) {
  validation.innerText = '';
  guessButton.removeAttribute("disabled");
} else if ((parseInt(userGuess.value) <= min) || (parseInt(userGuess.value)) > max) {
  setTimeout(function() {
    validation.innerText = ('Please use a number between ' + min + ' and ' + max)
  }, 250);
    guessButton.setAttribute("disabled", "true");
} else if (userGuess.value === '') {
  validation.innerText = '';
} else {
  setTimeout(function() {
    validation.innerText = 'That is not a number';
  }, 250);
    guessButton.setAttribute("disabled", "true");
}
});

 


clearButton.addEventListener('click', function() {
  userGuess.value = "";
})

function disableClear() {
  if (userGuess.value == "") {
    clearButton.setAttribute('disabled', 'true');
  } else if (userGuess.value != ""){
    clearButton.removeAttribute("disabled");
  }
}

userGuess.addEventListener('keyup', function() {
  disableClear()
})


function displayMinMaxVals() {
  var displayMinVal = document.getElementById('displayMinVal');
  var displayMaxVal = document.getElementById('displayMaxVal');

  displayMinVal.innerText = min;
  displayMaxVal.innerText = max;
}

displayMinMaxVals()
















// UPDATE RANGE TRY 3
// if (userGuess.value == randomNumber) {

//   console.log(max = max + 10)
//   console.log(min = min - 10)
// }




// UPDATE RANGE TRY 2
// function userWin() {
//   if (userGuess.value == randomNumber) {
//     console.log(max = max + 10);
//     console.log(min = min - 10);
//   }
// }

// guessButton.addEventListener('click', userWin());




// UPDATE RANGE TRY 1
// function updateMaxAfterWin() {
//   for (i = max; userGuess.value == randomNumber; i += 10) {
//     console.log(i);
//   }
// }

// updateMaxAfterWin()

// function updateMinAfterWin() {
//   for (i = min; userGuess.value == randomNumber; i -= 10) {
//     console.log(i);
//   }
// }

// updateMinAfterWin()
