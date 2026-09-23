/* =========================================================
   BalkanGig — script.js
   Zajednički podaci i interakcije za sve stranice
   ========================================================= */

/* ---------- Podaci: kategorije (usluge) ---------- */
const CATEGORIES = [
  { id: "graficki-dizajn", icon: "🎨", name: "Grafički dizajn", desc: "Logotipi, brendiranje, print materijali" },
  { id: "video-editing", icon: "🎬", name: "Video editing", desc: "Montaža, motion graphics, YouTube video" },
  { id: "web-development", icon: "💻", name: "Web development i dizajn", desc: "Sajtovi, web aplikacije, UI/UX" },
  { id: "social-media", icon: "📱", name: "Social media management", desc: "Vođenje profila, sadržaj, oglašavanje" },
  { id: "pisanje-prevodjenje", icon: "✍️", name: "Pisanje i prevođenje", desc: "Copywriting, blogovi, prevodi" },
  { id: "digitalni-marketing", icon: "📢", name: "Digitalni marketing", desc: "SEO, Google i Meta oglasi, strategija" },
  { id: "audio-voiceover", icon: "🎧", name: "Audio i voice-over", desc: "Snimanje glasa, miksovanje, jingle" },
  { id: "fotografija", icon: "📸", name: "Fotografija", desc: "Produktna, portretna i event fotografija" },
];

/* ---------- Podaci: freelanceri ---------- */
const FREELANCERS = [
  {
    id: 1, name: "Jovana Marković", role: "Grafički dizajner", category: "graficki-dizajn",
    location: "Beograd, Srbija", rating: 4.9, reviews: 132, done: 214, price: "od 25€",
    img: "https://i.pravatar.cc/160?img=5",
    desc: "Kreiram vizuelne identitete za brendove — od logotipa do kompletnog brand booka.",
    tags: ["Logo dizajn", "Branding", "Adobe Illustrator"]
  },
  {
    id: 2, name: "Filip Radulović", role: "Web developer", category: "web-development",
    location: "Podgorica, Crna Gora", rating: 5.0, reviews: 88, done: 96, price: "od 180€",
    img: "https://i.pravatar.cc/160?img=12",
    desc: "Izrađujem brze i responzivne sajtove i web aplikacije po meri, bez WordPress šablona.",
    tags: ["React", "Node.js", "UI/UX"]
  },
  {
    id: 3, name: "Ivana Petrović", role: "Video editor", category: "video-editing",
    location: "Novi Sad, Srbija", rating: 4.8, reviews: 76, done: 158, price: "od 20€",
    img: "https://i.pravatar.cc/160?img=9",
    desc: "Montiram YouTube i reklamne video sadržaje sa fokusom na dinamičan ritam i tranzicije.",
    tags: ["Premiere Pro", "After Effects", "Reels"]
  },
  {
    id: 4, name: "Ognjen Vukić", role: "Digitalni marketer", category: "digitalni-marketing",
    location: "Banja Luka, BiH", rating: 4.7, reviews: 61, done: 84, price: "od 90€/mes.",
    img: "https://i.pravatar.cc/160?img=33",
    desc: "Vodim Google i Meta kampanje za male i srednje biznise sa fokusom na povrat investicije.",
    tags: ["Google Ads", "Meta Ads", "SEO"]
  },
  {
    id: 5, name: "Teodora Ilić", role: "Copywriter i prevodilac", category: "pisanje-prevodjenje",
    location: "Niš, Srbija", rating: 4.9, reviews: 104, done: 240, price: "od 8€/1000 reči",
    img: "https://i.pravatar.cc/160?img=25",
    desc: "Pišem tekstove za sajtove i društvene mreže, prevodim sa i na engleski jezik.",
    tags: ["Copywriting", "Prevod EN-SR", "SEO tekstovi"]
  },
  {
    id: 6, name: "Marko Đorđević", role: "Social media menadžer", category: "social-media",
    location: "Skoplje, Sev. Makedonija", rating: 4.8, reviews: 53, done: 71, price: "od 120€/mes.",
    img: "https://i.pravatar.cc/160?img=51",
    desc: "Kreiram i vodim sadržaj na Instagramu i TikToku, uz mesečnu strategiju rasta.",
    tags: ["Instagram", "TikTok", "Content plan"]
  },
  {
    id: 7, name: "Dušan Stanić", role: "Voice-over umetnik", category: "audio-voiceover",
    location: "Zagreb, Hrvatska", rating: 4.9, reviews: 39, done: 112, price: "od 15€",
    img: "https://i.pravatar.cc/160?img=60",
    desc: "Profesionalno snimanje glasa za reklame, e-learning i audio knjige na više jezika regiona.",
    tags: ["Voice-over", "Audio miks", "Sinhronizacija"]
  },
  {
    id: 8, name: "Anđela Simić", role: "Fotograf", category: "fotografija",
    location: "Sarajevo, BiH", rating: 5.0, reviews: 47, done: 63, price: "od 60€/dan",
    img: "https://i.pravatar.cc/160?img=45",
    desc: "Bavim se produktnom i event fotografijom, sa profesionalnom obradom u post-produkciji.",
    tags: ["Produktna foto.", "Event", "Retuš"]
  },
  {
    id: 9, name: "Vuk Nikolić", role: "UI/UX i web dizajner", category: "web-development",
    location: "Beograd, Srbija", rating: 4.8, reviews: 91, done: 133, price: "od 150€",
    img: "https://i.pravatar.cc/160?img=14",
    desc: "Dizajniram intuitivne korisničke interfejse za sajtove i mobilne aplikacije.",
    tags: ["Figma", "UI dizajn", "Prototipovanje"]
  },
  {
    id: 10, name: "Sara Popović", role: "Grafički dizajner", category: "graficki-dizajn",
    location: "Novi Sad, Srbija", rating: 4.7, reviews: 58, done: 102, price: "od 20€",
    img: "https://i.pravatar.cc/160?img=48",
    desc: "Izrađujem print materijale — kataloge, ambalažu i vizuelna rešenja za društvene mreže.",
    tags: ["Print dizajn", "Photoshop", "Ambalaža"]
  },
  {
    id: 11, name: "Nikola Jovanović", role: "Video editor", category: "video-editing",
    location: "Kragujevac, Srbija", rating: 4.6, reviews: 34, done: 55, price: "od 18€",
    img: "https://i.pravatar.cc/160?img=68",
    desc: "Specijalizovan za kratke formate — Reels, TikTok i YouTube Shorts sa brzim rokovima.",
    tags: ["Kratki format", "CapCut", "Motion grafika"]
  },
  {
    id: 12, name: "Milena Radić", role: "Digitalni marketer", category: "digitalni-marketing",
    location: "Podgorica, Crna Gora", rating: 4.9, reviews: 72, done: 98, price: "od 100€/mes.",
    img: "https://i.pravatar.cc/160?img=29",
    desc: "Gradim kompletne marketing strategije — od analitike do sadržaja i oglašavanja.",
    tags: ["Strategija", "Analitika", "Email marketing"]
  },
];

/* ---------- Supabase: učitavanje pravih freelancera iz profiles tabele ---------- */
async function loadFreelancersFromSupabase() {
  if (!window.supabase) return; // supabase-client.js se nije učitao — ostaju demo podaci

  try {
    const { data, error } = await window.supabase
      .from("profiles")
      .select("*")
      .eq("role", "freelancer");

    if (error) {
      console.error("Greška pri učitavanju freelancera:", error.message);
      return; // ostaju demo podaci kao fallback
    }
    if (!data || data.length === 0) return; // baza je prazna — ostaju demo podaci

    const categoryNames = Object.fromEntries(CATEGORIES.map(c => [c.id, c.name]));

    const mapped = data.map(p => ({
      id: p.id,
      name: p.full_name,
      role: categoryNames[p.category] || "Freelancer",
      category: p.category || "",
      location: p.location || "",
      rating: Number(p.rating) || 0,
      reviews: p.reviews_count || 0,
      done: p.done_count || 0,
      price: p.price_from || "Po dogovoru",
      img: p.avatar_url || `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(p.full_name)}&backgroundType=gradientLinear`,
      desc: p.bio || "",
      tags: p.tags || []
    }));

    // Mutacija postojećeg niza (ne reasignacija) — sve funkcije koje
    // već referenciraju FREELANCERS odmah vide nove podatke.
    FREELANCERS.length = 0;
    FREELANCERS.push(...mapped);
  } catch (e) {
    console.error("Neočekivana greška pri učitavanju freelancera:", e);
    // ostaju demo podaci kao fallback
  }
}

/* ---------- Pomoćne funkcije ---------- */
function renderStars(rating) {
  const full = Math.round(rating);
  return "★".repeat(full) + "☆".repeat(5 - full);
}

/* Pravi (živi) broj freelancera po kategoriji — računa se iz FREELANCERS,
   ne iz izmišljenih statičnih brojeva */
function categoryCount(catId) {
  return FREELANCERS.filter(f => f.category === catId).length;
}

function categoryCardHTML(cat) {
  const count = categoryCount(cat.id);
  return `
    <a href="pronadji-freelancera.html?kategorija=${cat.id}" class="cat-card reveal">
      <div class="cat-icon">${cat.icon}</div>
      <h3>${cat.name}</h3>
      <p>${cat.desc}</p>
      <span class="cat-count">${count} ${count === 1 ? "freelancer" : "freelancera"}</span>
    </a>
  `;
}

function freelancerCardHTML(f) {
  return `
    <div class="freelancer-card reveal">
      <div class="freelancer-card-header">
        <img class="freelancer-avatar" src="${f.img}" alt="${f.name}" loading="lazy" onerror="this.onerror=null;this.src='https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(f.name)}&backgroundType=gradientLinear';">
        <div>
          <h3>${f.name}</h3>
          <div class="freelancer-role">${f.role}</div>
          <div class="freelancer-location">📍 ${f.location}</div>
        </div>
      </div>
      <div class="freelancer-rating">
        <span class="stars">${renderStars(f.rating)}</span> ${f.rating.toFixed(1)}
        <span class="freelancer-reviews-count">(${f.reviews} recenzija)</span>
      </div>
      <p>${f.desc}</p>
      <div class="freelancer-tags">${f.tags.map(t => `<span class="tag">${t}</span>`).join("")}</div>
      <div class="freelancer-card-footer">
        <div class="freelancer-price">${f.price}<span>početna cena</span></div>
        <div class="freelancer-done">${f.done} projekata</div>
      </div>
      <a href="profil-freelancera.html?id=${f.id}" class="btn btn-outline btn-block" style="margin-top:16px;">Pogledaj profil</a>
    </div>
  `;
}

/* Filter opcija u sidebaru — generiše se iz CATEGORIES, sa brojem
   freelancera koji odgovaraju trenutnoj pretrazi */
function filterOptionHTML(cat) {
  return `
    <label class="filter-option" data-cat="${cat.id}">
      <input type="checkbox" name="kategorija" value="${cat.id}">
      <span class="filter-option-icon">${cat.icon}</span>
      <span class="filter-option-name">${cat.name}</span>
      <span class="filter-option-count">${categoryCount(cat.id)}</span>
    </label>
  `;
}

/* Opcije za pilule (Ocena / Budžet) u finijem filtriranju */
const RATING_PILLS = [
  { value: "0", label: "Sve" },
  { value: "4.5", label: "4.5+ ★" },
  { value: "4.8", label: "4.8+ ★" },
  { value: "4.9", label: "4.9+ ★" },
];

const BUDGET_PILLS = [
  { value: "all", label: "Sve" },
  { value: "0-50", label: "Do 50€" },
  { value: "50-150", label: "50–150€" },
  { value: "150-999999", label: "150€+" },
];

function pillsHTML(group, options) {
  return options.map((o, i) => `
    <button type="button" class="filter-pill${i === 0 ? " active" : ""}" data-group="${group}" data-value="${o.value}">
      ${o.label}
    </button>
  `).join("");
}

/* ---------- Mobilni meni ---------- */
function initMobileNav() {
  const btn = document.getElementById("hamburgerBtn");
  const drawer = document.getElementById("mobileNav");
  const closeBtn = document.getElementById("mobileNavClose");
  if (!btn || !drawer) return;

  function open() {
    drawer.classList.add("open");
    btn.classList.add("active");
    btn.setAttribute("aria-expanded", "true");
  }
  function close() {
    drawer.classList.remove("open");
    btn.classList.remove("active");
    btn.setAttribute("aria-expanded", "false");
  }

  btn.addEventListener("click", open);
  if (closeBtn) closeBtn.addEventListener("click", close);
  drawer.querySelectorAll("a").forEach(a => a.addEventListener("click", close));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });
}

/* ---------- Tema (svetla / tamna) ---------- */
const THEME_KEY = "bg_theme";

function applyTheme(theme) {
  if (theme === "light") {
    document.documentElement.setAttribute("data-theme", "light");
  } else {
    document.documentElement.removeAttribute("data-theme");
  }
}

function initThemeToggle() {
  const toggles = document.querySelectorAll(".theme-toggle");
  if (!toggles.length) return;

  let current = "dark";
  try {
    current = localStorage.getItem(THEME_KEY) || "dark";
  } catch (e) { /* localStorage nedostupan */ }
  applyTheme(current);

  toggles.forEach(btn => {
    btn.setAttribute("aria-pressed", current === "light" ? "true" : "false");
    btn.addEventListener("click", () => {
      current = current === "light" ? "dark" : "light";
      applyTheme(current);
      try { localStorage.setItem(THEME_KEY, current); } catch (e) { /* ignoriši */ }
      toggles.forEach(t => t.setAttribute("aria-pressed", current === "light" ? "true" : "false"));
    });
  });
}

/* ---------- Animacije na klik (ripple / "talas") ---------- */
function spawnRipple(el, x, y, dark) {
  const rect = el.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height) * 1.4;
  const ripple = document.createElement("span");
  ripple.className = "ripple" + (dark ? " ripple-dark" : "");
  ripple.style.width = ripple.style.height = size + "px";
  ripple.style.left = (x - rect.left - size / 2) + "px";
  ripple.style.top = (y - rect.top - size / 2) + "px";

  const hadPosition = el.classList.contains("ripple-host") || getComputedStyle(el).position !== "static";
  if (!hadPosition) el.classList.add("ripple-host");

  el.appendChild(ripple);
  ripple.addEventListener("animationend", () => {
    ripple.remove();
    if (!hadPosition) el.classList.remove("ripple-host");
  });
}

function initClickAnimations() {
  const RIPPLE_SELECTOR = [
    ".btn", "button:not(.hamburger):not(.mobile-nav-close)",
    ".cat-card", ".category-card", ".freelancer-card",
    ".filter-option", ".filter-pill", ".choice-card",
    ".theme-toggle", ".active-filter-chip button"
  ].join(", ");

  document.addEventListener("click", (e) => {
    const target = e.target.closest(RIPPLE_SELECTOR);
    if (!target) return;
    const dark = target.matches(".btn-light, .btn-outline, .filter-pill, .cat-card, .category-card, .freelancer-card, .theme-toggle, .filter-option");
    spawnRipple(target, e.clientX || 0, e.clientY || 0, dark);

    target.classList.remove("click-pop");
    void target.offsetWidth;
    target.classList.add("click-pop");
  });
}

/* ---------- Scroll reveal ---------- */
function initScrollReveal() {
  const items = document.querySelectorAll(".reveal");
  if (!items.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  items.forEach(el => io.observe(el));
}

/* ---------- Hero pretraga ---------- */
function initHeroSearch() {
  const form = document.getElementById("heroSearchForm");
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const q = document.getElementById("heroSearchInput").value.trim();
    window.location.href = "pronadji-freelancera.html" + (q ? "?q=" + encodeURIComponent(q) : "");
  });
}

/* ---------- Populacija početne strane ---------- */
function populateHomepage() {
  const catGrid = document.getElementById("categoryGrid");
  if (catGrid) catGrid.innerHTML = CATEGORIES.map(categoryCardHTML).join("");

  const flGrid = document.getElementById("featuredFreelancers");
  if (flGrid) flGrid.innerHTML = FREELANCERS.slice(0, 6).map(freelancerCardHTML).join("");
}

/* ---------- Stranica: Pronađi freelancera ---------- */
function initListingPage() {
  const grid = document.getElementById("listingGrid");
  if (!grid) return;

  const params = new URLSearchParams(window.location.search);
  const filtersForm = document.getElementById("filtersForm");
  const clearBtn = document.getElementById("clearFiltersBtn");
  const emptyStateResetBtn = document.getElementById("emptyStateResetBtn");
  const sortSelect = document.getElementById("sortSelect");
  const resultCount = document.getElementById("resultCount");
  const emptyState = document.getElementById("emptyState");
  const searchInput = document.getElementById("listingSearch");
  const activeFiltersRow = document.getElementById("activeFilters");

  // Generiši prefinjene filtere: Kategorija (checkbox-ovi), Ocena i Budžet (pilule)
  filtersForm.innerHTML = `
    <div class="filter-group">
      <div class="filter-group-title">Kategorija</div>
      <div class="filter-options">${CATEGORIES.map(filterOptionHTML).join("")}</div>
    </div>
    <div class="filter-group">
      <div class="filter-group-title">Minimalna ocena</div>
      <div class="filter-pills" data-group-wrap="ocena">${pillsHTML("ocena", RATING_PILLS)}</div>
    </div>
    <div class="filter-group">
      <div class="filter-group-title">Budžet</div>
      <div class="filter-pills" data-group-wrap="budzet">${pillsHTML("budzet", BUDGET_PILLS)}</div>
    </div>
  `;

  if (searchInput && params.get("q")) searchInput.value = params.get("q");

  function activePill(group) {
    return filtersForm.querySelector(`.filter-pill.active[data-group="${group}"]`);
  }

  function getState() {
    const checked = Array.from(filtersForm.querySelectorAll('input[name="kategorija"]:checked')).map(i => i.value);
    const ratingPill = activePill("ocena");
    const budgetPill = activePill("budzet");
    return {
      query: (searchInput?.value || "").toLowerCase().trim(),
      categories: checked,
      sort: sortSelect ? sortSelect.value : "preporuceno",
      minRating: ratingPill ? parseFloat(ratingPill.dataset.value) : 0,
      budget: budgetPill ? budgetPill.dataset.value : "all"
    };
  }

  function matchesFilters(f, state) {
    const matchesQuery = !state.query ||
      f.name.toLowerCase().includes(state.query) ||
      f.role.toLowerCase().includes(state.query) ||
      f.tags.join(" ").toLowerCase().includes(state.query) ||
      f.location.toLowerCase().includes(state.query);
    const matchesCategory = state.categories.length === 0 || state.categories.includes(f.category);
    const matchesRating = !state.minRating || f.rating >= state.minRating;
    let matchesBudget = true;
    if (state.budget && state.budget !== "all") {
      const [min, max] = state.budget.split("-").map(Number);
      const price = parsePrice(f.price);
      matchesBudget = price >= min && price <= max;
    }
    return matchesQuery && matchesCategory && matchesRating && matchesBudget;
  }

  // Ažurira brojeve pored svake usluge prema trenutnom stanju filtera (živo filtriranje),
  // i vizuelno "zatamni" usluge koje trenutno nemaju nijedan rezultat
  function updateFilterCounts(state) {
    filtersForm.querySelectorAll(".filter-option").forEach(label => {
      const catId = label.dataset.cat;
      const count = FREELANCERS.filter(f => {
        const stateWithoutThisCat = { ...state, categories: [] };
        return matchesFilters(f, stateWithoutThisCat) && f.category === catId;
      }).length;
      const countEl = label.querySelector(".filter-option-count");
      if (countEl.textContent !== String(count)) {
        countEl.textContent = count;
        countEl.classList.remove("click-pop");
        void countEl.offsetWidth;
        countEl.classList.add("click-pop");
      }
      label.classList.toggle("is-empty", count === 0);
    });
  }

  const CATEGORY_LABELS = Object.fromEntries(CATEGORIES.map(c => [c.id, c.name]));

  function renderActiveChips(state) {
    if (!activeFiltersRow) return;
    const chips = [];

    if (state.query) {
      chips.push({ label: `Pretraga: "${state.query}"`, onRemove: () => { searchInput.value = ""; } });
    }
    state.categories.forEach(catId => {
      chips.push({
        label: CATEGORY_LABELS[catId] || catId,
        onRemove: () => {
          const box = filtersForm.querySelector(`input[value="${catId}"]`);
          if (box) box.checked = false;
        }
      });
    });
    if (state.minRating) {
      chips.push({
        label: `${state.minRating.toFixed(1)}+ ★`,
        onRemove: () => setActivePill("ocena", "0")
      });
    }
    if (state.budget && state.budget !== "all") {
      const pill = activePill("budzet");
      chips.push({
        label: pill ? pill.textContent.trim() : "Budžet",
        onRemove: () => setActivePill("budzet", "all")
      });
    }

    if (chips.length === 0) {
      activeFiltersRow.classList.remove("show");
      activeFiltersRow.innerHTML = "";
      return;
    }

    activeFiltersRow.innerHTML = chips.map((c, i) => `
      <span class="active-filter-chip" data-chip-index="${i}">
        ${c.label}
        <button type="button" aria-label="Ukloni filter">×</button>
      </span>
    `).join("");
    activeFiltersRow.classList.add("show");

    activeFiltersRow.querySelectorAll(".active-filter-chip button").forEach((btn, i) => {
      btn.addEventListener("click", () => {
        chips[i].onRemove();
        render();
      });
    });
  }

  function setActivePill(group, value) {
    filtersForm.querySelectorAll(`.filter-pill[data-group="${group}"]`).forEach(p => {
      p.classList.toggle("active", p.dataset.value === value);
    });
  }

  function render() {
    const state = getState();
    let list = FREELANCERS.filter(f => matchesFilters(f, state));

    if (state.sort === "ocena") list.sort((a, b) => b.rating - a.rating);
    if (state.sort === "projekti") list.sort((a, b) => b.done - a.done);

    grid.innerHTML = list.map(freelancerCardHTML).join("");
    if (resultCount) resultCount.textContent = list.length;
    if (emptyState) emptyState.classList.toggle("show", list.length === 0);

    updateFilterCounts(state);
    renderActiveChips(state);

    const hasActiveFilters = state.categories.length > 0 || !!state.query || state.minRating > 0 || state.budget !== "all";
    if (clearBtn) clearBtn.hidden = !hasActiveFilters;

    initScrollReveal();
  }

  // Predpopuni filter iz URL parametra ?kategorija=
  const preselect = params.get("kategorija");
  if (preselect) {
    const box = filtersForm.querySelector(`input[value="${preselect}"]`);
    if (box) box.checked = true;
  }

  filtersForm.addEventListener("change", render);
  filtersForm.addEventListener("click", (e) => {
    const pill = e.target.closest(".filter-pill");
    if (!pill) return;
    const group = pill.dataset.group;
    setActivePill(group, pill.dataset.value);
    render();
  });
  if (sortSelect) sortSelect.addEventListener("change", render);
  if (searchInput) searchInput.addEventListener("input", render);
  function resetFilters() {
    filtersForm.querySelectorAll('input[name="kategorija"]:checked').forEach(i => i.checked = false);
    setActivePill("ocena", "0");
    setActivePill("budzet", "all");
    if (searchInput) searchInput.value = "";
    if (sortSelect) sortSelect.value = "preporuceno";
    render();
  }
  if (clearBtn) clearBtn.addEventListener("click", resetFilters);
  if (emptyStateResetBtn) emptyStateResetBtn.addEventListener("click", resetFilters);

  render();
}

/* ---------- Stranica: Profil freelancera ---------- */
function initProfilePage() {
  const wrap = document.getElementById("profileWrap");
  if (!wrap) return;
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const f = FREELANCERS.find(x => String(x.id) === String(id)) || FREELANCERS[0];
  if (!f) return;

  document.title = `${f.name} — ${f.role} | BalkanGig`;
  document.getElementById("pAvatar").src = f.img;
  document.getElementById("pAvatar").onerror = function () {
    this.onerror = null;
    this.src = `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(f.name)}&backgroundType=gradientLinear`;
  };
  document.getElementById("pName").textContent = f.name;
  document.getElementById("pRole").textContent = f.role;
  document.getElementById("pLocation").textContent = "📍 " + f.location;
  document.getElementById("pRatingBadge").innerHTML = `<span class="stars">${renderStars(f.rating)}</span> ${f.rating.toFixed(1)} (${f.reviews} recenzija)`;
  document.getElementById("pDone").textContent = f.done + " završenih projekata";
  document.getElementById("pDesc").textContent = f.desc + " Radim direktno sa klijentima iz cele regije, uz jasnu komunikaciju i poštovanje dogovorenih rokova. Svaki projekat prolazi kroz reviziju dok klijent ne bude u potpunosti zadovoljan rezultatom.";
  document.getElementById("pPrice").textContent = f.price;
  document.getElementById("pSkills").innerHTML = f.tags.map(t => `<span class="tag">${t}</span>`).join("") +
    `<span class="tag">Komunikacija na srpskom</span><span class="tag">Rad na daljinu</span>`;
  document.getElementById("pInfoLocation").textContent = f.location;
  document.getElementById("pInfoDone").textContent = f.done;
  document.getElementById("pInfoReviews").textContent = f.reviews;
  const contactBtn = document.getElementById("pContactBtn");
  if (contactBtn) contactBtn.href = `poruke.html?id=${f.id}`;

  const cat = CATEGORIES.find(c => c.id === f.category);
  const icon = cat ? cat.icon : "🖼️";
  const portfolioWrap = document.getElementById("pPortfolio");
  if (portfolioWrap) {
    portfolioWrap.innerHTML = Array.from({ length: 6 }).map((_, i) => `
      <div class="portfolio-item">
        <span class="portfolio-icon">${icon}</span>
        <span>Rad ${String(i + 1).padStart(2, "0")}</span>
      </div>
    `).join("");
  }
}

/* ---------- Forme: Brza ponuda / Detaljan zahtev ---------- */
function initForms() {
  const tabs = document.querySelectorAll(".forms-tabs button");
  const panels = document.querySelectorAll(".form-panel");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      panels.forEach(p => p.classList.remove("active"));
      tab.classList.add("active");
      document.getElementById(tab.dataset.target).classList.add("active");
    });
  });

  // loginForm i regForm imaju sopstvenu Supabase logiku (initSupabaseAuth).
  // brzaForm i detaljnoForm imaju sopstvenu logiku (initProjectForms).
  // Ovde ostaju samo forme koje nemaju posebnu backend logiku (demo ponašanje).
  const handledIds = ["loginForm", "regForm", "brzaForm", "detaljnoForm"];
  document.querySelectorAll("form[data-validate]").forEach(form => {
    if (handledIds.includes(form.id)) return;
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const success = form.parentElement.querySelector(".form-success");
      if (success) {
        success.classList.add("show");
        success.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      form.reset();
    });
  });
}

/* =========================================================
   SUPABASE: autentikacija (registracija, prijava, header stanje)
   ========================================================= */
function showFormError(form, message) {
  let err = form.querySelector(".form-error");
  if (!err) {
    err = document.createElement("div");
    err.className = "form-error";
    err.style.cssText = "background:#fee2e2;color:#b91c1c;padding:10px 14px;border-radius:8px;margin-bottom:16px;font-size:14px;";
    form.prepend(err);
  }
  err.textContent = message;
}

function clearFormError(form) {
  const err = form.querySelector(".form-error");
  if (err) err.remove();
}

async function initSupabaseAuth() {
  if (!window.supabase) return;

  // ---- Registracija ----
  const regForm = document.getElementById("regForm");
  if (regForm) {
    regForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      clearFormError(regForm);
      const submitBtn = regForm.querySelector("button[type=submit]");
      const activeRoleBtn = document.querySelector(".role-toggle button.active");
      const validRoles = ["klijent", "freelancer", "firma"];
      const role = activeRoleBtn && validRoles.includes(activeRoleBtn.dataset.role)
        ? activeRoleBtn.dataset.role
        : "klijent";

      const fullName = document.getElementById("re-ime").value.trim();
      const email = document.getElementById("re-email").value.trim();
      const password = document.getElementById("re-lozinka").value;
      const sajtInput = document.getElementById("re-sajt");
      const website = role === "firma" && sajtInput ? sajtInput.value.trim() : null;

      if (password.length < 8) {
        showFormError(regForm, "Lozinka mora imati najmanje 8 karaktera.");
        return;
      }

      submitBtn.disabled = true;
      submitBtn.textContent = "Kreiranje naloga...";

      const { data, error } = await window.supabase.auth.signUp({
        email,
        password,
        options: { data: { full_name: fullName, role, website } }
      });

      submitBtn.disabled = false;
      submitBtn.textContent = "Registruj se";

      if (error) {
        showFormError(regForm, "Greška: " + error.message);
        return;
      }

      const success = regForm.parentElement.querySelector(".form-success");
      if (success) {
        success.textContent = "✅ Nalog je uspešno napravljen! Preusmeravamo te...";
        success.classList.add("show");
      }
      regForm.reset();
      setTimeout(() => { window.location.href = "index.html"; }, 1200);
    });
  }

  // ---- Prijava ----
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      clearFormError(loginForm);
      const submitBtn = loginForm.querySelector("button[type=submit]");
      const email = document.getElementById("li-email").value.trim();
      const password = document.getElementById("li-lozinka").value;

      submitBtn.disabled = true;
      submitBtn.textContent = "Prijavljivanje...";

      const { data, error } = await window.supabase.auth.signInWithPassword({ email, password });

      submitBtn.disabled = false;
      submitBtn.textContent = "Prijavi se";

      if (error) {
        showFormError(loginForm, "Pogrešan email ili lozinka.");
        return;
      }

      const success = loginForm.parentElement.querySelector(".form-success");
      if (success) success.classList.add("show");
      setTimeout(() => { window.location.href = "index.html"; }, 800);
    });
  }

  // ---- Stanje u headeru (Prijava/Registracija <-> Ime + Odjava) ----
  async function renderAuthHeader() {
    const { data: { session } } = await window.supabase.auth.getSession();
    const navActionGroups = document.querySelectorAll(".nav-actions");

    navActionGroups.forEach(group => {
      const loginLink = group.querySelector('a[href="prijava.html"]');
      const regLink = group.querySelector('a[href="registracija.html"]');
      if (!loginLink || !regLink) return; // već zamenjeno ili nije standardna grupa

      if (session) {
        const name = session.user.user_metadata?.full_name || session.user.email;
        const firstName = name.split(" ")[0];

        const userLabel = document.createElement("span");
        userLabel.className = "btn btn-outline btn-sm";
        userLabel.style.cursor = "default";
        userLabel.textContent = "👋 " + firstName;

        const logoutBtn = document.createElement("button");
        logoutBtn.type = "button";
        logoutBtn.className = "btn btn-primary btn-sm";
        logoutBtn.textContent = "Odjava";
        logoutBtn.addEventListener("click", async () => {
          await window.supabase.auth.signOut();
          window.location.href = "index.html";
        });

        loginLink.replaceWith(userLabel);
        regLink.replaceWith(logoutBtn);
      }
    });
  }

  await renderAuthHeader();

  window.supabase.auth.onAuthStateChange(() => {
    // Osveži header kad se promeni stanje prijave (npr. u drugom tabu)
    renderAuthHeader();
  });
}

/* ---------- Objavi projekat: upis u Supabase (projects tabela) ---------- */
function initProjectForms() {
  if (!window.supabase) return;

  async function handleProjectSubmit(form, buildPayload) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      clearFormError(form);

      const { data: { session } } = await window.supabase.auth.getSession();
      if (!session) {
        showFormError(form, "Moraš biti prijavljen/a da bi objavio/la projekat. Preusmeravamo te na prijavu...");
        setTimeout(() => { window.location.href = "prijava.html"; }, 1500);
        return;
      }

      const submitBtn = form.querySelector("button[type=submit]");
      submitBtn.disabled = true;
      const originalText = submitBtn.textContent;
      submitBtn.textContent = "Slanje...";

      const payload = buildPayload(session.user.id);
      const { error } = await window.supabase.from("projects").insert(payload);

      submitBtn.disabled = false;
      submitBtn.textContent = originalText;

      if (error) {
        showFormError(form, "Greška pri slanju: " + error.message);
        return;
      }

      const success = form.parentElement.querySelector(".form-success");
      if (success) {
        success.classList.add("show");
        success.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      form.reset();
    });
  }

  const brzaForm = document.getElementById("brzaForm");
  if (brzaForm) {
    handleProjectSubmit(brzaForm, (userId) => ({
      client_id: userId,
      title: document.getElementById("bp-potreba").value.slice(0, 80),
      description: document.getElementById("bp-potreba").value,
      budget: document.getElementById("bp-budzet").value,
      deadline: null,
      category: null
    }));
  }

  const detaljnoForm = document.getElementById("detaljnoForm");
  if (detaljnoForm) {
    handleProjectSubmit(detaljnoForm, (userId) => ({
      client_id: userId,
      title: document.getElementById("dz-naziv").value,
      description: document.getElementById("dz-opis").value,
      budget: document.getElementById("dz-budzet").value,
      deadline: null,
      category: document.getElementById("dz-kategorija").value
    }));
  }
}

/* ---------- Objavi projekat: pop-up izbor tipa objave ---------- */
function initProjectChoice() {
  const backdrop = document.getElementById("choiceModalBackdrop");
  if (!backdrop) return;

  const closeBtn = document.getElementById("choiceModalClose");
  const reopenBtn = document.getElementById("reopenChoiceBtn");
  const choiceCards = backdrop.querySelectorAll(".choice-card");
  const tabs = document.querySelectorAll(".forms-tabs button");
  const panels = document.querySelectorAll(".form-panel");

  function openModal() {
    backdrop.classList.add("open");
  }

  function closeModal() {
    backdrop.classList.remove("open");
  }

  function selectPanel(targetId) {
    tabs.forEach(t => t.classList.toggle("active", t.dataset.target === targetId));
    panels.forEach(p => p.classList.toggle("active", p.id === targetId));
  }

  choiceCards.forEach(card => {
    card.addEventListener("click", () => {
      selectPanel(card.dataset.choice);
      closeModal();
      const panel = document.getElementById(card.dataset.choice);
      if (panel) panel.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  if (reopenBtn) reopenBtn.addEventListener("click", openModal);

  backdrop.addEventListener("click", (e) => {
    if (e.target === backdrop) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });

  // Pop-up se lepo pojavi kratko nakon učitavanja stranice
  setTimeout(openModal, 350);
}

/* =========================================================
   ZAŠTITA KOMUNIKACIJE — detekcija pokušaja razmene
   kontakt podataka van platforme (email, telefon, WhatsApp,
   Viber, Telegram, Instagram, Facebook, Discord, Skype...).

   Ovo je frontend heuristika (nema pravog backend moderatora).
   Cilj je da smanji, a ne da 100% spreči, izlazak komunikacije
   sa platforme — i da ne blokira normalan sadržaj
   (npr. "HTML5", "email marketing", "Instagram marketing").
   ========================================================= */

const CONTACT_WARNING_MESSAGE =
  "Radi zaštite obe strane, komunikacija i plaćanje treba da ostanu na BalkanGigu. " +
  "Deljenje direktnih kontakt podataka može ukloniti zaštitu projekta i pogodnosti platforme.";

const CONTACT_PLATFORM_WORDS = [
  "whatsapp", "watsap", "vatsap", "viber", "telegram", "tviter", "twitter",
  "fejsbuk", "facebook", "diskord", "discord", "skype", "snapchat", "snepčet",
  "messenger", "linkedin", "tiktok"
];

const CONTACT_EMAIL_PROVIDERS = [
  "gmail", "yahoo", "hotmail", "outlook", "protonmail", "icloud"
];

const CONTACT_DOT_WORDS = ["tačka", "tacka", "dot"];

const CONTACT_INVITATION_SIGNALS = [
  "dodaj me", "pišite mi", "pisi mi", "piši mi", "kontaktiraj me", "moj broj",
  "broj je", "broj:", "pozovi me", "javi mi se na", "napiši mi na",
  "dm me", "izvan platforme", "van platforme", "direktno na", "nazovi me",
  "moj majl", "moj mejl", "moj email"
];

const CONTACT_NUMBER_WORDS = [
  "nula", "jedan", "jedna", "dva", "dve", "tri", "četiri", "cetiri",
  "pet", "šest", "sest", "sedam", "osam", "devet"
];

function detectContactAttempt(rawText) {
  const text = (rawText || "").trim();
  if (!text) return false;
  const t = text.toLowerCase();

  // 1) Standardna email adresa
  const emailRegex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/i;
  if (emailRegex.test(text)) return true;

  // 2) Namerno "prikrivena" email adresa: "ime (at) gmail (dot) com"
  const hasProvider = CONTACT_EMAIL_PROVIDERS.some(p => t.includes(p));
  const hasDotWord = CONTACT_DOT_WORDS.some(w => t.includes(w));
  if (hasProvider && (hasDotWord || t.includes(" at "))) return true;

  // 3) Broj telefona — niz cifara (sa ili bez razmaka/crtica/tačaka), 8+ cifara ukupno
  const phoneLike = text.match(/(\+?\d[\d\s\-.()]{5,}\d)/g) || [];
  const hasPhoneNumber = phoneLike.some(seq => seq.replace(/\D/g, "").length >= 8);
  if (hasPhoneNumber) return true;

  // 4) Cifre napisane rečima ("nula šest četiri jedan dva tri...")
  const words = t.split(/[^a-zšđčćžа-я]+/i).filter(Boolean);
  let run = 0, maxRun = 0;
  for (const w of words) {
    if (CONTACT_NUMBER_WORDS.includes(w)) { run++; maxRun = Math.max(maxRun, run); }
    else run = 0;
  }
  if (maxRun >= 5) return true;

  // 5) Pominjanje platforme za poruke ZAJEDNO sa pozivom da se pređe na nju
  //    (samo pominjanje reči poput "Instagram" ili "email marketing" se NE blokira)
  const hasPlatform = CONTACT_PLATFORM_WORDS.some(p => t.includes(p));
  const hasHandle = /(^|\s)@[a-z0-9_.]{2,}/i.test(text);
  const hasInvitation = CONTACT_INVITATION_SIGNALS.some(s => t.includes(s));
  if (hasPlatform && (hasHandle || hasInvitation)) return true;

  return false;
}

/* =========================================================
   PORUKE — chat u aplikaciji + plaćanje preko PayPal-a
   Sve poruke i statusi poslova čuvaju se lokalno
   (localStorage) jer sajt nema pravi backend/server.
   ========================================================= */

const CHAT_REPLIES = [
  "Naravno, javljam ti se čim proverim detalje.",
  "Zvuči dobro, mogu to da uradim u dogovorenom roku.",
  "Hvala na poruci! Šaljem ti predlog do sutra.",
  "Može, samo mi pošalji još malo detalja oko projekta.",
  "Radim na tome, javiću ti čim imam prvu verziju."
];

function formatChatTime(ts) {
  const d = new Date(ts);
  return d.toLocaleTimeString("sr-RS", { hour: "2-digit", minute: "2-digit" });
}

async function initChatPage() {
  const shell = document.getElementById("chatShell");
  if (!shell) return;
  if (!window.supabase) return;

  const { data: { session } } = await window.supabase.auth.getSession();
  if (!session) {
    // Poruke zahtevaju prijavu — bez naloga nema sa čijeg imena da se šalje poruka.
    window.location.href = "prijava.html";
    return;
  }
  const myId = session.user.id;

  const listEl = document.getElementById("chatListItems");
  const searchEl = document.getElementById("chatListSearch");
  const windowHead = document.getElementById("chatWindowHead");
  const windowEmpty = document.getElementById("chatWindowEmpty");
  const windowBody = document.getElementById("chatWindowBody");
  const messagesEl = document.getElementById("chatMessages");
  const jobPanel = document.getElementById("chatJobPanel");
  const textarea = document.getElementById("chatTextarea");
  const sendBtn = document.getElementById("chatSendBtn");
  const backBtn = document.getElementById("chatBackBtn");
  const contactWarning = document.getElementById("contactWarning");
  const attachBtn = document.getElementById("chatAttachBtn");
  const fileInput = document.getElementById("chatFileInput");

  const MAX_FILE_SIZE_FOR_PREVIEW = 4 * 1024 * 1024; // 4MB

  let currentId = null;
  let contactWarningTimer = null;
  let allMessages = []; // sve prave poruke iz baze koje uključuju mene
  const partnerCache = {}; // id -> { id, name, img, role }

  /* ---- Notifikacija u naslovu taba kad stigne nova poruka ---- */
  const originalTitle = document.title;
  let unreadCount = 0;

  function updateTitleNotification() {
    document.title = unreadCount > 0 ? `(${unreadCount}) Nova poruka! · ${originalTitle}` : originalTitle;
    setFaviconBadge(unreadCount > 0);
  }

  function markAsRead() {
    if (unreadCount === 0) return;
    unreadCount = 0;
    updateTitleNotification();
  }

  /* ---- Crvena tačkica na favikoni (vidi se i kad je naslov taba skraćen) ---- */
  function setFaviconBadge(showDot) {
    const link = document.querySelector("link[rel='icon']");
    if (!link) return;
    const dot = showDot ? `<circle cx="25" cy="7" r="6" fill="#ef4444" stroke="#ffffff" stroke-width="2"/>` : "";
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#2563eb"/><stop offset="1" stop-color="#14b8a6"/></linearGradient></defs><rect width="32" height="32" rx="8" fill="url(#g)"/><text x="16" y="22" font-family="Arial,sans-serif" font-weight="800" font-size="18" fill="white" text-anchor="middle">B</text>${dot}</svg>`;
    link.href = "data:image/svg+xml," + encodeURIComponent(svg);
  }

  /* ---- Toast obaveštenje gore na stranici kad stigne poruka iz drugog razgovora ---- */
  const toastEl = document.getElementById("chatToast");
  let toastHideTimer = null;
  function showNewMessageToast(partner, previewText) {
    if (!toastEl || !partner) return;
    toastEl.innerHTML = `
      <img src="${partner.img}" alt="${partner.name}" onerror="this.onerror=null;this.src='https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(partner.name)}&backgroundType=gradientLinear';">
      <div class="chat-toast-body">
        <strong>${partner.name}</strong>
        <span>${previewText}</span>
      </div>
    `;
    toastEl.onclick = () => { selectConversation(partner.id); toastEl.classList.remove("show"); };
    toastEl.classList.add("show");
    clearTimeout(toastHideTimer);
    toastHideTimer = setTimeout(() => toastEl.classList.remove("show"), 5000);
  }

  /* ---- Desktop notifikacija (van browsera) kad je tab u pozadini ---- */
  if (window.Notification && Notification.permission === "default") {
    Notification.requestPermission();
  }
  function showDesktopNotification(partner, previewText) {
    if (!window.Notification || Notification.permission !== "granted" || !document.hidden) return;
    try {
      const n = new Notification(`Nova poruka od ${partner.name}`, { body: previewText, icon: partner.img });
      n.onclick = () => { window.focus(); };
    } catch (e) { /* neki browseri ne dozvoljavaju iz raznih razloga — tiho ignoriši */ }
  }

  /* ---- Job status i fajlovi ostaju lokalni (demo) po paru korisnika ----
     Napomena: status posla (u toku/završeno/plaćeno) i prilozi fajlova
     još nisu deo baze (nisu vezani za konkretan "project"), pa i dalje
     žive u localStorage-u, samo sad odvojeno po (moj-id + sagovornik-id)
     paru umesto samo po id-u freelancera. Prave poruke (tekst) idu u bazu. */
  function pairKey(otherId, suffix) {
    return `bg_chat_${myId}_${otherId}_${suffix}`;
  }
  function getJobStatus(otherId) {
    return localStorage.getItem(pairKey(otherId, "status")) || "u_toku";
  }
  function setJobStatus(otherId, status) {
    localStorage.setItem(pairKey(otherId, "status"), status);
  }
  function getLocalFileMessages(otherId) {
    const raw = localStorage.getItem(pairKey(otherId, "files"));
    if (!raw) return [];
    try { return JSON.parse(raw); } catch (e) { return []; }
  }
  function saveLocalFileMessages(otherId, arr) {
    localStorage.setItem(pairKey(otherId, "files"), JSON.stringify(arr));
  }

  /* ---- Pravi profil sagovornika (freelancer ili klijent) ---- */
  async function fetchPartnerProfile(id) {
    if (partnerCache[id]) return partnerCache[id];

    const fl = FREELANCERS.find(f => String(f.id) === String(id));
    if (fl) {
      partnerCache[id] = { id: fl.id, name: fl.name, img: fl.img, role: fl.role };
      return partnerCache[id];
    }

    const { data } = await window.supabase
      .from("profiles")
      .select("id, full_name, avatar_url, category, role")
      .eq("id", id)
      .single();

    const fallbackImg = (name) => `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(name || "Korisnik")}&backgroundType=gradientLinear`;

    if (data) {
      const categoryNames = Object.fromEntries(CATEGORIES.map(c => [c.id, c.name]));
      partnerCache[id] = {
        id: data.id,
        name: data.full_name || "Korisnik",
        img: data.avatar_url || fallbackImg(data.full_name),
        role: data.role === "freelancer" ? (categoryNames[data.category] || "Freelancer") : "Klijent"
      };
    } else {
      partnerCache[id] = { id, name: "Korisnik", img: fallbackImg(), role: "" };
    }
    return partnerCache[id];
  }

  /* ---- Učitavanje svih pravih poruka koje uključuju mene ---- */
  async function loadAllMessages() {
    const { data, error } = await window.supabase
      .from("messages")
      .select("*")
      .or(`sender_id.eq.${myId},receiver_id.eq.${myId}`)
      .order("created_at", { ascending: true });
    allMessages = (!error && data) ? data : [];
  }

  function partnerIdsFromMessages() {
    const ids = new Set();
    allMessages.forEach(m => ids.add(m.sender_id === myId ? m.receiver_id : m.sender_id));
    return Array.from(ids);
  }

  function dbMessagesWith(otherId) {
    return allMessages
      .filter(m => (m.sender_id === myId && m.receiver_id === otherId) || (m.sender_id === otherId && m.receiver_id === myId))
      .map(m => ({ id: m.id, from: m.sender_id === myId ? "me" : "them", text: m.content, time: new Date(m.created_at).getTime(), seen: !!m.read }));
  }

  function mergedMessagesWith(otherId) {
    const fromDb = dbMessagesWith(otherId);
    const fromFiles = getLocalFileMessages(otherId);
    return [...fromDb, ...fromFiles].sort((a, b) => a.time - b.time);
  }

  function lastMessageWith(otherId) {
    const msgs = mergedMessagesWith(otherId);
    return msgs[msgs.length - 1] || null;
  }

  async function sendDbMessage(otherId, text) {
    const { error } = await window.supabase.from("messages").insert({
      sender_id: myId,
      receiver_id: otherId,
      content: text
    });
    return error;
  }

  /* ---- "Viđeno": označi primljene poruke od otherId kao pročitane.
     Koristi postojeću "read" boolean kolonu u messages tabeli. ---- */
  async function markConversationRead(otherId) {
    if (document.hidden) return; // ne označavaj kao pročitano dok korisnik ne gleda u tab
    const unread = allMessages.filter(m => m.sender_id === otherId && m.receiver_id === myId && !m.read);
    if (unread.length === 0) return;
    const ids = unread.map(m => m.id);
    const { error } = await window.supabase
      .from("messages")
      .update({ read: true })
      .in("id", ids)
      .eq("receiver_id", myId);
    if (!error) {
      unread.forEach(m => { m.read = true; });
      if (String(currentId) === String(otherId)) renderMessages(otherId);
    } else {
      console.log("[BalkanGig chat] Nije uspelo obeležavanje kao pročitano (verovatno nedostaje UPDATE RLS politika na messages tabeli):", error.message);
    }
  }

  /* ---- Provera novih poruka: zove je i realtime event i redovni polling.
     Ovo je "mreža za slučaj" ako realtime iz nekog razloga ne stigne
     (npr. Realtime nije uključen za tabelu "messages" u Supabase-u,
     ili je konekcija na websocket ispala) — tako korisnik nikad ne mora
     ručno da refresuje ceo tab da bi video novu poruku. ---- */
  async function checkForNewMessages() {
    const prevIds = new Set(allMessages.map(m => m.id));
    await loadAllMessages();
    const newIncoming = allMessages.filter(m => !prevIds.has(m.id) && m.sender_id !== myId);

    if (newIncoming.length > 0) {
      const isTabHidden = document.hidden;
      const isDifferentChat = newIncoming.some(m => String(m.sender_id) !== String(currentId));

      if (isTabHidden || isDifferentChat) {
        unreadCount += newIncoming.length;
        updateTitleNotification();

        const last = newIncoming[newIncoming.length - 1];
        const partner = await fetchPartnerProfile(last.sender_id);
        showDesktopNotification(partner, last.content);
        if (isDifferentChat) showNewMessageToast(partner, last.content);
      }
    }

    if (currentId !== null) {
      renderMessages(currentId);
      await markConversationRead(currentId);
    }
    await renderList(searchEl ? searchEl.value : "");
  }

  /* ---- Prisustvo (online / u chatu) i "X kuca..." po paru korisnika.
     Koristi Supabase Realtime Presence + Broadcast na kanalu posvećenom
     baš tom paru (ja + sagovornik), odvojeno od globalnog kanala za poruke. ---- */
  let presenceChannel = null;
  let typingHideTimer = null;
  let typingSendTimer = null;
  let typingSendActive = false;

  function pairChannelName(otherId) {
    return "chat-pair-" + [String(myId), String(otherId)].sort().join("_");
  }

  function setOnlineIndicator(isOnline) {
    const dot = document.getElementById("chatPartnerOnlineDot");
    const statusText = document.getElementById("chatPartnerStatusText");
    if (dot) dot.classList.toggle("online", !!isOnline);
    if (statusText) {
      if (!statusText.dataset.role) statusText.dataset.role = statusText.textContent;
      statusText.textContent = isOnline ? "Online sada" : statusText.dataset.role;
    }
  }

  function setTypingIndicator(show) {
    const row = document.getElementById("chatTypingRow");
    if (!row) return;
    if (show) {
      const label = document.getElementById("chatTypingText");
      const p = partnerCache[currentId];
      if (label) label.textContent = (p ? p.name : "Sagovornik") + " kuca...";
      row.style.display = "flex";
      messagesEl.scrollTop = messagesEl.scrollHeight;
    } else {
      row.style.display = "none";
    }
  }

  function leavePairChannel() {
    if (presenceChannel) {
      window.supabase.removeChannel(presenceChannel);
      presenceChannel = null;
    }
    clearTimeout(typingHideTimer);
    clearTimeout(typingSendTimer);
    typingSendActive = false;
    setTypingIndicator(false);
    setOnlineIndicator(false);
  }

  function joinPairChannel(otherId) {
    leavePairChannel();
    presenceChannel = window.supabase.channel(pairChannelName(otherId), {
      config: { presence: { key: String(myId) } }
    });

    presenceChannel
      .on("presence", { event: "sync" }, () => {
        const state = presenceChannel.presenceState();
        const partnerPresences = state[String(otherId)] || [];
        setOnlineIndicator(partnerPresences.length > 0);
      })
      .on("broadcast", { event: "typing" }, (payload) => {
        if (!payload.payload || String(payload.payload.from) !== String(otherId)) return;
        clearTimeout(typingHideTimer);
        if (payload.payload.isTyping) {
          setTypingIndicator(true);
          typingHideTimer = setTimeout(() => setTypingIndicator(false), 3000);
        } else {
          setTypingIndicator(false);
        }
      })
      .subscribe(async (status) => {
        if (status === "SUBSCRIBED") {
          await presenceChannel.track({ online_at: new Date().toISOString() });
        }
      });
  }

  function sendTypingSignal(isTyping) {
    if (!presenceChannel || currentId === null) return;
    presenceChannel.send({ type: "broadcast", event: "typing", payload: { from: myId, isTyping } });
  }

  function showContactWarning() {
    if (!contactWarning) return;
    contactWarning.textContent = "🛡️ " + CONTACT_WARNING_MESSAGE;
    contactWarning.classList.add("show");
    textarea.classList.remove("input-shake");
    void textarea.offsetWidth;
    textarea.classList.add("input-shake");
    clearTimeout(contactWarningTimer);
    contactWarningTimer = setTimeout(() => {
      contactWarning.classList.remove("show");
    }, 6000);
  }

  function hideContactWarning() {
    if (!contactWarning) return;
    clearTimeout(contactWarningTimer);
    contactWarning.classList.remove("show");
  }

  const params = new URLSearchParams(window.location.search);
  const preselectId = params.get("id");

  async function renderList(filter) {
    const q = (filter || "").toLowerCase().trim();
    const partnerIds = partnerIdsFromMessages();
    if (preselectId && !partnerIds.includes(preselectId)) partnerIds.push(preselectId);

    if (partnerIds.length === 0) {
      listEl.innerHTML = `<div style="padding:20px; color:var(--text-soft); font-size:0.85rem;">Nemaš još nijedan razgovor. Otvori profil freelancera i klikni "Pošalji poruku" da započneš.</div>`;
      return;
    }

    const profiles = await Promise.all(partnerIds.map(fetchPartnerProfile));

    const sorted = profiles.slice().sort((a, b) => {
      const la = lastMessageWith(a.id);
      const lb = lastMessageWith(b.id);
      return (lb ? lb.time : 0) - (la ? la.time : 0);
    });

    const filtered = sorted.filter(p => !q || p.name.toLowerCase().includes(q) || (p.role || "").toLowerCase().includes(q));

    listEl.innerHTML = filtered.map(p => {
      const status = getJobStatus(p.id);
      const dotClass = status === "placeno" ? "paid" : status === "zavrseno" ? "done" : "";
      const last = lastMessageWith(p.id);
      const preview = last ? ((last.from === "me" ? "Ti: " : "") + (last.type === "file" ? "📎 " + last.fileName : last.text)) : "Započni razgovor...";
      return `
        <button type="button" class="chat-list-item${String(p.id) === String(currentId) ? " active" : ""}" data-id="${p.id}">
          <img class="chat-list-avatar" src="${p.img}" alt="${p.name}" loading="lazy" onerror="this.onerror=null;this.src='https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(p.name)}&backgroundType=gradientLinear';">
          <div class="chat-list-item-body">
            <div class="chat-list-item-top">
              <strong>${p.name}</strong>
              <span class="chat-status-dot ${dotClass}"></span>
            </div>
            <div class="chat-list-item-preview">${preview}</div>
          </div>
        </button>
      `;
    }).join("") || `<div style="padding:20px; color:var(--text-soft); font-size:0.85rem;">Nema razgovora koji odgovaraju pretrazi.</div>`;

    listEl.querySelectorAll(".chat-list-item").forEach(btn => {
      btn.addEventListener("click", () => selectConversation(btn.dataset.id));
    });
  }

  function renderJobPanel(p) {
    const status = getJobStatus(p.id);
    let badgeClass = "", badgeText = "U toku";
    if (status === "zavrseno") { badgeClass = "done"; badgeText = "Završeno"; }
    if (status === "placeno") { badgeClass = "paid"; badgeText = "Plaćeno ✓"; }

    document.getElementById("chatJobBadge").className = `job-status-badge ${badgeClass}`;
    document.getElementById("chatJobBadge").textContent = badgeText;

    const priceLabel = p.price ? `Cena: ${p.price}` : "";
    let actionsHTML = "";
    if (status === "u_toku") {
      actionsHTML = `<button type="button" class="btn btn-sm btn-done" id="markDoneBtn">✅ Označi kao završeno</button>`;
    } else if (status === "zavrseno") {
      actionsHTML = `<button type="button" class="btn btn-primary btn-sm" id="payNowBtn">💳 Plati preko PayPal-a</button>`;
    } else {
      actionsHTML = `<span style="color:#4ade80; font-weight:700; font-size:0.85rem;">Posao je plaćen 🎉</span>`;
    }

    jobPanel.innerHTML = `
      <div class="chat-job-panel-info">
        <strong>Razgovor sa: ${p.name}${p.role ? " — " + p.role : ""}</strong>
        <span>${priceLabel}</span>
      </div>
      <div class="chat-job-panel-actions">${actionsHTML}</div>
    `;

    const markBtn = document.getElementById("markDoneBtn");
    if (markBtn) markBtn.addEventListener("click", () => markJobDone(p.id));

    const payBtn = document.getElementById("payNowBtn");
    if (payBtn) payBtn.addEventListener("click", () => openPaymentModal(p));
  }

  function fileTypeIcon(name) {
    const ext = (name.split(".").pop() || "").toLowerCase();
    if (["jpg", "jpeg", "png", "gif", "webp", "svg"].includes(ext)) return "🖼️";
    if (["pdf"].includes(ext)) return "📕";
    if (["doc", "docx"].includes(ext)) return "📄";
    if (["xls", "xlsx", "csv"].includes(ext)) return "📊";
    if (["zip", "rar", "7z"].includes(ext)) return "🗜️";
    if (["psd", "ai", "fig", "sketch"].includes(ext)) return "🎨";
    return "📎";
  }

  function formatFileSize(bytes) {
    if (bytes < 1024) return bytes + " B";
    if (bytes < 1024 * 1024) return Math.round(bytes / 1024) + " KB";
    return (bytes / (1024 * 1024)).toFixed(1) + " MB";
  }

  function renderMessages(id) {
    const msgs = mergedMessagesWith(id);
    if (msgs.length === 0) {
      messagesEl.innerHTML = `<div class="msg msg-system">Ovo je početak vašeg razgovora. Napiši prvu poruku! 👋</div>`;
      return;
    }
    messagesEl.innerHTML = msgs.map(m => {
      const cls = m.from === "me" ? "msg-own" : m.from === "system" ? "msg-system" : "msg-theirs";
      if (m.type === "file") {
        const isImage = m.fileData && m.fileData.startsWith("data:image");
        const thumb = isImage
          ? `<img class="msg-file-thumb" src="${m.fileData}" alt="${m.fileName}">`
          : `<span class="msg-file-icon">${fileTypeIcon(m.fileName)}</span>`;
        const downloadAttr = m.fileData ? `href="${m.fileData}" download="${m.fileName}"` : `href="javascript:void(0)" onclick="return false;"`;
        return `
          <div class="msg ${cls} msg-file">
            <a class="msg-file-card" ${downloadAttr} title="${m.fileData ? "Preuzmi fajl" : "Fajl nije dostupan za preuzimanje u demo verziji"}">
              ${thumb}
              <span class="msg-file-info">
                <strong>${m.fileName}</strong>
                <span>${formatFileSize(m.fileSize)}${m.fileData ? " · preuzmi" : " · demo (bez sadržaja)"}</span>
              </span>
            </a>
          </div>
        `;
      }
      return `<div class="msg ${cls}"><span class="msg-text">${m.text}</span>${m.from === "me" ? `<span class="msg-meta"><span>${formatChatTime(m.time)}</span><span class="msg-seen${m.seen ? " seen" : ""}" title="${m.seen ? "Viđeno" : "Poslato"}">${m.seen ? "✓✓" : "✓"}</span></span>` : ""}</div>`;
    }).join("");
    messagesEl.scrollTop = messagesEl.scrollHeight;
  }

  async function selectConversation(id) {
    currentId = id;
    const p = await fetchPartnerProfile(id);
    if (!p) return;

    shell.classList.add("chat-open");
    windowEmpty.style.display = "none";
    windowBody.style.display = "flex";

    windowHead.innerHTML = `
      <div class="chat-window-head-info">
        <button type="button" class="chat-back-btn" id="chatBackBtnInner" aria-label="Nazad">←</button>
        <div class="chat-avatar-wrap">
          <img src="${p.img}" alt="${p.name}" onerror="this.onerror=null;this.src='https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(p.name)}&backgroundType=gradientLinear';">
          <span class="chat-online-dot" id="chatPartnerOnlineDot" title="Online"></span>
        </div>
        <div>
          <h3>${p.name}</h3>
          <span id="chatPartnerStatusText">${p.role || ""}</span>
        </div>
      </div>
      <div class="chat-window-head-actions">
        <span class="job-status-badge" id="chatJobBadge"></span>
        <button type="button" class="chat-icon-btn" id="chatCallBtn" title="Audio poziv" aria-label="Audio poziv">📞</button>
        <button type="button" class="chat-icon-btn" id="chatVideoBtn" title="Video poziv" aria-label="Video poziv">🎥</button>
        <button type="button" class="chat-icon-btn chat-report-btn" id="chatReportBtn" title="Prijavi razgovor" aria-label="Prijavi razgovor">🚩</button>
      </div>
    `;
    document.getElementById("chatBackBtnInner").addEventListener("click", () => {
      shell.classList.remove("chat-open");
    });

    const reportBtnInner = document.getElementById("chatReportBtn");
    if (reportBtnInner) {
      reportBtnInner.addEventListener("click", () => {
        if (window.__balkanGigOpenReportModal) window.__balkanGigOpenReportModal(p);
      });
    }

    const callBtnInner = document.getElementById("chatCallBtn");
    if (callBtnInner) {
      callBtnInner.addEventListener("click", () => {
        if (window.__balkanGigOpenCallModal) window.__balkanGigOpenCallModal(p, "audio");
      });
    }

    const videoBtnInner = document.getElementById("chatVideoBtn");
    if (videoBtnInner) {
      videoBtnInner.addEventListener("click", () => {
        if (window.__balkanGigOpenCallModal) window.__balkanGigOpenCallModal(p, "video");
      });
    }

    renderJobPanel(p);
    renderMessages(id);
    await renderList(searchEl ? searchEl.value : "");
    textarea.focus();
    markAsRead();
    joinPairChannel(id);
    await markConversationRead(id);
  }

  async function sendMessage() {
    const text = textarea.value.trim();
    if (!text || currentId === null) return;

    if (detectContactAttempt(text)) {
      showContactWarning();
      return;
    }
    hideContactWarning();

    if (typingSendActive) {
      typingSendActive = false;
      clearTimeout(typingSendTimer);
      sendTypingSignal(false);
    }

    textarea.value = "";
    sendBtn.disabled = true;

    const error = await sendDbMessage(currentId, text);
    sendBtn.disabled = false;

    if (error) {
      console.error("Greška pri slanju poruke:", error.message);
      textarea.value = text; // vrati tekst nazad da korisnik ne izgubi poruku
      return;
    }

    await loadAllMessages();
    renderMessages(currentId);
    await renderList(searchEl ? searchEl.value : "");
  }

  function markJobDone(id) {
    setJobStatus(id, "zavrseno");
    partnerCache[id] && renderJobPanel(partnerCache[id]);
    renderList(searchEl ? searchEl.value : "");
  }

  function sendFileMessage(file) {
    if (currentId === null) return;
    const otherId = currentId;

    function pushFileMsg(fileData) {
      const files = getLocalFileMessages(otherId);
      files.push({
        from: "me",
        type: "file",
        fileName: file.name,
        fileSize: file.size,
        fileData: fileData || null,
        time: Date.now()
      });
      saveLocalFileMessages(otherId, files);
      renderMessages(otherId);
      renderList(searchEl ? searchEl.value : "");
    }

    // Napomena: prilozi fajlova su i dalje samo lokalni demo (čuvaju se u
    // ovom browseru, ne u bazi) — za pravo deljenje fajlova između korisnika
    // trebalo bi dodati Supabase Storage bucket za chat-priloge.
    if (file.size <= MAX_FILE_SIZE_FOR_PREVIEW && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = () => pushFileMsg(reader.result);
      reader.onerror = () => pushFileMsg(null);
      reader.readAsDataURL(file);
    } else {
      pushFileMsg(null);
    }
  }

  if (attachBtn && fileInput) {
    attachBtn.addEventListener("click", () => {
      if (currentId === null) return;
      fileInput.click();
    });
    fileInput.addEventListener("change", () => {
      const files = Array.from(fileInput.files || []);
      files.forEach(sendFileMessage);
      fileInput.value = "";
    });
  }

  sendBtn.addEventListener("click", sendMessage);
  textarea.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  });
  textarea.addEventListener("input", hideContactWarning);
  textarea.addEventListener("input", () => {
    if (currentId === null || !presenceChannel) return;
    if (!typingSendActive) {
      typingSendActive = true;
      sendTypingSignal(true);
    }
    clearTimeout(typingSendTimer);
    typingSendTimer = setTimeout(() => {
      typingSendActive = false;
      sendTypingSignal(false);
    }, 1800);
  });
  if (searchEl) searchEl.addEventListener("input", () => renderList(searchEl.value));
  if (backBtn) backBtn.addEventListener("click", () => shell.classList.remove("chat-open"));

  await loadAllMessages();
  await renderList("");

  if (preselectId) {
    await selectConversation(preselectId);
  }

  // Realtime: osveži razgovor kad stigne nova poruka (od mene ili sagovornika)
  let realtimeChannel = null;

  function subscribeRealtime() {
    realtimeChannel = window.supabase
      .channel("messages-" + myId)
      .on("postgres_changes", { event: "INSERT", schema: "public", table: "messages" }, async (payload) => {
        const m = payload.new;
        if (m.sender_id !== myId && m.receiver_id !== myId) return; // nije moja poruka
        await checkForNewMessages();
      })
      .on("postgres_changes", { event: "UPDATE", schema: "public", table: "messages" }, (payload) => {
        // Stiže npr. kad sagovornik pročita moju poruku (read postane true) —
        // ažuriraj kvačicu "viđeno" bez čekanja na sledeći polling ciklus.
        const m = payload.new;
        if (m.sender_id !== myId && m.receiver_id !== myId) return;
        const idx = allMessages.findIndex(x => x.id === m.id);
        if (idx !== -1) allMessages[idx] = m;
        if (currentId !== null && (String(m.sender_id) === String(currentId) || String(m.receiver_id) === String(currentId))) {
          renderMessages(currentId);
        }
      })
      .subscribe((status, err) => {
        // Otvori konzolu u browseru (F12 → Console) da vidiš ovaj status.
        // Očekivano: "SUBSCRIBED". Ako piše "CHANNEL_ERROR" ili "TIMED_OUT",
        // realtime konekcija ne uspeva (najčešće zbog RLS SELECT politike
        // na tabeli messages, ili mrežnog/firewall problema).
        console.log("[BalkanGig chat] Realtime status:", status, err || "");
      });
  }
  subscribeRealtime();

  // Fallback polling: proveri nove poruke na svake 4 sekunde, bez obzira
  // na realtime — ovo garantuje da poruke stižu i ako websocket konekcija
  // ispadne ili Realtime nije uključen za tabelu u Supabase podešavanjima.
  const POLL_INTERVAL_MS = 4000;
  setInterval(() => {
    checkForNewMessages();
  }, POLL_INTERVAL_MS);

  // Kad se korisnik vrati na tab (ili ga fokusira), odmah proveri poruke,
  // skloni notifikaciju iz naslova, i ako je websocket konekcija u
  // međuvremenu ispala (npr. laptop je bio u spavanju), ponovo se pretplati.
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) {
      markAsRead();
      checkForNewMessages();
      if (!realtimeChannel || realtimeChannel.state !== "joined") {
        if (realtimeChannel) window.supabase.removeChannel(realtimeChannel);
        subscribeRealtime();
      }
    }
  });
  window.addEventListener("focus", markAsRead);

  // Izloži funkciju za plaćanje globalno (koristi je payment modal)
  window.__balkanGigHandlePaymentSuccess = function (id) {
    setJobStatus(id, "placeno");
    if (String(id) === String(currentId) && partnerCache[id]) {
      renderJobPanel(partnerCache[id]);
    }
    renderList(searchEl ? searchEl.value : "");
  };
}


/* =========================================================
   PLAĆANJE — PayPal modal (u aplikaciji, bez napuštanja sajta)
   ========================================================= */

let paypalSDKPromise = null;

function loadPaypalSDK() {
  if (paypalSDKPromise) return paypalSDKPromise;
  paypalSDKPromise = new Promise((resolve, reject) => {
    if (window.paypal) { resolve(window.paypal); return; }
    const script = document.createElement("script");
    // NAPOMENA ZA VLASNIKA SAJTA:
    // Zameni "test" ispod svojim pravim PayPal Client ID-jem
    // (Live ili Sandbox) da bi plaćanje bilo stvarno funkcionalno.
    script.src = "https://www.paypal.com/sdk/js?client-id=test&currency=EUR&intent=capture";
    script.onload = () => resolve(window.paypal);
    script.onerror = () => reject(new Error("PayPal SDK nije mogao da se učita"));
    document.body.appendChild(script);
    setTimeout(() => reject(new Error("PayPal SDK timeout")), 4000);
  });
  return paypalSDKPromise;
}

function parsePrice(priceStr) {
  const match = (priceStr || "").match(/[\d.,]+/);
  if (!match) return 50;
  return parseFloat(match[0].replace(",", ".")) || 50;
}

function initPaymentModal() {
  const backdrop = document.getElementById("payModalBackdrop");
  if (!backdrop) return;

  const closeBtn = document.getElementById("payModalClose");
  const body = document.getElementById("payModalBody");

  window.__balkanGigCurrentPayFreelancer = null;

  function close() {
    backdrop.classList.remove("open");
  }

  closeBtn.addEventListener("click", close);
  backdrop.addEventListener("click", (e) => { if (e.target === backdrop) close(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });

  window.__balkanGigOpenPayModal = function (f) {
    window.__balkanGigCurrentPayFreelancer = f;
    const amount = parsePrice(f.price);

    body.innerHTML = `
      <div class="pay-summary">
        <div>
          <div class="pay-summary-label">Plaćanje za "${f.name}" — ${f.role}</div>
        </div>
        <div class="pay-summary-amount">${amount}€</div>
      </div>
      <div id="paypal-button-container"></div>
      <p class="pay-note">Plaćanje se obrađuje bezbedno preko PayPal-a, direktno unutar aplikacije.</p>
    `;

    backdrop.classList.add("open");

    const container = document.getElementById("paypal-button-container");

    function renderDemoButton() {
      container.innerHTML = `<button type="button" class="paypal-demo-btn" id="demoPayBtn">💳 Plati ${amount}€ preko PayPal-a</button>`;
      document.getElementById("demoPayBtn").addEventListener("click", (e) => {
        const btn = e.currentTarget;
        btn.disabled = true;
        btn.textContent = "Obrada plaćanja...";
        setTimeout(() => showPaySuccess(f), 1200);
      });
    }

    loadPaypalSDK().then((paypal) => {
      if (!paypal || !paypal.Buttons) { renderDemoButton(); return; }
      try {
        paypal.Buttons({
          style: { layout: "vertical", color: "gold", shape: "pill", label: "paypal" },
          createOrder: (data, actions) => actions.order.create({
            purchase_units: [{ amount: { value: String(amount), currency_code: "EUR" } }]
          }),
          onApprove: (data, actions) => actions.order.capture().then(() => showPaySuccess(f)),
          onError: () => renderDemoButton()
        }).render("#paypal-button-container");
      } catch (err) {
        renderDemoButton();
      }
    }).catch(() => renderDemoButton());
  };

  function showPaySuccess(f) {
    body.innerHTML = `
      <div class="pay-success">
        <div class="pay-success-icon">✓</div>
        <h3>Plaćanje uspešno!</h3>
        <p>Uplata za "${f.name}" je izvršena preko PayPal-a.</p>
      </div>
    `;
    if (window.__balkanGigHandlePaymentSuccess) {
      window.__balkanGigHandlePaymentSuccess(f.id);
    }
    setTimeout(close, 1800);
  }
}

function openPaymentModal(f) {
  if (window.__balkanGigOpenPayModal) window.__balkanGigOpenPayModal(f);
}

/* =========================================================
   PRIJAVA RAZGOVORA (MODERACIJA)
   Frontend priprema za moderaciju: korisnik može da prijavi
   razgovor. Prijava se čuva lokalno (demo) — pravi sistem
   pregleda i ograničenja naloga zahteva backend.
   ========================================================= */

const REPORT_REASONS = [
  "Pokušaj razmene kontakta van platforme",
  "Neprimereno ponašanje ili jezik",
  "Sumnja na prevaru",
  "Spam ili neželjene poruke",
  "Drugo"
];

function initReportModal() {
  const backdrop = document.getElementById("reportModalBackdrop");
  if (!backdrop) return;

  const closeBtn = document.getElementById("reportModalClose");
  const body = document.getElementById("reportModalBody");

  function close() {
    backdrop.classList.remove("open");
  }

  closeBtn.addEventListener("click", close);
  backdrop.addEventListener("click", (e) => { if (e.target === backdrop) close(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });

  window.__balkanGigOpenReportModal = function (f) {
    if (!f) return;
    body.innerHTML = `
      <p style="margin-bottom:16px;">Prijavi razgovor sa "${f.name}" ako primetiš pokušaj izlaska sa platforme ili neprimereno ponašanje. BalkanGig tim će pregledati prijavu.</p>
      <div class="report-reasons">
        ${REPORT_REASONS.map((r, i) => `
          <label class="report-reason">
            <input type="radio" name="reportReason" value="${r}" ${i === 0 ? "checked" : ""}>
            <span>${r}</span>
          </label>
        `).join("")}
      </div>
      <div class="field full" style="margin-top:14px;">
        <label for="reportNote">Dodatna napomena <span class="opt">(opciono)</span></label>
        <textarea id="reportNote" placeholder="Opiši ukratko šta se dogodilo..."></textarea>
      </div>
      <button type="button" class="btn btn-primary btn-block" id="reportSubmitBtn" style="margin-top:18px;">Pošalji prijavu</button>
    `;
    backdrop.classList.add("open");

    document.getElementById("reportSubmitBtn").addEventListener("click", () => {
      try {
        const reports = JSON.parse(localStorage.getItem("bg_reports") || "[]");
        const reason = body.querySelector('input[name="reportReason"]:checked');
        reports.push({
          freelancerId: f.id,
          freelancerName: f.name,
          reason: reason ? reason.value : REPORT_REASONS[0],
          note: (document.getElementById("reportNote") || {}).value || "",
          time: Date.now()
        });
        localStorage.setItem("bg_reports", JSON.stringify(reports));
      } catch (e) { /* localStorage nedostupan */ }

      body.innerHTML = `
        <div class="pay-success">
          <div class="pay-success-icon">✓</div>
          <h3>Prijava je poslata</h3>
          <p>Hvala — BalkanGig tim će pregledati ovaj razgovor.</p>
        </div>
      `;
      setTimeout(close, 1600);
    });
  };
}

/* =========================================================
   AUDIO/VIDEO POZIVI (UI priprema)
   Pravi poziv zahteva real-time infrastrukturu (WebRTC server,
   signalizaciju, npr. Twilio/Daily.co) koju frontend-only sajt
   nema. Ovde je samo iskren UI koji najavljuje funkciju i
   pokazuje gde će se kasnije povezati.
   ========================================================= */

function initCallModal() {
  const backdrop = document.getElementById("callModalBackdrop");
  if (!backdrop) return;

  const closeBtn = document.getElementById("callModalClose");
  const body = document.getElementById("callModalBody");
  const title = document.getElementById("callModalTitle");

  function close() {
    backdrop.classList.remove("open");
  }

  closeBtn.addEventListener("click", close);
  backdrop.addEventListener("click", (e) => { if (e.target === backdrop) close(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });

  window.__balkanGigOpenCallModal = function (f, kind) {
    if (!f) return;
    const label = kind === "video" ? "Video poziv" : "Audio poziv";
    const icon = kind === "video" ? "🎥" : "📞";
    title.textContent = "Uskoro dostupno";
    body.innerHTML = `
      <div style="text-align:center; padding:6px 0 4px;">
        <div class="pay-success-icon" style="background:rgba(59,130,246,0.14); color:var(--primary);">${icon}</div>
        <h3 style="color:var(--heading); margin-bottom:8px;">${label} sa "${f.name}"</h3>
        <p style="color:var(--text-soft); font-size:0.92rem; line-height:1.6;">
          Pozivi unutar BalkanGig chata su u pripremi — cilj je da i razgovor uživo ostane
          zaštićen na platformi, bez potrebe da razmenjujete brojeve telefona ili nalog na
          drugim aplikacijama. Za sada nastavi dogovor kroz poruke.
        </p>
        <button type="button" class="btn btn-primary btn-block" id="callModalOkBtn" style="margin-top:18px;">Razumem</button>
      </div>
    `;
    backdrop.classList.add("open");
    document.getElementById("callModalOkBtn").addEventListener("click", close);
  };
}
function initContactFieldHints() {
  const ids = ["bp-potreba", "dz-opis"];
  ids.forEach(id => {
    const field = document.getElementById(id);
    if (!field) return;
    const hint = document.createElement("p");
    hint.className = "field-hint";
    hint.textContent = "🛡️ " + CONTACT_WARNING_MESSAGE;
    field.insertAdjacentElement("afterend", hint);

    function check() {
      hint.classList.toggle("show", detectContactAttempt(field.value));
    }
    field.addEventListener("input", check);
    field.addEventListener("blur", check);
  });
}

/* ---------- Prijava / Registracija: role toggle ---------- */
function initAuthToggle() {
  const toggle = document.querySelector(".role-toggle");
  if (!toggle) return;
  const buttons = toggle.querySelectorAll("button");

  // Polja koja se menjaju u zavisnosti od izabrane role (samo na registraciji)
  const imeInput = document.getElementById("re-ime");
  const imeLabel = document.getElementById("re-ime-label");
  const sajtField = document.getElementById("re-sajt-field");

  function applyRoleFields(role) {
    if (!imeLabel || !imeInput) return;
    if (role === "firma") {
      imeLabel.textContent = "Naziv firme";
      imeInput.placeholder = "npr. Balkan Digital d.o.o.";
      if (sajtField) sajtField.hidden = false;
    } else {
      imeLabel.textContent = "Ime i prezime";
      imeInput.placeholder = "npr. Marko Marković";
      if (sajtField) sajtField.hidden = true;
    }
  }

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      applyRoleFields(btn.dataset.role);
    });
  });

  const initiallyActive = toggle.querySelector("button.active");
  applyRoleFields(initiallyActive ? initiallyActive.dataset.role : "klijent");
}

/* ---------- Init ---------- */
document.addEventListener("DOMContentLoaded", async () => {
  initThemeToggle();
  initClickAnimations();
  initMobileNav();
  initHeroSearch();
  await loadFreelancersFromSupabase(); // popuni FREELANCERS pre renderovanja
  populateHomepage();
  initListingPage();
  initProfilePage();
  initForms();
  initProjectChoice();
  initAuthToggle();
  initSupabaseAuth();
  initProjectForms();
  initChatPage();
  initPaymentModal();
  initReportModal();
  initCallModal();
  initContactFieldHints();
  initScrollReveal();
});
