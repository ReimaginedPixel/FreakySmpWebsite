document.addEventListener('DOMContentLoaded', () => {
    console.log('Freaky SMP Website loaded!');

    // GSAP logo falling animation
    const logo = document.getElementById('logo');
    if (logo) {
        gsap.from(logo, { y: -100, opacity: 0, duration: 1, ease: "bounce.out" });
        // Pop up on hover
        logo.addEventListener('mouseenter', () => {
            gsap.to(logo, { scale: 1.15, duration: 0.2, ease: "power1.out" });
        });
        logo.addEventListener('mouseleave', () => {
            gsap.to(logo, { scale: 1, duration: 0.2, ease: "power1.in" });
        });
    }
});
