// Simplified email helper.
export function openMail(to, subject = "", body = "") {
  window.location.href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}