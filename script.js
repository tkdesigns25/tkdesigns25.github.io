// Live Clock Functionality
function updateClock() {
    const now = new Date();
    const options = {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
        timeZoneName: 'short'
    };
    // Using a fixed timezone for the "Persona" or local
    // For this demo, we'll just use the browser's local time but format it nicely
    const timeString = now.toLocaleTimeString('en-US', options);
    const clockElement = document.getElementById('clock');
    if (clockElement) {
        clockElement.textContent = timeString;
    }
}

setInterval(updateClock, 1000);
updateClock(); // Initial call

// Theme Toggle Logic
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const html = document.documentElement;

// Check for saved preference or system preference
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    html.classList.add('dark');
    if (themeIcon) themeIcon.classList.replace('ph-moon', 'ph-sun');
} else {
    html.classList.remove('dark');
    if (themeIcon) themeIcon.classList.replace('ph-sun', 'ph-moon');
}

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        if (html.classList.contains('dark')) {
            html.classList.remove('dark');
            localStorage.theme = 'light';
            if (themeIcon) themeIcon.classList.replace('ph-sun', 'ph-moon');
        } else {
            html.classList.add('dark');
            localStorage.theme = 'dark';
            if (themeIcon) themeIcon.classList.replace('ph-moon', 'ph-sun');
        }
    });
}

// Console Easter Egg
console.log(
    "%c Crafted by TK.",
    "background: #121212; color: #fff; padding: 10px 20px; border-radius: 20px; font-family: 'Playfair Display', serif; font-size: 14px;"
);
