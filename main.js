// ============================================================
// Plants Against Derps v2
// Clean remake.
// Paste Part 1, Part 2, Part 3, and Part 4 directly together.
// ============================================================

"use strict";

// ============================================================
// 1. EASY CONFIG
// ============================================================

const CONFIG = {
  gameTitle: "Plants Against Derps",

  saveKey: "plantsAgainstDerps_v2_save",

  board: {
    canvasW: 900,
    canvasH: 520,

    rows: 5,
    cols: 9,

    gridX: 80,
    gridY: 78,

    cellW: 86,
    cellH: 82
  },

  currency: {
    name: "Twigs",
    minWinReward: 5,
    maxWinReward: 15
  },

  audio: {
    enabled: true,

    tracks: {
      menu: "audio/mainmenubeat.m4a",
      world1: "audio/PAD-Theme1Remaster.m4a",
      battle: "audio/derpbattle1.m4a",
      desert: "audio/deserttheme.m4a",
      victory: "audio/derpvictorytheme.m4a",
      finalBoss: "audio/nerd.m4a"
    },

    menuTrack: "menu",
    defaultLevelTrack: "world1",
    victoryTrack: "victory",

    musicVolume: 0.45,
    victoryVolume: 0.55,
    sfxVolume: 0.035
  },

  backgrounds: {
    forest: "assets/bg-forest.png",
    desert: "assets/bg-desert.png",
    cloud: "assets/bg-cloud.png",
    milkyway: "assets/bg-milkyway.png",
    chess: "assets/bg-chess.png"
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
    assasinRover: "assets/assasin-rover.png",
    mechaDerp: "assets/mechaderp.png"
  },

  upgrades: {
    maxLevel: 5,
    baseCost: 30,
    costPerLevel: 25,
    hpBoostPerLevel: 15,
    damageBoostPerLevel: 4,
    producerBoostPerLevel: 5
  },

  gameplay: {
    glowFromEnemy: 5,
    waveGapTicks: 220,
    removeRefundPercent: 0.5
  },

  plants: {
    removeTool: {
      name: "Remove Tool",
      cost: 0,
      hp: 1,
      img: "removeTool",
      desc: "Removes a plant and drops half Glow.",
      role: "Tool",
      tool: "remove"
    },

    campfr: {
      name: "Campfr",
      cost: 25,
      hp: 80,
      img: "campfr",
      desc: "Makes Glow over time. Basically the weird campfire economy.",
      role: "Producer",

      producer: true,
      produceAmount: 25,
      produceCooldown: 900,
      placementCooldown: 120
    },

    treeGun: {
      name: "Tree Gun",
      cost: 75,
      hp: 100,
      img: "treeGun",
      desc: "Shoots derps in its lane. Reliable and not legally a tree.",
      role: "Shooter",

      shooter: true,
      shootCooldown: 115,
      projectileDamage: 24,
      projectileSpeed: 4.6,
      placementCooldown: 180
    },

    rosegun: {
      name: "Rosegun",
      cost: 50,
      hp: 60,
      img: "rosegun",
      desc: "Cheaper and weaker than Tree Gun, but sometimes double fires.",
      role: "Shooter",

      shooter: true,
      shootCooldown: 100,
      projectileDamage: 12,
      projectileSpeed: 5.2,
      doubleShotChance: 10,
      placementCooldown: 150
    },

    soggyMattress: {
      name: "Soggy Mattress",
      cost: 50,
      hp: 170,
      img: "soggyMattress",
      desc: "A weaker wall. Somehow defensive. Probably smells terrible.",
      role: "Wall",

      wall: true,
      placementCooldown: 210
    },

    kaboom: {
      name: "El Kaboom",
      cost: 225,
      hp: 40,
      img: "kaboom",
      desc: "Explodes after a short fuse. Solves arguments loudly.",
      role: "Explosive",

      fuse: 90,
      damage: 180,
      radius: 140,
      placementCooldown: 420
    }
  },

  enemies: {
    basic: {
      name: "Da Boiiiiii",
      hp: 90,
      speed: 0.14,
      damage: 10,
      img: "basicDerp",
      desc: "The basic derp. Walks forward with questionable confidence."
    },

    armored: {
      name: "Armored Da Boiiiiii",
      hp: 190,
      speed: 0.22,
      damage: 16,
      img: "armoredDerp",
      desc: "More health. More problem. Mildly rude."
    },

    fast: {
      name: "Fast Da Boiiiiii",
      hp: 65,
      speed: 0.48,
      damage: 8,
      img: "fastDerp",
      desc: "Fast and annoying. Shows up before you are emotionally ready."
    },

    assasinRover: {
      name: "Assasin Rover",
      hp: 1,
      speed: 0.75,
      damage: 50,
      img: "assasinRover",
      desc: "One HP glass cannon. If it touches something, pain happens.",
      fragile: true
    },

    mechaDerp: {
      name: "Mecha Derp",
      hp: 600,
      speed: 0.16,
      damage: 28,
      img: "mechaDerp",
      desc: "A boss derp with machine energy. Big problem.",
      boss: true
    }
  },

  shopBadges: {
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

    backgroundEnjoyer: {
      name: "Background Enjoyer",
      cost: 175,
      desc: "You witnessed the lawn become more than tiles."
    }
  },

  defaultLoadout: [
    "removeTool",
    "campfr",
    "treeGun",
    "rosegun",
    "soggyMattress",
    "kaboom"
  ],

  levels: [
    {
      name: "1-1",
      title: "First Derp",
      desc: "A regular lawn with regular bad decisions.",
      startGlow: 75,
      background: "forest",
      music: "world1",
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
      background: "forest",
      music: "world1",
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
      background: "forest",
      music: "world1",
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
      background: "forest",
      music: "world1",
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
      background: "forest",
      music: "world1",
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
      background: "forest",
      music: "world1",
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
      background: "forest",
      music: "world1",
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
      background: "forest",
      music: "world1",
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
      background: "forest",
      music: "world1",
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
      background: "forest",
      music: "world1",
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
    },

    {
      name: "2-1",
      title: "Start of The Derp Ages",
      desc: "Now fighting with machines.",
      startGlow: 125,
      background: "desert",
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
      lava: [[4, 0], [4, 1], [4, 3], [5, 1], [5, 4], [4, 4]]
    },

    {
      name: "2-2",
      title: "Derpday",
      desc: "The Derp's birthday. We are here to ruin it.",
      startGlow: 125,
      background: "desert",
      music: "desert",
      waves: [
        [
          { type: "armored", row: 0, delay: 70 },
          { type: "basic", row: 4, delay: 250 }
        ],
        [
          { type: "fast", row: 1, delay: 80 },
          { type: "armored", row: 2, delay: 280 },
          { type: "fast", row: 4, delay: 280 },
          { type: "fast", row: 3, delay: 460 }
        ],
        [
          { type: "armored", row: 0, delay: 110 },
          { type: "armored", row: 4, delay: 270 },
          { type: "fast", row: 2, delay: 430 }
        ],
        [
          { type: "mechaDerp", row: 1, delay: 530 },
          { type: "assasinRover", row: 3, delay: 760 }
        ]
      ],
      lava: [[4, 0], [4, 1], [4, 3], [5, 1], [5, 4], [1, 3], [4, 4]]
    },

    {
      name: "2-3",
      title: "Derp Campsite",
      desc: "Secret hideout no more.",
      startGlow: 125,
      background: "desert",
      music: "desert",
      waves: [
        [
          { type: "armored", row: 0, delay: 70 },
          { type: "basic", row: 2, delay: 160 },
          { type: "basic", row: 1, delay: 160 },
          { type: "basic", row: 4, delay: 250 }
        ],
        [
          { type: "fast", row: 1, delay: 80 },
          { type: "mechaDerp", row: 2, delay: 280 },
          { type: "fast", row: 3, delay: 460 }
        ],
        [
          { type: "armored", row: 0, delay: 110 },
          { type: "armored", row: 4, delay: 270 },
          { type: "fast", row: 2, delay: 430 }
        ],
        [
          { type: "assasinRover", row: 3, delay: 530 }
        ]
      ],
      lava: []
    },

    {
      name: "2-4",
      title: "Rush Storm!!",
      desc: "I wish you luck.",
      startGlow: 1000,
      background: "desert",
      music: "desert",
      waves: [
        [
          { type: "assasinRover", row: 0, delay: 70 },
          { type: "fast", row: 4, delay: 250 }
        ],
        [
          { type: "fast", row: 1, delay: 80 },
          { type: "assasinRover", row: 2, delay: 280 },
          { type: "armored", row: 2, delay: 280 },
          { type: "fast", row: 4, delay: 280 },
          { type: "fast", row: 3, delay: 460 }
        ],
        [
          { type: "mechaDerp", row: 0, delay: 110 },
          { type: "armored", row: 4, delay: 270 },
          { type: "fast", row: 2, delay: 430 }
        ],
        [
          { type: "mechaDerp", row: 1, delay: 530 },
          { type: "assasinRover", row: 3, delay: 760 }
        ]
      ],
      lava: []
    },
    {
  name: "2-5",
  title: "Sand in the Wires",
  desc: "The machines are getting crunchy.",
  startGlow: 175,
  background: "desert",
  music: "desert",
  waves: [
    [
      { type: "basic", row: 0, delay: 80 },
      { type: "basic", row: 2, delay: 180 },
      { type: "basic", row: 4, delay: 280 }
    ],
    [
      { type: "armored", row: 1, delay: 120 },
      { type: "fast", row: 3, delay: 260 },
      { type: "armored", row: 4, delay: 440 }
    ],
    [
      { type: "mechaDerp", row: 2, delay: 250 },
      { type: "assasinRover", row: 0, delay: 520 },
      { type: "assasinRover", row: 4, delay: 700 }
    ]
  ],
  lava: [[3, 1], [4, 1], [5, 3], [6, 3]]
},
    {
  name: "2-6",
  title: "Do Not Touch The Red Sand",
  desc: "That is probably not sand.",
  startGlow: 225,
  background: "desert",
  music: "desert",
  waves: [
    [
      { type: "fast", row: 0, delay: 90 },
      { type: "fast", row: 4, delay: 210 }
    ],
    [
      { type: "armored", row: 1, delay: 100 },
      { type: "armored", row: 3, delay: 260 },
      { type: "basic", row: 2, delay: 380 }
    ],
    [
      { type: "mechaDerp", row: 1, delay: 280 },
      { type: "mechaDerp", row: 3, delay: 520 }
    ]
  ],
  lava: [[2, 0], [2, 1], [2, 2], [2, 3], [2, 4], [6, 2]]
},
    {
  name: "2-7",
  title: "Rover Practice",
  desc: "They keep sending the tiny murder cars.",
  startGlow: 300,
  background: "desert",
  music: "desert",
  waves: [
    [
      { type: "assasinRover", row: 0, delay: 120 },
      { type: "assasinRover", row: 2, delay: 260 },
      { type: "assasinRover", row: 4, delay: 400 }
    ],
    [
      { type: "basic", row: 1, delay: 80 },
      { type: "assasinRover", row: 1, delay: 250 },
      { type: "armored", row: 3, delay: 420 }
    ],
    [
      { type: "fast", row: 0, delay: 110 },
      { type: "fast", row: 4, delay: 180 },
      { type: "assasinRover", row: 2, delay: 360 },
      { type: "mechaDerp", row: 2, delay: 620 }
    ]
  ],
  lava: [[4, 0], [4, 4]]
},
    {
  name: "2-8",
  title: "The Campfire Is Not Safe",
  desc: "They found your Glow economy.",
  startGlow: 100,
  background: "desert",
  music: "desert",
  waves: [
    [
      { type: "basic", row: 2, delay: 90 },
      { type: "fast", row: 2, delay: 230 }
    ],
    [
      { type: "assasinRover", row: 1, delay: 120 },
      { type: "assasinRover", row: 3, delay: 280 },
      { type: "armored", row: 2, delay: 460 }
    ],
    [
      { type: "mechaDerp", row: 0, delay: 250 },
      { type: "mechaDerp", row: 4, delay: 450 },
      { type: "fast", row: 2, delay: 650 }
    ]
  ],
  lava: [[5, 1], [5, 2], [5, 3]]
},
    {
  name: "2-9",
  title: "Mecha Derp Parking Lot",
  desc: "Why are there so many of them.",
  startGlow: 500,
  background: "desert",
  music: "desert",
  waves: [
    [
      { type: "mechaDerp", row: 0, delay: 180 },
      { type: "mechaDerp", row: 4, delay: 360 }
    ],
    [
      { type: "armored", row: 1, delay: 100 },
      { type: "armored", row: 3, delay: 180 },
      { type: "assasinRover", row: 2, delay: 400 }
    ],
    [
      { type: "mechaDerp", row: 1, delay: 200 },
      { type: "mechaDerp", row: 2, delay: 420 },
      { type: "mechaDerp", row: 3, delay: 640 }
    ]
  ],
  lava: [[3, 0], [3, 2], [3, 4], [6, 1], [6, 3]]
}
// ============================================================
// 2. GLOBAL STATE + ASSET LOADING
// ============================================================

const ROWS = CONFIG.board.rows;
const COLS = CONFIG.board.cols;
const GRID_X = CONFIG.board.gridX;
const GRID_Y = CONFIG.board.gridY;
const CELL_W = CONFIG.board.cellW;
const CELL_H = CONFIG.board.cellH;

let app = null;
let canvas = null;
let ctx = null;

let currentScreen = "menu";
let currentMusic = null;
let audioUnlocked = false;
let loopId = 0;

let save = {
  twigs: 0,
  badges: {},
  upgrades: {}
};

let state = null;

const images = {};
const backgrounds = {};
const music = {};

for (const [key, src] of Object.entries(CONFIG.images)) {
  images[key] = new Image();
  images[key].src = src;
}

for (const [key, src] of Object.entries(CONFIG.backgrounds)) {
  backgrounds[key] = new Image();
  backgrounds[key].src = src;
}

for (const [key, src] of Object.entries(CONFIG.audio.tracks)) {
  music[key] = new Audio(src);
  music[key].loop = key !== CONFIG.audio.victoryTrack;
  music[key].volume = key === CONFIG.audio.victoryTrack
    ? CONFIG.audio.victoryVolume
    : CONFIG.audio.musicVolume;
}

function loadSave() {
  try {
    const raw = localStorage.getItem(CONFIG.saveKey);
    if (!raw) return;

    const parsed = JSON.parse(raw);

    save = {
      twigs: Number(parsed.twigs || 0),
      badges: parsed.badges || {},
      upgrades: parsed.upgrades || {}
    };
  } catch (err) {
    console.warn("Save load failed:", err);
  }
}

function saveGame() {
  try {
    localStorage.setItem(CONFIG.saveKey, JSON.stringify(save));
  } catch (err) {
    console.warn("Save failed:", err);
  }
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function imageReady(img) {
  return img && img.complete && img.naturalWidth > 0;
}

function getPlantLevel(id) {
  return Math.max(1, Math.min(CONFIG.upgrades.maxLevel, save.upgrades[id] || 1));
}

function getUpgradeCost(id) {
  const level = getPlantLevel(id);
  return CONFIG.upgrades.baseCost + (level - 1) * CONFIG.upgrades.costPerLevel;
}

function getPlantStats(id) {
  const base = CONFIG.plants[id];
  if (!base) return null;

  const level = getPlantLevel(id);
  const bonus = level - 1;

  return {
    ...base,
    hp: (base.hp || 1) + bonus * CONFIG.upgrades.hpBoostPerLevel,
    projectileDamage: (base.projectileDamage || 0) + bonus * CONFIG.upgrades.damageBoostPerLevel,
    produceAmount: (base.produceAmount || 0) + bonus * CONFIG.upgrades.producerBoostPerLevel
  };
}

function unlockAudio() {
  if (audioUnlocked) return;
  audioUnlocked = true;

  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!window.padAudioContext) {
      window.padAudioContext = new AudioContext();
    }
  } catch (err) {}
}

function stopMusic() {
  for (const track of Object.values(music)) {
    track.pause();
    track.currentTime = 0;
  }

  currentMusic = null;
}

function playMusic(name) {
  if (!CONFIG.audio.enabled) return;

  unlockAudio();

  const track = music[name] || music[CONFIG.audio.defaultLevelTrack];
  if (!track) return;

  if (currentMusic === track && !track.paused) return;

  stopMusic();

  currentMusic = track;
  track.currentTime = 0;
  track.play().catch(() => {});
}

function playSfx(type) {
  if (!CONFIG.audio.enabled) return;

  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!window.padAudioContext) {
      window.padAudioContext = new AudioContext();
    }

    const audioCtx = window.padAudioContext;
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
    }

    if (type === "no") {
      freq = 95;
      duration = 0.12;
      wave = "sawtooth";
    }

    if (type === "shoot") {
      freq = 180;
      duration = 0.035;
      wave = "square";
    }

    if (type === "hit") {
      freq = 130;
      duration = 0.055;
      wave = "sawtooth";
    }

    if (type === "glow") {
      freq = 760;
      duration = 0.06;
      wave = "triangle";
    }

    if (type === "boom") {
      freq = 70;
      duration = 0.22;
      wave = "sawtooth";
      volume *= 1.8;
    }

    if (type === "win") {
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

// ============================================================
// 3. UI CREATION
// ============================================================

function installBaseHTML() {
  document.body.innerHTML = `
    <div id="padApp"></div>
  `;

  app = document.getElementById("padApp");
}

function installStyles() {
  const old = document.getElementById("padV2Style");
  if (old) old.remove();

  const style = document.createElement("style");
  style.id = "padV2Style";
  style.textContent = `
    * {
      box-sizing: border-box;
    }

    html,
    body {
      margin: 0;
      min-height: 100%;
      background: #071014;
      color: white;
      font-family: system-ui, Arial, sans-serif;
      overflow-x: hidden;
    }

    button {
      font-family: inherit;
    }

    #padApp {
      min-height: 100vh;
      background:
        radial-gradient(circle at 20% 10%, rgba(80, 220, 255, 0.2), transparent 30%),
        radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.08), transparent 25%),
        linear-gradient(135deg, #030608, #0c181d 55%, #05080a);
    }

    .screen {
      min-height: 100vh;
      padding: 24px;
    }

    .menu-screen {
      display: grid;
      grid-template-columns: 300px minmax(0, 1fr);
      gap: 28px;
      align-items: center;
    }

    .menu-left {
      display: flex;
      flex-direction: column;
      gap: 14px;
    }

    .title-card {
      background: rgba(255,255,255,0.08);
      border: 1px solid rgba(160,240,255,0.35);
      border-radius: 26px;
      padding: 24px;
      box-shadow: 0 0 35px rgba(90,220,255,0.18);
    }

    .title-card h1 {
      margin: 0;
      font-size: clamp(34px, 6vw, 76px);
      line-height: 0.95;
      color: #f8ff74;
      text-shadow: 0 0 18px rgba(255,255,80,0.35);
    }

    .title-card p {
      color: #d7faff;
      font-size: 18px;
      line-height: 1.45;
    }

    .bubble-btn {
      border: 0;
      border-radius: 999px;
      padding: 16px 22px;
      font-size: 19px;
      font-weight: 900;
      cursor: pointer;
      color: #063042;
      background: linear-gradient(#f8ffff, #7de5ff 48%, #33b4e4);
      box-shadow:
        inset 0 2px 0 rgba(255,255,255,0.9),
        0 0 22px rgba(80,220,255,0.35);
      transition: transform 0.12s ease, filter 0.12s ease;
    }

    .bubble-btn:hover {
      transform: translateY(-2px) scale(1.02);
      filter: brightness(1.08);
    }

    .danger-btn {
      background: linear-gradient(#fff6f6, #ff8e8e 48%, #e84c4c);
      color: #410808;
    }

    .panel {
      background: rgba(0,0,0,0.45);
      border: 2px solid rgba(255,255,255,0.15);
      border-radius: 24px;
      padding: 18px;
      box-shadow: 0 0 30px rgba(0,0,0,0.25);
    }

    .panel h2 {
      margin-top: 0;
      color: #f8ff74;
    }

    .grid-list {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
      gap: 12px;
    }

    .tile-btn {
      border: 3px solid #111;
      border-radius: 18px;
      background: #f3f3f3;
      color: #111;
      padding: 12px;
      min-height: 112px;
      cursor: pointer;
      text-align: left;
      font-weight: 800;
    }

    .tile-btn:hover {
      outline: 4px solid #f8ff74;
    }

    .tile-btn small {
      display: block;
      margin-top: 6px;
      font-weight: 600;
      color: #333;
    }

    .game-screen {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      gap: 10px;
      padding: 10px;
    }

    .hud {
      display: flex;
      justify-content: space-between;
      gap: 10px;
      flex-wrap: wrap;
      align-items: center;
      padding: 12px 16px;
      background: rgba(0,0,0,0.7);
      border: 2px solid rgba(255,255,255,0.12);
      border-radius: 12px;
      font-family: monospace;
      font-weight: 900;
      font-size: 16px;
    }

    .hud-title {
      color: #f8ff74;
      font-size: 24px;
    }

    .game-layout {
      display: grid;
      grid-template-columns: minmax(0, 900px) 260px;
      gap: 12px;
      justify-content: center;
      align-items: start;
    }

    .canvas-wrap {
      background: rgba(0,0,0,0.55);
      border: 3px solid #111;
      border-radius: 14px;
      padding: 6px;
    }

    #gameCanvas {
      width: 100%;
      max-width: 900px;
      aspect-ratio: 900 / 520;
      height: auto;
      display: block;
      cursor: pointer;
      touch-action: manipulation;
      background: #5fb846;
    }

    .cards {
      display: flex;
      flex-direction: column;
      gap: 8px;
      max-height: 590px;
      overflow-y: auto;
      padding-right: 3px;
    }

    .plant-card {
      background: #eee;
      color: #111;
      border: 3px solid #111;
      border-radius: 14px;
      padding: 8px;
      cursor: pointer;
      text-align: center;
      font-weight: 800;
    }

    .plant-card.selected {
      outline: 5px solid #f8ff74;
    }

    .plant-card:disabled {
      opacity: 0.55;
      cursor: not-allowed;
    }

    .plant-card img {
      width: 100%;
      height: 62px;
      object-fit: contain;
      background: white;
      border-radius: 8px;
    }

    .bottom-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 10px;
      flex-wrap: wrap;
      background: rgba(0,0,0,0.7);
      border: 2px solid rgba(255,255,255,0.12);
      border-radius: 12px;
      padding: 12px;
    }

    .message {
      font-family: monospace;
      font-weight: 900;
      color: #fff7b0;
    }

    .meet-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
      gap: 14px;
    }

    .meet-card {
      background: #f0f0f0;
      color: #111;
      border: 4px solid #111;
      border-radius: 18px;
      padding: 12px;
      min-height: 230px;
    }

    .meet-card img {
      width: 100%;
      height: 95px;
      object-fit: contain;
      background: white;
      border-radius: 10px;
    }

    .meet-card h3 {
      margin: 8px 0 4px;
    }

    .meet-card p {
      font-size: 13px;
      line-height: 1.35;
    }

    @media (max-width: 900px) {
      .screen {
        padding: 12px;
      }

      .menu-screen {
        grid-template-columns: 1fr;
      }

      .menu-left {
        order: 2;
      }

      .game-layout {
        display: flex;
        flex-direction: column;
      }

      .cards {
        flex-direction: row;
        overflow-x: auto;
        overflow-y: hidden;
        max-height: none;
      }

      .plant-card {
        flex: 0 0 128px;
        font-size: 12px;
      }

      .plant-card img {
        height: 50px;
      }

      .hud-title {
        font-size: 18px;
      }
    }
  `;

  document.head.appendChild(style);
}

function setScreen(name, html) {
  currentScreen = name;
  loopId++;

  app.innerHTML = `<main class="screen ${name}-screen">${html}</main>`;

  if (name !== "game") {
    state = null;
  }

  if (name === "menu") {
    playMusic(CONFIG.audio.menuTrack);
  }
}

function menuButton(text, action, extraClass = "") {
  const btn = document.createElement("button");
  btn.className = `bubble-btn ${extraClass}`;
  btn.textContent = text;
  btn.addEventListener("click", () => {
    unlockAudio();
    action();
  });
  return btn;
}

// ============================================================
// 4. MENUS
// ============================================================

function showMenu() {
  setScreen("menu", `
    <section class="menu-left" id="menuButtons"></section>

    <section class="title-card">
      <h1>${CONFIG.gameTitle}</h1>
      <p>
        A very serious game about plants, derps, Twigs, questionable strategy,
        and whatever else gets added later.
      </p>
      <p>
        v2 UI remake: cleaner screens, cleaner input, less cursed overlay nonsense.
      </p>
    </section>
  `);

  const menuButtons = document.getElementById("menuButtons");

  menuButtons.appendChild(menuButton("Play Story", () => startLevel(0, "levels")));
  menuButtons.appendChild(menuButton("Level Selectr", showLevelSelect));
  menuButtons.appendChild(menuButton("Minigames", showMinigames));
  menuButtons.appendChild(menuButton("Twig Shop", showShop));
  menuButtons.appendChild(menuButton("Upgrade Plants", showUpgrades));
  menuButtons.appendChild(menuButton("Meet Da Whatever", showMeetDaWhatever));
}

function showLevelSelect() {
  setScreen("level", `
    <section class="panel">
      <h2>Level Selectr</h2>
      <p>Choose a story level. Yes, selectr is spelled like that now.</p>
      <div class="grid-list" id="levelGrid"></div>
      <br>
      <button class="bubble-btn" id="backBtn">Back</button>
    </section>
  `);

  const grid = document.getElementById("levelGrid");

  CONFIG.levels.forEach((level, index) => {
    const btn = document.createElement("button");
    btn.className = "tile-btn";
    btn.innerHTML = `
      ${level.name}: ${level.title}
      <small>${level.desc}</small>
    `;
    btn.addEventListener("click", () => startLevel(index, "levels"));
    grid.appendChild(btn);
  });

  document.getElementById("backBtn").onclick = showMenu;
}

function showMinigames() {
  const minigames = [
    {
      name: "M-1",
      title: "Best Use Is Boom",
      desc: "Lots of bosses. Kaboom is probably the answer.",
      startGlow: 5000,
      background: "milkyway",
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
      lava: []
    },

    {
      name: "M-2",
      title: "Chess Problem",
      desc: "The derps learned board games. Bad sign.",
      startGlow: 300,
      background: "chess",
      music: "battle",
      waves: [
        [
          { type: "basic", row: 0, delay: 100 },
          { type: "basic", row: 2, delay: 180 },
          { type: "basic", row: 4, delay: 260 }
        ],
        [
          { type: "assasinRover", row: 1, delay: 140 },
          { type: "assasinRover", row: 3, delay: 320 },
          { type: "armored", row: 2, delay: 520 }
        ],
        [{ type: "mechaDerp", row: 2, delay: 260 }]
      ],
      lava: [[4, 2]]
    },

    {
      name: "M-3",
      title: "The Floor Is Kinda Lava",
      desc: "Only the far left is usable. Good luck.",
      startGlow: 250,
      background: "cloud",
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
        [2,0],[3,0],[4,0],[5,0],[6,0],[7,0],[8,0],
        [2,1],[3,1],[4,1],[5,1],[6,1],[7,1],[8,1],
        [2,2],[3,2],[4,2],[5,2],[6,2],[7,2],[8,2],
        [2,3],[3,3],[4,3],[5,3],[6,3],[7,3],[8,3],
        [2,4],[3,4],[4,4],[5,4],[6,4],[7,4],[8,4]
      ]
    }
  ];

  setScreen("minigames", `
    <section class="panel">
      <h2>Minigames</h2>
      <p>Side levels for chaos. They still give Twigs.</p>
      <div class="grid-list" id="miniGrid"></div>
      <br>
      <button class="bubble-btn" id="backBtn">Back</button>
    </section>
  `);

  const grid = document.getElementById("miniGrid");

  minigames.forEach((level, index) => {
    const btn = document.createElement("button");
    btn.className = "tile-btn";
    btn.innerHTML = `
      ${level.name}: ${level.title}
      <small>${level.desc}</small>
    `;
    btn.addEventListener("click", () => startCustomLevel(level, index, "minigames"));
    grid.appendChild(btn);
  });

  document.getElementById("backBtn").onclick = showMenu;
}
function showShop() {
  setScreen("shop", `
    <section class="panel">
      <h2>Twig Shop</h2>
      <p>You have <b>${save.twigs}</b> ${CONFIG.currency.name}.</p>
      <p>Badges are just for fun right now.</p>
      <div class="grid-list" id="shopGrid"></div>
      <br>
      <button class="bubble-btn" id="backBtn">Back</button>
    </section>
  `);

  const grid = document.getElementById("shopGrid");

  for (const [id, badge] of Object.entries(CONFIG.shopBadges)) {
    const owned = !!save.badges[id];

    const btn = document.createElement("button");
    btn.className = "tile-btn";
    btn.innerHTML = `
      ${badge.name}
      <small>${badge.desc}</small>
      <small>${owned ? "Owned" : `${badge.cost} Twigs`}</small>
    `;

    btn.addEventListener("click", () => {
      if (owned) {
        playSfx("no");
        return;
      }

      if (save.twigs < badge.cost) {
        playSfx("no");
        alert("Not enough Twigs.");
        return;
      }

      save.twigs -= badge.cost;
      save.badges[id] = true;
      saveGame();
      playSfx("glow");
      showShop();
    });

    grid.appendChild(btn);
  }

  document.getElementById("backBtn").onclick = showMenu;
}

function showUpgrades() {
  setScreen("upgrades", `
    <section class="panel">
      <h2>Upgrade Plants</h2>
      <p>You have <b>${save.twigs}</b> ${CONFIG.currency.name}.</p>
      <p>Max level is ${CONFIG.upgrades.maxLevel}.</p>
      <div class="grid-list" id="upgradeGrid"></div>
      <br>
      <button class="bubble-btn" id="backBtn">Back</button>
    </section>
  `);

  const grid = document.getElementById("upgradeGrid");

  for (const [id, plant] of Object.entries(CONFIG.plants)) {
    if (plant.tool) continue;

    const level = getPlantLevel(id);
    const maxed = level >= CONFIG.upgrades.maxLevel;
    const cost = getUpgradeCost(id);

    const btn = document.createElement("button");
    btn.className = "tile-btn";
    btn.innerHTML = `
      ${plant.name}
      <small>Level ${level}/${CONFIG.upgrades.maxLevel}</small>
      <small>${plant.desc}</small>
      <small>${maxed ? "Maxed" : `Upgrade cost: ${cost} Twigs`}</small>
    `;

    btn.addEventListener("click", () => {
      if (maxed) {
        playSfx("no");
        return;
      }

      if (save.twigs < cost) {
        playSfx("no");
        alert("Not enough Twigs.");
        return;
      }

      save.twigs -= cost;
      save.upgrades[id] = level + 1;
      saveGame();
      playSfx("glow");
      showUpgrades();
    });

    grid.appendChild(btn);
  }

  document.getElementById("backBtn").onclick = showMenu;
}

function showMeetDaWhatever() {
  setScreen("meet", `
    <section class="panel">
      <h2>Meet Da Whatever</h2>
      <p>An almanac of plants, derps, and other questionable beings.</p>

      <h2>Plants</h2>
      <div class="meet-grid" id="plantMeetGrid"></div>

      <br>
      <h2>Derps</h2>
      <div class="meet-grid" id="enemyMeetGrid"></div>

      <br>
      <button class="bubble-btn" id="backBtn">Back</button>
    </section>
  `);

  const plantGrid = document.getElementById("plantMeetGrid");
  const enemyGrid = document.getElementById("enemyMeetGrid");

  for (const [id, plant] of Object.entries(CONFIG.plants)) {
    const card = document.createElement("article");
    card.className = "meet-card";

    card.innerHTML = `
      <img src="${CONFIG.images[plant.img]}" alt="${plant.name}">
      <h3>${plant.name}</h3>
      <b>${plant.role || "Plant"}</b>
      <p>${plant.desc}</p>
      <p><b>Cost:</b> ${plant.cost} Glow</p>
      <p><b>Level:</b> ${plant.tool ? "Tool" : `${getPlantLevel(id)}/${CONFIG.upgrades.maxLevel}`}</p>
    `;

    plantGrid.appendChild(card);
  }

  for (const [id, enemy] of Object.entries(CONFIG.enemies)) {
    const card = document.createElement("article");
    card.className = "meet-card";

    card.innerHTML = `
      <img src="${CONFIG.images[enemy.img]}" alt="${enemy.name}">
      <h3>${enemy.name}</h3>
      <b>${enemy.boss ? "Boss" : enemy.fragile ? "Glass Cannon" : "Derp"}</b>
      <p>${enemy.desc}</p>
      <p><b>HP:</b> ${enemy.hp}</p>
      <p><b>Damage:</b> ${enemy.damage}</p>
      <p><b>Speed:</b> ${enemy.speed}</p>
    `;

    enemyGrid.appendChild(card);
  }

  document.getElementById("backBtn").onclick = showMenu;
}

// ============================================================
// 5. LEVEL START + GAME UI
// ============================================================

function startCustomLevel(level, index = 0, listName = "custom") {
  startLevelFromObject(level, index, listName);
}

function startLevel(index = 0, listName = "levels") {
  const level = CONFIG.levels[index];

  if (!level) {
    showMenu();
    return;
  }

  startLevelFromObject(level, index, listName);
}

function startLevelFromObject(level, index, listName) {
  loopId++;
  const myLoop = loopId;

  currentScreen = "game";

  state = {
    loopId: myLoop,
    levelIndex: index,
    levelList: listName,
    level,

    glow: level.startGlow,
    glowProducedTotal: 0,

    waveIndex: 0,
    waveTimer: 0,
    waveSpawnIndex: 0,
    betweenWaveTimer: 120,

    grid: [],
    plants: [],
    enemies: [],
    projectiles: [],
    explosions: [],
    particles: [],
    glowDrops: [],

    selectedPlant: CONFIG.defaultLoadout[0],
    placementCooldowns: {},

    running: true,
    won: false,
    lost: false,
    ending: false,

    message: "Protect the lawn from questionable creatures.",
    tick: 0
  };

  for (let row = 0; row < ROWS; row++) {
    state.grid[row] = [];

    for (let col = 0; col < COLS; col++) {
      state.grid[row][col] = {
        plant: null,
        lava: false
      };
    }
  }

  for (const [col, row] of level.lava || []) {
    if (state.grid[row] && state.grid[row][col]) {
      state.grid[row][col].lava = true;
    }
  }

  app.innerHTML = `
    <main class="game-screen">
      <section class="hud">
        <span class="hud-title">${level.name}: ${level.title}</span>
        <span id="glowHud">Glow: ${state.glow}</span>
        <span id="twigHud">Twigs: ${save.twigs}</span>
        <span id="waveHud">Wave: 1/${level.waves.length}</span>
      </section>

      <section class="game-layout">
        <div class="canvas-wrap">
          <canvas id="gameCanvas" width="${CONFIG.board.canvasW}" height="${CONFIG.board.canvasH}"></canvas>
        </div>

        <aside class="cards" id="plantCards"></aside>
      </section>

      <section class="bottom-bar">
        <span class="message" id="gameMessage">${state.message}</span>
        <div>
          <button class="bubble-btn" id="restartBtn">Restart</button>
          <button class="bubble-btn danger-btn" id="menuBtn">Menu</button>
        </div>
      </section>
    </main>
  `;

  canvas = document.getElementById("gameCanvas");
  ctx = canvas.getContext("2d");

  canvas.addEventListener("click", handleCanvasClick);

  canvas.addEventListener("touchstart", event => {
    const touch = event.touches[0];
    if (!touch) return;

    event.preventDefault();

    handleCanvasClick({
      clientX: touch.clientX,
      clientY: touch.clientY
    });
  }, { passive: false });

  document.getElementById("menuBtn").onclick = showMenu;
  document.getElementById("restartBtn").onclick = () => startLevelFromObject(level, index, listName);

  renderCards();
  selectPlant(state.selectedPlant);
  updateHud();

  playMusic(level.music || CONFIG.audio.defaultLevelTrack);

  requestAnimationFrame(() => gameLoop(myLoop));
}

function renderCards() {
  const cards = document.getElementById("plantCards");
  if (!cards || !state) return;

  cards.innerHTML = "";

  for (const id of CONFIG.defaultLoadout) {
    const plant = CONFIG.plants[id];
    if (!plant) continue;

    const cooldown = state.placementCooldowns[id] || 0;

    const btn = document.createElement("button");
    btn.className = "plant-card";
    btn.dataset.plant = id;
    btn.disabled = cooldown > 0;

    btn.innerHTML = `
      <img src="${CONFIG.images[plant.img]}" alt="${plant.name}">
      <b>${plant.name}</b><br>
      <small>${plant.cost} Glow</small><br>
      <small>${plant.tool ? "Tool" : `Lv ${getPlantLevel(id)}`}</small>
      ${cooldown > 0 ? `<br><small>${Math.ceil(cooldown / 60)}s</small>` : ""}
    `;

    btn.addEventListener("click", () => {
      selectPlant(id);
    });

    cards.appendChild(btn);
  }
}

function selectPlant(id) {
  if (!state) return;

  state.selectedPlant = id;

  document.querySelectorAll(".plant-card").forEach(card => {
    card.classList.toggle("selected", card.dataset.plant === id);
  });

  say(`Selected ${CONFIG.plants[id].name}.`);
}

function say(text) {
  if (!state) return;

  state.message = text;

  const msg = document.getElementById("gameMessage");
  if (msg) msg.textContent = text;
}

function updateHud() {
  if (!state) return;

  const glowHud = document.getElementById("glowHud");
  const twigHud = document.getElementById("twigHud");
  const waveHud = document.getElementById("waveHud");

  if (glowHud) glowHud.textContent = `Glow: ${state.glow}`;
  if (twigHud) twigHud.textContent = `Twigs: ${save.twigs}`;

  if (waveHud) {
    const current = Math.min(state.waveIndex + 1, state.level.waves.length);
    waveHud.textContent = `Wave: ${current}/${state.level.waves.length}`;
  }
}

function handleCanvasClick(event) {
  unlockAudio();

  if (!state || !state.running || state.lost || state.won || state.ending) return;
  if (!canvas) return;

  const pos = gridFromPointer(event.clientX, event.clientY);
  if (!pos) return;

  plantAt(pos.row, pos.col, state.selectedPlant);
}

function gridFromPointer(clientX, clientY) {
  const rect = canvas.getBoundingClientRect();

  const x = (clientX - rect.left) * (canvas.width / rect.width);
  const y = (clientY - rect.top) * (canvas.height / rect.height);

  const col = Math.floor((x - GRID_X) / CELL_W);
  const row = Math.floor((y - GRID_Y) / CELL_H);

  if (row < 0 || row >= ROWS || col < 0 || col >= COLS) {
    return null;
  }

  return { row, col, x, y };
}
// ============================================================
// 6. PLANTING + GAMEPLAY
// ============================================================

function plantAt(row, col, id) {
  if (!state) return;

  const cell = state.grid[row][col];
  const plantDef = CONFIG.plants[id];

  if (!plantDef) return;

  if (plantDef.tool === "remove") {
    removePlant(row, col);
    return;
  }

  if (cell.lava) {
    say("You cannot plant on lava. Mor Level says no.");
    playSfx("no");
    return;
  }

  if (cell.plant) {
    say("Something is already there.");
    playSfx("no");
    return;
  }

  const cooldown = state.placementCooldowns[id] || 0;
  if (cooldown > 0) {
    say(`${plantDef.name} cooldown: ${Math.ceil(cooldown / 60)}s`);
    playSfx("no");
    return;
  }

  if (state.glow < plantDef.cost) {
    say("Not enough Glow.");
    playSfx("no");
    return;
  }

  const stats = getPlantStats(id);
  state.glow -= plantDef.cost;

  const plant = {
    id,
    row,
    col,
    hp: stats.hp,
    maxHp: stats.hp,
    originalCost: plantDef.cost,
    cooldown: startingCooldown(stats),
    fuse: stats.fuse || 0
  };

  cell.plant = plant;
  state.plants.push(plant);
  state.placementCooldowns[id] = plantDef.placementCooldown || 0;

  say(`${plantDef.name} placed.`);
  playSfx("plant");

  renderCards();
  selectPlant(id);
  updateHud();
}

function removePlant(row, col) {
  const cell = state.grid[row][col];

  if (!cell.plant) {
    say("Nothing to remove.");
    playSfx("no");
    return;
  }

  const plant = cell.plant;
  const def = CONFIG.plants[plant.id];
  const refund = Math.max(
    1,
    Math.floor((plant.originalCost || def.cost || 0) * CONFIG.gameplay.removeRefundPercent)
  );

  cell.plant = null;
  state.plants = state.plants.filter(p => p !== plant);

  state.glow += refund;

  say(`Removed ${def.name}. +${refund} Glow.`);
  playSfx("glow");
  updateHud();
}

function startingCooldown(plantDef) {
  if (plantDef.producer) return plantDef.produceCooldown || 900;
  if (plantDef.shooter) return plantDef.shootCooldown || 120;
  return plantDef.fuse || 180;
}

function updateCooldowns() {
  let changed = false;

  for (const id of Object.keys(state.placementCooldowns)) {
    if (state.placementCooldowns[id] > 0) {
      state.placementCooldowns[id]--;
      changed = true;
    }
  }

  if (changed && state.tick % 30 === 0) {
    renderCards();
    selectPlant(state.selectedPlant);
  }
}

function updatePlants() {
  for (const plant of [...state.plants]) {
    const def = getPlantStats(plant.id);
    if (!def) continue;

    plant.cooldown--;

    if (def.producer) updateProducer(plant, def);
    if (def.shooter) updateShooter(plant, def);

    if (def.fuse) {
      plant.fuse--;

      if (plant.fuse <= 0) {
        explodePlant(plant, def);
      }
    }
  }
}

function updateProducer(plant, def) {
  if (plant.cooldown > 0) return;

  const amount = def.produceAmount || 25;
  state.glow += amount;
  state.glowProducedTotal += amount;
  plant.cooldown = def.produceCooldown || 900;

  popParticle(
    GRID_X + plant.col * CELL_W + CELL_W / 2,
    GRID_Y + plant.row * CELL_H + 20,
    "#ffe95a"
  );

  say(`+${amount} Glow.`);
  playSfx("glow");
}

function updateShooter(plant, def) {
  if (plant.cooldown > 0) return;

  const plantX = GRID_X + plant.col * CELL_W;

  const targetExists = state.enemies.some(enemy => {
    return enemy.row === plant.row && enemy.x > plantX;
  });

  if (!targetExists) return;

  fireProjectile(plant, def, plant.row);

  if (Math.random() * 100 < (def.doubleShotChance || 0)) {
    fireProjectile(plant, def, plant.row);
  }

  plant.cooldown = def.shootCooldown || 120;
  playSfx("shoot");
}

function fireProjectile(plant, def, row) {
  state.projectiles.push({
    x: GRID_X + plant.col * CELL_W + CELL_W * 0.68,
    y: GRID_Y + row * CELL_H + CELL_H * 0.46,
    row,
    speed: def.projectileSpeed || 4.5,
    damage: def.projectileDamage || 20
  });
}

function explodePlant(plant, def) {
  const x = GRID_X + plant.col * CELL_W + CELL_W / 2;
  const y = GRID_Y + plant.row * CELL_H + CELL_H / 2;

  for (const enemy of state.enemies) {
    const dist = Math.hypot(enemy.x - x, enemy.y - y);

    if (dist <= (def.radius || 130)) {
      enemy.hp -= def.damage || 150;
    }
  }

  state.explosions.push({
    x,
    y,
    radius: 10,
    life: 24
  });

  state.grid[plant.row][plant.col].plant = null;
  state.plants = state.plants.filter(p => p !== plant);

  say(`${def.name} went kaboom.`);
  playSfx("boom");
}

function updateProjectiles() {
  for (let i = state.projectiles.length - 1; i >= 0; i--) {
    const p = state.projectiles[i];
    p.x += p.speed;

    const hit = state.enemies.find(enemy => {
      return enemy.row === p.row && Math.abs(enemy.x - p.x) < 28;
    });

    if (hit) {
      hit.hp -= p.damage;
      state.projectiles.splice(i, 1);
      popParticle(hit.x, hit.y, "#b8754a");
      playSfx("hit");
      continue;
    }

    if (p.x > CONFIG.board.canvasW + 40) {
      state.projectiles.splice(i, 1);
    }
  }
}

function spawnEnemy(type, row) {
  const def = CONFIG.enemies[type];
  if (!def) return;

  state.enemies.push({
    type,
    row,
    x: GRID_X + COLS * CELL_W + 42,
    y: GRID_Y + row * CELL_H + CELL_H / 2,
    hp: def.hp,
    maxHp: def.hp,
    speed: def.speed,
    damage: def.damage,
    biteCooldown: 0
  });
}

function updateWaves() {
  const waves = state.level.waves;

  if (state.waveIndex >= waves.length) {
    if (state.enemies.length === 0 && !state.won) {
      winLevel();
    }

    return;
  }

  if (state.betweenWaveTimer > 0) {
    state.betweenWaveTimer--;
    return;
  }

  const wave = waves[state.waveIndex];
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
    state.betweenWaveTimer = CONFIG.gameplay.waveGapTicks;

    if (state.waveIndex < waves.length) {
      say("Next wave soon.");
    }
  }
}

function updateEnemies() {
  for (let i = state.enemies.length - 1; i >= 0; i--) {
    const enemy = state.enemies[i];

    if (enemy.hp <= 0) {
      state.enemies.splice(i, 1);
      state.glow += CONFIG.gameplay.glowFromEnemy;
      popParticle(enemy.x, enemy.y, "#ffffff");
      playSfx("glow");
      continue;
    }

    const col = Math.floor((enemy.x - GRID_X) / CELL_W);
    const plant = state.grid[enemy.row]?.[col]?.plant;

    if (plant && Math.abs(enemy.x - (GRID_X + col * CELL_W + CELL_W / 2)) < 38) {
      if (enemy.biteCooldown <= 0) {
        plant.hp -= enemy.damage;
        enemy.biteCooldown = 60;
        playSfx("hit");

        popParticle(
          GRID_X + col * CELL_W + CELL_W / 2,
          GRID_Y + enemy.row * CELL_H + CELL_H / 2,
          "#ff4444"
        );

        if (plant.hp <= 0) {
          state.grid[plant.row][plant.col].plant = null;
          state.plants = state.plants.filter(p => p !== plant);
        }
      } else {
        enemy.biteCooldown--;
      }

      continue;
    }

    enemy.x -= enemy.speed;

    if (enemy.x < GRID_X - 55) {
      loseLevel();
      return;
    }
  }
}

function updateEffects() {
  for (let i = state.explosions.length - 1; i >= 0; i--) {
    const ex = state.explosions[i];
    ex.radius += 7;
    ex.life--;

    if (ex.life <= 0) state.explosions.splice(i, 1);
  }

  for (let i = state.particles.length - 1; i >= 0; i--) {
    const p = state.particles[i];
    p.y -= 0.45;
    p.life--;

    if (p.life <= 0) state.particles.splice(i, 1);
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

function winLevel() {
  if (!state || state.won) return;

  state.won = true;
  state.running = false;

  const reward = randomInt(CONFIG.currency.minWinReward, CONFIG.currency.maxWinReward);
  save.twigs += reward;
  saveGame();

  say(`You won! +${reward} Twigs.`);
  playMusic(CONFIG.audio.victoryTrack);
  playSfx("win");

    setTimeout(() => {
    if (state.levelList === "levels") {
      const nextIndex = state.levelIndex + 1;

      if (CONFIG.levels[nextIndex]) {
        startLevel(nextIndex, "levels");
        return;
      }
    }

    showMenu();
  }, 1600);
}

function loseLevel() {
  if (!state || state.lost) return;

  state.lost = true;
  state.running = false;

  say("A derp entered your house. It is over.");
  playSfx("no");
  stopMusic();
}

// ============================================================
// 7. DRAWING
// ============================================================

function draw() {
  if (!ctx || !state) return;

  ctx.clearRect(0, 0, CONFIG.board.canvasW, CONFIG.board.canvasH);

  drawBackground();
  drawLava();
  drawPlants();
  drawEnemies();
  drawProjectiles();
  drawExplosions();
  drawParticles();
}

function drawBackground() {
  const bgKey = state.level.background || "forest";
  const bg = backgrounds[bgKey];

  if (imageReady(bg)) {
    ctx.drawImage(bg, 0, 0, CONFIG.board.canvasW, CONFIG.board.canvasH);
    return;
  }

  ctx.fillStyle = "#5fb846";
  ctx.fillRect(0, 0, CONFIG.board.canvasW, CONFIG.board.canvasH);

  ctx.fillStyle = "rgba(255,255,255,0.15)";
  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      if ((row + col) % 2 === 0) {
        ctx.fillRect(
          GRID_X + col * CELL_W,
          GRID_Y + row * CELL_H,
          CELL_W,
          CELL_H
        );
      }
    }
  }
}

function drawLava() {
  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      if (!state.grid[row][col].lava) continue;

      const x = GRID_X + col * CELL_W;
      const y = GRID_Y + row * CELL_H;

      ctx.fillStyle = "rgba(232, 91, 23, 0.78)";
      ctx.fillRect(x, y, CELL_W, CELL_H);

      ctx.fillStyle = "rgba(255, 221, 68, 0.9)";
      ctx.fillRect(x + 8, y + 28, CELL_W - 16, 8);

      ctx.strokeStyle = "rgba(120, 20, 0, 0.9)";
      ctx.lineWidth = 3;
      ctx.strokeRect(x + 2, y + 2, CELL_W - 4, CELL_H - 4);
    }
  }
}

function drawPlants() {
  for (const plant of state.plants) {
    const def = CONFIG.plants[plant.id];
    const img = images[def.img];

    const x = GRID_X + plant.col * CELL_W + 6;
    const y = GRID_Y + plant.row * CELL_H + 3;

    if (imageReady(img)) {
      ctx.drawImage(img, x, y, CELL_W - 12, CELL_H - 8);
    } else {
      ctx.fillStyle = "#169948";
      ctx.fillRect(x + 10, y + 12, CELL_W - 32, CELL_H - 28);

      ctx.fillStyle = "#06240f";
      ctx.font = "10px monospace";
      ctx.fillText(def.name.slice(0, 8), x + 12, y + 42);
    }

    if (plant.hp < plant.maxHp) {
      ctx.fillStyle = "#000";
      ctx.fillRect(x + 8, y + CELL_H - 12, CELL_W - 24, 6);

      ctx.fillStyle = "#49ff49";
      ctx.fillRect(
        x + 8,
        y + CELL_H - 12,
        (CELL_W - 24) * Math.max(0, plant.hp / plant.maxHp),
        6
      );
    }
  }
}

function drawEnemies() {
  for (const enemy of state.enemies) {
    const def = CONFIG.enemies[enemy.type];
    const img = images[def.img];

    const size = def.boss ? 96 : 76;

    if (imageReady(img)) {
      ctx.drawImage(img, enemy.x - size / 2, enemy.y - size / 2, size, size);
    } else {
      ctx.fillStyle = def.fragile ? "#111" : def.boss ? "#777" : "#eee";
      ctx.fillRect(enemy.x - size / 4, enemy.y - size / 2.7, size / 2, size * 0.72);

      ctx.fillStyle = def.fragile ? "#ff2222" : "#111";
      ctx.font = "10px monospace";
      ctx.fillText(def.name.slice(0, 8), enemy.x - 22, enemy.y);
    }

    ctx.fillStyle = "#000";
    ctx.fillRect(enemy.x - 28, enemy.y - 54, 56, 6);

    ctx.fillStyle = def.boss ? "#ffbb33" : def.fragile ? "#ff2222" : "#ff3333";
    ctx.fillRect(
      enemy.x - 28,
      enemy.y - 54,
      56 * Math.max(0, enemy.hp / enemy.maxHp),
      6
    );
  }
}

function drawProjectiles() {
  ctx.fillStyle = "#5b2b16";

  for (const p of state.projectiles) {
    ctx.fillRect(p.x, p.y, 18, 6);
  }
}

function drawExplosions() {
  for (const ex of state.explosions) {
    ctx.strokeStyle = `rgba(255, 90, 20, ${ex.life / 24})`;
    ctx.lineWidth = 8;
    ctx.beginPath();
    ctx.arc(ex.x, ex.y, ex.radius, 0, Math.PI * 2);
    ctx.stroke();
  }
}

function drawParticles() {
  for (const p of state.particles) {
    ctx.globalAlpha = p.life / 45;
    ctx.fillStyle = p.color;
    ctx.fillRect(p.x - 5, p.y - 5, 10, 10);
    ctx.globalAlpha = 1;
  }
}

// ============================================================
// 8. MAIN LOOP + BOOT
// ============================================================

function gameLoop(myLoop) {
  if (!state || myLoop !== loopId || currentScreen !== "game") return;

  if (state.running) {
    state.tick++;

    updateCooldowns();
    updateWaves();
    updatePlants();
    updateProjectiles();
    updateEnemies();
    updateEffects();
    updateHud();

    if (state.tick % 30 === 0) {
      renderCards();
      selectPlant(state.selectedPlant);
    }
  }

  draw();

  requestAnimationFrame(() => gameLoop(myLoop));
}

function boot() {
  loadSave();
  installBaseHTML();
  installStyles();

  document.addEventListener("click", unlockAudio);
  document.addEventListener("keydown", unlockAudio);

  showMenu();

  console.log("Plants Against Derps v2 booted.");
}

boot();
