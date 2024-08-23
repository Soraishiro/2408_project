document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    const iframe = document.getElementById('fb');
    const mainContent = document.querySelector('main');
    const fireworksContainer = document.querySelector('.fireworks-container');
    const startFireworks = () => {
        const fireworks = new Fireworks.default(fireworksContainer, { /* options */ });
        fireworks.start();

        // Stop fireworks after 5 seconds
        setTimeout(() => {
            fireworks.stop();
            console.log('Fireworks stopped');
        }, 5000);
    };

    startFireworks();

    // Listen for clicks outside the iframe to show the main content
    document.addEventListener('click', (event) => {
        if (event.target !== iframe && !iframe.contains(event.target)) {
            iframe.style.display = 'none';
            container.style.display = 'none';
            mainContent.style.display = 'block';
        }
    });
    });

document.querySelectorAll('.image-map-container div img').forEach(img => {
    img.addEventListener('click', (event) => {
        const imgSrc = img.getAttribute('data-img-src');
        if (imgSrc) {
            const modal = document.getElementById('imageModal');
            const modalImg = document.getElementById('modalImage');
            modal.style.display = "block";
            modalImg.src = imgSrc;
        }
    });
});

const modal = document.getElementById('imageModal');

const span = document.getElementsByClassName('close')[0];

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}