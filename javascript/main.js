import questions from '../json/questions.json' assert { type: 'json' }


const questionsKeysArray = Object.keys(questions)



const randomIndex = Math.floor(Math.random() * questionsKeysArray.length)
const randomObjectKey = questionsKeysArray[randomIndex]

const randQuestion = questions[randomObjectKey]



var quizContainer = $('#quiz');
var resultsContainer = $('#results');
var submitButton = $('#submit');

quizContainer.html("");
function generateQuiz(randQuestion, quizContainer, resultsContainer, submitButton) {
  
  


  function showQuestions(randQuestion, quizContainer) {

    var output = [];
    var answers = [];

    for(let answer in randQuestion.answers){

			
			answers.push(("<label>" + "<input type='radio' name='question' value='" + randQuestion.answers[answer] + "'" + ">" + randQuestion.answers[answer] + "</label>" + "<br>")
			);
		}

	
		output.push(("<div class='question'>" + randQuestion.question + "</div>" + "<div class='answers'>" + answers.join("") + "</div>")
		);

    quizContainer.html(output.join(""));


  }

  function showResults(randQuestion, quizContainer, resultsContainer) {

    var answerContainers = quizContainer.find('.answers');

    var userAnswer = '';
    
    for(var i=0; i<answerContainers.length; i++){
    userAnswer = ($(answerContainers[i]).find("input[name='question']:checked") || {}).val();

    if(userAnswer===randQuestion.correctAnswer){
			resultsContainer.html("correct!");
			
			answerContainers[i].style.color = 'lightgreen';
		}
		
		else{
			resultsContainer.html("incorrect.");
			answerContainers[i].style.color = 'red';
		}
	
  }
  }
  

  showQuestions(randQuestion, quizContainer);

  submitButton.on("click", function () {
    showResults(randQuestion, quizContainer, resultsContainer);
  });


}

generateQuiz(randQuestion, quizContainer, resultsContainer, submitButton);
