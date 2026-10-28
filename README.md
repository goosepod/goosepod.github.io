# GoosePod website

Static source for the GoosePod organization website and the Naviamp, feedss, and AudioMuse Sonic Fingerprint project pages.

## Local preview

Run any static HTTP server from the repository root, then open the printed localhost URL.

## Publishing

This repository is intended to be published with GitHub Pages from the `main` branch and repository root. The custom domain is `goosepod.com`; add the domain only after its DNS records point to GitHub Pages.

## Naviamp downloads

The `/naviamp/#downloads` section recommends a platform using local browser information, with no
network lookup or stored preference. A manual selector and all-platform cards remain available;
without JavaScript, all download links still work. Windows uses Microsoft Store and macOS uses Mac
App Store, each with a secondary GitHub option. The iPhone/iPad beta uses TestFlight, with an unsigned
IPA on GitHub as a secondary option for users who provide their own signing. Linux and Android link
to the latest GitHub release so users can choose an appropriate package.

Keep download destinations and package descriptions in `naviamp/index.html`; the recommendation
reuses those cards. Run the OS detection checks with `node --test tests/downloads.test.mjs`.

## Privacy-policy migration

The canonical Naviamp privacy policy lives at `/naviamp/privacy/`. Keep the previous `ursasmar/naviamp-privacy` Pages site online until the Google Play Console privacy-policy URL has been changed and the new URL has been verified publicly.

## Naviamp product page

The Naviamp landing page has its own scoped stylesheet (`naviamp/website.css`). The shared
`styles.css` still serves the other GoosePod projects. Complete format and server-feature tables
live at `/naviamp/compatibility/`; keep that reference linked from the product page and sitemap.

The player-size comparison in `naviamp/showcase.mjs` progressively enhances five ordinary figures.
Without JavaScript, every view and caption remains visible. With JavaScript, it uses keyboard
accessible tabs: Left/Right wrap, Home selects the first view, and End selects the last. Screenshot
links open the original image without requiring JavaScript.

All website app screenshots use Naviamp 2.9.0 connected to the public Navidrome demo server.
See [screenshot provenance and verification](docs/naviamp-website-verification.md) before refreshing
assets. Keep the release highlight tied to a public release and update its versioned link together
with its description.

The feature directory at `/naviamp/features/` links to discovery/radio, Smart Playlists, Connect,
and appearance pages. These detail pages contain no JavaScript. Connect copy must preserve the
current Android/desktop beta scope and network requirements; Smart Playlist copy must distinguish
Navidrome-native editing from regular playlists and explain limits of local preview.

Screenshot buttons use native HTML `commandfor`/`command="show-modal"` and `<dialog closedby="any">`.
The browser owns modal focus, Escape, and dismissal; an ordinary `method="dialog"` form closes it.
There is **no screenshot JavaScript**. An always-visible **Open image directly** link is the fallback
for browsers without invoker commands and opens the original in the same tab; Back returns to the
site. Preserve these links rather than adding a gallery runtime or nesting interactive controls.
