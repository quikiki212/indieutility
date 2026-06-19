(() => {
    const header = document.getElementById('site-header');
    if (!header) return;

    const isToolPage = window.location.pathname.startsWith('/tools/');

    header.innerHTML = `
        <!-- your existing header HTML -->
    `;

    const tools = [
        {
            name: 'YouTube Transcript Cleaner',
            href: '/tools/youtube-transcript-cleaner/',
            description: 'Clean timestamps and overlapping rolling captions.'
        },
        {
            name: 'JSON Beautifier & Validator',
            href: '/tools/json-beautifier-validator/',
            description: 'Format, validate, minify, and inspect JSON safely.'
        },
        {
            name: 'SQL Formatter',
            href: '/tools/sql-formatter/',
            description: 'Beautify, minify, and customize SQL queries.'
        },
        {
            name: 'Regex Editor & Tester',
            href: '/tools/regex-editor/',
            description: 'Test, debug, and visualize regex patterns.'
        },
        {
            name: 'URL Encoder & Decoder',
            href: '/tools/url-encoder-decoder/',
            description: 'Encode and decode URLs.'
        },
        {
            name: 'SVG Pattern Generator',
            href: '/tools/svg-pattern-generator/',
            description: 'Create seamless vector patterns.'
        },
        {
            name: 'Glassmorphism UI Engine',
            href: '/tools/glassmorphism-ui-engine/',
            description: 'Generate glassmorphism UI styles.'
        },
        {
            name: 'Image Format Converter',
            href: '/tools/image-format-converter/',
            description: 'Convert between image formats.'
        },
        {
            name: 'Color Palette Generator',
            href: '/tools/color-palette-generator/',
            description: 'Generate harmonious colour palettes.'
        },
        {
            name: 'CSS Animation Generator',
            href: '/tools/css-animation-generator/',
            description: 'Generate CSS animations.'
        },
        {
            name: 'Texture Seam Remover',
            href: '/tools/texture-seam-remover/',
            description: 'Fix texture seams and preview tiled results.'
        }
    ];

    const toggle = document.getElementById('nav-dropdown-toggle');
    const menu = document.getElementById('nav-dropdown-menu');
    const items = document.getElementById('nav-dropdown-items');
    const wrapper = document.getElementById('nav-dropdown-wrapper');

    if (!toggle || !menu || !items || !wrapper) return;

    items.innerHTML = tools.map(tool => `
        <a href="${tool.href}" class="block p-3 hover:bg-gray-50 transition">
            <span class="block text-sm font-bold text-gray-900">
                ${tool.name}
            </span>
            <span class="block text-[11px] text-gray-500 mt-0.5">
                ${tool.description}
            </span>
        </a>
    `).join('');

    const closeMenu = () => {
        menu.classList.add('hidden');
        toggle.setAttribute('aria-expanded', 'false');
    };

    toggle.addEventListener('click', (e) => {
        e.stopPropagation();
        const willOpen = menu.classList.contains('hidden');
        menu.classList.toggle('hidden');
        toggle.setAttribute('aria-expanded', String(willOpen));
    });

    document.addEventListener('click', (e) => {
        if (!wrapper.contains(e.target)) closeMenu();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeMenu();
    });
})();