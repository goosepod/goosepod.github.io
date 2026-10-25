import assert from "node:assert/strict";
import test from "node:test";
import { detectPlatform } from "../naviamp/downloads.mjs";

const cases = [
  ["Windows client hints", { userAgentData: { platform: "Windows" } }, "windows"],
  ["Windows Firefox", { platform: "Win32", userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" }, "windows"],
  ["Windows UA fallback", { userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" }, "windows"],
  ["macOS", { platform: "MacIntel", userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)", maxTouchPoints: 0 }, "macos"],
  ["Linux", { platform: "Linux x86_64" }, "linux"],
  ["Android before Linux", { platform: "Linux armv8l", userAgent: "Mozilla/5.0 (Linux; Android 16; Pixel 10)" }, "android"],
  ["Android client hints", { userAgentData: { platform: "Android" } }, "android"],
  ["iPhone", { platform: "iPhone", userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X)" }, "ios"],
  ["iPad desktop mode", { platform: "MacIntel", userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15)", maxTouchPoints: 5 }, "ios"],
  ["iPad mobile mode", { userAgent: "Mozilla/5.0 (iPad; CPU OS 18_0 like Mac OS X)" }, "ios"],
  ["ChromeOS is not advertised as Linux", { platform: "Linux x86_64", userAgent: "Mozilla/5.0 (X11; CrOS x86_64 16000.0.0)" }, ""],
  ["Unknown", { platform: "Other", userAgent: "Unknown browser" }, ""],
  ["Missing browser data", {}, ""],
];

for (const [name, browser, expected] of cases) {
  test(name, () => assert.equal(detectPlatform(browser), expected));
}
