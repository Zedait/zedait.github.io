const $ = (q, p=document) => p.querySelector(q);
const $$ = (q, p=document) => Array.from(p.querySelectorAll(q));
const yearEl = $('#year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
const menuBtn = $('#menuBtn');
const mobileMenu = $('#mobileMenu');
if(menuBtn){
  menuBtn.addEventListener('click', () => mobileMenu.classList.toggle('open'));
  $$('#mobileMenu a').forEach(a=>a.addEventListener('click',()=>mobileMenu.classList.remove('open')));
}
const smooth = (e) => {
  const t = e.target.closest('a[href^="#"]');
  if(!t) return;
  const id = t.getAttribute('href');
  if(id.length<2) return;
  const el = document.querySelector(id);
  if(!el) return;
  e.preventDefault();
const headerH = document.querySelector('header')?.offsetHeight || 70;
window.scrollTo({top: el.getBoundingClientRect().top + window.scrollY - headerH, behavior: 'smooth'});
};
document.addEventListener('click', smooth);
const form = $('#contactForm');
const toast = $('#toast');
const showToast = (msg, type='ok') => {
  toast.textContent = msg;
  toast.style.borderColor = type==='ok' ? '#1f8f4d' : (type==='warn' ? '#8a640e' : '#8a1f1f');
  toast.classList.add('show');
  setTimeout(()=>toast.classList.remove('show'), 2800);
};
if(form){
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const fd = new FormData(form);
    const name = (fd.get('name')||'').trim();
    const email = (fd.get('email')||'').trim();
    const subject = (fd.get('subject')||'').trim();
    if(!name || !email || !subject){
      showToast('Lütfen gerekli alanları doldurun.', 'warn');
      return;
    }
    showToast('Sistem şuan bakımda lütfen mail adresimden bana ulaşın.', 'warn');
    form.reset();
  });
}
const statusModal = $('#statusModal');
const openStatusBtn = $('#openStatusBtn');
const closeStatusBtn1 = $('#closeStatusBtn');
const closeStatusBtn2 = $('#closeStatusBtn2');
const openModal = () => {
    statusModal.classList.add('open');
    document.body.classList.add('modal-open');
}
const closeModal = () => {
    statusModal.classList.remove('open');
    document.body.classList.remove('modal-open');
}
if (openStatusBtn) {
    openStatusBtn.addEventListener('click', openModal);
}
if (closeStatusBtn1) {
    closeStatusBtn1.addEventListener('click', closeModal);
}
if (closeStatusBtn2) {
    closeStatusBtn2.addEventListener('click', closeModal);
}
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && statusModal.classList.contains('open')) {
        closeModal();
    }
});