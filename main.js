// Plants Against Derps - main.js v1.4
// Full replacement.
// Paste Part 1, then paste Part 2 directly under it.

// ============================================================
// EASY CONFIG - edit this first
// ============================================================
const CONFIG = {
  audio: {
    enabled: true,
    menuMusic: "audio/mainmenubeat.m4a",
    battleMusic: "audio/derpbattle1.m4a",
    victoryMusic: "audio/derpvictorytheme.m4a",
    musicVolume: 0.45,
    victoryVolume: 0.55,
    sfxVolume: 0.035
  },

  board: {
    rows: 5,
    cols: 9,
    cellW: 86,
    cellH: 82,
    gridX: 80,
    gridY: 78
  },

  balancing: {
    campfrGlowAmount: 25,
    campfrGlowCooldown: 900,
    derpDefeatGlow: 5,
    betweenWaveDelay: 240,
    winFadeTicks: 120
  },

  plantPicker: {
    enabled: true,
    title: "Pick the bullcrap",
    maxPlants: 4
  },

  plants: {
    campfr: {
      name: "Campfr",
      cost: 25,
      hp: 80,
      img: "campfr",
      desc: "Makes Glow.",
      placementCooldown: 180,

      producer: true,
      produceAmount: 25,
      produceCooldown: 900
    },

    treeGun: {
      name: "Tree Gun",
      cost: 100,
      hp: 100,
      img: "treeGun",
      desc: "Reliable derp shooter.",
      placementCooldown: 240,

      shooter: true,
      shootCooldown: 115,
      projectileDamage: 24,
      projectileSpeed: 4.5,

      multiLane: false,
      areaDamage: false,
      areaRadius: 0,
      doubleShotChance: 0
    },

    rosegun: {
      name: "Rosegun",
      cost: 50,
      hp: 60,
      img: "rosegun",
      desc: "Cheaper weaker Tree Gun.",
      placementCooldown: 180,

      shooter: true,
      shootCooldown: 100,
      projectileDamage: 12,
      projectileSpeed: 5.2,

      multiLane: false,
      areaDamage: false,
      areaRadius: 0,
      doubleShotChance: 10
    },

    soggyMattress: {
      name: "Soggy Mattress",
      cost: 50,
      hp: 170,
      img: "soggyMattress",
      desc: "Weak wall. Smells defensive.",
      placementCooldown: 300,

      wall: true
    },

    kaboom: {
      name: "El Kaboom",
      cost: 225,
      hp: 40,
      img: "kaboom",
      desc: "Explodes after a short fuse.",
      placementCooldown: 600,

      fuse: 90,
      damage: 180,
      radius: 140
    }

    /*
    EASY FUTURE PLANT EXAMPLE:

    tripleThing: {
      name: "Triple Thing",
      cost: 175,
      hp: 80,
      img: "tripleThing",
      desc: "Shoots 3 lanes.",
      placementCooldown: 300,

      shooter: true,
      shootCooldown: 130,
      projectileDamage: 15,
      projectileSpeed: 4.5,

      multiLane: true,
      areaDamage: false,
      areaRadius: 0,
      doubleShotChance: 0
    },

    boomShooter: {
      name: "Boom Shooter",
      cost: 200,
      hp: 80,
      img: "boomShooter",
      desc: "Area damage projectile.",
      placementCooldown: 360,

      shooter: true,
      shootCooldown: 170,
      projectileDamage: 20,
      projectileSpeed: 4,

      multiLane: false,
      areaDamage: true,
      areaRadius: 70,
      doubleShotChance: 0
    },
    */
  },

  enemies: {
    basic: {
      name: "Da Boiiiiii",
      hp: 90,
      speed: 0.28,
      damage: 10,
      img: "basicDerp"
    },

    armored: {
      name: "Armored Da Boiiiiii",
      hp: 190,
      speed: 0.22,
      damage: 16,
      img: "armoredDerp"
    },

    fast: {
      name: "Fast Da Boiiiiii",
      hp: 65,
      speed: 0.48,
      damage: 8,
      img: "fastDerp"
    }
  },

  images: {
    campfr: "assets/plant-campfr.png",
    treeGun: "assets/plant-tree-gun.png",
    rosegun: "assets/rosegun.png",
    soggyMattress: "assets/soggy-mattress.png",
    kaboom: "assets/plant-el-kaboom.png",

    basicDerp: "assets/enemy-basic-derp.png",
    armoredDerp: "assets/enemy-armored-derp.png",
    fastDerp: "assets/enemy-fast-derp.png",

    glow: "assets/resource-glow.png",
    grass: "assets/tile-grass.png"
  },

  // Customize levels here.
  // Lava uses [column, row].
  // Rows are 0-4. Columns are 0-8.
  levels: [
    {
      name: "1-1",
      title: "First Derp",
      desc: "A regular lawn with regular bad decisions.",
      startGlow: 75,
      waves: [
        [{ type: "basic", row: 2, delay: 120 }],
        [
          { type: "basic", row: 1, delay: 100 },
          { type: "basic", row: 3, delay: 220 }
        ]
      ],
      lava: []
    },

    {
      name: "1-2",
      title: "Two Derps Maybe",
      desc: "More derps walk at you. Horrifying.",
      startGlow: 75,
      waves: [
        [
          { type: "basic", row: 0, delay: 80 },
          { type: "basic", row: 4, delay: 260 }
        ],
        [
          { type: "basic", row: 2, delay: 80 },
          { type: "fast", row: 3, delay: 250 }
        ]
      ],
      lava: []
    },

    {
      name: "1-3",
      title: "Fast Boi Test",
      desc: "Fast Da Boiiiiii joins the argument.",
      startGlow: 100,
      waves: [
        [{ type: "fast", row: 1, delay: 120 }],
        [
          { type: "basic", row: 2, delay: 90 },
          { type: "fast", row: 2, delay: 250 },
          { type: "basic", row: 4, delay: 420 }
        ]
      ],
      lava: []
    },

    {
      name: "1-4",
      title: "Armor Moment",
      desc: "Armored Da Boiiiiii is mildly rude.",
      startGlow: 100,
      waves: [
        [{ type: "armored", row: 2, delay: 180 }],
        [
          { type: "basic", row: 1, delay: 90 },
          { type: "armored", row: 3, delay: 300 }
        ]
      ],
      lava: []
    },

    {
      name: "1-5",
      title: "Mor Level Preview",
      desc: "Lava tiles exist. Do not plant there.",
      startGlow: 125,
      waves: [
        [
          { type: "basic", row: 0, delay: 100 },
          { type: "basic", row: 4, delay: 240 }
        ],
        [
          { type: "fast", row: 2, delay: 130 },
          { type: "armored", row: 3, delay: 360 }
        ]
      ],
      lava: [[4, 1], [4, 2], [4, 3]]
    },

    {
      name: "1-6",
      title: "Kaboom Lessons",
      desc: "El Kaboom solves problems loudly.",
      startGlow: 150,
      waves: [
        [
          { type: "basic", row: 1, delay: 80 },
          { type: "basic", row: 1, delay: 180 },
          { type: "basic", row: 1, delay: 280 }
        ],
        [{ type: "armored", row: 2, delay: 170 }]
      ],
      lava: []
    },

    {
      name: "1-7",
      title: "Lawn Malfunction",
      desc: "This lawn is not inspected.",
      startGlow: 150,
      waves: [
        [
          { type: "fast", row: 0, delay: 120 },
          { type: "fast", row: 4, delay: 250 }
        ],
        [
          { type: "basic", row: 2, delay: 100 },
          { type: "armored", row: 2, delay: 320 }
        ]
      ],
      lava: [[2, 0], [6, 4]]
    },

    {
      name: "1-8",
      title: "Derp Stack",
      desc: "Many derps. Concerning quantity.",
      startGlow: 175,
      waves: [
        [
          { type: "basic", row: 0, delay: 80 },
          { type: "basic", row: 1, delay: 130 },
          { type: "basic", row: 2, delay: 180 }
        ],
        [
          { type: "basic", row: 3, delay: 80 },
          { type: "fast", row: 4, delay: 240 },
          { type: "armored", row: 1, delay: 400 }
        ]
      ],
      lava: []
    },

    {
      name: "1-9",
      title: "Actual Problem",
      desc: "The derps found shoes.",
      startGlow: 200,
      waves: [
        [
          { type: "fast", row: 0, delay: 80 },
          { type: "fast", row: 2, delay: 190 },
          { type: "fast", row: 4, delay: 300 }
        ],
        [
          { type: "armored", row: 1, delay: 120 },
          { type: "armored", row: 3, delay: 360 }
        ]
      ],
      lava: [[3, 2], [5, 2]]
    },

    {
      name: "1-10",
      title: "The Derpening",
      desc: "Final level of world 1. Very serious.",
      startGlow: 225,
      waves: [
        [
          { type: "basic", row: 0, delay: 70 },
          { type: "basic", row: 2, delay: 160 },
          { type: "basic", row: 4, delay: 250 }
        ],
        [
          { type: "fast", row: 1, delay: 80 },
          { type: "armored", row: 2, delay: 280 },
          { type: "fast", row: 3, delay: 460 }
        ],
        [
          { type: "armored", row: 0, delay: 110 },
          { type: "armored", row: 4, delay: 270 },
          { type: "fast", row: 2, delay: 430 }
        ]
      ],
      lava: [[4, 0], [4, 1], [4, 3], [4, 4]]
    }
  ]
};

// ============================================================
// GAME CODE - usually do not edit below this line
// ============================================================
const screens = {
  menu: document.getElementById("mainMenu"),
  levels: document.getElementById("levelScreen"),
  game: document.getElementById("gameScreen"),
  how: document.getElementById("howScreen")
};

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const cardsEl = document.getElementById("cards");
const levelGridEl = document.getElementById("levelGrid");
const levelTitleEl = document.getElementById("levelTitle");
const levelDescEl = document.getElementById("levelDesc");
const glowText = document.getElementById("glowText");
const waveText = document.getElementById("waveText");
const statusText = document.getElementById("statusText");
const messageEl = document.getElementById("message");

const ROWS = CONFIG.board.rows;
const COLS = CONFIG.board.cols;
const CELL_W = CONFIG.board.cellW;
const CELL_H = CONFIG.board.cellH;
const GRID_X = CONFIG.board.gridX;
const GRID_Y = CONFIG.board.gridY;

const images = {};
for (const [key, src] of Object.entries(CONFIG.images)) {
  images[key] = new Image();
  images[key].src = src;
}

const music = {
  menu: new Audio(CONFIG.audio.menuMusic),
  battle: new Audio(CONFIG.audio.battleMusic),
  victory: new Audio(CONFIG.audio.victoryMusic)
};

for (const track of Object.values(music)) {
  track.loop = true;
  track.volume = CONFIG.audio.musicVolume;
}

music.victory.loop = false;
music.victory.volume = CONFIG.audio.victoryVolume;

let audioUnlocked = false;
let currentMusic = null;
let state = null;
let chosenPlants = Object.keys(CONFIG.plants).slice(0, CONFIG.plantPicker.maxPlants);

const ui = {
  picker: null,
  fade: null,
  credits: null
};

function unlockAudio() {
  if (audioUnlocked) return;
  audioUnlocked = true;

  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!window.derpAudioCtx) window.derpAudioCtx = new AudioContext();
  } catch (err) {}
}

function stopAllMusic() {
  for (const track of Object.values(music)) {
    track.pause();
    track.currentTime = 0;
  }

  currentMusic = null;
}

function playMusic(name) {
  if (!CONFIG.audio.enabled) return;

  unlockAudio();

  const track = music[name];
  if (!track) return;

  if (currentMusic === track && !track.paused) return;

  stopAllMusic();

  currentMusic = track;
  track.currentTime = 0;
  track.play().catch(() => {});
}

function playSfx(type) {
  if (!CONFIG.audio.enabled) return;

  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!window.derpAudioCtx) window.derpAudioCtx = new AudioContext();

    const audioCtx = window.derpAudioCtx;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    let freq = 300;
    let duration = 0.08;
    let wave = "square";
    let volume = CONFIG.audio.sfxVolume;

    if (type === "plant") {
      freq = 520;
      duration = 0.06;
      wave = "triangle";
    } else if (type === "no") {
      freq = 95;
      duration = 0.11;
      wave = "sawtooth";
    } else if (type === "shoot") {
      freq = 180;
      duration = 0.035;
      wave = "square";
    } else if (type === "hit") {
      freq = 130;
      duration = 0.055;
      wave = "sawtooth";
    } else if (type === "glow") {
      freq = 760;
      duration = 0.06;
      wave = "triangle";
    } else if (type === "boom") {
      freq = 70;
      duration = 0.22;
      wave = "sawtooth";
      volume = CONFIG.audio.sfxVolume * 1.8;
    } else if (type === "win") {
      freq = 880;
      duration = 0.12;
      wave = "triangle";
    }

    osc.type = wave;
    osc.frequency.value = freq;
    gain.gain.value = volume;

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start();
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
    osc.stop(audioCtx.currentTime + duration);
  } catch (err) {}
}

function showScreen(name) {
  for (const screen of Object.values(screens)) {
    screen.classList.remove("active");
  }

  screens[name].classList.add("active");

  if (name === "menu" || name === "levels" || name === "how") {
    playMusic("menu");
  }
}

function initLevelButtons() {
  levelGridEl.innerHTML = "";

  CONFIG.levels.forEach((level, index) => {
    const button = document.createElement("button");
    button.className = "level-tile";
    button.textContent = `${level.name} - ${level.title}`;
    button.addEventListener("click", () => {
      if (CONFIG.plantPicker.enabled) {
        openPlantPicker(index);
      } else {
        startLevel(index, chosenPlants);
      }
    });
    levelGridEl.appendChild(button);
  });
}

function initCards() {
  cardsEl.innerHTML = "";

  const allowedPlants = chosenPlants.length > 0 ? chosenPlants : Object.keys(CONFIG.plants);

  for (const id of allowedPlants) {
    const plant = CONFIG.plants[id];
    if (!plant) continue;

    const card = document.createElement("button");
    card.className = "card";
    card.dataset.plant = id;

    const cooldownLeft = state?.placementCooldowns?.[id] || 0;
    const cooldownText = cooldownLeft > 0 ? `<br><span>Cooldown: ${Math.ceil(cooldownLeft / 60)}s</span>` : "";

    card.innerHTML = `
      <img src="${CONFIG.images[plant.img]}" alt="${plant.name}">
      <b>${plant.name}</b>
      <span>${plant.cost} Glow</span><br>
      <span>${plant.desc}</span>
      ${cooldownText}
    `;

    if (cooldownLeft > 0) {
      card.disabled = true;
      card.style.opacity = "0.55";
    }

    card.addEventListener("click", () => selectPlant(id));
    cardsEl.appendChild(card);
  }
}

function openPlantPicker(levelIndex) {
  createFloatingUI();

  const max = CONFIG.plantPicker.maxPlants;
  const selected = new Set(chosenPlants.slice(0, max));

  ui.picker.innerHTML = `
    <div class="pad-picker-box">
      <h2>${CONFIG.plantPicker.title}</h2>
      <p>Choose up to ${max} plants for this level.</p>
      <div class="pad-picker-grid"></div>
      <div class="pad-picker-buttons">
        <button id="padStartLevel">Start Level</button>
        <button id="padCancelPicker">Cancel</button>
      </div>
    </div>
  `;

  const grid = ui.picker.querySelector(".pad-picker-grid");

  for (const [id, plant] of Object.entries(CONFIG.plants)) {
    const btn = document.createElement("button");
    btn.className = "pad-picker-card";
    btn.dataset.id = id;
    btn.innerHTML = `
      <img src="${CONFIG.images[plant.img]}" alt="${plant.name}">
      <b>${plant.name}</b>
      <span>${plant.cost} Glow</span>
    `;

    if (selected.has(id)) {
      btn.classList.add("picked");
    }

    btn.addEventListener("click", () => {
      if (selected.has(id)) {
        selected.delete(id);
      } else {
        if (selected.size >= max) {
          playSfx("no");
          return;
        }
        selected.add(id);
      }

      btn.classList.toggle("picked", selected.has(id));
    });

    grid.appendChild(btn);
  }

  ui.picker.classList.add("show");

  ui.picker.querySelector("#padStartLevel").onclick = () => {
    if (selected.size <= 0) {
      playSfx("no");
      return;
    }

    chosenPlants = [...selected];
    ui.picker.classList.remove("show");
    startLevel(levelIndex, chosenPlants);
  };

  ui.picker.querySelector("#padCancelPicker").onclick = () => {
    ui.picker.classList.remove("show");
  };
}

function createFloatingUI() {
  if (!ui.picker) {
    ui.picker = document.createElement("div");
    ui.picker.id = "padPickerOverlay";
    document.body.appendChild(ui.picker);
  }

  if (!ui.fade) {
    ui.fade = document.createElement("div");
    ui.fade.id = "padFadeOverlay";
    document.body.appendChild(ui.fade);
  }

  if (!ui.credits) {
    ui.credits = document.createElement("div");
    ui.credits.id = "padCreditsOverlay";
    document.body.appendChild(ui.credits);
  }

  if (!document.getElementById("padDynamicStyle")) {
    const style = document.createElement("style");
    style.id = "padDynamicStyle";
    style.textContent = `
      #padPickerOverlay {
        position: fixed;
        inset: 0;
        background: rgba(0,0,0,0.78);
        z-index: 9999;
        display: none;
        place-items: center;
        color: white;
        font-family: system-ui, Arial, sans-serif;
      }

      #padPickerOverlay.show {
        display: grid;
      }

      .pad-picker-box {
        width: min(850px, 92vw);
        max-height: 88vh;
        overflow: auto;
        background: linear-gradient(135deg, rgba(45,160,220,0.35), rgba(0,0,0,0.92));
        border: 2px solid rgba(160,240,255,0.9);
        border-radius: 26px;
        padding: 22px;
        box-shadow: 0 0 40px rgba(80,220,255,0.3);
      }

      .pad-picker-box h2 {
        margin-top: 0;
        color: #bff7ff;
      }

      .pad-picker-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
        gap: 12px;
      }

      .pad-picker-card {
        background: #eee;
        color: #111;
        border: 4px solid #111;
        border-radius: 14px;
        padding: 8px;
        cursor: pointer;
        font-weight: 800;
      }

      .pad-picker-card.picked {
        outline: 5px solid #ffe95a;
        background: #fff9ba;
      }

      .pad-picker-card img {
        width: 100%;
        height: 80px;
        object-fit: contain;
        background: white;
        border-radius: 8px;
      }

      .pad-picker-card span {
        display: block;
        font-size: 12px;
      }

      .pad-picker-buttons {
        margin-top: 18px;
        display: flex;
        gap: 12px;
        flex-wrap: wrap;
      }

      .pad-picker-buttons button {
        padding: 12px 18px;
        border-radius: 999px;
        border: 1px solid white;
        cursor: pointer;
        font-weight: 900;
      }

      #padFadeOverlay {
        position: fixed;
        inset: 0;
        background: black;
        opacity: 0;
        pointer-events: none;
        z-index: 9998;
        transition: opacity 1.2s ease;
      }

      #padFadeOverlay.show {
        opacity: 1;
        pointer-events: all;
      }

      #padCreditsOverlay {
        position: fixed;
        inset: 0;
        background: black;
        color: white;
        z-index: 10000;
        display: none;
        overflow: hidden;
        font-family: monospace;
      }

      #padCreditsOverlay.show {
        display: block;
      }

      .pad-credits-text {
        position: absolute;
        width: 100%;
        text-align: center;
        top: 100%;
        font-size: clamp(24px, 5vw, 54px);
        line-height: 1.55;
        animation: padCreditsScroll 13s linear forwards;
        padding: 0 8vw;
      }

      @keyframes padCreditsScroll {
        from { top: 100%; }
        to { top: -90%; }
      }
    `;
    document.head.appendChild(style);
  }
}
function initCards() {
  cardsEl.innerHTML = "";

  const allowedPlants = chosenPlants.length > 0 ? chosenPlants : Object.keys(CONFIG.plants);

  for (const id of allowedPlants) {
    const plant = CONFIG.plants[id];
    if (!plant) continue;

    const card = document.createElement("button");
    card.className = "card";
    card.dataset.plant = id;

    const cooldownLeft = state?.placementCooldowns?.[id] || 0;
    const cooldownText = cooldownLeft > 0
      ? `<br><span>Cooldown: ${Math.ceil(cooldownLeft / 60)}s</span>`
      : "";

    card.innerHTML = `
      <img src="${CONFIG.images[plant.img]}" alt="${plant.name}">
      <b>${plant.name}</b>
      <span>${plant.cost} Glow</span><br>
      <span>${plant.desc}</span>
      ${cooldownText}
    `;

    if (cooldownLeft > 0) {
      card.disabled = true;
      card.style.opacity = "0.55";
    }

    card.addEventListener("click", () => selectPlant(id));
    cardsEl.appendChild(card);
  }
}

function openPlantPicker(levelIndex) {
  createFloatingUI();

  const max = CONFIG.plantPicker.maxPlants;
  const selected = new Set(chosenPlants.slice(0, max));

  ui.picker.innerHTML = `
    <div class="pad-picker-box">
      <h2>${CONFIG.plantPicker.title}</h2>
      <p>Choose up to ${max} plants for this level.</p>
      <div class="pad-picker-grid"></div>
      <div class="pad-picker-buttons">
        <button id="padStartLevel">Start Level</button>
        <button id="padCancelPicker">Cancel</button>
      </div>
    </div>
  `;

  const grid = ui.picker.querySelector(".pad-picker-grid");

  for (const [id, plant] of Object.entries(CONFIG.plants)) {
    const btn = document.createElement("button");
    btn.className = "pad-picker-card";
    btn.dataset.id = id;
    btn.innerHTML = `
      <img src="${CONFIG.images[plant.img]}" alt="${plant.name}">
      <b>${plant.name}</b>
      <span>${plant.cost} Glow</span>
    `;

    if (selected.has(id)) {
      btn.classList.add("picked");
    }

    btn.addEventListener("click", () => {
      if (selected.has(id)) {
        selected.delete(id);
      } else {
        if (selected.size >= max) {
          playSfx("no");
          return;
        }

        selected.add(id);
      }

      btn.classList.toggle("picked", selected.has(id));
    });

    grid.appendChild(btn);
  }

  ui.picker.classList.add("show");

  ui.picker.querySelector("#padStartLevel").onclick = () => {
    if (selected.size <= 0) {
      playSfx("no");
      return;
    }

    chosenPlants = [...selected];
    ui.picker.classList.remove("show");
    startLevel(levelIndex, chosenPlants);
  };

  ui.picker.querySelector("#padCancelPicker").onclick = () => {
    ui.picker.classList.remove("show");
  };
}

function createFloatingUI() {
  if (!ui.picker) {
    ui.picker = document.createElement("div");
    ui.picker.id = "padPickerOverlay";
    document.body.appendChild(ui.picker);
  }

  if (!ui.fade) {
    ui.fade = document.createElement("div");
    ui.fade.id = "padFadeOverlay";
    document.body.appendChild(ui.fade);
  }

  if (!ui.credits) {
    ui.credits = document.createElement("div");
    ui.credits.id = "padCreditsOverlay";
    document.body.appendChild(ui.credits);
  }

  if (!document.getElementById("padDynamicStyle")) {
    const style = document.createElement("style");
    style.id = "padDynamicStyle";
    style.textContent = `
      #padPickerOverlay {
        position: fixed;
        inset: 0;
        background: rgba(0,0,0,0.78);
        z-index: 9999;
        display: none;
        place-items: center;
        color: white;
        font-family: system-ui, Arial, sans-serif;
      }

      #padPickerOverlay.show {
        display: grid;
      }

      .pad-picker-box {
        width: min(850px, 92vw);
        max-height: 88vh;
        overflow: auto;
        background: linear-gradient(135deg, rgba(45,160,220,0.35), rgba(0,0,0,0.92));
        border: 2px solid rgba(160,240,255,0.9);
        border-radius: 26px;
        padding: 22px;
        box-shadow: 0 0 40px rgba(80,220,255,0.3);
      }

      .pad-picker-box h2 {
        margin-top: 0;
        color: #bff7ff;
      }

      .pad-picker-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
        gap: 12px;
      }

      .pad-picker-card {
        background: #eee;
        color: #111;
        border: 4px solid #111;
        border-radius: 14px;
        padding: 8px;
        cursor: pointer;
        font-weight: 800;
      }

      .pad-picker-card.picked {
        outline: 5px solid #ffe95a;
        background: #fff9ba;
      }

      .pad-picker-card img {
        width: 100%;
        height: 80px;
        object-fit: contain;
        background: white;
        border-radius: 8px;
      }

      .pad-picker-card span {
        display: block;
        font-size: 12px;
      }

      .pad-picker-buttons {
        margin-top: 18px;
        display: flex;
        gap: 12px;
        flex-wrap: wrap;
      }

      .pad-picker-buttons button {
        padding: 12px 18px;
        border-radius: 999px;
        border: 1px solid white;
        cursor: pointer;
        font-weight: 900;
      }

      #padFadeOverlay {
        position: fixed;
        inset: 0;
        background: black;
        opacity: 0;
        pointer-events: none;
        z-index: 9998;
        transition: opacity 1.2s ease;
      }

      #padFadeOverlay.show {
        opacity: 1;
        pointer-events: all;
      }

      #padCreditsOverlay {
        position: fixed;
        inset: 0;
        background: black;
        color: white;
        z-index: 10000;
        display: none;
        overflow: hidden;
        font-family: monospace;
      }

      #padCreditsOverlay.show {
        display: block;
      }

      .pad-credits-text {
        position: absolute;
        width: 100%;
        text-align: center;
        top: 100%;
        font-size: clamp(24px, 5vw, 54px);
        line-height: 1.55;
        animation: padCreditsScroll 13s linear forwards;
        padding: 0 8vw;
      }

      @keyframes padCreditsScroll {
        from { top: 100%; }
        to { top: -90%; }
      }
    `;
    document.head.appendChild(style);
  }
}

function selectPlant(id) {
  if (!state) return;

  state.selectedPlant = id;

  document.querySelectorAll(".card").forEach(card => {
    card.classList.toggle("selected", card.dataset.plant === id);
  });

  say(`Selected ${CONFIG.plants[id].name}.`);
}

function startLevel(index, plantLoadout = chosenPlants) {
  const level = CONFIG.levels[index];

  state = {
    levelIndex: index,
    level,
    glow: level.startGlow,
    waveIndex: 0,
    waveTimer: 0,
    waveSpawnIndex: 0,
    betweenWaveTimer: 180,
    grid: [],
    plants: [],
    enemies: [],
    projectiles: [],
    explosions: [],
    particles: [],
    placementCooldowns: {},
    selectedPlant: plantLoadout[0] || Object.keys(CONFIG.plants)[0],
    running: true,
    won: false,
    lost: false,
    ending: false,
    endTimer: 0,
    tick: 0,
    message: "Protect the lawn from questionable creatures.",
    messageTimer: 240
  };

  chosenPlants = plantLoadout;

  for (let row = 0; row < ROWS; row++) {
    state.grid[row] = [];

    for (let col = 0; col < COLS; col++) {
      state.grid[row][col] = {
        tile: "grass",
        plant: null
      };
    }
  }

  for (const [col, row] of level.lava || []) {
    if (state.grid[row] && state.grid[row][col]) {
      state.grid[row][col].tile = "lava";
    }
  }

  levelTitleEl.textContent = `${level.name}: ${level.title}`;
  levelDescEl.textContent = level.desc;

  showScreen("game");
  playMusic("battle");
  initCards();
  selectPlant(state.selectedPlant);
  updateHud();

  requestAnimationFrame(gameLoop);
}

function say(text, time = 180) {
  if (!state) return;

  state.message = text;
  state.messageTimer = time;
  messageEl.textContent = text;
}

function updateHud() {
  if (!state) return;

  glowText.textContent = `Glow: ${state.glow}`;
  waveText.textContent = `Wave: ${Math.min(state.waveIndex + 1, state.level.waves.length)}/${state.level.waves.length}`;
  statusText.textContent = state.lost
    ? "Lost"
    : state.won
      ? "Won"
      : state.ending
        ? "Ending"
        : "Derping";
}

function gridFromMouse(event) {
  const rect = canvas.getBoundingClientRect();
  const mouseX = (event.clientX - rect.left) * (canvas.width / rect.width);
  const mouseY = (event.clientY - rect.top) * (canvas.height / rect.height);

  const col = Math.floor((mouseX - GRID_X) / CELL_W);
  const row = Math.floor((mouseY - GRID_Y) / CELL_H);

  if (row < 0 || row >= ROWS || col < 0 || col >= COLS) {
    return null;
  }

  return {
    row,
    col,
    x: mouseX,
    y: mouseY
  };
}

function plantAt(row, col, type) {
  const cell = state.grid[row][col];
  const plantDef = CONFIG.plants[type];

  if (!plantDef) {
    say(`Unknown plant: ${type}`);
    playSfx("no");
    return;
  }

  const cooldownLeft = state.placementCooldowns[type] || 0;

  if (cooldownLeft > 0) {
    say(`${plantDef.name} cooldown: ${Math.ceil(cooldownLeft / 60)}s`);
    playSfx("no");
    return;
  }

  if (cell.tile === "lava") {
    say("You cannot plant on lava. Mor Level says no.");
    playSfx("no");
    return;
  }

  if (cell.plant) {
    say("There is already something there.");
    playSfx("no");
    return;
  }

  if (state.glow < plantDef.cost) {
    say("Not enough Glow.");
    playSfx("no");
    return;
  }

  state.glow -= plantDef.cost;

  const plant = {
    id: type,
    row,
    col,
    hp: plantDef.hp,
    maxHp: plantDef.hp,
    cooldown: getStartingCooldown(plantDef),
    fuse: plantDef.fuse || 0
  };

  cell.plant = plant;
  state.plants.push(plant);
  state.placementCooldowns[type] = plantDef.placementCooldown || 0;

  say(`${plantDef.name} placed.`);
  playSfx("plant");
  initCards();
  updateHud();
}

function getStartingCooldown(plantDef) {
  if (plantDef.producer) {
    return plantDef.produceCooldown ?? CONFIG.balancing.campfrGlowCooldown;
  }

  if (plantDef.shooter) {
    return plantDef.shootCooldown ?? 120;
  }

  return 180;
}

function spawnEnemy(type, row) {
  const def = CONFIG.enemies[type];

  if (!def) {
    console.warn(`Unknown enemy type: ${type}`);
    return;
  }

  state.enemies.push({
    type,
    row,
    x: GRID_X + COLS * CELL_W + 40,
    y: GRID_Y + row * CELL_H + CELL_H / 2,
    hp: def.hp,
    maxHp: def.hp,
    speed: def.speed,
    damage: def.damage,
    biteCooldown: 0
  });
}

function gameLoop() {
  if (!state || !screens.game.classList.contains("active")) return;

  update();
  draw();

  if (!state.lost && !state.ending) {
    requestAnimationFrame(gameLoop);
  }
}

function update() {
  state.tick++;

  if (state.messageTimer > 0) {
    state.messageTimer--;
  }

  updatePlacementCooldowns();
  updateWaves();
  updatePlants();
  updateProjectiles();
  updateEnemies();
  updateExplosions();

  updateHud();
}

function updatePlacementCooldowns() {
  let changed = false;

  for (const id of Object.keys(state.placementCooldowns)) {
    if (state.placementCooldowns[id] > 0) {
      state.placementCooldowns[id]--;
      changed = true;
    }
  }

  if (changed && state.tick % 30 === 0) {
    initCards();
    if (state.selectedPlant) {
      document.querySelectorAll(".card").forEach(card => {
        card.classList.toggle("selected", card.dataset.plant === state.selectedPlant);
      });
    }
  }
}

function updateWaves() {
  if (state.waveIndex >= state.level.waves.length) {
    if (state.enemies.length === 0 && !state.won) {
      state.won = true;
      say("You won. The derps are confused forever.", 999999);
      playMusic("victory");
      playSfx("win");
      beginLevelComplete();
    }
    return;
  }

  if (state.betweenWaveTimer > 0) {
    state.betweenWaveTimer--;
    return;
  }

  const wave = state.level.waves[state.waveIndex];
  state.waveTimer++;

  while (
    state.waveSpawnIndex < wave.length &&
    state.waveTimer >= wave[state.waveSpawnIndex].delay
  ) {
    const spawn = wave[state.waveSpawnIndex];
    spawnEnemy(spawn.type, spawn.row);
    state.waveSpawnIndex++;
  }

  if (state.waveSpawnIndex >= wave.length && state.enemies.length === 0) {
    state.waveIndex++;
    state.waveSpawnIndex = 0;
    state.waveTimer = 0;
    state.betweenWaveTimer = CONFIG.balancing.betweenWaveDelay;

    if (state.waveIndex < state.level.waves.length) {
      say("Next wave soon.");
    }
  }
}

function beginLevelComplete() {
  createFloatingUI();

  state.ending = true;
  state.endTimer = CONFIG.balancing.winFadeTicks;

  setTimeout(() => {
    ui.fade.classList.add("show");
  }, 100);

  setTimeout(() => {
    const nextLevel = state.levelIndex + 1;

    ui.fade.classList.remove("show");

    if (nextLevel >= CONFIG.levels.length) {
      showCredits();
    } else {
      startLevel(nextLevel, chosenPlants);
    }
  }, CONFIG.balancing.winFadeTicks * 16);
}

function showCredits() {
  createFloatingUI();
  stopAllMusic();

  ui.credits.innerHTML = `
    <div class="pad-credits-text">
      thank.<br><br>
      u win.<br><br>
      no reward sad?<br><br>
      you beat game!<br><br>
      that matter.<br><br>
      game may update.<br><br>
      check out mor, fun trust.
    </div>
  `;

  ui.credits.classList.add("show");

  setTimeout(() => {
    ui.credits.classList.remove("show");
    showScreen("menu");
  }, 14000);
}

function updatePlants() {
  for (const plant of [...state.plants]) {
    const plantDef = CONFIG.plants[plant.id];

    if (!plantDef) continue;

    plant.cooldown--;

    if (plantDef.producer) {
      updateProducerPlant(plant, plantDef);
    }

    if (plantDef.shooter) {
      updateShooterPlant(plant, plantDef);
    }

    if (plant.id === "kaboom" || plantDef.fuse) {
      plant.fuse--;

      if (plant.fuse <= 0) {
        explodePlant(plant);
      }
    }
  }
}

function updateProducerPlant(plant, plantDef) {
  if (plant.cooldown > 0) return;

  const amount = plantDef.produceAmount ?? CONFIG.balancing.campfrGlowAmount;
  const cooldown = plantDef.produceCooldown ?? CONFIG.balancing.campfrGlowCooldown;

  state.glow += amount;
  plant.cooldown = cooldown;

  popParticle(
    GRID_X + plant.col * CELL_W + CELL_W / 2,
    GRID_Y + plant.row * CELL_H + 20,
    "#ffe95a"
  );

  playSfx("glow");
}

function updateShooterPlant(plant, plantDef) {
  const plantX = GRID_X + plant.col * CELL_W;

  const hasTarget = state.enemies.some(enemy => {
    if (enemy.x <= plantX) return false;

    if (plantDef.multiLane) {
      return Math.abs(enemy.row - plant.row) <= 1;
    }

    return enemy.row === plant.row;
  });

  if (plant.cooldown > 0 || !hasTarget) return;

  firePlantProjectile(plant, plantDef, plant.row);

  if (plantDef.multiLane) {
    firePlantProjectile(plant, plantDef, plant.row - 1);
    firePlantProjectile(plant, plantDef, plant.row + 1);
  }

  if (Math.random() * 100 < (plantDef.doubleShotChance || 0)) {
    firePlantProjectile(plant, plantDef, plant.row);
  }

  plant.cooldown = plantDef.shootCooldown ?? 120;
  playSfx("shoot");
}

function firePlantProjectile(plant, plantDef, row) {
  if (row < 0 || row >= ROWS) return;

  state.projectiles.push({
    x: GRID_X + plant.col * CELL_W + CELL_W * 0.65,
    y: GRID_Y + row * CELL_H + CELL_H * 0.45,
    row,
    speed: plantDef.projectileSpeed || 4.5,
    damage: plantDef.projectileDamage || 20,
    areaDamage: plantDef.areaDamage || false,
    areaRadius: plantDef.areaRadius || 0
  });
}

function updateProjectiles() {
  for (let i = state.projectiles.length - 1; i >= 0; i--) {
    const projectile = state.projectiles[i];
    projectile.x += projectile.speed;

    const hitEnemy = state.enemies.find(enemy => {
      return enemy.row === projectile.row && Math.abs(enemy.x - projectile.x) < 26;
    });

    if (hitEnemy) {
      if (projectile.areaDamage) {
        for (const enemy of state.enemies) {
          const distance = Math.hypot(enemy.x - hitEnemy.x, enemy.y - hitEnemy.y);

          if (distance <= projectile.areaRadius) {
            enemy.hp -= projectile.damage;
          }
        }
      } else {
        hitEnemy.hp -= projectile.damage;
      }

      state.projectiles.splice(i, 1);
      popParticle(hitEnemy.x, hitEnemy.y, "#b8754a");
      playSfx("hit");
      continue;
    }

    if (projectile.x > canvas.width + 40) {
      state.projectiles.splice(i, 1);
    }
  }
}

function updateEnemies() {
  for (let i = state.enemies.length - 1; i >= 0; i--) {
    const enemy = state.enemies[i];

    if (enemy.hp <= 0) {
      state.enemies.splice(i, 1);
      state.glow += CONFIG.balancing.derpDefeatGlow;
      popParticle(enemy.x, enemy.y, "#ffffff");
      playSfx("glow");
      continue;
    }

    const col = Math.floor((enemy.x - GRID_X) / CELL_W);
    const plant = state.grid[enemy.row]?.[col]?.plant;

    if (plant && Math.abs(enemy.x - (GRID_X + col * CELL_W + CELL_W / 2)) < 36) {
      if (enemy.biteCooldown <= 0) {
        plant.hp -= enemy.damage;
        enemy.biteCooldown = 60;
        popParticle(
          GRID_X + col * CELL_W + CELL_W / 2,
          GRID_Y + enemy.row * CELL_H + CELL_H / 2,
          "#ff4444"
        );
        playSfx("hit");

        if (plant.hp <= 0) {
          state.grid[plant.row][plant.col].plant = null;
          state.plants = state.plants.filter(current => current !== plant);
        }
      } else {
        enemy.biteCooldown--;
      }

      continue;
    }

    enemy.x -= enemy.speed;

    if (enemy.x < GRID_X - 50) {
      state.lost = true;
      stopAllMusic();
      say("A derp entered your house. It is over.", 999999);
      playSfx("no");
      return;
    }
  }
}

function explodePlant(plant) {
  const plantDef = CONFIG.plants[plant.id] || CONFIG.plants.kaboom;
  const centerX = GRID_X + plant.col * CELL_W + CELL_W / 2;
  const centerY = GRID_Y + plant.row * CELL_H + CELL_H / 2;

  for (const enemy of state.enemies) {
    const distance = Math.hypot(enemy.x - centerX, enemy.y - centerY);

    if (distance < (plantDef.radius || 140)) {
      enemy.hp -= plantDef.damage || 180;
    }
  }

  state.explosions.push({
    x: centerX,
    y: centerY,
    radius: 10,
    life: 24
  });

  state.grid[plant.row][plant.col].plant = null;
  state.plants = state.plants.filter(current => current !== plant);

  say(`${plantDef.name || "Plant"} went kaboom.`);
  playSfx("boom");
}

function updateExplosions() {
  for (let i = state.explosions.length - 1; i >= 0; i--) {
    const explosion = state.explosions[i];
    explosion.radius += 7;
    explosion.life--;

    if (explosion.life <= 0) {
      state.explosions.splice(i, 1);
    }
  }

  for (let i = state.particles.length - 1; i >= 0; i--) {
    const particle = state.particles[i];
    particle.y -= 0.4;
    particle.life--;

    if (particle.life <= 0) {
      state.particles.splice(i, 1);
    }
  }
}

function popParticle(x, y, color) {
  state.particles.push({
    x,
    y,
    color,
    life: 45
  });
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawBoard();
  drawPlants();
  drawEnemies();
  drawProjectiles();
  drawExplosions();
  drawParticles();
}

function drawBoard() {
  ctx.fillStyle = "#5fb846";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      const x = GRID_X + col * CELL_W;
      const y = GRID_Y + row * CELL_H;
      const cell = state.grid[row][col];

      if (cell.tile === "lava") {
        ctx.fillStyle = "#e85b17";
        ctx.fillRect(x, y, CELL_W, CELL_H);

        ctx.fillStyle = "#ffdd44";
        ctx.fillRect(x + 8, y + 28, CELL_W - 16, 8);
      } else if (images.grass.complete) {
        ctx.drawImage(images.grass, x + 4, y + 4, CELL_W - 8, CELL_H - 8);
      } else {
        ctx.fillStyle = (row + col) % 2 ? "#6fcc50" : "#72d455";
        ctx.fillRect(x, y, CELL_W, CELL_H);
      }

      ctx.strokeStyle = "#1c8c39";
      ctx.lineWidth = 2;
      ctx.strokeRect(x, y, CELL_W, CELL_H);
    }
  }
}

function drawPlants() {
  for (const plant of state.plants) {
    const def = CONFIG.plants[plant.id];
    const x = GRID_X + plant.col * CELL_W + 6;
    const y = GRID_Y + plant.row * CELL_H + 3;

    const img = def ? images[def.img] : null;

    if (img && img.complete) {
      ctx.drawImage(img, x, y, CELL_W - 12, CELL_H - 8);
    } else {
      ctx.fillStyle = "#159948";
      ctx.fillRect(x + 10, y + 10, CELL_W - 30, CELL_H - 25);
    }

    if (plant.hp < plant.maxHp) {
      ctx.fillStyle = "#000";
      ctx.fillRect(x + 8, y + CELL_H - 10, CELL_W - 24, 5);

      ctx.fillStyle = "#46ff46";
      ctx.fillRect(x + 8, y + CELL_H - 10, (CELL_W - 24) * (plant.hp / plant.maxHp), 5);
    }
  }
}

function drawEnemies() {
  for (const enemy of state.enemies) {
    const def = CONFIG.enemies[enemy.type];
    const img = def ? images[def.img] : null;

    if (img && img.complete) {
      ctx.drawImage(img, enemy.x - 38, enemy.y - 42, 76, 76);
    } else {
      ctx.fillStyle = "#eee";
      ctx.fillRect(enemy.x - 20, enemy.y - 28, 40, 56);
    }

    ctx.fillStyle = "#000";
    ctx.fillRect(enemy.x - 24, enemy.y - 48, 48, 5);

    ctx.fillStyle = "#ff3333";
    ctx.fillRect(enemy.x - 24, enemy.y - 48, 48 * (enemy.hp / enemy.maxHp), 5);
  }
}

function drawProjectiles() {
  ctx.fillStyle = "#5b2b16";

  for (const projectile of state.projectiles) {
    ctx.fillRect(projectile.x, projectile.y, 18, 6);
  }
}

function drawExplosions() {
  for (const explosion of state.explosions) {
    ctx.strokeStyle = `rgba(255, 90, 20, ${explosion.life / 24})`;
    ctx.lineWidth = 8;
    ctx.beginPath();
    ctx.arc(explosion.x, explosion.y, explosion.radius, 0, Math.PI * 2);
    ctx.stroke();
  }
}

function drawParticles() {
  for (const particle of state.particles) {
    ctx.globalAlpha = particle.life / 45;
    ctx.fillStyle = particle.color;
    ctx.fillRect(particle.x - 5, particle.y - 5, 10, 10);
    ctx.globalAlpha = 1;
  }
}

canvas.addEventListener("click", event => {
  unlockAudio();

  if (!state || !state.running || state.lost || state.won || state.ending) return;

  const position = gridFromMouse(event);

  if (!position) return;

  plantAt(position.row, position.col, state.selectedPlant);
});

document.addEventListener("click", unlockAudio);
document.addEventListener("keydown", unlockAudio);

document.getElementById("playBtn").addEventListener("click", () => {
  if (CONFIG.plantPicker.enabled) {
    openPlantPicker(0);
  } else {
    startLevel(0, chosenPlants);
  }
});

document.getElementById("levelBtn").addEventListener("click", () => {
  showScreen("levels");
});

document.getElementById("howBtn").addEventListener("click", () => {
  showScreen("how");
});

document.getElementById("backFromLevels").addEventListener("click", () => {
  showScreen("menu");
});

document.getElementById("backFromHow").addEventListener("click", () => {
  showScreen("menu");
});

document.getElementById("backToMenu").addEventListener("click", () => {
  showScreen("menu");
});

document.getElementById("restartLevel").addEventListener("click", () => {
  if (CONFIG.plantPicker.enabled) {
    openPlantPicker(state?.levelIndex || 0);
  } else {
    startLevel(state?.levelIndex || 0, chosenPlants);
  }
});

const fullscreenButton = document.getElementById("fullscreenBtn");

if (fullscreenButton) {
  fullscreenButton.addEventListener("click", async () => {
    const gameScreen = document.getElementById("gameScreen");

    try {
      if (!document.fullscreenElement) {
        await gameScreen.requestFullscreen();
        fullscreenButton.textContent = "Exit Fullscreen";
      } else {
        await document.exitFullscreen();
        fullscreenButton.textContent = "Fullscreen";
      }
    } catch (err) {
      console.warn("Fullscreen failed:", err);
    }
  });

  document.addEventListener("fullscreenchange", () => {
    fullscreenButton.textContent = document.fullscreenElement ? "Exit Fullscreen" : "Fullscreen";
  });
}

createFloatingUI();
initLevelButtons();
showScreen("menu");
