# Copilot instructions for IndieUtility

This is a static GitHub Pages website.

## Main rule

Use the smallest possible context. Do not scan the whole repository unless explicitly asked.

## Editing rules

- Only edit files the user names.
- If the user asks for homepage changes, only edit `index.html`.
- If the user asks for navigation/header changes, only edit `assets/site-header.js`.
- If the user asks for a specific tool, only edit that tool's folder under `/tools/`.
- Do not inspect unrelated tools unless required.
- Do not rewrite entire files for small changes.
- Prefer minimal diffs over large rewrites.
- Do not run broad searches unless the user asks.
- Do not update `sitemap.xml` unless a new page is created or removed.
- Do not change SEO metadata unless specifically requested.
- Do not run tests, builds, formatters, or linters unless asked.

## Response style

Before editing, briefly state:
1. Which file or files will be changed.
2. Why those files are needed.

If more files appear necessary, ask first.

## Project structure

- `index.html` is the homepage.
- `assets/site-header.js` controls the shared header/navigation.
- `tools/<tool-name>/index.html` contains individual utility pages.
- `sitemap.xml` lists public pages.
- `robots.txt` controls indexing.

## Credit-saving behavior

Avoid agentic exploration. Prefer targeted edits using the current open file and named files only.