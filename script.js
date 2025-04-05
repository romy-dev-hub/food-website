document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');
    
    mobileMenuBtn.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        this.classList.toggle('fa-times');
        this.classList.toggle('fa-bars');
        document.body.classList.toggle('no-scroll');
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('#navLinks a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileMenuBtn.classList.remove('fa-times');
            mobileMenuBtn.classList.add('fa-bars');
            document.body.classList.remove('no-scroll');
        });
    });
    
    // Initialize Swiper
    const swiper = new Swiper('.menu-swiper', {
        slidesPerView: 1,
        spaceBetween: 20,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            // When window width is >= 640px
            640: {
                slidesPerView: 2,
            },
            // When window width is >= 992px
            992: {
                slidesPerView: 3,
            }
        },
        // Add these for better mobile touch
        touchEventsTarget: 'container',
        grabCursor: true,
        preventClicks: true,
        preventClicksPropagation: true
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Form validation
    const subscribeForm = document.getElementById('subscribeForm');
    const formMessage = document.querySelector('.form-message');
    
    subscribeForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const emailInput = this.querySelector('input[type="email"]');
        const email = emailInput.value.trim();
        
        if (!email) {
            showFormMessage('Please enter your email address', 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showFormMessage('Please enter a valid email address', 'error');
            return;
        }
        
        // Simulate form submission
        showFormMessage('Thank you for subscribing!', 'success');
        emailInput.value = '';
        
        // Reset message after 3 seconds
        setTimeout(() => {
            formMessage.textContent = '';
            formMessage.className = 'form-message';
        }, 3000);
    });
    
    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    function showFormMessage(message, type) {
        formMessage.textContent = message;
        formMessage.className = `form-message ${type}`;
    }
    
    // Add to cart animation
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const card = this.closest('.card');
            const img = card.querySelector('img');
            const imgClone = img.cloneNode(true);
            
            imgClone.style.position = 'fixed';
            imgClone.style.width = '100px';
            imgClone.style.height = '100px';
            imgClone.style.objectFit = 'cover';
            imgClone.style.borderRadius = '50%';
            imgClone.style.zIndex = '1000';
            imgClone.style.top = img.getBoundingClientRect().top + 'px';
            imgClone.style.left = img.getBoundingClientRect().left + 'px';
            imgClone.style.transition = 'all 0.5s ease';
            imgClone.style.pointerEvents = 'none';
            
            document.body.appendChild(imgClone);
            
            setTimeout(() => {
                const cartIcon = document.querySelector('.fa-cart-shopping');
                const cartRect = cartIcon.getBoundingClientRect();
                
                imgClone.style.top = cartRect.top + 'px';
                imgClone.style.left = cartRect.left + 'px';
                imgClone.style.width = '20px';
                imgClone.style.height = '20px';
                imgClone.style.opacity = '0.5';
            }, 10);
            
            setTimeout(() => {
                imgClone.remove();
                
                // Update button text
                this.textContent = 'Added!';
                this.style.backgroundColor = '#28a745';
                
                setTimeout(() => {
                    this.textContent = 'Add to cart';
                    this.style.backgroundColor = '';
                }, 2000);
            }, 600);
        });
    });
    
    // Scroll reveal animation
    if (typeof ScrollReveal !== 'undefined') {
        const sr = ScrollReveal({
            origin: 'bottom',
            distance: '50px',
            duration: 1000,
            reset: false
        });
        
        sr.reveal('.hero-content, .hero-img', { delay: 200 });
        sr.reveal('.about-us .left-side, .about-us .right-side', { delay: 300, interval: 200 });
        sr.reveal('.card', { delay: 200, interval: 150 });
        sr.reveal('.feature-card', { delay: 200, interval: 150 });
        sr.reveal('.testimonial-content, .testimonial-image', { delay: 200, interval: 200 });
    }
    
    // Active link highlighting based on scroll position
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('#navLinks a');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    });
    
    // Sticky header on scroll
    const header = document.querySelector('header');
    const nav = document.querySelector('.nav');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            nav.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
            nav.style.padding = '1rem 0';
        } else {
            nav.style.backgroundColor = 'transparent';
            nav.style.padding = '2rem 0';
        }
    });

    
});