// ── Card expand / collapse animations ──────────────────────────────────────

const overlay = document.getElementById('overlay');
let isAnimating = false;
let savedScrollY = 0;

export function expandCard(card) {
    if (isAnimating || card.classList.contains('active')) return;
    isAnimating = true;

    const isMobile = window.innerWidth <= 768;

    savedScrollY = window.scrollY;

    // Lock placeholder-ui width before measuring
    const ui = card.querySelector('.placeholder-ui');
    if (ui) ui.style.width = ui.getBoundingClientRect().width + 'px';

    const rect = card.getBoundingClientRect();

    // Insert ghost spacer so layout doesn't collapse
    const placeholder = document.createElement('div');
    placeholder.className = 'placeholder-ghost';
    placeholder.style.cssText = `width:${rect.width}px; height:${rect.height}px; flex-shrink:0;`;
    card.parentNode.insertBefore(placeholder, card);
    card._placeholder = placeholder;

    // FLIP – first frame (no transition)
    card.style.cssText = `
        transition: none;
        position: fixed;
        margin: 0;
        z-index: 50;
        top: ${rect.top}px;
        left: ${rect.left}px;
        width: ${rect.width}px;
        height: ${rect.height}px;
        transform: ${isMobile ? 'none' : 'translate(0, 0)'};
        border-radius: 32px;
    `;

    card.getBoundingClientRect(); // force reflow

    // FLIP – play to final state
    card.style.transition = '';

    requestAnimationFrame(() => {
        card.classList.add('active');

        if (isMobile) {
            Object.assign(card.style, {
                top: '0px', left: '0px',
                width: '100vw', height: '100dvh',
                borderRadius: '0px', transform: 'none',
            });
            Object.assign(document.body.style, {
                position: 'fixed',
                top: `-${savedScrollY}px`,
                left: '0', right: '0',
                overflow: 'hidden',
            });
        } else {
            Object.assign(card.style, {
                top: '50%', left: '50%',
                width: '90vw', height: '85vh',
                transform: 'translate(-50%, -50%)',
            });
            document.body.style.overflow = 'hidden';
        }

        overlay.classList.add('active');
    });

    setTimeout(() => { isAnimating = false; }, 600);
}

export function closeAllCards() {
    if (isAnimating) return;
    const activeCards = document.querySelectorAll('.project-card.active');
    if (!activeCards.length) return;

    isAnimating = true;
    const isMobile = window.innerWidth <= 768;

    // Restore scroll before animation so positions compute correctly
    if (isMobile) {
        Object.assign(document.body.style, {
            position: '', top: '', left: '', right: '', overflow: '',
        });
        window.scrollTo(0, savedScrollY);
    } else {
        document.body.style.overflow = 'auto';
    }

    overlay.classList.remove('active');

    activeCards.forEach(card => {
        card.classList.remove('active');

        const placeholder = card._placeholder;
        if (!placeholder) return;

        card.style.transition = 'none';

        const currentRect = card.getBoundingClientRect();
        const scrollY = window.scrollY;
        const scrollX = window.scrollX;

        Object.assign(card.style, {
            position: 'absolute',
            transform: 'none',
            top: `${currentRect.top + scrollY}px`,
            left: `${currentRect.left + scrollX}px`,
            width: `${currentRect.width}px`,
            height: `${currentRect.height}px`,
        });

        card.getBoundingClientRect(); // reflow

        card.style.transition = '';

        const targetRect = placeholder.getBoundingClientRect();
        Object.assign(card.style, {
            top: `${targetRect.top + scrollY}px`,
            left: `${targetRect.left + scrollX}px`,
            width: `${targetRect.width}px`,
            height: `${targetRect.height}px`,
        });

        if (isMobile) card.style.borderRadius = '32px';

        setTimeout(() => {
            if (card.classList.contains('active')) return;

            ['position','top','left','width','height','margin','transform','zIndex','borderRadius']
                .forEach(p => card.style[p] = '');

            const ui = card.querySelector('.placeholder-ui');
            if (ui) ui.style.width = '';

            placeholder.parentNode?.removeChild(placeholder);
            card._placeholder = null;
        }, 600);
    });

    setTimeout(() => { isAnimating = false; }, 600);
}
