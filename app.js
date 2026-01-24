const euCountries = [
    { country: 'België', capital: 'Brussel', flag: '🇧🇪', code: 'BE' },
    { country: 'Bulgarije', capital: 'Sofia', flag: '🇧🇬', code: 'BG' },
    { country: 'Cyprus', capital: 'Nicosia', flag: '🇨🇾', code: 'CY' },
    { country: 'Denemarken', capital: 'Kopenhagen', flag: '🇩🇰', code: 'DK' },
    { country: 'Duitsland', capital: 'Berlijn', flag: '🇩🇪', code: 'DE' },
    { country: 'Estland', capital: 'Tallinn', flag: '🇪🇪', code: 'EE' },
    { country: 'Finland', capital: 'Helsinki', flag: '🇫🇮', code: 'FI' },
    { country: 'Frankrijk', capital: 'Parijs', flag: '🇫🇷', code: 'FR' },
    { country: 'Griekenland', capital: 'Athene', flag: '🇬🇷', code: 'GR' },
    { country: 'Hongarije', capital: 'Boedapest', flag: '🇭🇺', code: 'HU' },
    { country: 'Ierland', capital: 'Dublin', flag: '🇮🇪', code: 'IE' },
    { country: 'Italië', capital: 'Rome', flag: '🇮🇹', code: 'IT' },
    { country: 'Kroatië', capital: 'Zagreb', flag: '🇭🇷', code: 'HR' },
    { country: 'Letland', capital: 'Riga', flag: '🇱🇻', code: 'LV' },
    { country: 'Litouwen', capital: 'Vilnius', flag: '🇱🇹', code: 'LT' },
    { country: 'Luxemburg', capital: 'Luxemburg', flag: '🇱🇺', code: 'LU' },
    { country: 'Malta', capital: 'Valletta', flag: '🇲🇹', code: 'MT' },
    { country: 'Nederland', capital: 'Amsterdam', flag: '🇳🇱', code: 'NL' },
    { country: 'Oostenrijk', capital: 'Wenen', flag: '🇦🇹', code: 'AT' },
    { country: 'Polen', capital: 'Warschau', flag: '🇵🇱', code: 'PL' },
    { country: 'Portugal', capital: 'Lissabon', flag: '🇵🇹', code: 'PT' },
    { country: 'Roemenië', capital: 'Boekarest', flag: '🇷🇴', code: 'RO' },
    { country: 'Slovenië', capital: 'Ljubljana', flag: '🇸🇮', code: 'SI' },
    { country: 'Slowakije', capital: 'Bratislava', flag: '🇸🇰', code: 'SK' },
    { country: 'Spanje', capital: 'Madrid', flag: '🇪🇸', code: 'ES' },
    { country: 'Tsjechië', capital: 'Praag', flag: '🇨🇿', code: 'CZ' },
    { country: 'Zweden', capital: 'Stockholm', flag: '🇸🇪', code: 'SE' }
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
            country: item.country,
            countryCode: item.code
        };
    });
    currentIndex = 0;
    score = 0;
    mistakes = [];
    isRevealed = false;
}

let europeSVG = null;

async function loadEuropeMap() {
    if (europeSVG) return europeSVG;
    
    try {
        const response = await fetch('europe-map.svg');
        const svgText = await response.text();
        europeSVG = svgText;
        return svgText;
    } catch (error) {
        console.error('Error loading map:', error);
        return null;
    }
}

function highlightCountry(countryCode) {
    const mapContainer = document.getElementById('mapContainer');
    
    if (!mapContainer || !europeSVG) return;
    
    mapContainer.innerHTML = europeSVG;
    
    const svgElement = mapContainer.querySelector('svg');
    if (svgElement) {
        svgElement.style.width = '100%';
        svgElement.style.height = 'auto';
        svgElement.style.maxHeight = '200px';
    }
    
    const allCountries = mapContainer.querySelectorAll('.country');
    allCountries.forEach(c => c.classList.remove('highlighted'));
    
    const countryPath = mapContainer.querySelector(`#${countryCode}`);
    if (countryPath) {
        countryPath.classList.add('highlighted');
    }
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
    
    highlightCountry(current.countryCode);
    
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
    button.addEventListener('click', async () => {
        await loadEuropeMap();
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
