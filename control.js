document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.section');

    function showSections() {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;
            
            if (rect.top < windowHeight * 0.5 && rect.bottom >= windowHeight * 0.5) {
                section.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', showSections);

    setTimeout(showSections, 2000);
});

