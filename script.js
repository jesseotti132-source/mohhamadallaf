document.addEventListener('DOMContentLoaded', () => {
    // Reveal effects on scroll
    const reveals = document.querySelectorAll('section, .reveal');
    
    // Header scroll background
    const header = document.getElementById('site-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Intersection Observer for reveal animations
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });

    reveals.forEach(reveal => {
        reveal.classList.add('reveal');
        revealObserver.observe(reveal);
    });

    // Parallax effect for about section and research
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        
        // About portrait parallax
        const portrait = document.getElementById('about-portrait');
        if (portrait) {
            const rect = portrait.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                const move = (rect.top / 10);
                portrait.style.transform = `translateY(${move}px)`;
            }
        }

        // Research bg parallax
        const researchBg = document.querySelector('.parallax-layer');
        if (researchBg) {
            const rect = researchBg.parentElement.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                const move = (rect.top / 5);
                researchBg.style.transform = `translateY(${move}px)`;
            }
        }
    });

    // Product Gallery - Thumbnail Switcher
    const mainImg = document.getElementById('product-img');
    const thumbs = document.querySelectorAll('.thumb');
    
    thumbs.forEach(thumb => {
        thumb.addEventListener('click', () => {
            const src = thumb.getAttribute('src');
            
            // Add fade animation
            mainImg.style.opacity = 0;
            setTimeout(() => {
                mainImg.setAttribute('src', src);
                mainImg.style.opacity = 1;
            }, 300);
            
            // Update active state
            thumbs.forEach(t => t.style.borderColor = 'transparent');
            thumb.style.borderColor = '#003087';
        });
    });

    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Hero content entrance
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        setTimeout(() => {
            heroContent.style.opacity = 1;
            heroContent.classList.add('active');
        }, 300);
    }
});

// Custom cursors or other luxury touches could be added here
