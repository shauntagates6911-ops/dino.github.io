// Simple Dino Block Editor – 63 Scratch-like blocks

const blocks = [
  // Motion (10)
  { cat: "motion", text: "move 10 steps" },
  { cat: "motion", text: "turn 15 degrees" },
  { cat: "motion", text: "turn -15 degrees" },
  { cat: "motion", text: "go to x: 0 y: 0" },
  { cat: "motion", text: "glide 1 secs to x: 0 y: 0" },
  { cat: "motion", text: "point in direction 90" },
  { cat: "motion", text: "change x by 10" },
  { cat: "motion", text: "set x to 0" },
  { cat: "motion", text: "change y by 10" },
  { cat: "motion", text: "set y to 0" },

  // Looks (10)
  { cat: "looks", text: "say Hello! for 2 secs" },
  { cat: "looks", text: "say Hello!" },
  { cat: "looks", text: "think Hmm..." },
  { cat: "looks", text: "switch costume to costume1" },
  { cat: "looks", text: "next costume" },
  { cat: "looks", text: "change size by 10" },
  { cat: "looks", text: "set size to 100%" },
  { cat: "looks", text: "show" },
  { cat: "looks", text: "hide" },
  { cat: "looks", text: "go to front layer" },

  // Sound (8)
  { cat: "sound", text: "play sound Meow until done" },
  { cat: "sound", text: "start sound Meow" },
  { cat: "sound", text: "stop all sounds" },
  { cat: "sound", text: "change volume by -10" },
  { cat: "sound", text: "set volume to 100%" },
  { cat: "sound", text: "change pitch effect by 10" },
  { cat: "sound", text: "clear sound effects" },
  { cat: "sound", text: "play drum 1 for 0.2 beats" },

  // Events (7)
  { cat: "events", text: "when green flag clicked" },
  { cat: "events", text: "when key space pressed" },
  { cat: "events", text: "when this sprite clicked" },
  { cat: "events", text: "when backdrop switches to backdrop1" },
  { cat: "events", text: "when loudness > 10" },
  { cat: "events", text: "broadcast message1" },
  { cat: "events", text: "when I receive message1" },

  // Control (7)
  { cat: "control", text: "wait 1 seconds" },
  { cat: "control", text: "repeat 10" },
  { cat: "control", text: "forever" },
  { cat: "control", text: "if <condition> then" },
  { cat: "control", text: "if <condition> then else" },
  { cat: "control", text: "wait until <condition>" },
  { cat: "control", text: "stop all" },

  // Sensing (7)
  { cat: "sensing", text: "touching mouse-pointer?" },
  { cat: "sensing", text: "touching color ?" },
  { cat: "sensing", text: "distance to mouse-pointer" },
  { cat: "sensing", text: "ask What's your name? and wait" },
  { cat: "sensing", text: "answer" },
  { cat: "sensing", text: "mouse x" },
  { cat: "sensing", text: "mouse y" },

  // Operators (7)
  { cat: "operators", text: "pick random 1 to 10" },
  { cat: "operators", text: "10 + 5" },
  { cat: "operators", text: "10 - 5" },
  { cat: "operators", text: "10 * 5" },
  { cat: "operators", text: "10 / 5" },
  { cat: "operators", text: "join hello world" },
  { cat: "operators", text: "letter 1 of hello" },

  // Variables (7)
  { cat: "variables", text: "set score to 0" },
  { cat: "variables", text: "change score by 1" },
  { cat: "variables", text: "show variable score" },
  { cat: "variables", text: "hide variable score" },
  { cat: "variables", text: "set timer to 0" },
  { cat: "variables", text: "reset timer" },
  { cat: "variables", text: "score" }
]; // 63 total

const blockList = document.getElementById("blockList");
const workspaceArea = document.getElementById("workspaceArea");

// Create palette blocks
blocks.forEach(b => {
  const el = document.createElement("div");
  el.className = `block ${b.cat}`;
  el.textContent = b.text;
  el.draggable = true;

  el.addEventListener("dragstart", e => {
    e.dataTransfer.setData("text/plain", b.text);
    e.dataTransfer.setData("cat", b.cat);
  });

  blockList.appendChild(el);
});

// Allow dropping into workspace
workspaceArea.addEventListener("dragover", e => {
  e.preventDefault();
});

workspaceArea.addEventListener("drop", e => {
  e.preventDefault();
  const text = e.dataTransfer.getData("text/plain");
  const cat = e.dataTransfer.getData("cat");

  const el = document.createElement("div");
  el.className = `block ${cat}`;
  el.textContent = text;
  workspaceArea.appendChild(el);
});
