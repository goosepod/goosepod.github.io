# Naviamp website verification

## Screenshot provenance

Captured on October 27, 2026 from the installed macOS Naviamp 2.9.0 application connected to
https://demo.navidrome.org using the public demo account. No library content was fabricated or
composited into the app. Narrow captures are resized desktop windows, not claims of mobile-device
captures. JPEG files retain the original capture bytes; image dimensions are recorded in HTML.

The five player captures use **Vision Fiberoptics ft Sean Haefeli**, by **The Polish Ambassador**,
from **Pushing Through The Pavement**. The album and track were approved for the website. Secondary
captures use **Chillhop Essentials - Spring 2016**, including **So In Love** by **Brock Berrigan**,
and the Chillhop Music discography to demonstrate a different artwork palette. Avoid the discarded
adult-themed album and artist when refreshing images.

| Asset | Captured view | Image dimensions |
| --- | --- | --- |
| player-full.jpg | Full Now Playing | 1298 × 931 |
| player-split.jpg | Player beside album browsing | 1298 × 931 |
| player-narrow.jpg | Tall stacked player | 320 × 733 |
| compact-now-playing.jpg | Short stacked player | 320 × 500 |
| player-mini.jpg | Album browsing with mini playback bar | 320 × 733 |
| album-detail.jpg | Album tracks and actions | 1281 × 941 |
| library-artists.jpg | Artist library with circular portraits | 1281 × 941 |
| artist-detail.jpg | Chillhop Music discography | 1281 × 941 |
| mix-builders.jpg | Genre Mix Builder | 1281 × 941 |
| offline-downloads.jpg | Downloaded demo track | 1281 × 941 |
| personalization.jpg | Full player with Spring artwork colors | 1281 × 941 |
| social-preview.jpg | Same capture as player-full.jpg | 1298 × 931 |
| aurora-player.jpg | Full player with Aurora, same Spring track | 1281 × 941 |
| aurora-settings.jpg | Aurora selected, three colors, 45°, Balanced | 1281 × 941 |
| smart-playlist-templates.jpg | Unsaved Smart Playlist draft, demo connection | 1281 × 913 |

The demo does not advertise sonic similarity. The discovery screenshot shows an available genre
builder; homepage copy separately explains the requirements for Sonic Mix and Sonic Path. The
public demo's content and configuration can change.

## Acceptance checks

- Run `node --test tests/*.test.mjs` (13 platform-detection cases) and
  `node --check naviamp/showcase.mjs`.
- Preview the site using the README instructions. Check the product page at desktop and phone
  widths, including all section links and image aspect ratios.
- Select each player view; only its matching panel should be shown. Use Left/Right, Home, and End
  with keyboard focus on a tab. Focus follows the selection, and Left/Right wrap at the ends.
- Verify all five figures remain visible in the original HTML without JavaScript. Download cards,
  FAQ disclosures, and original screenshot links must also remain usable without scripts.
- Change the download platform to Windows and confirm the Microsoft Store recommendation, then
  check the other choices, including the unsigned iOS preview description.
- Expand the demo-server FAQ and confirm that setup instructions are readable.
- Visit the compatibility reference on desktop and phone. Its tables should scroll within their
  containers, and the underlying rows must match the previous homepage tables.
- Check local links, fragment targets, unique IDs, image signatures/dimensions, missing assets,
  and `git diff --check` before committing.

## Expanded features and native screenshot dialogs

The Smart Playlist capture shows the actual template chooser on the demo connection. The draft was
canceled, without creating a playlist on the public server. The homepage example rule card is a
labeled illustration of the Recently Added but Unplayed template, not a fabricated app screenshot.
Aurora and Album Blur images show the same Spring artwork with their real settings. The Connect
illustration explains command and media flow; it does not claim to show a live paired-device capture.

- Review the homepage feature highlights and all five new detail pages at desktop and phone widths.
- Open a screenshot, check the close button, Escape, outside-click dismissal where supported, and
  return of focus to the invoking button. Native modal behavior is supplied by the browser.
- Follow **Open image directly**, confirm the image opens in the same tab, and use Back to return.
- Test with page scripts blocked: native dialogs should still work on supporting browsers; all five
  player figures, download cards, and ordinary links remain available. Older browsers can use the
  direct-image links. No screenshot script or gallery dependency is shipped.
- Check Smart Playlist provider/preview requirements, Connect beta/platform/network limits, and
  sonic-discovery requirements against the app README and published 2.6/2.8/2.9 release notes.

Verification on October 27, 2026: Chrome checked at 390 × 844 and desktop size, with page scripts
blocked by a local preview-only Content Security Policy for the no-JavaScript check. Native opening,
close button, backdrop click, Escape, and direct-image/Back navigation passed. Each new feature page
fit the phone viewport without horizontal page overflow. This does not substitute for testing older
browser engines; their documented fallback is the ordinary direct-image link.

## Persistent header and community links

The product header uses CSS sticky positioning, with section scroll margins that leave room for the
header on desktop and phones. Discord and GitHub marks are local SVG assets, with accessible link
names, hover titles, and 44-pixel hit targets. Icon source/license information is in
`assets/social/README.md`. Checked while scrolled on desktop and at 390 × 844: both icons load,
all navigation links remain available, section targets clear the header, and the page has no
horizontal overflow. No JavaScript was added.
