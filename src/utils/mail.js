// Email helper.
//
// "Email me" should open the recipient's *default* mail service:
//   1. Try the OS mail client via a `mailto:` link  → Outlook / Apple Mail / Thunderbird …
//   2. If no client is registered (common on iOS/Android browsers and
//      headless environments), fall back to Gmail web compose so the user
//      is never left with a dead button.
//
// On desktop Windows/macOS a mail client is essentially always registered, so
// the fallback is skipped there to avoid opening two windows at once.

export function buildMailto(to, subject = "", body = "") {
  const qs = new URLSearchParams({ subject, body }).toString();
  return qs ? `mailto:${to}?${qs}` : `mailto:${to}`;
}

export function buildGmail(to, subject = "", body = "") {
  const qs = new URLSearchParams({ view: "cm", fs: "1", to, subject, body }).toString();
  return `https://mail.google.com/mail/?${qs}`;
}

const HAS_DESKTOP_CLIENT = /Windows|Macintosh|Mac OS|X11|Linux.*Chrome|Linux.*Firefox/i.test(
  typeof navigator !== "undefined" ? navigator.userAgent : ""
);

export function openMail(to, subject = "", body = "") {
  const mailto = buildMailto(to, subject, body);
  const gmail = buildGmail(to, subject, body);

  // 1. Attempt the OS default mail client.
  const anchor = document.createElement("a");
  anchor.href = mailto;
  anchor.rel = "noopener noreferrer";
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();

  // 2. Desktop machines virtually always have a client registered, so the
  //    mailto above is enough. On mobile / client-less browsers, wait a beat
  //    and open Gmail web compose as a guaranteed fallback.
  if (HAS_DESKTOP_CLIENT) return;

  setTimeout(() => {
    if (document.hidden) return; // a client already took focus
    window.open(gmail, "_blank", "noopener,noreferrer");
  }, 1100);
}