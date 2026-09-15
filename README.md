# Shadow's Archive

A cinematic, portable birthday archive for Shadow. This is a native HTML, CSS, and JavaScript site with no build step, framework, backend, external analytics, or third-party runtime dependency.

## Quick Start

Open `index.html` directly in a browser, or serve the project folder with any static web server:

```text
Shadow/
	index.html
	style.css
	script.js
	assets/
```

Serving the folder locally is recommended when testing audio and video:

```text
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Archive Flow

The experience progresses through six chapters:

1. `THE SIGNAL` - identity confirmation and archive entry
2. `THE REVEAL` - Shadow's birthday record and the Denia artwork
3. `THE CELEBRATION` - Denia's selectable voice message and subtitles
4. `SHADOW'S ARCHIVE` - personal archive records
5. `THE OCEAN INCIDENT` - the interactive ocean intervention sequence
6. `ONE WITH THE OCEAN` - contribution cards, birthday messages, well-wishers, and the finale

Progress is stored in browser storage so visitors can resume their session. The site does not send progress or visitor information anywhere.

## Access Passes

The security screen accepts these client-side pass values:

| Pass | Purpose |
| --- | --- |
| `VOID` | Standard archive access; respects the release lock. |
| `BAKA` | Offers the early-access prompt before release. |
| `KURU` | Opens local developer mode with chapter previews, progression bypass, reset, and lock-screen preview controls. |

The release lock is set to `2026-09-17T17:00:00Z`, which is 18 September 2026 at midnight in Vietnam (UTC+7). It is an experience lock only, not a security boundary.

## Media Assets

Keep paths and filenames in sync with the references in `index.html` and `script.js`.

| Location | Used for |
| --- | --- |
| `assets/audio/bgmusic.mp3` | Background music |
| `assets/audio/denia/birthday-jp.mp3` | Denia Japanese voice message |
| `assets/audio/denia/birthday-en.mp3` | Denia English voice message |
| `assets/images/denia/` | Denia portrait and full-body artwork |
| `assets/images/contributions/` | Birthday cards and contribution artwork |
| `assets/images/ocean/` | Ocean incident transmission imagery |
| `assets/images/well-wishers/` | Contributor PFPs, including GIFs |
| `assets/videos/shadow-birthday-wish.mp4` | Chapter VI video contribution |
| `assets/videos/video-bg.mp4` | Well-Wishers background video |

Missing contribution artwork falls back to the existing archive placeholder treatment. Missing PFPs fall back to an initial instead of breaking the page.

## Maintenance

- Edit chapter structure, labels, and approved static text in `index.html`.
- Edit visual styling and responsive behavior in `style.css`.
- Edit chapter state, audio, subtitles, records, contributions, and well-wisher data in `script.js`.
- `archiveRecords`, `contributions`, and `wellWishers` are defined near the top of `script.js`.
- Do not duplicate `renderContributions()` when editing that file; the later definition is the active one and includes the video contribution and shuffled messages.
- Preserve the six chapter IDs (`chapter-0` through `chapter-5`) because progression and developer preview controls depend on them.

## Browser Storage

The archive uses:

- `sessionStorage` for authority and BAKA early-access state.
- `localStorage` for highest chapter, saved chapter, and ocean completion.

Use `KURU` and the `RESET PROGRESSION` developer control to clear progression during testing. Browser storage can also be cleared manually for a completely fresh run.

## Design and Performance Notes

The visual system is intentionally lightweight: CSS gradients, transforms, opacity, native media, and a small particle field. Touch devices remove cursor-specific effects, and `prefers-reduced-motion: reduce` disables atmospheric animation, parallax-style movement, and other nonessential motion.

The project is a personal static archive. Do not add external tracking, cookies, analytics, or persistent visitor profiles without changing that privacy boundary deliberately.
