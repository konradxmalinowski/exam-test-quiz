// test
let randomQuestion, answersRandomQuestion, correctAnswers, questions, idxRandomNumber;

async function getData() {
    let data = await fetch('quiz-questions.json')
        .then(respone => respone.json())

    console.clear();

    let questions = [];
    let answers = [];
    let corrects = [];
    data.forEach(question => {
        questions.push(question['name']);
        answers.push([question['a'], question['b']]);
        corrects.push(question['correct']);
    })
    return { questions, answers, corrects };
}

const generateRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

async function createQuestion() {
    let { questions, answers, corrects } = await getData();
    // questions
    let randomQuestion = questions[generateRandomNumber(0, questions.length - 1)];
    let idxRandomNumber = questions.indexOf(randomQuestion);
    // answers
    let answersRandomQuestion = answers[idxRandomNumber];
    let correctAnswers = corrects[idxRandomNumber];
    return [randomQuestion, answersRandomQuestion, correctAnswers, questions, idxRandomNumber];
}


// creating question in HTML
const questionUI = document.querySelector('#ui-question');
const answerA = document.querySelector('.answerA');
const answerB = document.querySelector('.answerB');
const questionNumber = document.querySelector('#question-number');

async function createQuestionUI() {
    // remove childrens
    questionUI.innerHTML = '';
    answerA.innerHTML = '';
    answerB.innerHTML = '';

    const quetionHTML = document.createElement('p');
    quetionHTML.textContent = randomQuestion;
    questionUI.appendChild(quetionHTML);

    const answeraHTML = document.createElement('p');
    answeraHTML.textContent = answersRandomQuestion[0];
    answerA.append(answeraHTML);

    const answerbHTML = document.createElement('p');
    answerbHTML.textContent = answersRandomQuestion[1];
    answerB.append(answerbHTML);

    questionNumber.textContent = `Question ${idxRandomNumber} / ${questions.length}`;
}

const generateButton = document.querySelector('#generateButton');
generateButton.onclick = function () {

    document.querySelector('main').style.display = 'flex';
    answerA.style.backgroundColor = '#26282e';
    answerB.style.backgroundColor = '#26282e';
    createQuestion()
        .then((values) => {
            randomQuestion = values[0];
            answersRandomQuestion = values[1];
            correctAnswers = values[2];
            questions = values[3];
            idxRandomNumber = values[4];
        })
        .then(() => {
            createQuestionUI();
        })
}

window.checkCorrectness = async function (key) {
    if (key === correctAnswers && key === 'b') {
        answerB.style.backgroundColor = 'var(--color1)';
    }

    else if (key === correctAnswers && key === 'a') {
        answerA.style.backgroundColor = 'var(--color1)';
    }

    else if (key != correctAnswers && key === 'a') {
        answerA.style.backgroundColor = 'var(--color2)';
    }

    else if (key != correctAnswers && key === 'b') {
        answerB.style.backgroundColor = 'var(--color2)';
    }

}