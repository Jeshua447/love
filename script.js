// Crear estrellas dinámicamente
function createStars() {
    const starsContainer = document.getElementById('stars');
    const numStars = 100;

    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        const size = Math.random() * 4 + 1;
        star.style.width = size + 'px';
        star.style.height = size + 'px';
        star.style.animationDelay = Math.random() * 3 + 's';
        starsContainer.appendChild(star);
    }
}

// Crear medusas adicionales
function createExtraJellyfish() {
    const container = document.querySelector('.container');

    for (let i = 0; i < 3; i++) {
        const jellyfish = document.createElement('div');
        jellyfish.className = 'jellyfish';
        jellyfish.style.left = Math.random() * 80 + '%';
        jellyfish.style.top = Math.random() * 60 + 20 + '%';
        jellyfish.style.animationDelay = Math.random() * 6 + 's';
        jellyfish.style.opacity = '0.7';
        jellyfish.style.transform = `scale(${0.6 + Math.random() * 0.4})`;

        const body = document.createElement('div');
        body.className = 'jellyfish-body';
        body.style.background = `linear-gradient(45deg, 
            hsl(${Math.random() * 360}, 70%, 60%), 
            hsl(${Math.random() * 360}, 70%, 40%))`;

        const tentacles = document.createElement('div');
        tentacles.className = 'tentacles';
        for (let j = 0; j < 7; j++) {
            const tentacle = document.createElement('div');
            tentacle.className = 'tentacle';
            tentacle.style.animationDelay = Math.random() * 3 + 's';
            tentacles.appendChild(tentacle);
        }

        jellyfish.appendChild(body);
        jellyfish.appendChild(tentacles);
        container.appendChild(jellyfish);
    }
}

// Efecto de movimiento del mouse
document.addEventListener('mousemove', (e) => {
    const jellyfish = document.querySelectorAll('.jellyfish');
    jellyfish.forEach((fish) => {
        const rect = fish.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const deltaX = e.clientX - centerX;
        const deltaY = e.clientY - centerY;
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        const maxDistance = 200;

        if (distance < maxDistance) {
            const force = (maxDistance - distance) / maxDistance;
            const moveX = (deltaX / distance) * force * 20;
            const moveY = (deltaY / distance) * force * 20;
            fish.style.transform = `translate(${-moveX}px, ${-moveY}px)`;
        } else {
            fish.style.transform = '';
        }
    });
});

// Cambiar colores periódicamente
setInterval(() => {
    const jellyfish = document.querySelectorAll('.jellyfish-body');
    jellyfish.forEach(fish => {
        if (Math.random() > 0.7) {
            const hue1 = Math.random() * 360;
            const hue2 = (hue1 + 60) % 360;
            fish.style.background = `linear-gradient(45deg, 
                hsl(${hue1}, 70%, 60%), 
                hsl(${hue2}, 70%, 40%))`;
        }
    });
}, 5000);

// Inicializar
createStars();
createExtraJellyfish();
