// ── Header scroll effect ──
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 40);
});

// ── Reveal on scroll ──
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
revealEls.forEach(el => revealObserver.observe(el));

// ── Floating CTA show after scroll ──
const floatingCta = document.getElementById('floatingCta');
if (floatingCta) {
floatingCta.style.opacity = '0';
floatingCta.style.transform = 'scale(0.7)';
floatingCta.style.transition = 'opacity .4s, transform .4s';
window.addEventListener('scroll', () => {
  if (window.scrollY > 500) {
    floatingCta.style.opacity = '1';
    floatingCta.style.transform = 'scale(1)';
  } else {
    floatingCta.style.opacity = '0';
    floatingCta.style.transform = 'scale(0.7)';
  }
});
}
