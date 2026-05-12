const defaultTheme = {
    hue: 216,
    sat: 28,
    light: 6,
    accent: 205,
};

const themes = [
    { hue: 216, sat: 28, light: 6, accent: 205 },
    { hue: 220, sat: 30, light: 6, accent: 214 },
    { hue: 212, sat: 26, light: 6, accent: 196 },
    { hue: 225, sat: 28, light: 6, accent: 232 },
    { hue: 204, sat: 24, light: 6, accent: 188 },
];

let themeIndex = 0;

function applyTheme(theme) {
    const root = document.documentElement;
    root.style.setProperty('--bg-hue', theme.hue);
    root.style.setProperty('--bg-sat', `${theme.sat}%`);
    root.style.setProperty('--bg-light', `${theme.light}%`);
    root.style.setProperty('--bg-accent', theme.accent);
}

function cycleTheme() {
    themeIndex = (themeIndex + 1) % themes.length;
    applyTheme(themes[themeIndex]);
}

function resetTheme() {
    themeIndex = 0;
    applyTheme(defaultTheme);
}

document.addEventListener('DOMContentLoaded', () => {
    applyTheme(themes[themeIndex]);

    const button = document.getElementById('themeButton');
    if (button) {
        button.addEventListener('click', cycleTheme);
    }

    const resetButton = document.getElementById('resetButton');
    if (resetButton) {
        resetButton.addEventListener('click', resetTheme);
    }

    const revealItems = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.style.animationPlayState = 'running';
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });

        revealItems.forEach((item) => {
            item.style.animationPlayState = 'paused';
            observer.observe(item);
        });
    }
});
