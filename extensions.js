// 🦖 Dino Extensions System
// Scratch-style extension loader for Dino Block Editor

const DinoExtensions = {
  list: [],

  // Register a new extension
  register(ext) {
    this.list.push(ext);
    console.log(`🧩 Loaded extension: ${ext.id}`);
  },

  // Get all blocks from all extensions
  getAllBlocks() {
    let all = [];
    this.list.forEach(ext => {
      all = all.concat(ext.blocks);
    });
    return all;
  }
};

// Example extension: DinoMath
DinoExtensions.register({
  id: "dinoMath",
  name: "Dino Math",
  color: "#33cc33",
  blocks: [
    { cat: "extension", text: "square (number)" },
    { cat: "extension", text: "cube (number)" },
    { cat: "extension", text: "sqrt (number)" },
    { cat: "extension", text: "random dino number" }
  ]
});

// Example extension: DinoSensing
DinoExtensions.register({
  id: "dinoSensing",
  name: "Dino Sensing",
  color: "#33aaff",
  blocks: [
    { cat: "extension", text: "is meteor falling?" },
    { cat: "extension", text: "dino roar loudness" },
    { cat: "extension", text: "is volcano active?" }
  ]
});

// Inject extension blocks into editor
function loadExtensionsIntoEditor() {
  const extBlocks = DinoExtensions.getAllBlocks();
  const blockList = document.getElementById("blockList");

  extBlocks.forEach(b => {
    const el = document.createElement("div");
    el.className = `block extension`;
    el.style.background = "#444"; // default extension color
    el.textContent = b.text;
    el.draggable = true;

    el.addEventListener("dragstart", e => {
      e.dataTransfer.setData("text/plain", b.text);
     
