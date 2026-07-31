// 🦖 DINO HOME PAGE INITIALIZER
function dinoHomeInit() {
  checkAuth();
  loadProjects();
  loadDinoChart();
}

// 🌋 AUTH CHECK — NO SNEAKY DINOS ALLOWED
function checkAuth() {
  const loggedIn = localStorage.getItem("dino_logged_in");

  if (!loggedIn) {
    alert("Unauthorized dinosaur detected! ROAR!");
    window.location.href = "auth/signin.html";
  }
}

// 🦕 LOGOUT BUTTON
function logout() {
  localStorage.removeItem("dino_logged_in");
  alert("You have left the Dino Kingdom!");
  window.location.href = "auth/signin.html";
}

// 🌿 LOAD COMMUNITY PROJECTS
function loadProjects() {
  fetch("projects.json")
    .then(response => response.json())
    .then(data => {
      const list = document.getElementById("projectList");
      list.innerHTML = "";

      data.forEach(project => {
        const div = document.createElement("div");
        div.className = "project";
        div.innerHTML = `
          <h3>${project.name}</h3>
          <p>${project.description}</p>
          <a href="${project.url}" target="_blank">Open Project</a>
        `;
        list.appendChild(div);
      });
    })
    .catch(err => {
      console.error("Error loading projects:", err);
    });
}

// 📊 LOAD DINO CHART (from charts.js)
function loadDinoChart() {
  if (typeof initDinoChart === "function") {
    initDinoChart();
  } else {
    console.error("Chart function
