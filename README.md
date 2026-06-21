# CODE EXECUTION

> Latest AI models, applications, and trustworthy research — curated and linked to primary sources.

## About

**CODE EXECUTION** is a single-page website tracking the latest advancements in artificial intelligence. It covers new AI models, notable applications, and trustworthy articles from reputable sources — all linked to primary origins (official company blogs, MIT Technology Review, arXiv, Nature).

The aesthetic is inspired by the computer terminal lettering in Ridley Scott's *Alien* (1979): phosphor-green on black, scanline overlays, monospace typography, boot sequence animation — with a modern, responsive feel.

## Features

- **Boot sequence** — animated terminal-style startup on page load
- **Phosphor-green CRT aesthetic** — scanline overlay, glow effects, amber accents
- **Ambient sound** — non-intrusive Web Audio sounds (mechanical keyboard clicks, terminal beeps, low hums). Toggle with the SOUND button in the header. Off by default, respects browser autoplay policies.
- **Cursor stop** — the header cursor stops blinking ~3 seconds after boot completes
- **Model cards** — latest AI model releases with splash images (SVG, no external dependencies)
- **Application cards** — notable AI tools and applications
- **Article list** — trustworthy articles from MIT Tech Review, Anthropic, Google DeepMind, arXiv
- **Verified sources** — every link points to a primary, reputable source
- **Daily auto-update** — GitHub Action updates the `lastUpdated` date daily at 06:00 UTC
- **Fully responsive** — works on mobile and desktop
- **Self-contained** — single HTML file + data.js, no external CSS/fonts/images

## Architecture

```
index.html    — main page (layout, styles, sound engine, render logic)
data.js       — content data (models, applications, articles, sources)
.github/
  workflows/
    daily-update.yml — GitHub Action: updates lastUpdated date daily
```

To update content: edit `data.js` and push. The GitHub Action automatically updates the date stamp daily.

## Sources

All content links to primary, trustworthy sources:

- [Anthropic News](https://www.anthropic.com/news)
- [Google DeepMind Blog](https://blog.google/technology/google-deepmind/)
- [MIT Technology Review — AI](https://www.technologyreview.com/topic/artificial-intelligence/)
- [arXiv — cs.AI](https://arxiv.org/list/cs.AI/recent)
- [DeepSeek](https://www.deepseek.com)
- [OpenAI News](https://openai.com/news/)

## Tech

- Pure HTML/CSS/JS — no frameworks, no build step, no dependencies
- Web Audio API for sound (zero audio files — all synthesized in-browser)
- Inline SVG splash images (zero external image requests)
- CSS custom properties for theming
- `prefers-reduced-motion` support
- GitHub Actions for daily auto-updates

## Deploy

Hosted on GitHub Pages:

```
https://arecibo-sys.github.io/code-execution/
```

## License

MIT — see [LICENSE](LICENSE).

## Repository

[github.com/arecibo-sys/code-execution](https://github.com/arecibo-sys/code-execution)