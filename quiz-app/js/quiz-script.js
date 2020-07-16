var currentQuestion = 0;
var score = 0;
var totQuestions = questions.length;

var container = document.getElementById('quizContainer');
var questionEl = document.getElementById('question');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');

var nextButton = document.getElementById('nextButton');
var resultCont = document.getElementById('result');

//To load questions from index
function loadQuestion(questionIndex){
  var q = questions[questionIndex];

  //Display Questions and Different answer Options
  questionEl.textContent = (questionIndex + 1)+ '.' + q.question;
  opt1.textContent = q.option1;
  opt2.textContent = q.option2;
  opt3.textContent = q.option3;
  opt4.textContent = q.option4;
}

//To load next question
function loadNextQuestion(){
  // selected option when the input is checked
  var selectedOption = document.querySelector('input[type=radio]:checked');

  //if the input is not checked then you have to select an answer
  if(!selectedOption){
    alert('Please select an Answer!');
    return;

}

// I need to compare my answer with the correct answer
  var answer = selectedOption.value;
  //if it is the correct answer I get 10 more points
  if(questions[currentQuestion].answer == answer){
    score+=10;
  }

  //I uncheck the answer and move onto the next question
  selectedOption.checked=false;
  currentQuestion++;
  // Button displays FINISH at the last question
  if(currentQuestion == totQuestions - 1){
    nextButton.textContent = 'Finish';
  }
  //Display score after the last question
  if(currentQuestion == totQuestions){
    container.style.display = 'none';
    resultCont.style.display = '';
    resultCont.textContent ='Your Score: ' + score;
    return;
  }

  // in all cases, load question of the current index
  loadQuestion(currentQuestion);
}

//Load all questions
loadQuestion(currentQuestion);