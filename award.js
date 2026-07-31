// 🦖 Load all badge definitions
async function loadBadgeList() {
  const response = await fetch("badges.json");
  const data = await response.json();
  return data;
}

// 🌋 Award a badge to the current dino
async function awardBadge(badgeId) {
  const user = localStorage.getItem("dino_logged_in");

  if (!user) {
    console.error("No logged-in dino!");
    return;
  }

  // Load profile
  const profileKey = "dino_profile_" + user;
  const profileData = JSON.parse(localStorage.getItem(profileKey));

  if (!profileData) {
    console.error("Profile missing!");
    return;
  }

  // Load badge list
  const badges = await loadBadgeList();
  const badge = badges.find(b => b.id === badgeId);

  if (!badge) {
    console.error("Badge not found:", badgeId);
    return;
  }

  // Prevent duplicates
  if (profileData.badges.includes(badge.name)) {
    console.log("Badge already earned:", badge.name);
    return;
  }

  // Add badge
  profileData.badges.push(badge.name);

  // Save profile
  localStorage.setItem(profileKey, JSON.stringify(profileData));

  console.log("Badge awarded:", badge.name);
  alert("🏅 You earned a badge: " + badge.name);
}

// 🦕 Quick helper: award on first login
async function awardFirstLogin() {
  await awardBadge("early_dino");
}

// 🦖 Award when user adds their dino.github.io site
async function awardSiteBuilder() {
  await awardBadge("site_builder");
}

// 🌋 Award when user submits first project
async function awardFirstSubmission() {
  await awardBadge("first_submission");
}
