export function openMail(to, subject = "Portfolio Contact", body = "Hi Suryansh,") {
  // Try standard mailto link first
  const mailtoUrl = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  // Create an invisible anchor element and click it
  const a = document.createElement("a");
  a.href = mailtoUrl;
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);

  // Fallback: If no mail client opens, redirect to Gmail Web in a new tab after a brief delay
  setTimeout(() => {
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(to)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailUrl, "_blank");
  }, 500);
}
