// Detection is a convenience only: every platform remains available without JavaScript.
// Use low-entropy browser information locally, without storage or network requests.
export function detectPlatform(browser = {}) {
  const userAgent = browser.userAgent || "";
  const platform = browser.userAgentData?.platform || browser.platform || "";
  if (/iPhone|iPad|iPod/i.test(userAgent) ||
      (/Mac/i.test(platform) && browser.maxTouchPoints > 1)) return "ios";
  if (/Android/i.test(`${platform} ${userAgent}`)) return "android";
  if (/CrOS/i.test(`${platform} ${userAgent}`)) return "";
  if (/Windows|Win32|Win64/i.test(platform)) return "windows";
  if (/Mac/i.test(platform)) return "macos";
  if (/Linux/i.test(platform)) return "linux";
  if (/Windows NT/i.test(userAgent)) return "windows";
  if (/Macintosh|Mac OS X/i.test(userAgent)) return "macos";
  if (/Linux/i.test(userAgent)) return "linux";
  return "";
}

export function initializeDownloads(page, browser) {
  const picker = page.getElementById("download-picker");
  const select = page.getElementById("download-platform");
  const recommendation = page.getElementById("download-recommendation");
  const status = page.getElementById("download-detection");
  if (!picker || !select || !recommendation || !status) return;

  const cards = new Map(Array.from(page.querySelectorAll(".download-card[data-platform]"),
    card => [card.dataset.platform, card]));

  function showDownload(platform, detected = false) {
    const card = cards.get(platform);
    recommendation.hidden = !card;
    if (!card) {
      status.textContent = "Choose from all platforms below.";
      return;
    }
    const title = card.querySelector("h3").textContent;
    page.getElementById("download-recommendation-title").textContent = title;
    page.getElementById("download-recommendation-label").textContent =
      detected ? "For your device" : "Your selected platform";
    page.getElementById("download-recommendation-description").textContent =
      card.querySelector(".download-description").textContent;
    page.getElementById("download-recommendation-actions").replaceChildren(
      ...Array.from(card.querySelectorAll(".download-actions a"), link => link.cloneNode(true)));
    status.textContent = detected ? `Detected ${title}. You can choose another platform.` :
      `Showing downloads for ${title}.`;
  }

  const detected = detectPlatform(browser);
  select.value = cards.has(detected) ? detected : "";
  showDownload(select.value, true);
  picker.hidden = false;
  select.addEventListener("change", () => showDownload(select.value));
}

if (typeof document !== "undefined") initializeDownloads(document, navigator);
