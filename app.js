const euCountries = [
    { country: 'België', capital: 'Brussel', flag: '🇧🇪' },
    { country: 'Bulgarije', capital: 'Sofia', flag: '🇧🇬' },
    { country: 'Cyprus', capital: 'Nicosia', flag: '🇨🇾' },
    { country: 'Denemarken', capital: 'Kopenhagen', flag: '🇩🇰' },
    { country: 'Duitsland', capital: 'Berlijn', flag: '🇩🇪' },
    { country: 'Estland', capital: 'Tallinn', flag: '🇪🇪' },
    { country: 'Finland', capital: 'Helsinki', flag: '🇫🇮' },
    { country: 'Frankrijk', capital: 'Parijs', flag: '🇫🇷' },
    { country: 'Griekenland', capital: 'Athene', flag: '🇬🇷' },
    { country: 'Hongarije', capital: 'Boedapest', flag: '🇭🇺' },
    { country: 'Ierland', capital: 'Dublin', flag: '🇮🇪' },
    { country: 'Italië', capital: 'Rome', flag: '🇮🇹' },
    { country: 'Kroatië', capital: 'Zagreb', flag: '🇭🇷' },
    { country: 'Letland', capital: 'Riga', flag: '🇱🇻' },
    { country: 'Litouwen', capital: 'Vilnius', flag: '🇱🇹' },
    { country: 'Luxemburg', capital: 'Luxemburg', flag: '🇱🇺' },
    { country: 'Malta', capital: 'Valletta', flag: '🇲🇹' },
    { country: 'Nederland', capital: 'Amsterdam', flag: '🇳🇱' },
    { country: 'Oostenrijk', capital: 'Wenen', flag: '🇦🇹' },
    { country: 'Polen', capital: 'Warschau', flag: '🇵🇱' },
    { country: 'Portugal', capital: 'Lissabon', flag: '🇵🇹' },
    { country: 'Roemenië', capital: 'Boekarest', flag: '🇷🇴' },
    { country: 'Slovenië', capital: 'Ljubljana', flag: '🇸🇮' },
    { country: 'Slowakije', capital: 'Bratislava', flag: '🇸🇰' },
    { country: 'Spanje', capital: 'Madrid', flag: '🇪🇸' },
    { country: 'Tsjechië', capital: 'Praag', flag: '🇨🇿' },
    { country: 'Zweden', capital: 'Stockholm', flag: '🇸🇪' }
];

let quiz = [];
let currentIndex = 0;
let score = 0;
let mistakes = [];
let isRevealed = false;
let gameMode = 'random';

function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function initQuiz(mode) {
    gameMode = mode;
    const shuffled = shuffleArray(euCountries);
    
    quiz = shuffled.map(item => {
        let showCountry;
        
        if (mode === 'countries') {
            showCountry = true;
        } else if (mode === 'capitals') {
            showCountry = false;
        } else {
            showCountry = Math.random() < 0.5;
        }
        
        return {
            question: showCountry ? item.country : item.capital,
            answer: showCountry ? item.capital : item.country,
            isCountryQuestion: showCountry,
            flag: item.flag,
            country: item.country
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
    const questionDisplay = current.isCountryQuestion 
        ? `${current.flag} ${current.question}` 
        : current.question;
    const answerDisplay = current.isCountryQuestion 
        ? current.answer 
        : `${current.flag} ${current.answer}`;
    
    document.getElementById('questionText').textContent = questionDisplay;
    document.getElementById('answerText').textContent = answerDisplay;
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
    const questionDisplay = current.isCountryQuestion 
        ? `${current.flag} ${current.question}` 
        : current.question;
    const answerDisplay = current.isCountryQuestion 
        ? current.answer 
        : `${current.flag} ${current.answer}`;
    
    mistakes.push({
        question: questionDisplay,
        answer: answerDisplay
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

document.querySelectorAll('.btn-mode').forEach(button => {
    button.addEventListener('click', () => {
        const mode = button.getAttribute('data-mode');
        initQuiz(mode);
        showScreen('quizScreen');
        showQuestion();
    });
});

document.getElementById('flashcard').addEventListener('click', () => {
    if (!isRevealed) {
        revealAnswer();
    }
});

document.getElementById('correctBtn').addEventListener('click', handleCorrect);
document.getElementById('wrongBtn').addEventListener('click', handleWrong);

document.getElementById('restartBtn').addEventListener('click', () => {
    showScreen('startScreen');
});

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js');
}
