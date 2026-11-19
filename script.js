const openNote = document.getElementById("openNote");
const noteModal = document.getElementById("noteModal");
const closeNote = document.getElementById("closeNote");

if (openNote && noteModal) {
  openNote.addEventListener("click", () => {
    noteModal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
    sprinkle();
  });
}
if (closeNote && noteModal) {
  closeNote.addEventListener("click", () => {
    noteModal.classList.add("hidden");
    document.body.style.overflow = "";
  });
  noteModal.addEventListener("click", (event) => {
    if (event.target === noteModal) {
      noteModal.classList.add("hidden");
      document.body.style.overflow = "";
    }
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      noteModal.classList.add("hidden");
      document.body.style.overflow = "";
    }
  });
}

function sprinkle() {
  for (let i = 0; i < 24; i++) {
    const bit = document.createElement("span");
    bit.textContent = ["✦", "♡", "✧"][i % 3];
    bit.className = "fixed pointer-events-none z-50 text-pink-400";
    bit.style.left = Math.random() * 100 + "vw";
    bit.style.top = "-20px";
    bit.style.fontSize = (12 + Math.random() * 18) + "px";
    bit.style.transition = "transform 2.8s ease-in, opacity 2.8s ease-in";
    document.body.appendChild(bit);
    requestAnimationFrame(() => {
      bit.style.transform = `translate(${(Math.random() - .5) * 150}px, ${window.innerHeight + 80}px) rotate(${Math.random() * 360}deg)`;
      bit.style.opacity = "0";
    });
    setTimeout(() => bit.remove(), 3000);
  }
}

const wishBtn = document.getElementById("wishBtn");
const wishText = document.getElementById("wishText");
if (wishBtn && wishText) {
  const wishes = [
    "Aaj ka din tumhare liye dher saari smiles laaye. 🌸",
    "Keep shining, Palak. You deserve good things. ✨",
    "Narazgi thodi kam, hasi thodi zyada. 😊",
    "May your favourite little things find you today. 💜"
  ];
  wishBtn.addEventListener("click", () => {
    wishText.textContent = wishes[Math.floor(Math.random() * wishes.length)];
    sprinkle();
  });
}
