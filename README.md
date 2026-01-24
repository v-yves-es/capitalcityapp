# 🇪🇺 EU Landen & Hoofdsteden Quiz App

Een mobiele flashcard-app om alle 27 EU-landen en hun hoofdsteden te leren. De app werkt offline en kan geïnstalleerd worden op je iPhone direct vanuit de browser.

## ✨ Functies

- 📱 Installeerbaar op iPhone als app
- 🔄 Willekeurige volgorde van vragen
- ❓ Vragen tonen land of hoofdstad (willekeurig)
- ✅ Bijhouden van score en fouten
- 📊 Overzicht van fouten aan het einde
- 🎯 Alle 27 EU-landen met Nederlandse namen
- 🌐 Werkt offline

## 🚀 Installatie op iPhone

### Methode 1: Lokaal testen (zonder server)
1. Open een Terminal
2. Ga naar deze map: `cd /Users/seurynck/Documents/AchieveIT/GitHub/capitals-app`
3. Start een lokale server:
   ```bash
   python3 -m http.server 8000
   ```
4. Open op je iPhone Safari en ga naar: `http://[jouw-computer-ip]:8000`
   - Zoek je lokale IP: `ifconfig | grep "inet " | grep -v 127.0.0.1`

### Methode 2: GitHub Pages (aanbevolen)
1. Maak een GitHub repository
2. Upload alle bestanden (index.html, app.js, styles.css, etc.)
3. Activeer GitHub Pages in repository settings
4. Open de GitHub Pages URL op je iPhone in Safari
5. Tik op het "Deel" icoon (vierkant met pijltje omhoog)
6. Scroll naar beneden en tik op "Zet op beginscherm"
7. Geef de app een naam en tik op "Voeg toe"

De app staat nu op je iPhone beginscherm! 📱

## 🎮 Hoe te spelen

1. **Start**: Tik op "Start Quiz"
2. **Vraag**: Je ziet een land of hoofdstad
3. **Antwoord**: Tik op de kaart om het antwoord te zien
4. **Beoordeel**: Tik op ✓ (goed) of ✗ (fout)
5. **Volgende**: Automatisch naar de volgende vraag
6. **Resultaat**: Na 27 vragen zie je je score en fouten
7. **Opnieuw**: Tik op "Opnieuw Spelen" voor een nieuwe ronde

## 📋 EU Landen & Hoofdsteden

De app bevat alle 27 EU-landen:

🇪🇺 Land | 🏛️ Hoofdstad
---|---
België | Brussel
Bulgarije | Sofia
Cyprus | Nicosia
Denemarken | Kopenhagen
Duitsland | Berlijn
Estland | Tallinn
Finland | Helsinki
Frankrijk | Parijs
Griekenland | Athene
Hongarije | Boedapest
Ierland | Dublin
Italië | Rome
Kroatië | Zagreb
Letland | Riga
Litouwen | Vilnius
Luxemburg | Luxemburg
Malta | Valletta
Nederland | Amsterdam
Oostenrijk | Wenen
Polen | Warschau
Portugal | Lissabon
Roemenië | Boekarest
Slovenië | Ljubljana
Slowakije | Bratislava
Spanje | Madrid
Tsjechië | Praag
Zweden | Stockholm

## 🛠️ Technische Details

- **Progressive Web App (PWA)** - installeerbaar en werkt offline
- **Pure HTML/CSS/JavaScript** - geen frameworks, snel en lichtgewicht
- **Service Worker** - caching voor offline gebruik
- **Responsive Design** - geoptimaliseerd voor mobiel
- **iOS optimalisatie** - native app-gevoel met Apple meta tags

## 📁 Bestanden

- `index.html` - Hoofdpagina met HTML structuur
- `app.js` - Quiz logica en interactiviteit
- `styles.css` - Styling en responsive design
- `manifest.json` - PWA configuratie
- `sw.js` - Service Worker voor offline functionaliteit
- `icon.png` - App icoon (512x512)

## 🎨 Features

✅ Alle 27 EU-landen  
✅ Nederlandse namen  
✅ Willekeurige vraagvolgorde  
✅ Land → Hoofdstad én Hoofdstad → Land vragen  
✅ Score bijhouden  
✅ Fouten tracken met overzicht  
✅ Progress bar  
✅ Mooie gradient UI  
✅ Grote tikbare knoppen  
✅ Installeerbaar als app  
✅ Werkt offline  

Veel succes met leren! 🎓
