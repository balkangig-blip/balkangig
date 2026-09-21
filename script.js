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
        <img class="freelancer-avatar" src="${f.img}" alt="${f.name}">
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

/* ---------- Mobilni meni ---------- */
function initMobileNav() {
  const btn = document.getElementById("hamburgerBtn");
  const drawer = document.getElementById("mobileNav");
  const closeBtn = document.getElementById("mobileNavClose");
  if (!btn || !drawer) return;
  btn.addEventListener("click", () => drawer.classList.add("open"));
  closeBtn.addEventListener("click", () => drawer.classList.remove("open"));
  drawer.querySelectorAll("a").forEach(a => a.addEventListener("click", () => drawer.classList.remove("open")));
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
  const sortSelect = document.getElementById("sortSelect");
  const resultCount = document.getElementById("resultCount");
  const emptyState = document.getElementById("emptyState");
  const searchInput = document.getElementById("listingSearch");

  // Generiši filtere za usluge iz CATEGORIES (umesto ručno pisanih checkbox-ova)
  filtersForm.innerHTML = CATEGORIES.map(filterOptionHTML).join("");

  if (searchInput && params.get("q")) searchInput.value = params.get("q");

  function getState() {
    const checked = Array.from(filtersForm.querySelectorAll('input[name="kategorija"]:checked')).map(i => i.value);
    return {
      query: (searchInput?.value || "").toLowerCase().trim(),
      categories: checked,
      sort: sortSelect ? sortSelect.value : "preporuceno"
    };
  }

  // Ažurira brojeve pored svake usluge prema trenutnoj pretrazi (živo filtriranje),
  // i vizuelno "zatamni" usluge koje trenutno nemaju nijedan rezultat
  function updateFilterCounts(query) {
    filtersForm.querySelectorAll(".filter-option").forEach(label => {
      const catId = label.dataset.cat;
      const count = FREELANCERS.filter(f => {
        const matchesQuery = !query ||
          f.name.toLowerCase().includes(query) ||
          f.role.toLowerCase().includes(query) ||
          f.tags.join(" ").toLowerCase().includes(query);
        return matchesQuery && f.category === catId;
      }).length;
      label.querySelector(".filter-option-count").textContent = count;
      label.classList.toggle("is-empty", count === 0);
    });
  }

  function render() {
    const { query, categories, sort } = getState();
    let list = FREELANCERS.filter(f => {
      const matchesQuery = !query ||
        f.name.toLowerCase().includes(query) ||
        f.role.toLowerCase().includes(query) ||
        f.tags.join(" ").toLowerCase().includes(query);
      const matchesCategory = categories.length === 0 || categories.includes(f.category);
      return matchesQuery && matchesCategory;
    });

    if (sort === "ocena") list.sort((a, b) => b.rating - a.rating);
    if (sort === "projekti") list.sort((a, b) => b.done - a.done);

    grid.innerHTML = list.map(freelancerCardHTML).join("");
    if (resultCount) resultCount.textContent = list.length;
    if (emptyState) emptyState.classList.toggle("show", list.length === 0);

    updateFilterCounts(query);
    if (clearBtn) clearBtn.hidden = categories.length === 0 && !query;

    initScrollReveal();
  }

  // Predpopuni filter iz URL parametra ?kategorija=
  const preselect = params.get("kategorija");
  if (preselect) {
    const box = filtersForm.querySelector(`input[value="${preselect}"]`);
    if (box) box.checked = true;
  }

  filtersForm.addEventListener("change", render);
  if (sortSelect) sortSelect.addEventListener("change", render);
  if (searchInput) searchInput.addEventListener("input", render);
  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      filtersForm.querySelectorAll('input[name="kategorija"]:checked').forEach(i => i.checked = false);
      if (searchInput) searchInput.value = "";
      if (sortSelect) sortSelect.value = "preporuceno";
      render();
    });
  }

  render();
}

/* ---------- Stranica: Profil freelancera ---------- */
function initProfilePage() {
  const wrap = document.getElementById("profileWrap");
  if (!wrap) return;
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"), 10) || 1;
  const f = FREELANCERS.find(x => x.id === id) || FREELANCERS[0];

  document.title = `${f.name} — ${f.role} | BalkanGig`;
  document.getElementById("pAvatar").src = f.img;
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

  document.querySelectorAll("form[data-validate]").forEach(form => {
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

function chatKey(id, suffix) {
  return `bg_chat_${id}_${suffix}`;
}

function getChatMessages(id) {
  const raw = localStorage.getItem(chatKey(id, "msgs"));
  if (raw) {
    try { return JSON.parse(raw); } catch (e) { /* fallthrough */ }
  }
  const f = FREELANCERS.find(x => x.id === id);
  const seed = [{
    from: "them",
    text: f ? `Zdravo! Hvala što si me kontaktirao/la. Slobodno mi opiši šta ti je potrebno za projekat.` : "Zdravo!",
    time: Date.now()
  }];
  saveChatMessages(id, seed);
  return seed;
}

function saveChatMessages(id, msgs) {
  localStorage.setItem(chatKey(id, "msgs"), JSON.stringify(msgs));
}

function getJobStatus(id) {
  return localStorage.getItem(chatKey(id, "status")) || "u_toku";
}

function setJobStatus(id, status) {
  localStorage.setItem(chatKey(id, "status"), status);
}

function formatChatTime(ts) {
  const d = new Date(ts);
  return d.toLocaleTimeString("sr-RS", { hour: "2-digit", minute: "2-digit" });
}

function initChatPage() {
  const shell = document.getElementById("chatShell");
  if (!shell) return;

  const listEl = document.getElementById("chatListItems");
  const searchEl = document.getElementById("chatListSearch");
  const windowHead = document.getElementById("chatWindowHead");
  const windowEmpty = document.getElementById("chatWindowEmpty");
  const windowBody = document.getElementById("chatWindowBody");
  const messagesEl = document.getElementById("chatMessages");
  const jobPanel = document.getElementById("chatJobPanel");
  const inputRow = document.getElementById("chatInputRow");
  const textarea = document.getElementById("chatTextarea");
  const sendBtn = document.getElementById("chatSendBtn");
  const backBtn = document.getElementById("chatBackBtn");

  let currentId = null;

  function conversationPreview(id) {
    const msgs = getChatMessages(id);
    const last = msgs[msgs.length - 1];
    if (!last) return "";
    return (last.from === "me" ? "Ti: " : "") + last.text;
  }

  function renderList(filter) {
    const q = (filter || "").toLowerCase().trim();
    const list = FREELANCERS.filter(f =>
      !q || f.name.toLowerCase().includes(q) || f.role.toLowerCase().includes(q)
    );
    listEl.innerHTML = list.map(f => {
      const status = getJobStatus(f.id);
      const dotClass = status === "placeno" ? "paid" : status === "zavrseno" ? "done" : "";
      return `
        <button type="button" class="chat-list-item${f.id === currentId ? " active" : ""}" data-id="${f.id}">
          <img class="chat-list-avatar" src="${f.img}" alt="${f.name}">
          <div class="chat-list-item-body">
            <div class="chat-list-item-top">
              <strong>${f.name}</strong>
              <span class="chat-status-dot ${dotClass}"></span>
            </div>
            <div class="chat-list-item-preview">${conversationPreview(f.id)}</div>
          </div>
        </button>
      `;
    }).join("") || `<div style="padding:20px; color:var(--text-soft); font-size:0.85rem;">Nema razgovora koji odgovaraju pretrazi.</div>`;

    listEl.querySelectorAll(".chat-list-item").forEach(btn => {
      btn.addEventListener("click", () => selectConversation(parseInt(btn.dataset.id, 10)));
    });
  }

  function renderJobPanel(f) {
    const status = getJobStatus(f.id);
    let badgeClass = "", badgeText = "U toku";
    if (status === "zavrseno") { badgeClass = "done"; badgeText = "Završeno"; }
    if (status === "placeno") { badgeClass = "paid"; badgeText = "Plaćeno ✓"; }

    document.getElementById("chatJobBadge").className = `job-status-badge ${badgeClass}`;
    document.getElementById("chatJobBadge").textContent = badgeText;

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
        <strong>Posao: ${f.role} za "${f.name}"</strong>
        <span>Cena: ${f.price}</span>
      </div>
      <div class="chat-job-panel-actions">${actionsHTML}</div>
    `;

    const markBtn = document.getElementById("markDoneBtn");
    if (markBtn) markBtn.addEventListener("click", () => markJobDone(f.id));

    const payBtn = document.getElementById("payNowBtn");
    if (payBtn) payBtn.addEventListener("click", () => openPaymentModal(f));
  }

  function renderMessages(id) {
    const msgs = getChatMessages(id);
    messagesEl.innerHTML = msgs.map(m => {
      const cls = m.from === "me" ? "msg-own" : m.from === "system" ? "msg-system" : "msg-theirs";
      return `<div class="msg ${cls}">${m.text}</div>`;
    }).join("");
    messagesEl.scrollTop = messagesEl.scrollHeight;
  }

  function selectConversation(id) {
    currentId = id;
    const f = FREELANCERS.find(x => x.id === id);
    if (!f) return;

    shell.classList.add("chat-open");
    windowEmpty.style.display = "none";
    windowBody.style.display = "flex";

    windowHead.innerHTML = `
      <div class="chat-window-head-info">
        <button type="button" class="chat-back-btn" id="chatBackBtnInner" aria-label="Nazad">←</button>
        <img src="${f.img}" alt="${f.name}">
        <div>
          <h3>${f.name}</h3>
          <span>${f.role}</span>
        </div>
      </div>
      <span class="job-status-badge" id="chatJobBadge"></span>
    `;
    document.getElementById("chatBackBtnInner").addEventListener("click", () => {
      shell.classList.remove("chat-open");
    });

    renderJobPanel(f);
    renderMessages(id);
    renderList(searchEl ? searchEl.value : "");
    textarea.focus();
  }

  function sendMessage() {
    const text = textarea.value.trim();
    if (!text || currentId === null) return;
    const msgs = getChatMessages(currentId);
    msgs.push({ from: "me", text, time: Date.now() });
    saveChatMessages(currentId, msgs);
    textarea.value = "";
    renderMessages(currentId);
    renderList(searchEl ? searchEl.value : "");

    setTimeout(() => {
      const reply = CHAT_REPLIES[Math.floor(Math.random() * CHAT_REPLIES.length)];
      const updated = getChatMessages(currentId);
      updated.push({ from: "them", text: reply, time: Date.now() });
      saveChatMessages(currentId, updated);
      if (currentId !== null) {
        renderMessages(currentId);
        renderList(searchEl ? searchEl.value : "");
      }
    }, 900);
  }

  function markJobDone(id) {
    setJobStatus(id, "zavrseno");
    const msgs = getChatMessages(id);
    msgs.push({ from: "system", text: "✅ Projekat je označen kao završen. Klijent sada može da plati posao.", time: Date.now() });
    saveChatMessages(id, msgs);
    const f = FREELANCERS.find(x => x.id === id);
    renderJobPanel(f);
    renderMessages(id);
    renderList(searchEl ? searchEl.value : "");
  }

  sendBtn.addEventListener("click", sendMessage);
  textarea.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  });
  if (searchEl) searchEl.addEventListener("input", () => renderList(searchEl.value));
  if (backBtn) backBtn.addEventListener("click", () => shell.classList.remove("chat-open"));

  renderList("");

  const params = new URLSearchParams(window.location.search);
  const preId = parseInt(params.get("id"), 10);
  if (preId && FREELANCERS.some(f => f.id === preId)) {
    selectConversation(preId);
  }

  // Izloži funkciju za plaćanje globalno (koristi je payment modal)
  window.__balkanGigHandlePaymentSuccess = function (id) {
    setJobStatus(id, "placeno");
    const msgs = getChatMessages(id);
    msgs.push({ from: "system", text: "💸 Plaćanje je uspešno izvršeno preko PayPal-a. Hvala na saradnji!", time: Date.now() });
    saveChatMessages(id, msgs);
    if (id === currentId) {
      const f = FREELANCERS.find(x => x.id === id);
      renderJobPanel(f);
      renderMessages(id);
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

/* ---------- Prijava / Registracija: role toggle ---------- */
function initAuthToggle() {
  const toggle = document.querySelector(".role-toggle");
  if (!toggle) return;
  const buttons = toggle.querySelectorAll("button");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
    });
  });
}

/* ---------- Init ---------- */
document.addEventListener("DOMContentLoaded", () => {
  initMobileNav();
  initHeroSearch();
  populateHomepage();
  initListingPage();
  initProfilePage();
  initForms();
  initProjectChoice();
  initAuthToggle();
  initChatPage();
  initPaymentModal();
  initScrollReveal();
});
