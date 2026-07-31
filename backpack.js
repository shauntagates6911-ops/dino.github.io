const backpack = JSON.parse(localStorage.getItem("dinoBackpack") || "[]");

function saveToBackpack() {
  const png = canvas.toDataURL();
  backpack.push(png);
  localStorage.setItem("dinoBackpack", JSON.stringify(backpack));
  renderBackpack();
}

function renderBackpack() {
  const area = document.getElementById("backpackItems");
  area.innerHTML = "";

  backpack.forEach((item, i) => {
    const img = document.createElement("img");
    img.src = item;
    img.className = "backpackImg";
    img.onclick = () => loadFromBackpack(i);
    area.appendChild(img);
  });
}

function loadFromBackpack(i) {
  const img = new Image();
  img.onload = () => ctx.drawImage(img, 0, 0);
  img.src = backpack[i];
}
