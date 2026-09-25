document.addEventListener('DOMContentLoaded', () => {
    // Download button handler
    const installBtn = document.querySelector('.install-btn');
    
    if (installBtn) {
        installBtn.addEventListener('click', () => {
            console.log("Downloading mParivahan.apk ...");
        });
    }

    // Simple star rating interaction
    const stars = document.querySelectorAll('.star-rating span');
    stars.forEach((star, index) => {
        star.addEventListener('click', () => {
            stars.forEach((s, i) => {
                if (i <= index) {
                    s.style.color = '#01875f';
                } else {
                    s.style.color = '#dadce0';
                }
            });
        });
    });
});