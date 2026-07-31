// 🦖 Dino Badge Rules Engine
// These rules automatically award badges based on user actions

// Load badge engine
import { awardBadge } from "./award.js";

// 🌋 Rule 1 — Award "Early Dino" on first login
export function ruleFirstLogin(profileData) {
  if (!profileData.badges.includes("Early Dino")) {
    awardBadge("early_dino");
  }
}

// 🦕 Rule 2 — Award "Dino Site Builder" when user adds a website
export function ruleSiteAdded(profileData) {
  if (profileData.site && !profileData.badges.includes("Dino Site Builder")) {
    awardBadge("site_builder");
  }
}

// 🦖 Rule 3 — Award "First Roar" when user submits their first project
export function ruleFirstSubmission(profileData) {
  if (profileData.submissions >= 1 && !profileData.badges.includes("First Roar")) {
    awardBadge("first_submission");
  }
}

// 🌿 Rule 4 — Award "Community Dino" when user visits 5 dino sites
export function ruleCommunityVisits(profileData) {
  if (profileData.visits >= 5 && !profileData.badges.includes("Community Dino")) {
    awardBadge("community_dino");
  }
}

// 🔥 Rule 5 — Award "Active Dino" for 7 days of login streak
export function ruleLoginStreak(profileData) {
  if (profileData.streak >= 7 && !profileData.badges.includes("Active Dino")) {
    awardBadge("active_dino");
  }
}

// 🌋 Rule 6 — Award "Legendary Roar" for 10 project contributions
export function ruleLegendaryRoar(profileData) {
  if (profileData.submissions >= 10 && !profileData.badges.includes("Legendary Roar")) {
    awardBadge("legendary_roar");
  }
}

// 🦕 Run all rules at once
export function runAllBadgeRules(profileData) {
  ruleFirstLogin(profileData);
  ruleSiteAdded(profileData);
  ruleFirstSubmission(profileData);
  ruleCommunityVisits(profileData);
  ruleLoginStreak(profileData);
  ruleLegendaryRoar(profileData);
}
