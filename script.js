// Multi-page navigation
function showPage(pageId) {
    document.querySelectorAll('section').forEach(s => s.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
}

// Countdown to 2026
function startTimer() {
    const target = new Date("January 1, 2026 00:00:00").getTime();
    setInterval(() => {
        const now = new Date().getTime();
        const diff = target - now;
        const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((diff % (1000 * 60)) / 1000);
        document.getElementById("countdown").innerText = `${h}h : ${m}m : ${s}s`;
    }, 1000);
}
startTimer();

// Wish Jar Interaction
const wishes = [
    "A year of endless pink sunsets 🌅",
    "New friendships that feel like home 🧸",
    "Success in every little step you take ✨",
    "A dream trip you've been waiting for ✈️"
];

function revealWish() {
    const display = document.getElementById("wish-display");
    const randomWish = wishes[Math.floor(Math.random() * wishes.length)];
    display.style.opacity = 0;
    setTimeout(() => {
        display.innerText = randomWish;
        display.style.opacity = 1;
        display.style.color = "#ff8fa3";
        display.style.fontWeight = "bold";
    }, 300);
}