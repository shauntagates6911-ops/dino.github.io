<script src="https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js"></script>
const firebaseConfig = {
  apiKey: "YOUR_KEY",
  authDomain: "YOUR_DOMAIN",
  projectId: "YOUR_PROJECT",
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
function sendOTP(email) {
  auth.signInWithEmailLink(email, {
    url: "https://dino.github.io/otp.html",
    handleCodeInApp: true
  }).then(() => {
    localStorage.setItem("dinoEmail", email);
    otpStatus.textContent = "📨 OTP sent to your email!";
  });
}
function verifyOTP(code) {
  const email = localStorage.getItem("dinoEmail");

  auth.signInWithEmailLink(email, code)
    .then(() => {
      otpStatus.textContent = "🦖 Verified!";
      window.location.href = "dashboard.html";
    })
    .catch(() => {
      otpStatus.textContent = "❌ Incorrect OTP.";
    });
}
