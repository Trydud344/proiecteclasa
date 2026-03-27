// ── Card renderer ──────────────────────────────────────────────────────────
// Turns a data object into a full project-card element.

import { expandCard, closeAllCards } from './cards.js';

const CLOSE_ICON = `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
         stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>`;

const SWIPE_HINT = `
    <div class="flex md:hidden items-center justify-center gap-2 mt-3 text-zinc-500
                text-[10px] uppercase tracking-widest font-semibold animate-pulse flex-shrink-0">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
             stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M17 8l4 4-4 4"/><path d="M7 8l-4 4 4 4"/>
            <line x1="3" y1="12" x2="21" y2="12"/>
        </svg>
        <span>Glisează orizontal pentru slide-uri</span>
    </div>`;

function buildPlaceholder({ icon, title, subtitle }) {
    return `
        <div class="placeholder-ui text-center">
            <div class="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center
                        mx-auto mb-4 group-hover:scale-110 transition-transform flex-shrink-0">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white"
                     stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                    ${icon}
                </svg>
            </div>
            <h3 class="text-lg md:text-xl font-medium mt-2 md:mt-0">${title}</h3>
            <p class="text-zinc-500 text-sm md:text-base mt-2">${subtitle}</p>
        </div>`;
}

function buildComingSoon() {
    return `
        <div class="content-hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                    w-[100vw] h-[100dvh] md:w-[90vw] md:h-[85vh]
                    flex-col items-center justify-center p-8 md:p-16 overflow-hidden text-center">
            <h2 class="text-5xl md:text-7xl font-light text-white tracking-tighter mb-4">
                Coming <span class="font-semibold">soon</span>...
            </h2>
            <p class="text-zinc-500 text-lg md:text-xl max-w-2xl leading-relaxed">
                Informațiile pentru acest capitol sunt în lucru.
            </p>
        </div>`;
}

function buildExpanded({ icon, title, description, quote, quoteAuthor, iframeUrl, aspectClass }) {
    const authorLine = quoteAuthor
        ? `<br><span class="text-[10px] md:text-xs text-zinc-500 mt-1 inline-block">- ${quoteAuthor}</span>`
        : '';

    return `
        <div class="content-hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                    w-[100vw] h-[100dvh] md:w-[90vw] md:h-[85vh]
                    flex-col md:flex-row gap-4 md:gap-8 overflow-hidden p-6 pt-16 md:p-10 text-left">

            <!-- Sidebar -->
            <div class="md:w-1/3 flex flex-col justify-start md:justify-center
                        w-full flex-shrink-0 md:flex-shrink items-start">
                <div class="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center mb-3 flex-shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                         stroke="#a0a0a0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        ${icon}
                    </svg>
                </div>
                <h2 class="text-xl md:text-3xl font-semibold mb-2 md:mb-4 leading-tight">${title}</h2>
                <p class="text-zinc-400 text-xs md:text-base mb-3 md:mb-6 leading-relaxed">
                    ${description}
                </p>
                <div class="p-3 md:p-4 bg-white/5 rounded-xl md:rounded-2xl border border-white/10">
                    <p class="text-xs md:text-sm text-zinc-400 italic">
                        ${quote}${authorLine}
                    </p>
                </div>
            </div>

            <!-- Iframe -->
            <div class="w-full md:w-2/3 flex flex-col md:block iframe-outer-mobile
                        flex-1 min-h-0 mt-2 md:mt-0 md:flex-none md:flex-shrink-0 md:h-full">
                <div class="ppt-frame w-full ${aspectClass} flex-1 min-h-0 md:!h-full md:flex-none">
                    <iframe src="${iframeUrl}" class="w-full h-full"
                            frameborder="0" title="PowerPoint Viewer"></iframe>
                </div>
                ${SWIPE_HINT}
            </div>
        </div>`;
}

export function createCard(data) {
    const card = document.createElement('div');
    card.className = 'glass-card project-card rounded-[32px] p-4 md:p-8 flex flex-col justify-center items-center group overflow-hidden';
    card.setAttribute('onclick', 'window._expandCard(this)');

    card.innerHTML = `
        <button class="close-btn" onclick="event.stopPropagation(); window._closeAllCards()">
            ${CLOSE_ICON}
        </button>
        ${buildPlaceholder(data)}
        ${data.comingSoon ? buildComingSoon() : buildExpanded(data)}
    `;

    return card;
}

export function renderCards(containerId, cardDataArray) {
    const container = document.getElementById(containerId);
    if (!container) return;
    cardDataArray.forEach(data => container.appendChild(createCard(data)));
}

// Expose to global scope for inline onclick attributes
window._expandCard   = expandCard;
window._closeAllCards = closeAllCards;
