// GBV MLC Orientation — Slide Navigation
(function () {
    const totalSlides = 20;
    let currentSlide = 1;

    const progressBar = document.getElementById('progressBar');
    const slideCounter = document.getElementById('slideCounter');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    function updateSlide(newSlide) {
        if (newSlide < 1 || newSlide > totalSlides) return;

        const oldEl = document.getElementById('slide-' + currentSlide);
        const newEl = document.getElementById('slide-' + newSlide);

        if (oldEl) {
            oldEl.classList.remove('active');
            if (newSlide > currentSlide) {
                oldEl.classList.add('exit-left');
                setTimeout(() => oldEl.classList.remove('exit-left'), 500);
            }
        }

        if (newEl) {
            newEl.classList.add('active');
        }

        currentSlide = newSlide;

        // Update UI
        progressBar.style.width = ((currentSlide / totalSlides) * 100) + '%';
        slideCounter.textContent = currentSlide + ' / ' + totalSlides;
        prevBtn.disabled = currentSlide === 1;
        nextBtn.disabled = currentSlide === totalSlides;
    }

    window.changeSlide = function (direction) {
        updateSlide(currentSlide + direction);
    };

    // Keyboard navigation
    document.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowRight' || e.key === ' ') {
            e.preventDefault();
            changeSlide(1);
        } else if (e.key === 'ArrowLeft') {
            e.preventDefault();
            changeSlide(-1);
        } else if (e.key === 'Home') {
            e.preventDefault();
            updateSlide(1);
        } else if (e.key === 'End') {
            e.preventDefault();
            updateSlide(totalSlides);
        }
    });

    // Touch support
    let touchStartX = 0;
    document.addEventListener('touchstart', function (e) {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    document.addEventListener('touchend', function (e) {
        const diff = touchStartX - e.changedTouches[0].screenX;
        if (Math.abs(diff) > 50) {
            changeSlide(diff > 0 ? 1 : -1);
        }
    }, { passive: true });

    // Initialize
    updateSlide(1);
})();
