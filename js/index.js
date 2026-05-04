// SLIDER
let index = 0;
const slides = document.getElementById("slides");
const images = slides.querySelectorAll("img");

function updateSlider() {
    slides.style.transform = `translateX(-${index * 100}%)`;

    images.forEach(img => img.classList.remove("active"));
    images[index].classList.add("active");
}

const tempoTotal = 4000 ; // 4s

setInterval(() => {
    index = (index + 1) % images.length;
    updateSlider();
}, tempoTotal);

updateSlider();

// BOTÃO NÃO
const noBtn = document.getElementById("no");

noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 100);

    noBtn.style.position = "absolute";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
});

noBtn.addEventListener("click", () => {
    noBtn.style.display = "none";
});

// BOTÃO SIM
const yesBtn = document.getElementById("yes");
const message = document.getElementById("message");
const ring = document.getElementById("ringContainer");
const audio = document.getElementById("musica");

yesBtn.addEventListener("click", () => {

    message.style.display = "block";
    ring.style.display = "block";

    message.innerHTML =
        "Fernanda 💖<br><br>Você é a melhor parte da minha vida. Cada momento ao seu lado é único e especial. Prometo te amar, te cuidar e estar com você em todos os momentos. 💍✨<br><br>Agora é oficial... vamos construir nossa história juntos.";

    // 🔥 TOCAR MÚSICA
    audio.volume = 0.3;
    audio.play().catch(err => console.log("Erro ao tocar:", err));

    startConfetti();
});

// CONFETE
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let confetti = [];

function startConfetti() {
    confetti = [];

    for (let i = 0; i < 150; i++) {
        confetti.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            r: Math.random() * 6,
            d: Math.random() * 5,
            color: `hsl(${Math.random() * 360}, 100%, 60%)`
        });
    }

    animate();
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    confetti.forEach(c => {
        ctx.beginPath();
        ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
        ctx.fillStyle = c.color;
        ctx.fill();

        c.y += c.d;
        if (c.y > canvas.height) c.y = 0;
    });

    requestAnimationFrame(animate);
}