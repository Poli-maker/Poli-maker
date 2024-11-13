window.onload = () => {
    // Delay for background animations to load
    setTimeout(() => {
        document.body.classList.remove("not-loaded");
    }, 1000);

    // Delay for the glowing text to appear and animate
    const glowText = document.querySelector('.glow-text');
    if (glowText) {
        setTimeout(() => {
            glowText.style.opacity = "1";
        }, 2000); // Shows the text after 2 seconds
    }
};
