let score = 0;
let time = 1500;
let timer;
const dot = document.getElementById('dot');

function spawn() {
    dot.style.display = 'none';
    setTimeout(() => {
        const x = Math.random() * (window.innerWidth - 60) + 10;
        const y = Math.random() * (window.innerHeight - 60) + 10;
        dot.style.left = x + 'px'; 
        dot.style.top = y + 'px';
        dot.style.display = 'block';
        
        clearTimeout(timer);
        timer = setTimeout(end, time); 
    }, 300); 
}

function hit(e) {
    e.stopPropagation();
    score++;
    time = Math.max(350, time * 0.9);
    clearTimeout(timer);
    spawn();
}

function end() {
    localStorage.setItem('dot_score', score);
    location.href = 'end.html';
}

// Start game automatically on load
spawn();
