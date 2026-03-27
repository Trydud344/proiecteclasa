import { closeAllCards } from './cards.js';
import { initCircularText, initCursorGlow } from './effects.js';
import { SCIENTISTS_CARDS, PHYSICS_CARDS } from './data.js';
import { renderCards } from './render.js';

// ── Boot ───────────────────────────────────────────────────────────────────

renderCards('scientistsGrid', SCIENTISTS_CARDS);
renderCards('physicsGrid', PHYSICS_CARDS);

initCircularText('circular-text', 'MADE BY IVASCU ♥ MADE BY IVASCU ♥ ');
initCursorGlow();

document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeAllCards();
});
