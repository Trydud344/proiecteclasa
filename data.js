// ── Project data ───────────────────────────────────────────────────────────
// Each entry drives one card. Add / remove / reorder here; HTML stays clean.

export const SCIENTISTS_CARDS = [
    {
        icon: `<circle cx="12" cy="12" r="3"></circle>
               <path d="M12 21c-4.97 0-9-1.343-9-3s4.03-3 9-3 9 1.343 9 3-4.03 3-9 3z"></path>
               <path d="M12 9c-4.97 0-9-1.343-9-3s4.03-3 9-3 9 1.343 9 3-4.03 3-9 3z"></path>
               <path d="M3 12c0-1.657 4.03-3 9-3s9 1.343 9 3-4.03 3-9 3-9-1.343-9-3z"></path>`,
        title: 'Oamenii de știință care au schimbat lumea',
        subtitle: 'Echipa Băieților',
        description: 'Acest proiect explorează figurile emblematice ale fizicii și modul în care descoperirile lor au redefinit înțelegerea noastră asupra timpului și spațiului.',
        quote: '"Imagination is more important than knowledge."',
        quoteAuthor: null,
        iframeUrl: 'https://1drv.ms/p/c/ef78d9a2948c4fe3/IQTuoLGfRV6aT4uy2AXFL3f0ARq_OC9qV-5__inR-fqBuJU?wdAr=1.7777777777777777',
        aspectClass: 'ppt-aspect-mobile',
    },
    {
        icon: `<path d="M6 18h8"></path><path d="M3 22h18"></path>
               <path d="M14 22a7 7 0 1 0 0-14h-1"></path>
               <path d="M9 14h2"></path>
               <path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"></path>
               <path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"></path>`,
        title: 'Femeile de știință care au schimbat lumea',
        subtitle: 'Echipa Fetelor',
        description: 'Acest proiect celebrează contribuțiile esențiale ale femeilor pionier în știință, de la descoperirea radioactivității la fundamentarea structurii ADN-ului.',
        quote: '"Nimic în viață nu este de temut, trebuie doar înțeles."',
        quoteAuthor: 'Marie Curie',
        iframeUrl: 'https://1drv.ms/p/c/ef78d9a2948c4fe3/IQRAyQCMnA6zRICvXBnJYBplAa7AO9WVV-7C6wKU1KlMdyw?wdAr=1.7777777777777777',
        aspectClass: 'ppt-aspect-mobile',
    },
];

export const PHYSICS_CARDS = [
    {
        icon: `<circle cx="12" cy="12" r="2"/>
               <path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"/>`,
        title: '1) Radio',
        subtitle: 'Unde & Aparat',
        comingSoon: true,
    },
    {
        icon: `<rect x="2" y="7" width="20" height="15" rx="2" ry="2"/>
               <polyline points="17 2 12 7 7 2"/>`,
        title: '2) TV',
        subtitle: 'Unde & Aparat',
        description: 'Transmisia semnalului TV, unde electromagnetice și procesul de funcționare.',
        quote: '"Televiziunea va aduce întreaga lume în casele oamenilor obișnuiți."',
        quoteAuthor: 'David Sarnoff',
        iframeUrl: 'https://1drv.ms/p/c/ef78d9a2948c4fe3/IQQgD8O2-QxFS6xyf4SSBN6JARdjOOqvhJnix2FApO4W280?wdAr=1.7777777777777777',
        aspectClass: 'ppt-aspect-mobile',
    },
    {
        icon: `<circle cx="12" cy="12" r="10"/>
               <path d="M12 2v20"/><path d="M2 12h20"/>`,
        title: '3) Detectoare de metale',
        subtitle: 'Infraroșu & Reguli',
        description: 'Principiul de funcționare bazat pe inducție electromagnetică, reguli de utilizare și aplicații practice ale detectoarelor de metale.',
        quote: '"Nimic nu este prea minunat pentru a fi adevărat, dacă este în concordanță cu legile naturii."',
        quoteAuthor: 'Michael Faraday',
        iframeUrl: 'https://1drv.ms/p/c/ef78d9a2948c4fe3/IQR_xTPL5R9DQ5WZzZAMwNr3ATBBhnBsZgzITFiuyZd6sQY?wdAr=1.5',
        aspectClass: 'ppt-aspect-mobile-4-3',
    },
    {
        icon: `<rect x="2" y="6" width="20" height="12" rx="2"/>
               <path d="M18 10v4"/><path d="M2 10h12"/><path d="M2 14h12"/>`,
        title: '4) Cuptorul cu microunde',
        subtitle: 'Microunde & Aplicații',
        description: 'Principiul fizic al microundelor, funcționarea cuptorului și alte aplicații ale acestor unde electromagnetice.',
        quote: '"Invenția este doar un accident care a întâlnit o minte pregătită."',
        quoteAuthor: 'Albert Szent-Györgyi',
        iframeUrl: 'https://1drv.ms/p/c/ef78d9a2948c4fe3/IQR-nQz6qI06RYDtUlXJkzHzASzUjBIsPVqOCRvMV5eOfEM?wdAr=1.7777777777777777',
        aspectClass: 'ppt-aspect-mobile',
    },
    {
        icon: `<rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
               <line x1="12" y1="18" x2="12.01" y2="18"/>`,
        title: '5) Telefonul',
        subtitle: 'Comunicații mobile',
        description: 'Fizica din spatele comunicațiilor mobile, rețelele celulare și modul în care vocea și datele sunt transmise prin unde electromagnetice.',
        quote: '"Nu mă îndoiesc că în viitor firele telefonice vor uni fiecare casă și birou."',
        quoteAuthor: 'Alexander Graham Bell (1878)',
        iframeUrl: 'https://1drv.ms/p/c/ef78d9a2948c4fe3/IQSAV8VjmSXCRoXw9-xQJNtxAe2qnvqDbw7qXlE_bpknGuc?wdAr=1.7777777777777777',
        aspectClass: 'ppt-aspect-mobile',
    },
    {
        icon: `<path d="M4 10a10 10 0 0 1 16 0"/>
               <path d="M12 10v10"/><path d="M8 20h8"/>
               <circle cx="12" cy="10" r="2"/>`,
        title: '6) Radio locație',
        subtitle: '& Radio astronomie',
        comingSoon: true,
    },
    {
        icon: `<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>`,
        title: '7) Măsuri de protecție',
        subtitle: 'A persoanelor și a mediului',
        comingSoon: true,
    },
];
