document.addEventListener('DOMContentLoaded', function () {
    const target = document.getElementById('site-footer');
    if (!target) return;

    target.innerHTML = `
    <footer class="bg-gray-900 text-gray-400 border-t border-gray-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 text-center lg:text-left">
                <div class="flex flex-wrap items-center justify-center lg:justify-start gap-x-3 gap-y-2 min-w-0">
                    <span class="text-lg font-bold text-white tracking-tight">Indie<span class="text-indigo-500">Utility</span></span>
                    <span class="hidden sm:inline-block h-5 border-l border-gray-700"></span>
                    <span class="text-sm text-gray-500">Tool collection</span>
                </div>
                <nav class="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
                    <a href="#" class="hover:text-white transition">Back to Top</a>
                    <a href="/about.html" class="hover:text-white transition">About</a>
                    <a href="/contact.html" class="hover:text-white transition">Contact</a>
                    <a href="/privacy-policy.html" class="hover:text-white transition">Privacy</a>
                </nav>
                <p class="text-xs text-gray-500 max-w-sm mx-auto lg:mx-0 lg:text-right">
                    &copy; 2026 IndieUtility. Free online utilities.
                </p>
            </div>

            <div class="w-full border-t border-gray-800 pt-8 mt-8 grid gap-6 sm:grid-cols-3 text-sm">
                <div>
                    <h3 class="text-white font-bold mb-3">Developer Tools</h3>
                    <ul class="space-y-2"><li><a href="/tools/json-beautifier-validator/" class="hover:text-white">JSON Beautifier & Validator</a></li><li><a href="/tools/sql-formatter/" class="hover:text-white">SQL Formatter</a></li><li><a href="/tools/regex-editor/" class="hover:text-white">Regex Editor & Tester</a></li><li><a href="/tools/url-encoder-decoder/" class="hover:text-white">URL Encoder & Decoder</a></li></ul>
                </div>
                <div>
                    <h3 class="text-white font-bold mb-3">Design Tools</h3>
                    <ul class="space-y-2"><li><a href="/tools/svg-pattern-generator/" class="hover:text-white">SVG Pattern Generator</a></li><li><a href="/tools/glassmorphism-ui-engine/" class="hover:text-white">Glassmorphism UI Engine</a></li><li><a href="/tools/color-palette-generator/" class="hover:text-white">Color Palette Generator</a></li></ul>
                </div>
                <div>
                    <h3 class="text-white font-bold mb-3">Creator Tools</h3>
                    <ul class="space-y-2"><li><a href="/tools/youtube-transcript-cleaner/" class="hover:text-white">YouTube Transcript Cleaner</a></li><li><a href="/tools/image-format-converter/" class="hover:text-white">Image Format Converter</a></li><li><a href="/tools/decision-wheel-spinner/" class="hover:text-white">Decision Wheel Spinner</a></li><li><a href="/about.html" class="hover:text-white">About this project</a></li><li><a href="/privacy-policy.html" class="hover:text-white">Privacy Policy</a></li></ul>
                </div>
            </div>
        </div>
    </footer>
    `;

});
