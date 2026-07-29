const $ = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);
const header = $('#header');
const menu = $('#menu');
const modal = $('#signinModal');
const toast = $('#toast');
let toastTimer;
let searchType = 'Rent';

const showToast = msg => {
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 3000);
};

menu.onclick = () => {
  const open = header.classList.toggle('open');
  menu.textContent = open ? '×' : '☰';
  menu.setAttribute('aria-expanded', open);
};

$$('.nav a').forEach(a => {
  a.onclick = () => {
    header.classList.remove('open');
    menu.textContent = '☰';
    menu.setAttribute('aria-expanded', 'false');
  };
});

$$('[data-open-modal],a[href="#landlords"]').forEach(b => {
  b.onclick = e => {
    if (e) e.preventDefault();
    modal.classList.add('show');
    modal.setAttribute('aria-hidden', 'false');
  };
});

$('#closeModal').onclick = () => {
  modal.classList.remove('show');
  modal.setAttribute('aria-hidden', 'true');
};

modal.onclick = e => {
  if (e.target === modal) $('#closeModal').click();
};

$$('.role-option').forEach(b => {
  b.onclick = () => {
    modal.classList.remove('show');
    if (b.dataset.role === 'Landlord') {
      document.body.classList.add('landlord-mode');
      window.scrollTo(0, 0);
    } else {
      showToast('Student sign-in is ready to connect.');
    }
  };
});

$$('.search-tab').forEach(tab => {
  tab.onclick = () => {
    $$('.search-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    searchType = tab.dataset.type;
  };
});

$('#searchForm').onsubmit = e => {
  e.preventDefault();
  const where = $('#searchLocation').value.trim();
  showToast(`Showing ${searchType.toLowerCase()} homes${where ? ` near ${where}` : ' near your university'}.`);
};

$$('.save').forEach(b => {
  b.onclick = () => {
    const saved = b.classList.toggle('saved');
    b.textContent = saved ? '♥' : '♡';
    showToast(saved ? 'Home saved to your favourites.' : 'Home removed from favourites.');
  };
});

const dashData = {
  Overview: ['Good afternoon, Abubakar', 'Here is how your homes are performing this week.', '03', '12', '428'],
  Listings: ['Your active listings', 'All three listings are visible to university students.', '03', '08', '428'],
  Inquiries: ['Student inquiries', 'You have 12 inquiries waiting for a response.', '12', '07', '04'],
  Payments: ['Rental payments', 'All recent payment records are up to date.', '₦720k', '03', '100%']
};

$$('.dash-side a').forEach(a => {
  a.onclick = () => {
    const d = dashData[a.dataset.dash];
    $$('.dash-side a').forEach(x => x.classList.remove('active'));
    a.classList.add('active');
    $('#dashHeading').textContent = d[0];
    $('#dashSub').textContent = d[1];
    $('#dashOne').textContent = d[2];
    $('#dashTwo').textContent = d[3];
    $('#dashThree').textContent = d[4];
  };
});

const slides = $$('.slide');
const dots = $('#dots');
let current = 0;

slides.forEach((_, i) => {
  const b = document.createElement('button');
  b.setAttribute('aria-label', `Show student story ${i + 1}`);
  b.onclick = () => showSlide(i);
  dots.appendChild(b);
});

function showSlide(i) {
  current = (i + slides.length) % slides.length;
  slides.forEach((s, n) => s.classList.toggle('active', n === current));
  $$('#dots button').forEach((d, n) => d.classList.toggle('active', n === current));
}

$('#prev').onclick = () => showSlide(current - 1);
$('#next').onclick = () => showSlide(current + 1);
showSlide(0);
setInterval(() => showSlide(current + 1), 5500);

const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('show');
  });
}, {
  threshold: 0.12
});

$$('.reveal').forEach(el => observer.observe(el));
