// Plants Against Derps - main.js v1.2
// Clean replacement with easy CONFIG section + music support.

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
    betweenWaveDelay: 240
  },

  plants: {
    campfr: {
      name: "Campfr",
      cost: 25,
      hp: 80,
      img: "campfr",
      desc: "Makes Glow."
    },

    treeGun: {
      name: "Tree Gun",
      cost: 100,
      hp: 100,
      img: "treeGun",
      desc: "Shoots derps.",
      shootCooldown: 115,
      projectileDamage: 24,
      projectileSpeed: 4.5
    },

    treeGun: {
      name: "Rosegun",
      cost: 50,
      hp: 60,
      img: "rosegun",
      desc: "Shoots derps in a worse way.",
      shootCooldown: 115,
      projectileDamage: 15,
      projectileSpeed: 2
    },

    kaboom: {
      name: "El Kaboom",
      cost: 225,
      hp: 40,
      img: "kaboom",
      desc: "Explodes.",
      fuse: 90,
      damage: 180,
      radius: 140
    }
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
    button.addEventListener("click", () => startLevel(index));
    levelGridEl.appendChild(button);
  });
}

function initCards() {
  cardsEl.innerHTML = "";

  for (const [id, plant] of Object.entries(CONFIG.plants)) {
    const card = document.createElement("button");
    card.className = "card";
    card.dataset.plant = id;
    card.innerHTML = `
      <img src="${CONFIG.images[plant.img]}" alt="${plant.name}">
      <b>${plant.name}</b>
      <span>${plant.cost} Glow</span><br>
      <span>${plant.desc}</span>
    `;
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

function startLevel(index) {
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
    selectedPlant: "campfr",
    running: true,
    won: false,
    lost: false,
    tick: 0,
    message: "Protect the lawn from questionable creatures.",
    messageTimer: 240
  };

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
  selectPlant("campfr");
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
  statusText.textContent = state.lost ? "Lost" : state.won ? "Won" : "Derping";
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
    cooldown: type === "campfr" ? CONFIG.balancing.campfrGlowCooldown : type === "treeGun" ? plantDef.shootCooldown : 180,
    fuse: type === "kaboom" ? plantDef.fuse : 0
  };

  cell.plant = plant;
  state.plants.push(plant);

  say(`${plantDef.name} placed.`);
  playSfx("plant");
  updateHud();
}

function spawnEnemy(type, row) {
  const def = CONFIG.enemies[type];

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

  if (!state.lost && !state.won) {
    requestAnimationFrame(gameLoop);
  }
}

function update() {
  state.tick++;

  if (state.messageTimer > 0) {
    state.messageTimer--;
  }

  updateWaves();
  updatePlants();
  updateProjectiles();
  updateEnemies();
  updateExplosions();

  updateHud();
}

function updateWaves() {
  if (state.waveIndex >= state.level.waves.length) {
    if (state.enemies.length === 0 && !state.won) {
      state.won = true;
      say("You won. The derps are confused forever.", 999999);
      playMusic("victory");
      playSfx("win");
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

function updatePlants() {
  for (const plant of [...state.plants]) {
    plant.cooldown--;

    if (plant.id === "campfr") {
      if (plant.cooldown <= 0) {
        state.glow += CONFIG.balancing.campfrGlowAmount;
        plant.cooldown = CONFIG.balancing.campfrGlowCooldown;
        popParticle(
          GRID_X + plant.col * CELL_W + CELL_W / 2,
          GRID_Y + plant.row * CELL_H + 20,
          "#ffe95a"
        );
        playSfx("glow");
      }
    }

    if (plant.id === "treeGun") {
      const plantDef = CONFIG.plants.treeGun;
      const plantX = GRID_X + plant.col * CELL_W;

      const hasTarget = state.enemies.some(enemy => {
        return enemy.row === plant.row && enemy.x > plantX;
      });

      if (plant.cooldown <= 0 && hasTarget) {
        state.projectiles.push({
          x: GRID_X + plant.col * CELL_W + CELL_W * 0.65,
          y: GRID_Y + plant.row * CELL_H + CELL_H * 0.45,
          row: plant.row,
          speed: plantDef.projectileSpeed,
          damage: plantDef.projectileDamage
        });

        plant.cooldown = plantDef.shootCooldown;
        playSfx("shoot");
      }
    }

    if (plant.id === "kaboom") {
      plant.fuse--;

      if (plant.fuse <= 0) {
        explodePlant(plant);
      }
    }
  }
}

function updateProjectiles() {
  for (let i = state.projectiles.length - 1; i >= 0; i--) {
    const projectile = state.projectiles[i];
    projectile.x += projectile.speed;

    const hitEnemy = state.enemies.find(enemy => {
      return enemy.row === projectile.row && Math.abs(enemy.x - projectile.x) < 26;
    });

    if (hitEnemy) {
      hitEnemy.hp -= projectile.damage;
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
  const plantDef = CONFIG.plants.kaboom;
  const centerX = GRID_X + plant.col * CELL_W + CELL_W / 2;
  const centerY = GRID_Y + plant.row * CELL_H + CELL_H / 2;

  for (const enemy of state.enemies) {
    const distance = Math.hypot(enemy.x - centerX, enemy.y - centerY);

    if (distance < plantDef.radius) {
      enemy.hp -= plantDef.damage;
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

  say("EL KABOOM.");
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

    const img = images[def.img];

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
    const img = images[def.img];

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

  if (!state || !state.running || state.lost || state.won) return;

  const position = gridFromMouse(event);

  if (!position) return;

  plantAt(position.row, position.col, state.selectedPlant);
});

document.addEventListener("click", unlockAudio);
document.addEventListener("keydown", unlockAudio);

document.getElementById("playBtn").addEventListener("click", () => {
  startLevel(0);
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
  startLevel(state?.levelIndex || 0);
});

document.getElementById("fullscreenBtn").addEventListener("click", async () => {
  const gameScreen = document.getElementById("gameScreen");

  try {
    if (!document.fullscreenElement) {
      await gameScreen.requestFullscreen();
      document.getElementById("fullscreenBtn").textContent = "Exit Fullscreen";
    } else {
      await document.exitFullscreen();
      document.getElementById("fullscreenBtn").textContent = "Fullscreen";
    }
  } catch (err) {
    console.warn("Fullscreen failed:", err);
  }
});

document.addEventListener("fullscreenchange", () => {
  const button = document.getElementById("fullscreenBtn");

  if (!button) return;

  button.textContent = document.fullscreenElement ? "Exit Fullscreen" : "Fullscreen";
});

initLevelButtons();
showScreen("menu");
