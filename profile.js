// 🦖 AUTH CHECK — NO SNEAKY DINOS
function loadProfile() {
  const user = localStorage.getItem("dino_logged_in");

  if (!user) {
    alert("Unauthorized dinosaur detected!");
    window.location.href = "auth/signin.html";
    return;
  }

  // Load stored profile data
  const profileData = JSON.parse(localStorage.getItem("dino_profile_" + user));

  if (!profileData) {
    alert("No profile found! Create one first.");
    window.location.href = "index.html";
    return;
  }

  // Fill profile page
  document.getElementById("username").innerText = profileData.username;
  document.getElementById("bio").innerText = profileData.bio;

  const avatarImg = document.getElementById("avatar");
  avatarImg.src = profileData.avatar;
  avatarImg.alt = profileData.username + " avatar";

  const siteLink = document.getElementById("siteLink");
  siteLink.href = profileData.site;
  siteLink.innerText = profileData.site;

  // Load badges
  const badgeBox = document.getElementById("badges");
  badgeBox.innerHTML = "";

  profileData.badges.forEach(badge => {
    const b = document.createElement("span");
    b.className = "badge";
    b.innerText = badge;
    badgeBox.appendChild(b);
  });
}

// 🦕 LOGOUT
function logout() {
  localStorage.removeItem("dino_logged_in");
  window.location.href = "auth/signin.html";
}
