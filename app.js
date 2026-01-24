const euCountries = [
    { country: 'België', capital: 'Brussel', flag: '🇧🇪', code: 'BE', iso: 'BEL' },
    { country: 'Bulgarije', capital: 'Sofia', flag: '🇧🇬', code: 'BG', iso: 'BGR' },
    { country: 'Cyprus', capital: 'Nicosia', flag: '🇨🇾', code: 'CY', iso: 'CYP' },
    { country: 'Denemarken', capital: 'Kopenhagen', flag: '🇩🇰', code: 'DK', iso: 'DNK' },
    { country: 'Duitsland', capital: 'Berlijn', flag: '🇩🇪', code: 'DE', iso: 'DEU' },
    { country: 'Estland', capital: 'Tallinn', flag: '🇪🇪', code: 'EE', iso: 'EST' },
    { country: 'Finland', capital: 'Helsinki', flag: '🇫🇮', code: 'FI', iso: 'FIN' },
    { country: 'Frankrijk', capital: 'Parijs', flag: '🇫🇷', code: 'FR', iso: 'FRA' },
    { country: 'Griekenland', capital: 'Athene', flag: '🇬🇷', code: 'GR', iso: 'GRC' },
    { country: 'Hongarije', capital: 'Boedapest', flag: '🇭🇺', code: 'HU', iso: 'HUN' },
    { country: 'Ierland', capital: 'Dublin', flag: '🇮🇪', code: 'IE', iso: 'IRL' },
    { country: 'Italië', capital: 'Rome', flag: '🇮🇹', code: 'IT', iso: 'ITA' },
    { country: 'Kroatië', capital: 'Zagreb', flag: '🇭🇷', code: 'HR', iso: 'HRV' },
    { country: 'Letland', capital: 'Riga', flag: '🇱🇻', code: 'LV', iso: 'LVA' },
    { country: 'Litouwen', capital: 'Vilnius', flag: '🇱🇹', code: 'LT', iso: 'LTU' },
    { country: 'Luxemburg', capital: 'Luxemburg', flag: '🇱🇺', code: 'LU', iso: 'LUX' },
    { country: 'Malta', capital: 'Valletta', flag: '🇲🇹', code: 'MT', iso: 'MLT' },
    { country: 'Nederland', capital: 'Amsterdam', flag: '🇳🇱', code: 'NL', iso: 'NLD' },
    { country: 'Oostenrijk', capital: 'Wenen', flag: '🇦🇹', code: 'AT', iso: 'AUT' },
    { country: 'Polen', capital: 'Warschau', flag: '🇵🇱', code: 'PL', iso: 'POL' },
    { country: 'Portugal', capital: 'Lissabon', flag: '🇵🇹', code: 'PT', iso: 'PRT' },
    { country: 'Roemenië', capital: 'Boekarest', flag: '🇷🇴', code: 'RO', iso: 'ROU' },
    { country: 'Slovenië', capital: 'Ljubljana', flag: '🇸🇮', code: 'SI', iso: 'SVN' },
    { country: 'Slowakije', capital: 'Bratislava', flag: '🇸🇰', code: 'SK', iso: 'SVK' },
    { country: 'Spanje', capital: 'Madrid', flag: '🇪🇸', code: 'ES', iso: 'ESP' },
    { country: 'Tsjechië', capital: 'Praag', flag: '🇨🇿', code: 'CZ', iso: 'CZE' },
    { country: 'Zweden', capital: 'Stockholm', flag: '🇸🇪', code: 'SE', iso: 'SWE' }
];

let quiz = [];
let currentIndex = 0;
let score = 0;
let mistakes = [];
let isRevealed = false;
let gameMode = 'random';
let map = null;
let geoJsonLayer = null;
let europeData = null;

function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

async function initMap() {
    if (map) {
        setTimeout(() => map.invalidateSize(), 100);
        return;
    }
    
    map = L.map('map', {
        zoomControl: false,
        dragging: false,
        scrollWheelZoom: false,
        doubleClickZoom: false,
        boxZoom: false,
        keyboard: false,
        tap: false,
        touchZoom: false,
        attributionControl: false
    }).setView([54, 15], 3.5);
    
    try {
        const response = await fetch('https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson');
        europeData = await response.json();
        
        setTimeout(() => {
            if (map) map.invalidateSize();
        }, 100);
    } catch (error) {
        console.error('Error loading map data:', error);
    }
}

function highlightCountry(countryIso) {
    if (!map || !europeData) return;
    
    if (geoJsonLayer) {
        map.removeLayer(geoJsonLayer);
    }
    
    geoJsonLayer = L.geoJSON(europeData, {
        style: function(feature) {
            if (feature.properties.ISO_A3 === countryIso) {
                return {
                    fillColor: '#667eea',
                    fillOpacity: 0.8,
                    color: '#764ba2',
                    weight: 2
                };
            }
            return {
                fillColor: '#e8e8e8',
                fillOpacity: 0.5,
                color: '#999',
                weight: 1
            };
        },
        filter: function(feature) {
            const euIsoCodes = euCountries.map(c => c.iso);
            return euIsoCodes.includes(feature.properties.ISO_A3);
        }
    }).addTo(map);
    
    const targetCountry = europeData.features.find(f => f.properties.ISO_A3 === countryIso);
    if (targetCountry) {
        const bounds = L.geoJSON(targetCountry).getBounds();
        map.fitBounds(bounds, { padding: [20, 20], maxZoom: 5 });
    }
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
            countryIso: item.iso
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
    
    highlightCountry(current.countryIso);
    
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
        await initMap();
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
