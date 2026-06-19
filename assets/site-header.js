(() => {
    function initSiteHeader() {
        let header = document.getElementById('site-header');

        if (!header) {
            header = document.createElement('header');
            header.id = 'site-header';
            header.className = 'bg-white border-b border-gray-200 sticky top-0 z-50';
            document.body.prepend(header);
        }

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

                        <div id="nav-dropdown-menu" class="hidden absolute right-0 mt-3 w-80 max-w-full rounded-xl bg-white border border-gray-200 shadow-xl ring-1 ring-black ring-opacity-5 z-50">
                            <div class="p-3 border-b border-gray-100 bg-gray-50 rounded-t-xl">
                                <span class="text-xs uppercase font-bold text-gray-400 tracking-wider">Choose a utility</span>
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
            ['YouTube Transcript Cleaner', '/tools/youtube-transcript-cleaner/', 'Clean timestamps and overlapping rolling captions.'],
            ['JSON Beautifier & Validator', '/tools/json-beautifier-validator/', 'Format, validate, minify, and inspect JSON safely.'],
            ['SQL Formatter', '/tools/sql-formatter/', 'Beautify, minify, and customize SQL queries.'],
            ['Regex Editor & Tester', '/tools/regex-editor/', 'Test, debug, and visualize regex patterns.'],
            ['URL Encoder & Decoder', '/tools/url-encoder-decoder/', 'Encode and decode URLs.'],
            ['SVG Pattern Generator', '/tools/svg-pattern-generator/', 'Create seamless vector patterns.'],
            ['Glassmorphism UI Engine', '/tools/glassmorphism-ui-engine/', 'Generate glassmorphism UI styles.'],
            ['Image Format Converter', '/tools/image-format-converter/', 'Convert between image formats.'],
            ['Color Palette Generator', '/tools/color-palette-generator/', 'Generate harmonious colour palettes.'],
            ['CSS Animation Generator', '/tools/css-animation-generator/', 'Generate CSS animations.'],
            ['Texture Seam Remover', '/tools/texture-seam-remover/', 'Fix texture seams and preview tiled results.']
        ];

        const toggle = document.getElementById('nav-dropdown-toggle');
        const menu = document.getElementById('nav-dropdown-menu');
        const items = document.getElementById('nav-dropdown-items');
        const wrapper = document.getElementById('nav-dropdown-wrapper');

        items.innerHTML = tools.map(([name, href, description]) => `
            <a href="${href}" class="block p-3 hover:bg-gray-50 transition">
                <span class="block text-sm font-bold text-gray-900">${name}</span>
                <span class="block text-xs text-gray-500 mt-0.5">${description}</span>
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
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initSiteHeader);
    } else {
        initSiteHeader();
    }
})();