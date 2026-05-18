// Plants Against Derps - main.js v1.5
// Full replacement.
// Paste Part 1, then Part 2, then Part 3 directly underneath.

// ============================================================
// EASY CONFIG - edit this first
// ============================================================
const CONFIG = {
  audio: {
    enabled: true,

    // Add more songs here.
    // For your desert song, upload it to audio/deserttheme.m4a
    tracks: {
      menu: "audio/mainmenubeat.m4a",
      battle: "audio/derpbattle1.m4a",
      victory: "audio/derpvictorytheme.m4a",
      desert: "audio/deserttheme.m4a"
    },

    menuTrack: "menu",
    defaultBattleTrack: "battle",
    victoryTrack: "victory",

    musicVolume: 0.45,
    victoryVolume: 0.55,
    sfxVolume: 0.035
  },

  save: {
    key: "plantsAgainstDerpsSave_v1_5"
  },

  currency: {
    name: "Twigs",
    minReward: 5,
    maxReward: 15
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
    winFadeTicks: 120,

    // Removing a plant drops this percent of the original cost.
    removeRefundPercent: 0.5
  },

  plantPicker: {
    enabled: true,
    title: "Pick the bullcrap",
    maxPlants: 4
  },

  upgrades: {
    maxLevel: 5,

    // Every plant upgrade costs this much more each level.
    baseCost: 30,
    costPerLevel: 25,

    // Simple upgrade effects.
    hpBoostPerLevel: 15,
    damageBoostPerLevel: 4,
    producerBoostPerLevel: 5
  },

  shop: {
    badges: {
      proPlanter: {
        name: "Pro Planter",
        cost: 50,
        desc: "You placed plants and felt important."
      },

      kaboomMaster: {
        name: "Kaboom Master",
        cost: 75,
        desc: "Explosions solved your problems."
      },

      derpDeleter: {
        name: "Derp Deleter",
        cost: 100,
        desc: "Many derps were removed from existence."
      },

      twigCollector: {
        name: "Twig Collector",
        cost: 125,
        desc: "You collected sticks with financial intent."
      },

      morFan: {
        name: "Mor Enjoyer",
        cost: 150,
        desc: "You checked out mor. Fun trust."
      }
    }
  },

  plants: {
    removeTool: {
      name: "Remove Plant",
      cost: 0,
      hp: 1,
      img: "removeTool",
      desc: "Remove a plant and drop half Glow.",
      tool: "remove"
    },

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
      cost: 75,
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
  },

  enemies: {
    basic: {
      name: "Da Boiiiiii",
      hp: 90,
      speed: 0.14,
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
    },

    mechaDerp: {
      name: "Mecha Derp",
      hp: 600,
      speed: 0.16,
      damage: 28,
      img: "mechaDerp",
      boss: true
    }
  },

  images: {
    removeTool: "assets/remove-tool.png",

    campfr: "assets/plant-campfr.png",
    treeGun: "assets/plant-tree-gun.png",
    rosegun: "assets/rosegun.png",
    soggyMattress: "assets/soggy-mattress.png",
    kaboom: "assets/plant-el-kaboom.png",

    basicDerp: "assets/enemy-basic-derp.png",
    armoredDerp: "assets/enemy-armored-derp.png",
    fastDerp: "assets/enemy-fast-derp.png",
    mechaDerp: "assets/mechaderp.png",

    glow: "assets/resource-glow.png",
    grass: "assets/tile-grass.png",
    sand: "assets/tile-sand.png"
  },

  levels: [
    {
      name: "1-1",
      title: "First Derp",
      desc: "A regular lawn with regular bad decisions.",
      startGlow: 75,
      music: "battle",
      waves: [
        [{ type: "basic", row: 2, delay: 120 }],
        [
          { type: "basic", row: 1, delay: 100 },
          { type: "basic", row: 3, delay: 220 }
        ]
      ],
      lava: [],
      sand: []
    },

    {
      name: "1-2",
      title: "Two Derps Maybe",
      desc: "More derps walk at you. Horrifying.",
      startGlow: 75,
      music: "battle",
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
      lava: [],
      sand: []
    },

    {
      name: "1-3",
      title: "Fast Boi Test",
      desc: "Fast Da Boiiiiii joins the argument.",
      startGlow: 100,
      music: "battle",
      waves: [
        [{ type: "fast", row: 1, delay: 120 }],
        [
          { type: "basic", row: 2, delay: 90 },
          { type: "fast", row: 2, delay: 250 },
          { type: "basic", row: 4, delay: 420 }
        ]
      ],
      lava: [],
      sand: []
    },

    {
      name: "1-4",
      title: "Armor Moment",
      desc: "Armored Da Boiiiiii is mildly rude.",
      startGlow: 100,
      music: "battle",
      waves: [
        [{ type: "armored", row: 2, delay: 180 }],
        [
          { type: "basic", row: 1, delay: 90 },
          { type: "armored", row: 3, delay: 300 }
        ]
      ],
      lava: [],
      sand: []
    },

    {
      name: "1-5",
      title: "Mor Level Preview",
      desc: "Lava tiles exist. Do not plant there.",
      startGlow: 125,
      music: "battle",
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
      lava: [[4, 1], [4, 2], [4, 3]],
      sand: []
    },

    {
      name: "1-6",
      title: "Kaboom Lessons",
      desc: "El Kaboom solves problems loudly.",
      startGlow: 150,
      music: "battle",
      waves: [
        [
          { type: "basic", row: 1, delay: 80 },
          { type: "basic", row: 1, delay: 180 },
          { type: "basic", row: 1, delay: 280 }
        ],
        [{ type: "armored", row: 2, delay: 170 }]
      ],
      lava: [],
      sand: []
    },

    {
      name: "1-7",
      title: "Lawn Malfunction",
      desc: "This lawn is not inspected.",
      startGlow: 150,
      music: "battle",
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
      lava: [[2, 0], [6, 4]],
      sand: []
    },

    {
      name: "1-8",
      title: "Derp Stack",
      desc: "Many derps. Concerning quantity.",
      startGlow: 175,
      music: "battle",
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
      lava: [],
      sand: []
    },

    {
      name: "1-9",
      title: "Actual Problem",
      desc: "The derps found shoes.",
      startGlow: 200,
      music: "battle",
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
      lava: [[3, 2], [5, 2]],
      sand: []
    },

    {
      name: "1-10",
      title: "The Derpening",
      desc: "Final level of world 1. Very serious.",
      startGlow: 225,
      music: "battle",
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
      lava: [[4, 0], [4, 1], [4, 3], [4, 4]],
      sand: []
    },

    {
      name: "2-1",
      title: "Start of The Derp Ages",
      desc: "Now fighting with machines.",
      startGlow: 125,
      music: "desert",
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
        ],
        [
          { type: "mechaDerp", row: 3, delay: 530 }
        ]
      ],
      lava: [[4, 0], [4, 1], [4, 3], [5, 1], [5, 4], [4, 4]],
      sand: [
        [0, 0], [1, 0], [2, 0], [3, 0], [6, 0], [7, 0], [8, 0],
        [0, 1], [1, 1], [2, 1], [3, 1], [6, 1], [7, 1], [8, 1],
        [0, 2], [1, 2], [2, 2], [3, 2], [5, 2], [6, 2], [7, 2], [8, 2],
        [0, 3], [1, 3], [2, 3], [3, 3], [5, 3], [6, 3], [7, 3], [8, 3],
        [0, 4], [1, 4], [2, 4], [3, 4], [6, 4], [7, 4], [8, 4]
      ]
    }
  ],

  minigames: [
    {
      name: "M-1",
      title: "Best Use Is Boom",
      desc: "Lots of bosses. Kaboom is probably the answer.",
      startGlow: 700,
      music: "battle",
      waves: [
        [
          { type: "armored", row: 0, delay: 80 },
          { type: "armored", row: 2, delay: 160 },
          { type: "armored", row: 4, delay: 240 }
        ],
        [
          { type: "mechaDerp", row: 1, delay: 160 },
          { type: "mechaDerp", row: 3, delay: 360 }
        ],
        [
          { type: "mechaDerp", row: 0, delay: 140 },
          { type: "mechaDerp", row: 2, delay: 300 },
          { type: "mechaDerp", row: 4, delay: 460 }
        ]
      ],
      lava: [],
      sand: []
    },

    {
      name: "M-2",
      title: "The Floor Is Kinda Lava",
      desc: "You only have the far left to work with.",
      startGlow: 250,
      music: "battle",
      waves: [
        [
          { type: "basic", row: 0, delay: 80 },
          { type: "basic", row: 1, delay: 160 },
          { type: "basic", row: 2, delay: 240 },
          { type: "basic", row: 3, delay: 320 },
          { type: "basic", row: 4, delay: 400 }
        ],
        [
          { type: "fast", row: 1, delay: 100 },
          { type: "fast", row: 3, delay: 220 },
          { type: "armored", row: 2, delay: 420 }
        ]
      ],
      lava: [
        [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0], [8, 0],
        [2, 1], [3, 1], [4, 1], [5, 1], [6, 1], [7, 1], [8, 1],
        [2, 2], [3, 2], [4, 2], [5, 2], [6, 2], [7, 2], [8, 2],
        [2, 3], [3, 3], [4, 3], [5, 3], [6, 3], [7, 3], [8, 3],
        [2, 4], [3, 4], [4, 4], [5, 4], [6, 4], [7, 4], [8, 4]
      ],
      sand: []
    },

    {
      name: "M-3",
      title: "Growing Too Greedy",
      desc: "Create 1000 Glow total while fast derps rush you.",
      startGlow: 50,
      music: "battle",
      goalGlowProduced: 1000,
      waves: [
        [
          { type: "fast", row: 0, delay: 120 },
          { type: "fast", row: 2, delay: 260 },
          { type: "fast", row: 4, delay: 400 }
        ],
        [
          { type: "fast", row: 1, delay: 90 },
          { type: "fast", row: 3, delay: 180 },
          { type: "fast", row: 2, delay: 300 },
          { type: "fast", row: 0, delay: 430 }
        ],
        [
          { type: "fast", row: 4, delay: 100 },
          { type: "fast", row: 3, delay: 200 },
          { type: "fast", row: 2, delay: 300 },
          { type: "fast", row: 1, delay: 400 },
          { type: "fast", row: 0, delay: 500 }
        ]
      ],
      lava: [],
      sand: []
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

const music = {};
for (const [trackName, src] of Object.entries(CONFIG.audio.tracks)) {
  music[trackName] = new Audio(src);
  music[trackName].loop = trackName !== CONFIG.audio.victoryTrack;
  music[trackName].volume = trackName === CONFIG.audio.victoryTrack
    ? CONFIG.audio.victoryVolume
    : CONFIG.audio.musicVolume;
}

let audioUnlocked = false;
let currentMusic = null;
let currentLevelList = "levels";
let state = null;

let SAVE = {
  twigs: 0,
  badges: {},
  upgrades: {}
};

let chosenPlants = Object.keys(CONFIG.plants)
  .filter(id => !CONFIG.plants[id].tool)
  .slice(0, CONFIG.plantPicker.maxPlants);

const ui = {
  picker: null,
  fade: null,
  credits: null,
  shop: null,
  upgrades: null,
  minigames: null,
  glowLayer: null
};

function loadSave() {
  try {
    const raw = localStorage.getItem(CONFIG.save.key);
    if (!raw) return;

    const parsed = JSON.parse(raw);

    SAVE = {
      twigs: Number(parsed.twigs || 0),
      badges: parsed.badges || {},
      upgrades: parsed.upgrades || {}
    };
  } catch (err) {
    console.warn("Save failed to load:", err);
  }
}

function saveGame() {
  try {
    localStorage.setItem(CONFIG.save.key, JSON.stringify(SAVE));
  } catch (err) {
    console.warn("Save failed:", err);
  }
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getPlantLevel(id) {
  return Math.max(1, Math.min(CONFIG.upgrades.maxLevel, SAVE.upgrades[id] || 1));
}

function getUpgradeCost(id) {
  const level = getPlantLevel(id);
  return CONFIG.upgrades.baseCost + (level - 1) * CONFIG.upgrades.costPerLevel;
}

function getPlantStats(id) {
  const base = CONFIG.plants[id];
  if (!base) return null;

  const level = getPlantLevel(id);
  const bonusLevels = level - 1;

  return {
    ...base,
    hp: (base.hp || 1) + bonusLevels * CONFIG.upgrades.hpBoostPerLevel,
    projectileDamage: (base.projectileDamage || 0) + bonusLevels * CONFIG.upgrades.damageBoostPerLevel,
    produceAmount: (base.produceAmount || base.cost || 0) + bonusLevels * CONFIG.upgrades.producerBoostPerLevel
  };
}

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

  const track = music[name] || music[CONFIG.audio.defaultBattleTrack];
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
    } else if (type === "buy") {
      freq = 640;
      duration = 0.1;
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
  createFloatingUI();
  closeAllOverlays();

  if (state) {
    state.running = false;
  }

  for (const screen of Object.values(screens)) {
    screen.classList.remove("active");
  }

  screens[name].classList.add("active");

  if (name === "menu" || name === "levels" || name === "how") {
    playMusic(CONFIG.audio.menuTrack);
  }
}

function closeAllOverlays() {
  for (const overlay of Object.values(ui)) {
    if (overlay && overlay.classList) {
      overlay.classList.remove("show");
    }
  }
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

  if (!ui.shop) {
    ui.shop = document.createElement("div");
    ui.shop.id = "padShopOverlay";
    document.body.appendChild(ui.shop);
  }

  if (!ui.upgrades) {
    ui.upgrades = document.createElement("div");
    ui.upgrades.id = "padUpgradeOverlay";
    document.body.appendChild(ui.upgrades);
  }

  if (!ui.minigames) {
    ui.minigames = document.createElement("div");
    ui.minigames.id = "padMinigameOverlay";
    document.body.appendChild(ui.minigames);
  }

  if (!ui.glowLayer) {
    ui.glowLayer = document.createElement("div");
    ui.glowLayer.id = "padGlowLayer";
    document.body.appendChild(ui.glowLayer);
  }

  if (!document.getElementById("padDynamicStyle")) {
    const style = document.createElement("style");
    style.id = "padDynamicStyle";
    style.textContent = `
      #padPickerOverlay,
      #padShopOverlay,
      #padUpgradeOverlay,
      #padMinigameOverlay {
        position: fixed;
        inset: 0;
        background: rgba(0,0,0,0.78);
        z-index: 9999;
        display: none;
        place-items: center;
        color: white;
        font-family: system-ui, Arial, sans-serif;
        padding: 18px;
      }

      #padPickerOverlay.show,
      #padShopOverlay.show,
      #padUpgradeOverlay.show,
      #padMinigameOverlay.show {
        display: grid;
      }

      .pad-box {
        width: min(900px, 94vw);
        max-height: 88vh;
        overflow: auto;
        background: linear-gradient(135deg, rgba(45,160,220,0.35), rgba(0,0,0,0.92));
        border: 2px solid rgba(160,240,255,0.9);
        border-radius: 26px;
        padding: 22px;
        box-shadow: 0 0 40px rgba(80,220,255,0.3);
      }

      .pad-box h2 {
        margin-top: 0;
        color: #bff7ff;
      }

      .pad-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(145px, 1fr));
        gap: 12px;
      }

      .pad-card {
        background: #eee;
        color: #111;
        border: 4px solid #111;
        border-radius: 14px;
        padding: 8px;
        cursor: pointer;
        font-weight: 800;
        min-height: 130px;
      }

      .pad-card.picked {
        outline: 5px solid #ffe95a;
        background: #fff9ba;
      }

      .pad-card.locked {
        opacity: 0.58;
      }

      .pad-card img {
        width: 100%;
        height: 78px;
        object-fit: contain;
        background: white;
        border-radius: 8px;
      }

      .pad-card span {
        display: block;
        font-size: 12px;
      }

      .pad-buttons {
        margin-top: 18px;
        display: flex;
        gap: 12px;
        flex-wrap: wrap;
      }

      .pad-buttons button,
      .pad-mini-button {
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

      #padGlowLayer {
        position: fixed;
        inset: 0;
        pointer-events: none;
        z-index: 6000;
      }

      .pad-glow-drop {
        position: absolute;
        width: 36px;
        height: 36px;
        border-radius: 999px;
        border: 2px solid #fff7a8;
        background: radial-gradient(circle, #fff7a8, #ffd13c 55%, #c28308);
        box-shadow: 0 0 18px rgba(255,225,80,0.9);
        color: #221600;
        font-weight: 900;
        font-size: 11px;
        display: grid;
        place-items: center;
        pointer-events: all;
        cursor: pointer;
      }

      @media (max-width: 800px) {
        #padPickerOverlay,
        #padShopOverlay,
        #padUpgradeOverlay,
        #padMinigameOverlay {
          align-items: start;
          overflow: auto;
        }

        .pad-box {
          margin-top: 10px;
          padding: 16px;
          border-radius: 18px;
        }

        .pad-grid {
          grid-template-columns: repeat(auto-fit, minmax(118px, 1fr));
        }

        .pad-card {
          min-height: 116px;
          font-size: 13px;
        }

        .pad-card img {
          height: 58px;
        }
      }
    `;
    document.head.appendChild(style);
  }
}

function initLevelButtons() {
  levelGridEl.innerHTML = "";

  CONFIG.levels.forEach((level, index) => {
    const button = document.createElement("button");
    button.className = "level-tile";
    button.textContent = `${level.name} - ${level.title}`;
    button.addEventListener("click", () => openPlantPicker(index, "levels"));
    levelGridEl.appendChild(button);
  });
}

function openMinigames() {
  createFloatingUI();

  ui.minigames.innerHTML = `
    <div class="pad-box">
      <h2>Minigames</h2>
      <p>Side levels for bad decisions. Twigs still count.</p>
      <div class="pad-grid" id="padMinigameGrid"></div>
      <div class="pad-buttons">
        <button id="padCloseMinigames">Back</button>
      </div>
    </div>
  `;

  const grid = ui.minigames.querySelector("#padMinigameGrid");

  CONFIG.minigames.forEach((level, index) => {
    const btn = document.createElement("button");
    btn.className = "pad-card";
    btn.innerHTML = `
      <b>${level.name}</b>
      <span>${level.title}</span>
      <br>
      <span>${level.desc}</span>
    `;
    btn.onclick = () => openPlantPicker(index, "minigames");
    grid.appendChild(btn);
  });

  ui.minigames.classList.add("show");

  ui.minigames.querySelector("#padCloseMinigames").onclick = () => {
    ui.minigames.classList.remove("show");
  };
}

function openPlantPicker(levelIndex, listName = "levels") {
  createFloatingUI();

  const max = CONFIG.plantPicker.maxPlants;
  const selected = new Set(chosenPlants.filter(id => CONFIG.plants[id] && !CONFIG.plants[id].tool).slice(0, max));

  ui.picker.innerHTML = `
    <div class="pad-box">
      <h2>${CONFIG.plantPicker.title}</h2>
      <p>Choose up to ${max} plants. The remove tool is always included.</p>
      <div class="pad-grid" id="padPickerGrid"></div>
      <div class="pad-buttons">
        <button id="padStartLevel">Start Level</button>
        <button id="padCancelPicker">Cancel</button>
      </div>
    </div>
  `;

  const grid = ui.picker.querySelector("#padPickerGrid");

  for (const [id, plant] of Object.entries(CONFIG.plants)) {
    if (plant.tool) continue;

    const btn = document.createElement("button");
    btn.className = "pad-card";
    btn.dataset.id = id;

    const level = getPlantLevel(id);

    btn.innerHTML = `
      <img src="${CONFIG.images[plant.img]}" alt="${plant.name}">
      <b>${plant.name}</b>
      <span>${plant.cost} Glow</span>
      <span>Lv ${level}/${CONFIG.upgrades.maxLevel}</span>
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

    chosenPlants = ["removeTool", ...selected];
    ui.picker.classList.remove("show");
    currentLevelList = listName;
    startLevel(levelIndex, chosenPlants, listName);
  };

  ui.picker.querySelector("#padCancelPicker").onclick = () => {
    ui.picker.classList.remove("show");
  };
}

function openShop() {
  createFloatingUI();

  ui.shop.innerHTML = `
    <div class="pad-box">
      <h2>Twig Shop</h2>
      <p>${CONFIG.currency.name}: <b id="padTwigCount">${SAVE.twigs}</b></p>
      <div class="pad-grid" id="padShopGrid"></div>
      <div class="pad-buttons">
        <button id="padCloseShop">Back</button>
      </div>
    </div>
  `;

  const grid = ui.shop.querySelector("#padShopGrid");

  for (const [id, badge] of Object.entries(CONFIG.shop.badges)) {
    const owned = !!SAVE.badges[id];

    const card = document.createElement("button");
    card.className = "pad-card";
    if (owned) card.classList.add("picked");

    card.innerHTML = `
      <b>${badge.name}</b>
      <span>${badge.desc}</span>
      <br>
      <span>${owned ? "Owned" : `${badge.cost} Twigs`}</span>
    `;

    card.onclick = () => {
      if (owned) {
        playSfx("no");
        return;
      }

      if (SAVE.twigs < badge.cost) {
        playSfx("no");
        return;
      }

      SAVE.twigs -= badge.cost;
      SAVE.badges[id] = true;
      saveGame();
      playSfx("buy");
      openShop();
    };

    grid.appendChild(card);
  }

  ui.shop.classList.add("show");

  ui.shop.querySelector("#padCloseShop").onclick = () => {
    ui.shop.classList.remove("show");
  };
}

function openUpgrades() {
  createFloatingUI();

  ui.upgrades.innerHTML = `
    <div class="pad-box">
      <h2>Upgrade Plants</h2>
      <p>${CONFIG.currency.name}: <b>${SAVE.twigs}</b></p>
      <p>Max level: ${CONFIG.upgrades.maxLevel}</p>
      <div class="pad-grid" id="padUpgradeGrid"></div>
      <div class="pad-buttons">
        <button id="padCloseUpgrades">Back</button>
      </div>
    </div>
  `;

  const grid = ui.upgrades.querySelector("#padUpgradeGrid");

  for (const [id, plant] of Object.entries(CONFIG.plants)) {
    if (plant.tool) continue;

    const level = getPlantLevel(id);
    const maxed = level >= CONFIG.upgrades.maxLevel;
    const cost = getUpgradeCost(id);

    const card = document.createElement("button");
    card.className = "pad-card";
    if (maxed) card.classList.add("picked");

    card.innerHTML = `
      <img src="${CONFIG.images[plant.img]}" alt="${plant.name}">
      <b>${plant.name}</b>
      <span>Level ${level}/${CONFIG.upgrades.maxLevel}</span>
      <span>${maxed ? "Maxed" : `Upgrade: ${cost} Twigs`}</span>
    `;

    card.onclick = () => {
      if (maxed) {
        playSfx("no");
        return;
      }

      if (SAVE.twigs < cost) {
        playSfx("no");
        return;
      }

      SAVE.twigs -= cost;
      SAVE.upgrades[id] = level + 1;
      saveGame();
      playSfx("buy");
      openUpgrades();
    };

    grid.appendChild(card);
  }

  ui.upgrades.classList.add("show");

  ui.upgrades.querySelector("#padCloseUpgrades").onclick = () => {
    ui.upgrades.classList.remove("show");
  };
}

function initCards() {
  cardsEl.innerHTML = "";

  const allowedPlants = chosenPlants.length > 0 ? chosenPlants : ["removeTool", "campfr", "treeGun", "rosegun"];

  for (const id of allowedPlants) {
    const plant = CONFIG.plants[id];
    if (!plant) continue;

    const stats = getPlantStats(id) || plant;

    const card = document.createElement("button");
    card.className = "card";
    card.dataset.plant = id;

    const cooldownLeft = state?.placementCooldowns?.[id] || 0;
    const cooldownText = cooldownLeft > 0
      ? `<br><span>Cooldown: ${Math.ceil(cooldownLeft / 60)}s</span>`
      : "";

    const levelText = plant.tool ? "" : `<br><span>Lv ${getPlantLevel(id)}</span>`;

    card.innerHTML = `
      <img src="${CONFIG.images[plant.img]}" alt="${plant.name}">
      <b>${plant.name}</b>
      <span>${plant.cost} Glow</span><br>
      <span>${plant.desc}</span>
      ${levelText}
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

function selectPlant(id) {
  if (!state) return;

  state.selectedPlant = id;

  document.querySelectorAll(".card").forEach(card => {
    card.classList.toggle("selected", card.dataset.plant === id);
  });

  say(`Selected ${CONFIG.plants[id].name}.`);
}

function startLevel(index, plantLoadout = chosenPlants, listName = "levels") {
  createFloatingUI();

  const levelList = listName === "minigames" ? CONFIG.minigames : CONFIG.levels;
  const level = levelList[index];

  if (!level) {
    showScreen("menu");
    return;
  }

  currentLevelList = listName;

  state = {
    levelIndex: index,
    levelList: listName,
    level,
    glow: level.startGlow,
    glowProducedTotal: 0,
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
    glowDrops: [],
    placementCooldowns: {},
    selectedPlant: plantLoadout[0] || "removeTool",
    running: true,
    won: false,
    lost: false,
    ending: false,
    endTimer: 0,
    tick: 0,
    message: "Protect the lawn from questionable creatures.",
    messageTimer: 240
  };

  chosenPlants = plantLoadout.includes("removeTool")
    ? plantLoadout
    : ["removeTool", ...plantLoadout];

  for (let row = 0; row < ROWS; row++) {
    state.grid[row] = [];

    for (let col = 0; col < COLS; col++) {
      state.grid[row][col] = {
        tile: "grass",
        plant: null
      };
    }
  }

  for (const [col, row] of level.sand || []) {
    if (state.grid[row] && state.grid[row][col]) {
      state.grid[row][col].tile = "sand";
    }
  }

  for (const [col, row] of level.lava || []) {
    if (state.grid[row] && state.grid[row][col]) {
      state.grid[row][col].tile = "lava";
    }
  }

  levelTitleEl.textContent = `${level.name}: ${level.title}`;
  levelDescEl.textContent = level.desc;

  for (const screen of Object.values(screens)) {
    screen.classList.remove("active");
  }
  screens.game.classList.add("active");

  playMusic(level.music || CONFIG.audio.defaultBattleTrack);

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

  const goalText = state.level.goalGlowProduced
    ? ` | Goal: ${state.glowProducedTotal}/${state.level.goalGlowProduced} Glow`
    : "";

  glowText.textContent = `Glow: ${state.glow} | ${CONFIG.currency.name}: ${SAVE.twigs}${goalText}`;
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

  if (plantDef.tool === "remove") {
    removePlantAt(row, col);
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

  const stats = getPlantStats(type);

  state.glow -= plantDef.cost;

  const plant = {
    id: type,
    row,
    col,
    hp: stats.hp,
    maxHp: stats.hp,
    originalCost: plantDef.cost,
    cooldown: getStartingCooldown(stats),
    fuse: stats.fuse || 0
  };

  cell.plant = plant;
  state.plants.push(plant);
  state.placementCooldowns[type] = plantDef.placementCooldown || 0;

  say(`${plantDef.name} placed.`);
  playSfx("plant");
  initCards();
  updateHud();
}

function removePlantAt(row, col) {
  const cell = state.grid[row][col];

  if (!cell.plant) {
    say("Nothing to remove.");
    playSfx("no");
    return;
  }

  const plant = cell.plant;
  const def = CONFIG.plants[plant.id];
  const refund = Math.max(1, Math.floor((plant.originalCost || def?.cost || 0) * CONFIG.balancing.removeRefundPercent));

  cell.plant = null;
  state.plants = state.plants.filter(current => current !== plant);

  createGlowDrop(row, col, refund);
  say(`Removed ${def?.name || "plant"}. Dropped ${refund} Glow.`);
  playSfx("glow");
}

function createGlowDrop(row, col, amount) {
  const drop = {
    row,
    col,
    amount,
    id: `drop_${Date.now()}_${Math.random()}`
  };

  state.glowDrops.push(drop);
  renderGlowDrops();
}

function renderGlowDrops() {
  if (!ui.glowLayer || !state) return;

  ui.glowLayer.innerHTML = "";

  const rect = canvas.getBoundingClientRect();

  for (const drop of state.glowDrops) {
    const xOnCanvas = GRID_X + drop.col * CELL_W + CELL_W / 2;
    const yOnCanvas = GRID_Y + drop.row * CELL_H + CELL_H / 2;

    const x = rect.left + (xOnCanvas / canvas.width) * rect.width;
    const y = rect.top + (yOnCanvas / canvas.height) * rect.height;

    const el = document.createElement("button");
    el.className = "pad-glow-drop";
    el.textContent = `+${drop.amount}`;
    el.style.left = `${x - 18}px`;
    el.style.top = `${y - 18}px`;

    el.onclick = () => {
      state.glow += drop.amount;
      state.glowDrops = state.glowDrops.filter(current => current !== drop);
      playSfx("glow");
      renderGlowDrops();
      updateHud();
    };

    ui.glowLayer.appendChild(el);
  }
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
  renderGlowDrops();

  if (state.running && !state.lost && !state.ending) {
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
  checkSpecialGoals();

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
    if (state.enemies.length === 0 && !state.won && !state.level.goalGlowProduced) {
      completeLevel();
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

function checkSpecialGoals() {
  if (state.won || state.lost || state.ending) return;

  if (state.level.goalGlowProduced && state.glowProducedTotal >= state.level.goalGlowProduced && state.enemies.length === 0) {
    completeLevel();
  }
}

function completeLevel() {
  state.won = true;

  const reward = randomInt(CONFIG.currency.minReward, CONFIG.currency.maxReward);
  SAVE.twigs += reward;
  saveGame();

  say(`You won. +${reward} ${CONFIG.currency.name}.`, 999999);
  playMusic(CONFIG.audio.victoryTrack);
  playSfx("win");
  beginLevelComplete();
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
    clearGlowDrops();

    if (state.levelList === "minigames") {
      showScreen("menu");
      return;
    }

    if (nextLevel >= CONFIG.levels.length) {
      showCredits();
    } else {
      startLevel(nextLevel, chosenPlants, "levels");
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
    const plantDef = getPlantStats(plant.id);

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
  state.glowProducedTotal += amount;
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
      state.running = false;
      stopAllMusic();
      clearGlowDrops();
      say("A derp entered your house. It is over.", 999999);
      playSfx("no");
      return;
    }
  }
}

function explodePlant(plant) {
  const plantDef = getPlantStats(plant.id) || CONFIG.plants.kaboom;
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

function clearGlowDrops() {
  if (state) {
    state.glowDrops = [];
  }

  if (ui.glowLayer) {
    ui.glowLayer.innerHTML = "";
  }
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

function imageReady(img) {
  return img && img.complete && img.naturalWidth > 0;
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
      } else if (cell.tile === "sand") {
        if (imageReady(images.sand)) {
          ctx.drawImage(images.sand, x + 4, y + 4, CELL_W - 8, CELL_H - 8);
        } else {
          ctx.fillStyle = "#d8bd72";
          ctx.fillRect(x, y, CELL_W, CELL_H);
          ctx.fillStyle = "#b79a55";
          ctx.fillRect(x + 12, y + 14, CELL_W - 24, 5);
          ctx.fillRect(x + 22, y + 48, CELL_W - 30, 4);
        }
      } else if (imageReady(images.grass)) {
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

    if (imageReady(img)) {
      ctx.drawImage(img, x, y, CELL_W - 12, CELL_H - 8);
    } else {
      ctx.fillStyle = "#159948";
      ctx.fillRect(x + 10, y + 10, CELL_W - 30, CELL_H - 25);

      ctx.fillStyle = "#06240f";
      ctx.font = "10px monospace";
      ctx.fillText(def?.name?.slice(0, 8) || "plant", x + 12, y + 42);
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

    const size = def?.boss ? 96 : 76;

    if (imageReady(img)) {
      ctx.drawImage(img, enemy.x - size / 2, enemy.y - size / 2, size, size);
    } else {
      ctx.fillStyle = def?.boss ? "#888" : "#eee";
      ctx.fillRect(enemy.x - size / 4, enemy.y - size / 2.7, size / 2, size * 0.72);

      ctx.fillStyle = "#111";
      ctx.font = "10px monospace";
      ctx.fillText(def?.name?.slice(0, 8) || "enemy", enemy.x - 22, enemy.y);
    }

    ctx.fillStyle = "#000";
    ctx.fillRect(enemy.x - 28, enemy.y - 54, 56, 6);

    ctx.fillStyle = def?.boss ? "#ffbb33" : "#ff3333";
    ctx.fillRect(enemy.x - 28, enemy.y - 54, 56 * Math.max(0, enemy.hp / enemy.maxHp), 6);
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

window.addEventListener("resize", () => {
  renderGlowDrops();
});

document.addEventListener("click", unlockAudio);
document.addEventListener("keydown", unlockAudio);

document.getElementById("playBtn").addEventListener("click", () => {
  openPlantPicker(0, "levels");
});

document.getElementById("levelBtn").addEventListener("click", () => {
  showScreen("levels");
});

const minigameBtn = document.getElementById("minigameBtn");
if (minigameBtn) {
  minigameBtn.addEventListener("click", openMinigames);
}

const shopBtn = document.getElementById("shopBtn");
if (shopBtn) {
  shopBtn.addEventListener("click", openShop);
}

const upgradeBtn = document.getElementById("upgradeBtn");
if (upgradeBtn) {
  upgradeBtn.addEventListener("click", openUpgrades);
}

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
  clearGlowDrops();
  showScreen("menu");
});

document.getElementById("restartLevel").addEventListener("click", () => {
  if (!state) return;
  openPlantPicker(state.levelIndex || 0, state.levelList || "levels");
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

loadSave();
createFloatingUI();
initLevelButtons();
showScreen("menu");
