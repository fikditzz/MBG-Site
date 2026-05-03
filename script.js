// script.js

document.addEventListener("DOMContentLoaded", () => {
    // 1. LOGIKA INTRO SCREEN (SPLASH SCREEN)
    const introScreen = document.getElementById("intro-screen");
    const introContent = document.getElementById("intro-content");
    const introText = document.getElementById("intro-text");
    const body = document.body;

    // Tahap 1: Munculkan logo
    setTimeout(() => {
        introContent.classList.remove("opacity-0", "scale-50");
        introContent.classList.add("opacity-100", "scale-100");
    }, 500);

    // Tahap 2: Munculkan teks bawah
    setTimeout(() => {
        introText.classList.remove("opacity-0", "translate-y-4");
        introText.classList.add("opacity-100", "translate-y-0");
    }, 1000);

    // Tahap 3: Tarik layar intro ke atas dan buka scroll
    setTimeout(() => {
        introScreen.classList.add("intro-exit");
        body.classList.remove("no-scroll");
    }, 2500);


    // 2. LOGIKA NAVBAR (Berubah warna saat di-scroll)
    const navbar = document.getElementById("navbar");
    const navLogo = document.getElementById("nav-logo");
    const navLinks = document.querySelectorAll(".nav-link");
    const mobileMenuBtn = document.getElementById("mobile-menu-btn");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            // State saat di-scroll ke bawah (Background putih)
            navbar.classList.add("bg-white", "shadow-md", "py-3");
            navbar.classList.remove("bg-transparent", "py-5");
            
            navLogo.classList.replace("text-white", "text-gray-900");
            mobileMenuBtn.classList.replace("text-white", "text-gray-800");

            navLinks.forEach(link => {
                link.classList.replace("text-white", "text-gray-600");
            });
        } else {
            // State saat kembali ke paling atas (Transparan)
            navbar.classList.add("bg-transparent", "py-5");
            navbar.classList.remove("bg-white", "shadow-md", "py-3");
            
            navLogo.classList.replace("text-gray-900", "text-white");
            mobileMenuBtn.classList.replace("text-gray-800", "text-white");

            navLinks.forEach(link => {
                link.classList.replace("text-gray-600", "text-white");
            });
        }
    });


    // 3. LOGIKA MOBILE MENU (Hamburger)
    const mobileMenu = document.getElementById("mobile-menu");
    mobileMenuBtn.addEventListener("click", () => {
        if (mobileMenu.classList.contains("hidden")) {
            mobileMenu.classList.remove("hidden");
            mobileMenu.classList.add("flex");
        } else {
            mobileMenu.classList.add("hidden");
            mobileMenu.classList.remove("flex");
        }
    });

    // Sembunyikan menu mobile saat salah satu link diklik
    document.querySelectorAll('#mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add("hidden");
            mobileMenu.classList.remove("flex");
        });
    });


    // 4. LOGIKA ANIMASI SCROLL (Muncul dari bawah ke atas)
    const reveals = document.querySelectorAll(".reveal");

    const revealOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                // Animasi hanya jalan 1x, setelah itu tidak dipantau lagi
                observer.unobserve(entry.target); 
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    });

    reveals.forEach(reveal => {
        revealOnScroll.observe(reveal);
    });
});