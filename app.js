const IC = {
    check: '<svg viewBox="0 0 256 256" fill="currentColor"><path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"/></svg>',
    x: '<svg viewBox="0 0 256 256" fill="currentColor"><path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"/></svg>',
    undo: '<svg viewBox="0 0 256 256" fill="currentColor"><path d="M224,128a96,96,0,0,1-94.71,96H128A95.38,95.38,0,0,1,62.1,197.8a8,8,0,0,1,11-11.63A80,80,0,1,0,71.43,71.39a3.07,3.07,0,0,1-.26.25L44.59,96H72a8,8,0,0,1,0,16H24a8,8,0,0,1-8-8V56a8,8,0,0,1,16,0V85.8L60.25,60A96,96,0,0,1,224,128Z"/></svg>',
    arrow: '<svg viewBox="0 0 256 256" fill="currentColor"><path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"/></svg>',
    house: '<svg viewBox="0 0 256 256" fill="currentColor"><path d="M219.31,108.68l-80-80a16,16,0,0,0-22.62,0l-80,80A15.87,15.87,0,0,0,32,120v96a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V160h32v56a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V120A15.87,15.87,0,0,0,219.31,108.68ZM208,208H160V152a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8v56H48V120l80-80,80,80Z"/></svg>',
    map: '<svg viewBox="0 0 256 256" fill="currentColor"><path d="M228.92,49.69a8,8,0,0,0-6.86-1.45L160.93,63.52,99.58,32.84a8,8,0,0,0-5.52-.6l-64,16A8,8,0,0,0,24,56V200a8,8,0,0,0,9.94,7.76l61.13-15.28,61.35,30.68A8.15,8.15,0,0,0,160,224a8,8,0,0,0,1.94-.24l64-16A8,8,0,0,0,232,200V56A8,8,0,0,0,228.92,49.69ZM104,52.94l48,24V203.06l-48-24ZM40,62.25l48-12v127.5l-48,12Zm176,131.5-48,12V78.25l48-12Z"/></svg>',
    building: '<svg viewBox="0 0 256 256" fill="currentColor"><path d="M24,104H48v64H32a8,8,0,0,0,0,16H224a8,8,0,0,0,0-16H208V104h24a8,8,0,0,0,4.19-14.81l-104-64a8,8,0,0,0-8.38,0l-104,64A8,8,0,0,0,24,104Zm40,0H96v64H64Zm80,0v64H112V104Zm48,64H160V104h32ZM128,41.39,203.74,88H52.26ZM248,208a8,8,0,0,1-8,8H16a8,8,0,0,1,0-16H240A8,8,0,0,1,248,208Z"/></svg>',
    globe: '<svg viewBox="0 0 256 256" fill="currentColor"><path d="M128,24h0A104,104,0,1,0,232,128,104.12,104.12,0,0,0,128,24Zm88,104a87.61,87.61,0,0,1-3.33,24H174.16a157.44,157.44,0,0,0,0-48h38.51A87.61,87.61,0,0,1,216,128ZM102,168H154a115.11,115.11,0,0,1-26,45A115.27,115.27,0,0,1,102,168Zm-3.9-16a140.84,140.84,0,0,1,0-48h59.88a140.84,140.84,0,0,1,0,48ZM40,128a87.61,87.61,0,0,1,3.33-24H81.84a157.44,157.44,0,0,0,0,48H43.33A87.61,87.61,0,0,1,40,128ZM154,88H102a115.11,115.11,0,0,1,26-45A115.27,115.27,0,0,1,154,88Zm52.33,0H170.71a135.28,135.28,0,0,0-22.3-45.6A88.29,88.29,0,0,1,206.37,88ZM107.59,42.4A135.28,135.28,0,0,0,85.29,88H49.63A88.29,88.29,0,0,1,107.59,42.4ZM49.63,168H85.29a135.28,135.28,0,0,0,22.3,45.6A88.29,88.29,0,0,1,49.63,168Zm98.78,45.6a135.28,135.28,0,0,0,22.3-45.6h35.66A88.29,88.29,0,0,1,148.41,213.6Z"/></svg>',
    shuffle: '<svg viewBox="0 0 256 256" fill="currentColor"><path d="M237.66,178.34a8,8,0,0,1,0,11.32l-24,24a8,8,0,0,1-11.32-11.32L212.69,192H200.94a72.12,72.12,0,0,1-58.59-30.15l-41.72-58.4A56.1,56.1,0,0,0,55.06,80H32a8,8,0,0,1,0-16H55.06a72.12,72.12,0,0,1,58.59,30.15l41.72,58.4A56.1,56.1,0,0,0,200.94,176h11.75l-10.35-10.34a8,8,0,0,1,11.32-11.32ZM143,107a8,8,0,0,0,11.16-1.86l1.2-1.67A56.1,56.1,0,0,1,200.94,80h11.75L202.34,90.34a8,8,0,0,0,11.32,11.32l24-24a8,8,0,0,0,0-11.32l-24-24a8,8,0,0,0-11.32,11.32L212.69,64H200.94a72.12,72.12,0,0,0-58.59,30.15l-1.2,1.67A8,8,0,0,0,143,107Zm-30,42a8,8,0,0,0-11.16,1.86l-1.2,1.67A56.1,56.1,0,0,1,55.06,176H32a8,8,0,0,0,0,16H55.06a72.12,72.12,0,0,0,58.59-30.15l1.2-1.67A8,8,0,0,0,113,149Z"/></svg>'
};

// De 27 EU-landen: [naam, hoofdstad, ISO-nummer, Engelse naam, hoofdstad lon/lat, klein land]
const C = [
    ['België', 'Brussel', '056', 'Belgium', [4.35, 50.85]], ['Bulgarije', 'Sofia', '100', 'Bulgaria', [23.32, 42.7]], ['Cyprus', 'Nicosia', '196', 'Cyprus', [33.36, 35.17]],
    ['Denemarken', 'Kopenhagen', '208', 'Denmark', [12.57, 55.68]], ['Duitsland', 'Berlijn', '276', 'Germany', [13.4, 52.52]], ['Estland', 'Tallinn', '233', 'Estonia', [24.75, 59.44]],
    ['Finland', 'Helsinki', '246', 'Finland', [24.94, 60.17]], ['Frankrijk', 'Parijs', '250', 'France', [2.35, 48.86]], ['Griekenland', 'Athene', '300', 'Greece', [23.73, 37.98]],
    ['Hongarije', 'Boedapest', '348', 'Hungary', [19.04, 47.5]], ['Ierland', 'Dublin', '372', 'Ireland', [-6.26, 53.35]], ['Italië', 'Rome', '380', 'Italy', [12.5, 41.9]],
    ['Kroatië', 'Zagreb', '191', 'Croatia', [15.98, 45.81]], ['Letland', 'Riga', '428', 'Latvia', [24.11, 56.95]], ['Litouwen', 'Vilnius', '440', 'Lithuania', [25.28, 54.69]],
    ['Luxemburg', 'Luxemburg', '442', 'Luxembourg', [6.13, 49.61], true], ['Malta', 'Valletta', '470', 'Malta', [14.51, 35.9], true],
    ['Nederland', 'Amsterdam', '528', 'Netherlands', [4.9, 52.37]], ['Oostenrijk', 'Wenen', '040', 'Austria', [16.37, 48.21]], ['Polen', 'Warschau', '616', 'Poland', [21.01, 52.23]],
    ['Portugal', 'Lissabon', '620', 'Portugal', [-9.14, 38.72]], ['Roemenië', 'Boekarest', '642', 'Romania', [26.1, 44.43]], ['Slovenië', 'Ljubljana', '705', 'Slovenia', [14.51, 46.06]],
    ['Slowakije', 'Bratislava', '703', 'Slovakia', [17.11, 48.15]], ['Spanje', 'Madrid', '724', 'Spain', [-3.7, 40.42]], ['Tsjechië', 'Praag', '203', 'Czechia', [14.42, 50.08]],
    ['Zweden', 'Stockholm', '752', 'Sweden', [18.07, 59.33]]
].map(([name, capital, id, en, cap, small]) => ({ name, capital, id, en, cap, small }));

const MODES = [
    { k: 'land', t: ['Land', 'Hoofdstad'], ic: 'map' },
    { k: 'stad', t: ['Hoofdstad', 'Land'], ic: 'building' },
    { k: 'mix', t: ['Mix'], ic: 'shuffle' }
];

const PHOTOS = [
    { f: 'Tour_Eiffel_Wikimedia_Commons.jpg', m: 'Eiffeltoren', c: 'Parijs' },
    { f: 'Colosseo_2020.jpg', m: 'Colosseum', c: 'Rome' },
    { f: 'Brandenburger_Tor_abends.jpg', m: 'Brandenburger Tor', c: 'Berlijn' },
    { f: 'The_Parthenon_in_Athens.jpg', m: 'Parthenon', c: 'Athene' },
    { f: 'Parliament_Building,_Budapest,_outside.jpg', m: 'Parlementsgebouw', c: 'Boedapest' }
];
const photoURL = p => 'https://commons.wikimedia.org/wiki/Special:FilePath/' + encodeURIComponent(p.f) + '?width=960';

const BOX = { type: 'MultiPoint', coordinates: [[-11, 35], [33, 35], [-11, 66], [33, 66], [22, 69.5], [14, 34.5]] };
let WORLD = [], EUSET = new Set(), mapState = 'loading';

const shuffle = a => {
    a = [...a];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.random() * (i + 1) | 0;
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
};

// o: { hl: land om in te kleuren, cap: [lon, lat] hoofdstadstip }
function drawMap(el, o) {
    if (!el) return;
    if (mapState === 'error') {
        el.innerHTML = '<div class="map-error">Kaart kon niet laden. Controleer je internetverbinding.</div>';
        return;
    }
    if (mapState !== 'ready') return;
    const w = el.clientWidth, h = el.clientHeight;
    if (!w || !h) return;
    const proj = d3.geoAzimuthalEqualArea().rotate([-11, -52]).fitExtent([[10, 10], [w - 10, h - 10]], BOX).clipExtent([[0, 0], [w, h]]);
    const path = d3.geoPath(proj);
    const hf = o.hl && o.hl.f;
    let s = `<svg class="map" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}"><rect class="sea" width="${w}" height="${h}"/><path class="grat" d="${path(d3.geoGraticule10())}"/>`;
    for (const f of WORLD) {
        if (f === hf) continue;
        const d = path(f);
        if (d) s += `<path class="${EUSET.has(f) ? 'eu' : 'land'}" d="${d}"/>`;
    }
    if (hf) {
        const d = path(hf);
        if (d) s += `<path class="hl" d="${d}"/>`;
    }
    // Kleine landen zijn op deze schaal nauwelijks zichtbaar: markeer ze met een ring
    if (o.hl && o.hl.small) {
        const p = proj(o.hl.cap);
        s += `<circle class="pulse" cx="${p[0]}" cy="${p[1]}" r="8"/><circle class="ring" cx="${p[0]}" cy="${p[1]}" r="9"/><circle class="dot" cx="${p[0]}" cy="${p[1]}" r="3"/>`;
    }
    if (o.cap) {
        const p = proj(o.cap);
        s += `<circle class="pulse" cx="${p[0]}" cy="${p[1]}" r="8"/><circle class="cap" cx="${p[0]}" cy="${p[1]}" r="6"/>`;
    }
    el.innerHTML = s + '</svg>';
}

const modeLabel = k => MODES.find(m => m.k === k).t.join(' → ');

class App {
    constructor(el) {
        this.el = el;
        this.mode = 'land';
        this.view = 'splash';
        this.photo = PHOTOS[Math.random() * PHOTOS.length | 0];
        el.addEventListener('click', e => {
            const b = e.target.closest('[data-act]');
            if (b && !b.disabled) this.act(b.dataset.act, b.dataset.v);
        });
        // Toetsenbord op laptop: spatie/enter draait de kaart, ←/F = fout, →/G = goed
        document.addEventListener('keydown', e => {
            if (this.view === 'splash' && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); return this.act('tostart'); }
            if (this.view !== 'quiz') return;
            if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); this.act('rev'); }
            else if (e.key === 'ArrowRight' || e.key.toLowerCase() === 'g') this.act('goed');
            else if (e.key === 'ArrowLeft' || e.key.toLowerCase() === 'f') this.act('fout');
        });
        let t;
        window.addEventListener('resize', () => { clearTimeout(t); t = setTimeout(() => this.drawMaps(), 150); });
    }

    start() {
        this.order = shuffle(C).map(c => ({ c, dir: this.mode === 'mix' ? (Math.random() < .5 ? 'land' : 'stad') : this.mode }));
        this.n = this.order.length;
        this.i = 0;
        this.goed = 0;
        this.fout = 0;
        this.res = [];
        this.rev = false;
        this.filter = 'fout';
        this.view = 'quiz';
    }

    act(a, v) {
        if (a === 'tostart' || a === 'home') { this.view = 'start'; return this.render(); }
        if (a === 'pick') { this.mode = v; this.start(); return this.render(); }
        if (a === 'restart') { this.start(); return this.render(); }
        if (a === 'filter') { this.filter = v; return this.render(); }
        if (a === 'rev') {
            if (this.rev) return;
            this.rev = true;
            this.el.querySelector('.flip').classList.add('on');
            this.el.querySelectorAll('.duo button').forEach(x => x.disabled = false);
            this.drawMaps();
            return;
        }
        if ((a === 'goed' || a === 'fout') && this.rev) {
            this[a]++;
            this.res[this.i] = a === 'goed';
            this.i++;
            this.rev = false;
            if (this.i >= this.n) this.view = 'end';
            this.render();
        }
    }

    drawMaps() {
        if (this.view !== 'quiz') return;
        const q = this.order[this.i];
        drawMap(this.el.querySelector('[data-map]'), q.dir === 'land' ? { hl: q.c } : { cap: q.c.cap });
        if (this.rev && q.dir === 'stad') drawMap(this.el.querySelector('[data-map-back]'), { hl: q.c });
    }

    render() {
        const h = this.view === 'splash' ? this.splashHTML() : this.view === 'start' ? this.startHTML() : this.view === 'end' ? this.endHTML() : this.quizHTML();
        this.el.innerHTML = h;
        this.drawMaps();
    }

    splashHTML() {
        const p = this.photo;
        return `<div class="splash fadein" data-act="tostart">
            <div class="hero"><img src="${photoURL(p)}" alt="${p.m}, ${p.c}"></div>
            <div style="position:relative;z-index:1;display:flex;flex-direction:column;align-items:center;gap:10px">
                <div class="mark">${IC.globe}</div>
                <span style="font-size:32px;font-weight:500;letter-spacing:-.02em;line-height:1.1">EU Hoofdsteden</span>
                <span style="font-size:13px;opacity:.8">27 landen, 27 hoofdsteden</span>
            </div>
            <span style="position:absolute;z-index:1;bottom:calc(34px + var(--safe-bottom));font-size:11px;letter-spacing:.04em;opacity:.75">powered by <b style="font-weight:600;opacity:1">AchieveIT</b></span>
        </div>`;
    }

    startHTML() {
        const p = this.photo;
        return `<div class="screen" style="padding:0;position:relative">
            <div class="hero"><img src="${photoURL(p)}" alt="${p.m}, ${p.c}"></div>
            <div style="position:relative;z-index:1;flex:1;display:flex;flex-direction:column;gap:12px;padding:calc(28px + var(--safe-top)) 20px calc(24px + var(--safe-bottom));color:#fbfaff">
                <div style="display:flex;flex-direction:column;gap:6px">
                    <span style="font-size:10px;font-weight:500;letter-spacing:.12em;text-transform:uppercase;opacity:.85">27 landen · 27 hoofdsteden</span>
                    <h1 style="font-size:38px">EU Hoofdsteden</h1>
                </div>
                <span style="margin-top:auto;font-size:11px;opacity:.75">${p.m} · ${p.c}</span>
                <span style="font-size:13px;opacity:.9;margin-top:6px">Kies hoe je wilt oefenen</span>
                <div style="display:flex;flex-direction:column;gap:8px;color:var(--text)">${MODES.map(m => `
                    <button class="mode" data-act="pick" data-v="${m.k}">
                        <span class="ic">${IC[m.ic]}</span><span class="t">${m.t.join(IC.arrow)}</span><span>${IC.arrow}</span>
                    </button>`).join('')}
                </div>
                <span style="font-size:9px;opacity:.55;text-align:center">Foto: Wikimedia Commons</span>
            </div>
        </div>`;
    }

    quizHTML() {
        const q = this.order[this.i], c = q.c, land = q.dir === 'land';
        const dots = this.order.map((_, k) => `<i class="${k < this.i ? (this.res[k] ? 'g' : 'f') : (k === this.i ? 'cur' : '')}"></i>`).join('');
        const ask = land ? c.name : c.capital, ans = land ? c.capital : c.name;
        return `<div class="screen">
            <div class="topbar">
                <div style="display:flex;flex-direction:column;line-height:1.2"><span class="title">EU Hoofdsteden</span><span class="muted" style="font-size:11px">${modeLabel(this.mode)}</span></div>
                <button class="icon-btn" data-act="home" aria-label="Naar start">${IC.house}</button>
            </div>
            <div style="display:flex;flex-direction:column;gap:8px">
                <div style="display:flex;align-items:baseline;justify-content:space-between">
                    <span style="font-size:20px;font-weight:500;font-variant-numeric:tabular-nums">${this.goed} <span class="muted" style="font-size:13px">goed</span> · ${this.fout} <span class="muted" style="font-size:13px">fout</span></span>
                    <span class="muted" style="font-size:12px;font-variant-numeric:tabular-nums">${this.i + 1} / ${this.n}</span>
                </div>
                <div class="dots">${dots}</div>
            </div>
            <div class="flip"><div class="flip-in" data-act="rev">
                <div class="face">
                    <div data-map style="flex:1;min-height:0"></div>
                    <div style="padding:16px 20px 20px;display:flex;flex-direction:column;gap:4px;border-top:1px solid var(--line)">
                        <span class="kicker">${land ? 'Wat is de hoofdstad van' : 'In welk land ligt'}</span><h2 style="font-size:30px">${ask}</h2>
                        <span class="muted" style="font-size:12px;margin-top:6px">Tik op de kaart om te draaien</span>
                    </div>
                </div>
                <div class="face back">
                    ${land ? '' : '<div data-map-back style="flex:1;min-height:0;opacity:.95"></div>'}
                    <div style="padding:24px;display:flex;flex-direction:column;justify-content:flex-end;gap:6px;${land ? 'flex:1' : ''}">
                        <span class="kicker">${land ? 'Hoofdstad van ' + c.name : c.capital + ' ligt in'}</span>
                        <span style="font-size:${ans.length > 10 ? 36 : 44}px;line-height:1.05;font-weight:500;letter-spacing:-.02em;color:var(--accent-ink)">${ans}</span>
                        <span class="muted" style="font-size:13px;margin-top:8px">Had je het goed?</span>
                    </div>
                </div>
            </div></div>
            <div class="duo"><button class="btn btn-fout" data-act="fout" disabled>${IC.x}Fout</button><button class="btn btn-goed" data-act="goed" disabled>${IC.check}Goed</button></div>
        </div>`;
    }

    endHTML() {
        const pct = Math.round(this.goed / this.n * 100);
        const dots = this.order.map((_, k) => `<i class="${this.res[k] ? 'g' : 'f'}"></i>`).join('');
        const all = this.order.map((q, k) => ({ q, ok: this.res[k] }));
        const flt = this.filter;
        const shown = flt === 'fout' ? all.filter(x => !x.ok) : [...all.filter(x => !x.ok), ...all.filter(x => x.ok)];
        const msg = pct === 100 ? 'Alles goed!' : pct >= 80 ? 'Bijna alles goed.' : pct >= 50 ? 'Goed bezig, oefen je fouten nog eens.' : 'Blijf oefenen, het komt wel.';
        const list = shown.length
            ? `<div class="list">${shown.map(({ q, ok }) => {
                const l = q.dir === 'land';
                return `<div class="item ${ok ? 'ok' : 'nok'}"><span class="mk">${ok ? IC.check : IC.x}</span><span>${l ? q.c.name : q.c.capital}</span>${IC.arrow}<span class="a">${l ? q.c.capital : q.c.name}</span></div>`;
            }).join('')}</div>`
            : '<div class="list" style="display:flex;align-items:center;justify-content:center;flex:none;height:80px"><span style="color:var(--ok);font-weight:500">Geen fouten in deze ronde.</span></div><div style="flex:1"></div>';
        return `<div class="screen fadein" style="gap:14px">
            <div class="topbar"><span class="title">EU Hoofdsteden</span><button class="icon-btn" data-act="home" aria-label="Naar start">${IC.house}</button></div>
            <div style="display:flex;flex-direction:column;gap:4px">
                <span class="kicker">Ronde klaar · ${modeLabel(this.mode)}</span>
                <div style="font-size:64px;font-weight:500;letter-spacing:-.03em;line-height:1;font-variant-numeric:tabular-nums">${this.goed}<span class="muted" style="font-size:26px;letter-spacing:0"> / ${this.n}</span></div>
                <span class="muted" style="font-size:13px">${pct}% goed · ${this.fout} fout. ${msg}</span>
            </div>
            <div class="dots res">${dots}</div>
            <div style="display:flex;align-items:center;gap:12px;font-size:12px">
                <span style="display:inline-flex;align-items:center;gap:6px"><i style="width:8px;height:8px;border-radius:2px;background:var(--ok)"></i>${this.goed} juist</span>
                <span style="display:inline-flex;align-items:center;gap:6px"><i style="width:8px;height:8px;border-radius:2px;background:var(--nok)"></i>${this.fout} fout</span>
            </div>
            <div style="display:flex;align-items:center;justify-content:space-between;margin-top:4px">
                <span style="font-size:15px;font-weight:500">${flt === 'fout' ? 'Wat je fout had' : 'Overzicht'}</span>
                <div class="seg"><button class="${flt === 'fout' ? 'on' : ''}" data-act="filter" data-v="fout">Fouten</button><button class="${flt === 'alle' ? 'on' : ''}" data-act="filter" data-v="alle">Alle</button></div>
            </div>
            ${list}
            <div style="display:flex;flex-direction:column;gap:8px">
                <button class="btn btn-goed" data-act="restart">${IC.undo}Opnieuw</button>
                <button class="btn btn-ghost" data-act="home" style="height:44px">Andere modus kiezen</button>
            </div>
        </div>`;
    }
}

const app = new App(document.getElementById('app'));
app.render();
PHOTOS.forEach(p => { new Image().src = photoURL(p); });

fetch('https://cdn.jsdelivr.net/npm/world-atlas@2.0.2/countries-110m.json')
    .then(r => r.json())
    .then(topo => {
        WORLD = topojson.feature(topo, topo.objects.countries).features;
        for (const c of C) {
            c.f = WORLD.find(f => f.id === c.id || f.properties.name === c.en) || null;
            if (c.f) EUSET.add(c.f);
        }
        mapState = 'ready';
        app.drawMaps();
    })
    .catch(err => {
        console.error('Kaart kon niet laden:', err);
        mapState = 'error';
        app.drawMaps();
    });

if ('serviceWorker' in navigator) {
    // Herlaad één keer zodra een nieuwe service worker de controle overneemt
    const hadController = !!navigator.serviceWorker.controller;
    let reloaded = false;
    navigator.serviceWorker.addEventListener('controllerchange', () => {
        if (!hadController || reloaded) return;
        reloaded = true;
        window.location.reload();
    });
    navigator.serviceWorker.register('sw.js');
}
