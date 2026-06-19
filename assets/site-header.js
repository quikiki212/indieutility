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
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initSiteHeader);
    } else {
        initSiteHeader();
    }
})();