// ── Circular footer text ───────────────────────────────────────────────────

export function initCircularText(containerId, text) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const chars = text.split('');
    const degree = 360 / chars.length;

    chars.forEach((char, i) => {
        const span = document.createElement('span');
        span.innerHTML = char === ' ' ? '&nbsp;' : char;
        span.className = 'absolute top-0 left-0 w-full h-full flex justify-center origin-center';
        span.style.transform = `rotate(${i * degree}deg)`;
        container.appendChild(span);
    });
}

// ── Cursor glow (desktop only) ─────────────────────────────────────────────

export function initCursorGlow() {
    if (!window.matchMedia('(pointer: fine)').matches) return;

    document.body.addEventListener('pointermove', ({ x, y }) => {
        document.documentElement.style.setProperty('--x', x);
        document.documentElement.style.setProperty('--y', y);
    });
}
