(() => {
    const header = document.getElementById('site-header');
    if (!header) return;

    const isToolPage = window.location.pathname.startsWith('/tools/');

   header.innerHTML = `
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <a href="/" aria-label="IndieUtility homepage" class="flex items-center space-x-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 rounded-lg">
                <img src="/icon.png" alt="" width="40" height="40" class="h-10 w-10 rounded-xl shadow-sm" aria-hidden="true">
                <span class="text-xl font-bold text-gray-900 tracking-tight">Indie<span class="text-indigo-600">Utility</span></span>
            </a>

            <nav class="flex items-center space-x-3 sm:space-x-6" aria-label="Primary navigation">
                <div class="relative inline-block text-left" id="nav-dropdown-wrapper">
                    <button type="button" id="nav-dropdown-toggle" aria-expanded="false" aria-controls="nav-dropdown-menu" class="inline-flex items-center justify-center font-semibold text-sm text-gray-700 hover:text-indigo-600 transition focus:outline-none py-2 px-1">
                        Utilities
                        <svg class="w-4 h-4 ml-1.5 mt-0.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </button>
                    <div id="nav-dropdown-menu" class="hidden absolute right-0 mt-3 w-80 max-w-[calc(100vw-2rem)] rounded-xl bg-white border border-gray-200 shadow-xl ring-1 ring-black ring-opacity-5 z-50">
                        <div class="p-3 border-b border-gray-100 bg-gray-50 rounded-t-xl">
                            <span class="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Choose a utility</span>
                        </div>
                        <div id="nav-dropdown-items" class="py-1 max-h-96 overflow-y-auto divide-y divide-gray-50"></div>
                    </div>
                </div>
                <a href="https://ko-fi.com/quikiki212" target="_blank" rel="noopener noreferrer" class="inline-flex items-center rounded-lg border border-indigo-200 bg-white px-2.5 py-2 text-xs sm:text-sm font-semibold text-indigo-600 hover:border-indigo-300 hover:bg-indigo-50 transition focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                    <span aria-hidden="true" class="mr-1">&hearts;</span> Ko-fi
                </a>
                ${isToolPage ? `
                    <a href="/" class="inline-flex items-center rounded-lg bg-indigo-600 px-3 py-2 text-xs sm:text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 transition focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                        <span aria-hidden="true" class="mr-1.5">&larr;</span>
                        <span class="hidden sm:inline">Back to homepage</span>
                        <span class="sm:hidden">Home</span>
                    </a>
                ` : `
                    <a href="#utilities" class="hidden md:inline text-sm font-semibold text-gray-500 hover:text-indigo-600 transition">Browse all</a>
                `}
            </nav>
        </div>
        ${isToolPage ? `
            <div class="border-t border-gray-100 bg-indigo-50 px-4 py-1.5 text-center text-xs font-medium text-gray-600">
                ☕ Enjoying this tool?
                <a href="https://ko-fi.com/quikiki212" target="_blank" rel="noopener noreferrer" class="font-semibold text-indigo-600 hover:text-indigo-800 transition">Support IndieUtility on Ko-fi</a>
            </div>
        ` : ''}
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