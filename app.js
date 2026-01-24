const euCountries = [
    { country: 'België', capital: 'Brussel' },
    { country: 'Bulgarije', capital: 'Sofia' },
    { country: 'Cyprus', capital: 'Nicosia' },
    { country: 'Denemarken', capital: 'Kopenhagen' },
    { country: 'Duitsland', capital: 'Berlijn' },
    { country: 'Estland', capital: 'Tallinn' },
    { country: 'Finland', capital: 'Helsinki' },
    { country: 'Frankrijk', capital: 'Parijs' },
    { country: 'Griekenland', capital: 'Athene' },
    { country: 'Hongarije', capital: 'Boedapest' },
    { country: 'Ierland', capital: 'Dublin' },
    { country: 'Italië', capital: 'Rome' },
    { country: 'Kroatië', capital: 'Zagreb' },
    { country: 'Letland', capital: 'Riga' },
    { country: 'Litouwen', capital: 'Vilnius' },
    { country: 'Luxemburg', capital: 'Luxemburg' },
    { country: 'Malta', capital: 'Valletta' },
    { country: 'Nederland', capital: 'Amsterdam' },
    { country: 'Oostenrijk', capital: 'Wenen' },
    { country: 'Polen', capital: 'Warschau' },
    { country: 'Portugal', capital: 'Lissabon' },
    { country: 'Roemenië', capital: 'Boekarest' },
    { country: 'Slovenië', capital: 'Ljubljana' },
    { country: 'Slowakije', capital: 'Bratislava' },
    { country: 'Spanje', capital: 'Madrid' },
    { country: 'Tsjechië', capital: 'Praag' },
    { country: 'Zweden', capital: 'Stockholm' }
];

let quiz = [];
let currentIndex = 0;
let score = 0;
let mistakes = [];
let isRevealed = false;

function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function initQuiz() {
    const shuffled = shuffleArray(euCountries);
    quiz = shuffled.map(item => {
        const showCountry = Math.random() < 0.5;
        return {
            question: showCountry ? item.country : item.capital,
            answer: showCountry ? item.capital : item.country,
            isCountryQuestion: showCountry
        };
    });
    currentIndex = 0;
    score = 0;
    mistakes = [];
    isRevealed = false;
}

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

function updateProgress() {
    const progress = ((currentIndex) / quiz.length) * 100;
    document.getElementById('progressFill').style.width = progress + '%';
    document.getElementById('progressText').textContent = `Vraag ${currentIndex + 1} van ${quiz.length}`;
}

function showQuestion() {
    if (currentIndex >= quiz.length) {
        showResults();
        return;
    }

    const current = quiz[currentIndex];
    document.getElementById('questionText').textContent = current.question;
    document.getElementById('answerText').textContent = current.answer;
    document.getElementById('answerText').classList.add('hidden');
    document.getElementById('answerButtons').classList.add('hidden');
    document.getElementById('flashcard').classList.remove('revealed');
    isRevealed = false;
    updateProgress();
}

function revealAnswer() {
    if (isRevealed) return;
    
    document.getElementById('answerText').classList.remove('hidden');
    document.getElementById('answerButtons').classList.remove('hidden');
    document.getElementById('flashcard').classList.add('revealed');
    isRevealed = true;
}

function handleCorrect() {
    if (!isRevealed) return;
    score++;
    nextQuestion();
}

function handleWrong() {
    if (!isRevealed) return;
    const current = quiz[currentIndex];
    mistakes.push({
        question: current.question,
        answer: current.answer
    });
    nextQuestion();
}

function nextQuestion() {
    currentIndex++;
    showQuestion();
}

function showResults() {
    showScreen('resultsScreen');
    
    const scoreDisplay = document.getElementById('scoreDisplay');
    const percentage = Math.round((score / quiz.length) * 100);
    scoreDisplay.innerHTML = `
        <div class="score">${score}/${quiz.length}</div>
        <div class="score-text">${percentage}% correct</div>
    `;

    const mistakesSection = document.getElementById('mistakesSection');
    if (mistakes.length > 0) {
        mistakesSection.classList.remove('hidden');
        const mistakesTable = document.getElementById('mistakesTable');
        mistakesTable.innerHTML = mistakes.map(mistake => `
            <div class="mistake-row">
                <div class="mistake-question">${mistake.question}</div>
                <div class="mistake-answer">→ ${mistake.answer}</div>
            </div>
        `).join('');
    } else {
        mistakesSection.classList.add('hidden');
    }
}

document.getElementById('startBtn').addEventListener('click', () => {
    initQuiz();
    showScreen('quizScreen');
    showQuestion();
});

document.getElementById('flashcard').addEventListener('click', () => {
    if (!isRevealed) {
        revealAnswer();
    }
});

document.getElementById('correctBtn').addEventListener('click', handleCorrect);
document.getElementById('wrongBtn').addEventListener('click', handleWrong);

document.getElementById('restartBtn').addEventListener('click', () => {
    initQuiz();
    showScreen('quizScreen');
    showQuestion();
});

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js');
}
