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

// World map quiz variables
let worldMap = null;
let worldData = null;
let worldQuiz = [];
let worldCurrentIndex = 0;
let worldScore = 0;
let selectedRegion = null;
let worldGeoJsonLayer = null;

const continentsAndOceans = [
    { name: 'Azië', type: 'continent' },
    { name: 'Afrika', type: 'continent' },
    { name: 'Noord-Amerika', type: 'continent' },
    { name: 'Zuid-Amerika', type: 'continent' },
    { name: 'Antarctica', type: 'continent' },
    { name: 'Europa', type: 'continent' },
    { name: 'Oceanië', type: 'continent' },
    { name: 'Grote Oceaan', type: 'ocean' },
    { name: 'Atlantische Oceaan', type: 'ocean' },
    { name: 'Indische Oceaan', type: 'ocean' },
    { name: 'Noordelijke IJszee', type: 'ocean' }
];

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
        attributionControl: false,
        minZoom: 3,
        maxZoom: 7
    }).setView([54, 20], 3.2);
    
    // Voeg een simpele tile layer toe als achtergrond
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png', {
        maxZoom: 19
    }).addTo(map);
    
    try {
        const response = await fetch('https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson');
        europeData = await response.json();
        console.log('Map data loaded:', europeData.features.length, 'countries');
        
        // Toon direct alle EU landen in lichtgrijs
        const euIsoCodes = euCountries.map(c => c.iso);
        console.log('Looking for EU countries with ISO codes:', euIsoCodes);
        
        // Debug: check wat voor properties er zijn
        if (europeData.features.length > 0) {
            console.log('Sample country properties:', Object.keys(europeData.features[0].properties));
            console.log('Sample country:', europeData.features[0].properties);
            
            // Zoek ALLE landen met FRA in hun ISO code
            console.log('=== SEARCHING FOR FRANCE ===');
            const franceMatches = europeData.features.filter(f => {
                const iso = f.properties['ISO3166-1-Alpha-3'];
                const name = f.properties.name;
                return iso === 'FRA' || name?.toLowerCase().includes('fran');
            });
            console.log('Found', franceMatches.length, 'France matches:');
            franceMatches.forEach(f => {
                console.log('France ISO:', f.properties['ISO3166-1-Alpha-3'], 'Name:', f.properties.name);
                console.log('Full France properties:', f.properties);
            });
        }
        
        let foundCount = 0;
        geoJsonLayer = L.geoJSON(europeData, {
            style: function(feature) {
                // Probeer verschillende ISO property namen
                const iso = feature.properties.ISO_A3 || 
                           feature.properties['ISO3166-1-Alpha-3'] || 
                           feature.properties.ADM0_A3;
                
                // WORKAROUND: Frankrijk heeft '-99' als ISO in deze dataset
                const isFrance = feature.properties.name === 'France';
                const isEU = euIsoCodes.includes(iso) || isFrance;
                
                if (isEU) {
                    foundCount++;
                    const name = feature.properties.NAME || feature.properties.ADMIN || feature.properties.name;
                    console.log('Found EU country:', name, 'ISO:', iso);
                }
                return {
                    fillColor: isEU ? '#d0d0ff' : '#f5f5f5',
                    fillOpacity: isEU ? 0.7 : 0.2,
                    color: isEU ? '#667eea' : '#ccc',
                    weight: isEU ? 2 : 1
                };
            },
            filter: function(feature) {
                const iso = feature.properties.ISO_A3 || 
                           feature.properties['ISO3166-1-Alpha-3'] || 
                           feature.properties.ADM0_A3;
                const isFrance = feature.properties.name === 'France';
                return euIsoCodes.includes(iso) || isFrance;
            }
        }).addTo(map);
        
        console.log('EU countries displayed on map:', foundCount);
        
        setTimeout(() => {
            if (map) map.invalidateSize();
        }, 100);
    } catch (error) {
        console.error('Error loading map data:', error);
    }
}

function highlightCountry(countryIso) {
    if (!map || !europeData) {
        console.log('Map or data not ready');
        return;
    }
    
    console.log('Highlighting country with ISO:', countryIso);
    
    if (geoJsonLayer) {
        map.removeLayer(geoJsonLayer);
    }
    
    const euIsoCodes = euCountries.map(c => c.iso);
    let highlightedCountryName = '';
    
    geoJsonLayer = L.geoJSON(europeData, {
        style: function(feature) {
            const iso = feature.properties.ISO_A3 || 
                       feature.properties['ISO3166-1-Alpha-3'] || 
                       feature.properties.ADM0_A3;
            
            // WORKAROUND: Frankrijk heeft '-99' als ISO in deze dataset
            const isFrance = feature.properties.name === 'France';
            const isTarget = iso === countryIso || (countryIso === 'FRA' && isFrance);
            
            if (isTarget) {
                highlightedCountryName = feature.properties.NAME || feature.properties.ADMIN || feature.properties.name;
                console.log('Target country found:', highlightedCountryName, 'ISO:', iso);
                return {
                    fillColor: '#667eea',
                    fillOpacity: 0.9,
                    color: '#764ba2',
                    weight: 4
                };
            }
            
            return {
                fillColor: '#d0d0ff',
                fillOpacity: 0.4,
                color: '#999',
                weight: 1
            };
        },
        filter: function(feature) {
            const iso = feature.properties.ISO_A3 || 
                       feature.properties['ISO3166-1-Alpha-3'] || 
                       feature.properties.ADM0_A3;
            const isFrance = feature.properties.name === 'France';
            return euIsoCodes.includes(iso) || isFrance;
        }
    }).addTo(map);
    
    // Houd Europa altijd in beeld - van Portugal tot Cyprus, van Finland tot Malta
    map.setView([54, 20], 3.2, { animate: false });
    
    console.log('Highlighted:', highlightedCountryName);
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
        const mode = button.getAttribute('data-mode');
        
        if (mode === 'world') {
            await initWorldMap();
            initWorldQuiz();
            showScreen('worldQuizScreen');
        } else {
            await initMap();
            initQuiz(mode);
            showScreen('quizScreen');
            showQuestion();
        }
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

// ============================================
// WORLD MAP QUIZ FUNCTIONS
// ============================================

async function initWorldMap() {
    if (worldMap) {
        setTimeout(() => worldMap.invalidateSize(), 100);
        return;
    }
    
    worldMap = L.map('worldMap', {
        zoomControl: false,
        dragging: false,
        scrollWheelZoom: false,
        doubleClickZoom: false,
        boxZoom: false,
        keyboard: false,
        tap: false,
        touchZoom: false,
        attributionControl: false,
        minZoom: 1,
        maxZoom: 3
    }).setView([20, 0], 1.5);
    
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png', {
        maxZoom: 19
    }).addTo(worldMap);
    
    // Wacht even voor de map om te renderen
    setTimeout(() => {
        if (worldMap) {
            worldMap.invalidateSize();
            drawContinentsAndOceans();
        }
    }, 200);
}

function drawContinentsAndOceans() {
    if (!worldMap) return;
    
    // Definieer grote rechthoeken/polygonen voor continenten en oceanen
    const regions = [
        // Continenten
        { name: 'Azië', type: 'continent', bounds: [[10, 26], [75, 145]], color: '#fbbf24' },
        { name: 'Afrika', type: 'continent', bounds: [[-35, -17], [37, 51]], color: '#f87171' },
        { name: 'Noord-Amerika', type: 'continent', bounds: [[7, -170], [72, -50]], color: '#34d399' },
        { name: 'Zuid-Amerika', type: 'continent', bounds: [[-56, -82], [12, -34]], color: '#60a5fa' },
        { name: 'Antarctica', type: 'continent', bounds: [[-90, -180], [-60, 180]], color: '#e0e0e0' },
        { name: 'Europa', type: 'continent', bounds: [[36, -10], [71, 40]], color: '#c084fc' },
        { name: 'Oceanië', type: 'continent', bounds: [[-47, 110], [-10, 180]], color: '#fb923c' },
        
        // Oceanen
        { name: 'Grote Oceaan', type: 'ocean', bounds: [[-60, 120], [60, -80]], color: '#3b82f6' },
        { name: 'Atlantische Oceaan', type: 'ocean', bounds: [[-60, -70], [60, 20]], color: '#0ea5e9' },
        { name: 'Indische Oceaan', type: 'ocean', bounds: [[-60, 20], [25, 120]], color: '#06b6d4' },
        { name: 'Noordelijke IJszee', type: 'ocean', bounds: [[66, -180], [90, 180]], color: '#67e8f9' }
    ];
    
    regions.forEach(region => {
        const rectangle = L.rectangle(region.bounds, {
            color: '#667eea',
            weight: 2,
            fillColor: region.color,
            fillOpacity: 0.3,
            className: 'region-polygon'
        }).addTo(worldMap);
        
        rectangle.regionData = region;
        
        rectangle.on('click', function(e) {
            handleRegionClick(rectangle, region);
            L.DomEvent.stopPropagation(e);
        });
        
        // Voeg label toe
        const center = rectangle.getBounds().getCenter();
        L.marker(center, {
            icon: L.divIcon({
                className: 'region-label',
                html: `<div style="background: white; padding: 4px 8px; border-radius: 4px; font-weight: bold; font-size: 12px; box-shadow: 0 2px 4px rgba(0,0,0,0.2);">${region.name}</div>`,
                iconSize: [100, 30]
            })
        }).addTo(worldMap);
    });
    
    console.log('Continents and oceans drawn');
}

function handleRegionClick(rectangle, region) {
    if (!worldQuiz[worldCurrentIndex]) return;
    
    // Verwijder vorige selectie
    if (selectedRegion) {
        selectedRegion.setStyle({
            fillOpacity: 0.3,
            weight: 2
        });
    }
    
    // Markeer nieuwe selectie
    rectangle.setStyle({
        fillOpacity: 0.7,
        weight: 4,
        color: '#764ba2'
    });
    
    selectedRegion = rectangle;
    
    console.log('Selected:', region.name);
}

function initWorldQuiz() {
    worldQuiz = shuffleArray([...continentsAndOceans]);
    worldCurrentIndex = 0;
    worldScore = 0;
    selectedRegion = null;
    showWorldQuestion();
}

function showWorldQuestion() {
    if (worldCurrentIndex >= worldQuiz.length) {
        showWorldResults();
        return;
    }
    
    const current = worldQuiz[worldCurrentIndex];
    document.getElementById('worldQuestionText').textContent = `Klik op: ${current.name}`;
    document.getElementById('worldProgressText').textContent = `Vraag ${worldCurrentIndex + 1} van ${worldQuiz.length}`;
}

function checkWorldAnswer() {
    if (!selectedRegion) {
        alert('Klik eerst op de kaart om je antwoord te selecteren!');
        return;
    }
    
    const current = worldQuiz[worldCurrentIndex];
    const selectedRegionData = selectedRegion.regionData;
    
    console.log('Checking:', selectedRegionData.name, 'vs', current.name);
    
    const isCorrect = selectedRegionData.name === current.name;
    
    if (isCorrect) {
        worldScore++;
        selectedRegion.setStyle({
            fillColor: '#10b981',
            fillOpacity: 0.8,
            color: '#059669',
            weight: 4
        });
    } else {
        selectedRegion.setStyle({
            fillColor: '#ef4444',
            fillOpacity: 0.8,
            color: '#dc2626',
            weight: 4
        });
    }
    
    setTimeout(() => {
        worldCurrentIndex++;
        
        // Reset alle regio's naar originele kleur
        if (selectedRegion) {
            const origColor = selectedRegion.regionData.color;
            selectedRegion.setStyle({
                fillColor: origColor,
                fillOpacity: 0.3,
                color: '#667eea',
                weight: 2
            });
        }
        selectedRegion = null;
        
        showWorldQuestion();
    }, 1500);
}

function showWorldResults() {
    document.getElementById('scoreDisplay').innerHTML = `
        <div class="score-big">${worldScore}</div>
        <div class="score-label">van de ${worldQuiz.length} correct</div>
    `;
    
    // Verberg mistakes sectie voor wereldkaart quiz
    document.getElementById('mistakesSection').classList.add('hidden');
    
    showScreen('resultsScreen');
}

document.getElementById('submitAnswerBtn').addEventListener('click', checkWorldAnswer);

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js');
}
