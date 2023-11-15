import questions from '../json/questions.json' assert { type: 'json' }



const questionsKeysArray = Object.keys(questions)



const randomIndex = Math.floor(Math.random() * questionsKeysArray.length)
const randomObjectKey = questionsKeysArray[randomIndex]

const randQuestion = questions[randomObjectKey]



var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

console.log(randQuestion)
function generateQuiz(randQuestion, quizContainer, resultsContainer, submitButton) {
  
  


  function showQuestions(randQuestion, quizContainer) {

    var output = [];
    var answers = [];

    for(let answer in randQuestion.answers){

			
			answers.push(
				'<label>'
					+ '<input type="radio" name="question" value="'+randQuestion.answers[answer]+'">'
					+randQuestion.answers[answer]
				+ '</label>' + '<br>'
			);
		}

	
		output.push(
			'<div class="question">' + randQuestion.question + '</div>'
			+ '<div class="answers">' + answers.join('') + '</div>'
		);

    quizContainer.innerHTML = output.join('');


  }

  function showResults(randQuestion, quizContainer, resultsContainer) {

    var answerContainers = quizContainer.querySelectorAll('.answers');

    var userAnswer = '';
    
    for(var i=0; i<answerContainers.length; i++){
    userAnswer = (answerContainers[i].querySelector('input[name="question"]:checked')||{}).value;

    if(userAnswer===randQuestion.correctAnswer){
			resultsContainer.innerHTML = 'correct!';
			
			answerContainers[i].style.color = 'lightgreen';
		}
		
		else{
			resultsContainer.innerHTML = 'incorrect.';
			answerContainers[i].style.color = 'red';
		}
	
  }
  }
  

  showQuestions(randQuestion, quizContainer);

  submitButton.onclick = function() {
    showResults(randQuestion, quizContainer, resultsContainer);
  }


}

generateQuiz(randQuestion, quizContainer, resultsContainer, submitButton);