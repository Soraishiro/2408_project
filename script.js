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

document.addEventListener('click', (event) => {
        if (event.target !== iframe && !iframe.contains(event.target)) {
            iframe.style.display = 'none';
            container.style.display = 'none';
            mainContent.style.display = 'block';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.image-map-container div img');
    let currentImageIndex = 0;

    document.getElementById('comic-button').addEventListener('click', function() {
        // Show image in block view
        const img = images[currentImageIndex];
        const imgSrc = img.getAttribute('data-img-src');
        const imgCaption = img.getAttribute('data-caption'); // Get the caption from a data attribute
        if (imgSrc) {
            const modal = document.getElementById('imageModal');
            const modalImg = document.getElementById('modalImage');
            const modalCaption = document.getElementById('modalCaption');
            modal.style.display = "block";
            modalImg.src = imgSrc;
            modalCaption.textContent = imgCaption; // Set the caption text
        }
        // Show the next image
        images[currentImageIndex].style.display = 'block';

        // Close modal when clicking outside of modal
        window.addEventListener('click', function(event) {
            const modal = document.getElementById('imageModal');
            if (event.target == modal) {
                modal.style.display = "none";
            }
        });

        // Move to the next image
        currentImageIndex = (currentImageIndex + 1) % images.length;
    });

    // Close the modal when the close button is clicked
    document.querySelector('.close').addEventListener('click', function() {
        const modal = document.getElementById('imageModal');
        modal.classList.add('hide');
        modal.classList.remove('show');
        setTimeout(() => {
            modal.style.display = 'none';
        }, 500); // Match the duration of the CSS transition
    });

    // Optionally, close the modal when clicking outside of the modal content
    window.addEventListener('click', function(event) {
        const modal = document.getElementById('imageModal');
        if (event.target == modal) {
            modal.classList.add('hide');
            modal.classList.remove('show');
            setTimeout(() => {
                modal.style.display = 'none';
            }, 500); // Match the duration of the CSS transition
        }
    });
});