# GoosePod website

Static source for the GoosePod organization website and the Naviamp, feedss, and AudioMuse Sonic Fingerprint project pages.

## Local preview

Run any static HTTP server from the repository root, then open the printed localhost URL.

## Publishing

This repository is intended to be published with GitHub Pages from the `main` branch and repository root. The custom domain is `goosepod.com`; add the domain only after its DNS records point to GitHub Pages.

## Naviamp downloads

The `/naviamp/#downloads` section recommends a platform using local browser information, with no
network lookup or stored preference. A manual selector and all-platform cards remain available;
without JavaScript, all download links still work. Windows uses Microsoft Store with a secondary
GitHub option. Other platforms link to the latest GitHub release so users can choose an appropriate
package; iOS is explicitly an unsigned preview requiring the user's own signing.

Keep download destinations and package descriptions in `naviamp/index.html`; the recommendation
reuses those cards. Run the OS detection checks with `node --test tests/downloads.test.mjs`.

## Privacy-policy migration

The canonical Naviamp privacy policy lives at `/naviamp/privacy/`. Keep the previous `ursasmar/naviamp-privacy` Pages site online until the Google Play Console privacy-policy URL has been changed and the new URL has been verified publicly.
