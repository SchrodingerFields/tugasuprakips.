document.addEventListener('DOMContentLoaded', function() {
    // Efek Parallax
    const parallaxContainer = document.querySelector('.parallax-container');
    const parallaxSections = document.querySelectorAll('.parallax-section');
    const hero = document.getElementById('hero');
    const header = document.querySelector('header');

    parallaxContainer.addEventListener('scroll', () => {
        let scrollPosition = window.pageYOffset;

        parallaxSections.forEach(section => {
            const parallaxBg = section.querySelector('.parallax-bg');
            if (parallaxBg) {
                parallaxBg.style.transform = `translateY(${scrollPosition * 0.6}px) scale(1.5)`;
            }
        });

        hero.style.transform = `translateY(${scrollPosition * 0.4}px) translateZ(-1px) scale(2)`;
        header.style.backgroundColor = `rgba(0, 0, 0, ${Math.min(0.7 + scrollPosition / 500, 1)})`;
    });

    // Navigasi Smooth Scroll
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Efek Hover pada Kartu
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
            this.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.6)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.5)';
        });
    });

    // Slider Testimoni
    const storySlider = document.querySelector('.story-slider');
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.prev-slide');
    const nextButton = document.querySelector('.next-slide');
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.transform = `translateX(${100 * (i - index)}%)`;
            slide.style.opacity = i === index ? 1 : 0.6;
            slide.style.transition = 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out';
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    if (storySlider && slides.length > 0 && prevButton && nextButton) {
        showSlide(currentIndex);
        nextButton.addEventListener('click', nextSlide);
        prevButton.addEventListener('click', prevSlide);

        // Auto slide (opsional)
        // setInterval(nextSlide, 5000);
    }
});