// 🦖 DINO SECURITY SYSTEM — NO SNEAKY DINOS ALLOWED

// Simple hash function (prehistoric but effective)
function dinoHash(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return hash.toString();
}

// 🌋 SIGN UP — Create a new dino account
function signup() {
  const u = document.getElementById("user").value.trim();
  const p = document.getElementById("pass").value;

  if (!u || !p) {
    alert("Enter a username and password, mighty dinosaur!");
    return;
  }

  if (localStorage.getItem("dino_" + u)) {
    alert("This dinosaur already exists in the kingdom!");
    return;
  }

  const hashed = dinoHash(p);
  localStorage.setItem("dino_" + u, hashed);

  alert("Your dino account has been created! ROAR!");
  window.location.href = "signin.html";
}

// 🦕 SIGN IN — Only REAL dinos get in
function signin() {
  const u = document.getElementById("user").value.trim();
  const p = document.getElementById("pass").value;

  const stored = localStorage.getItem("dino_" + u);

  if (!stored) {
    alert("No such dinosaur exists!");
    return;
  }

  const hashed = dinoHash(p);

  if (hashed === stored) {
    alert("Welcome back, powerful dinosaur!");
    window.location.href = "../index.html"; // change if needed
  } else {
    alert("Incorrect password! Unauthorized dino detected!");
  }
}
