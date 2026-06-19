(() => {
    const header = document.getElementById('site-header');
    if (!header) return;

    const isToolPage = window.location.pathname.startsWith('/tools/');
    const isTranscriptPage = window.location.pathname.includes('/youtube-transcript-cleaner');
    const localFaqHref = isToolPage ? '#faq' : '/#faq';

    header.innerHTML = `
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <a href="/" aria-label="IndieUtility homepage" class="flex items-center space-x-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 rounded-lg">
                <span class="bg-indigo-600 text-white p-2 rounded-lg flex items-center justify-center shadow-sm" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                </span>
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
                <a href="${localFaqHref}" class="hidden sm:inline text-sm font-semibold text-gray-500 hover:text-indigo-600 transition">FAQs</a>
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

    if (!isTranscriptPage) return;

    const tools = [
        {
            name: 'YouTube Transcript Cleaner',
            description: 'Clean timestamps and overlapping rolling captions.',
            href: '/tools/youtube-transcript-cleaner/'
        },
        {
            name: 'SVG Pattern Generator',
            description: 'Create seamless, customizable vector patterns.',
            href: '/tools/svg-pattern-generator/'
        }
    ];

    const toggle = document.getElementById('nav-dropdown-toggle');
    const menu = document.getElementById('nav-dropdown-menu');
    const items = document.getElementById('nav-dropdown-items');
    const wrapper = document.getElementById('nav-dropdown-wrapper');

    items.innerHTML = tools.map((tool) => `
        <a href="${tool.href}" class="block p-3 hover:bg-gray-50 transition">
            <span class="block text-sm font-bold text-gray-900">${tool.name}</span>
            <span class="block text-[11px] text-gray-500 mt-0.5">${tool.description}</span>
        </a>
    `).join('');

    const closeMenu = () => {
        menu.classList.add('hidden');
        toggle.setAttribute('aria-expanded', 'false');
    };

    toggle.addEventListener('click', (event) => {
        event.stopPropagation();
        const willOpen = menu.classList.contains('hidden');
        menu.classList.toggle('hidden');
        toggle.setAttribute('aria-expanded', String(willOpen));
    });
    document.addEventListener('click', (event) => {
        if (!wrapper.contains(event.target)) closeMenu();
    });
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') closeMenu();
    });
})();
