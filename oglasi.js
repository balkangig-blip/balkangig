/* =========================================================
   BalkanGig — oglasi.js
   Logika za javnu stranicu oglasa (poslovi koje kače firme).
   Očekuje da su script.js (CATEGORIES, pillsHTML...) i
   supabase-client.js (window.supabase) već učitani PRE ovog fajla.
   ========================================================= */

const TIP_PILLS = [
  { value: "all", label: "Sve" },
  { value: "puno-radno-vreme", label: "Puno radno vreme" },
  { value: "deo-radnog-vremena", label: "Deo radnog vremena" },
  { value: "projekat", label: "Projekat" },
  { value: "praksa", label: "Praksa" },
];

const TIP_LABELS = {
  "puno-radno-vreme": "Puno radno vreme",
  "deo-radnog-vremena": "Deo radnog vremena",
  "projekat": "Projekat",
  "praksa": "Praksa"
};

let ALL_OGLASI = [];
let MY_PRIJAVE = new Set(); // id-jevi oglasa na koje je ulogovani freelancer već prijavljen
let CURRENT_SESSION = null;

function ogFallbackImg(name) {
  return `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(name || "Firma")}&backgroundType=gradientLinear`;
}

function ogCategoryName(id) {
  const cat = (typeof CATEGORIES !== "undefined" ? CATEGORIES : []).find(c => c.id === id);
  return cat ? cat.name : id;
}

function ogTimeAgo(dateStr) {
  const days = Math.floor((Date.now() - new Date(dateStr).getTime()) / 86400000);
  if (days <= 0) return "danas";
  if (days === 1) return "juče";
  if (days < 30) return `pre ${days} dana`;
  const months = Math.floor(days / 30);
  return `pre ${months} ${months === 1 ? "mesec" : "meseca"}`;
}

function ogCardHTML(o) {
  const company = o.profiles || {};
  const applied = MY_PRIJAVE.has(o.id);
  const opisShort = (o.opis || "").length > 140 ? o.opis.slice(0, 140) + "…" : (o.opis || "");
  return `
    <div class="freelancer-card oglas-card" data-id="${o.id}">
      <div class="freelancer-card-header">
        <img class="freelancer-avatar" src="${company.avatar_url || ogFallbackImg(company.full_name)}" alt="${company.full_name || "Firma"}">
        <div>
          <h3>${o.naslov}</h3>
          <div class="freelancer-role">${company.full_name || "Firma"}</div>
          <div class="freelancer-location">${o.lokacija || "Rad na daljinu"}</div>
        </div>
      </div>
      <p>${opisShort}</p>
      <div class="freelancer-tags">
        ${o.kategorija ? `<span class="tag">${ogCategoryName(o.kategorija)}</span>` : ""}
        ${o.tip_angazovanja ? `<span class="tag">${TIP_LABELS[o.tip_angazovanja] || o.tip_angazovanja}</span>` : ""}
      </div>
      <div class="freelancer-card-footer">
        <div class="freelancer-price">${o.budzet || "Po dogovoru"}<span>${ogTimeAgo(o.created_at)}</span></div>
        <button type="button" class="btn ${applied ? "btn-outline" : "btn-primary"} btn-sm apply-btn" data-id="${o.id}" ${applied ? "disabled" : ""}>
          ${applied ? "Prijavljen/a ✓" : "Prijavi se"}
        </button>
      </div>
    </div>
  `;
}

function ogGetState(form, searchInput) {
  const checked = Array.from(form.querySelectorAll('input[name="kategorija"]:checked')).map(i => i.value);
  const tipBtn = form.querySelector('.filter-pill.active[data-group="tip"]');
  return {
    query: (searchInput?.value || "").toLowerCase().trim(),
    categories: checked,
    tip: tipBtn ? tipBtn.dataset.value : "all"
  };
}

function ogMatches(o, state) {
  const matchesQuery = !state.query ||
    o.naslov.toLowerCase().includes(state.query) ||
    (o.opis || "").toLowerCase().includes(state.query) ||
    (o.profiles?.full_name || "").toLowerCase().includes(state.query);
  const matchesCategory = state.categories.length === 0 || state.categories.includes(o.kategorija);
  const matchesTip = state.tip === "all" || o.tip_angazovanja === state.tip;
  return matchesQuery && matchesCategory && matchesTip;
}

function initOglasiPage() {
  const grid = document.getElementById("oglasiGrid");
  if (!grid) return; // nismo na oglasi.html

  const form = document.getElementById("oglasiFiltersForm");
  const searchInput = document.getElementById("oglasiSearch");
  const countEl = document.getElementById("oglasiCount");
  const emptyState = document.getElementById("oglasiEmptyState");
  const clearBtn = document.getElementById("oglasiClearBtn");
  const emptyResetBtn = document.getElementById("oglasiEmptyResetBtn");

  document.getElementById("oglasiCategoryOptions").innerHTML = (typeof CATEGORIES !== "undefined" ? CATEGORIES : []).map(c => `
    <label class="filter-option" data-cat="${c.id}">
      <input type="checkbox" name="kategorija" value="${c.id}">
      <span class="filter-option-icon">${c.icon}</span>
      <span class="filter-option-name">${c.name}</span>
    </label>
  `).join("");

  document.getElementById("oglasiTypePills").innerHTML = pillsHTML("tip", TIP_PILLS);

  function hasActiveFilters() {
    const state = ogGetState(form, searchInput);
    return state.query || state.categories.length > 0 || state.tip !== "all";
  }

  function render() {
    const state = ogGetState(form, searchInput);
    const filtered = ALL_OGLASI.filter(o => ogMatches(o, state));

    countEl.textContent = filtered.length;
    grid.innerHTML = filtered.map(ogCardHTML).join("");
    grid.style.display = filtered.length ? "" : "none";
    emptyState.classList.toggle("show", filtered.length === 0);
    clearBtn.hidden = !hasActiveFilters();

    grid.querySelectorAll(".apply-btn").forEach(btn => {
      btn.addEventListener("click", () => openApplyModal(Number(btn.dataset.id)));
    });
  }

  form.addEventListener("change", render);
  form.addEventListener("click", (e) => {
    const pill = e.target.closest(".filter-pill");
    if (!pill) return;
    pill.parentElement.querySelectorAll(".filter-pill").forEach(p => p.classList.remove("active"));
    pill.classList.add("active");
    render();
  });
  searchInput.addEventListener("input", render);

  function clearFilters() {
    form.querySelectorAll('input[name="kategorija"]:checked').forEach(i => (i.checked = false));
    form.querySelectorAll(".filter-pill").forEach((p, i) => p.classList.toggle("active", i === 0));
    searchInput.value = "";
    render();
  }
  clearBtn.addEventListener("click", clearFilters);
  emptyResetBtn.addEventListener("click", clearFilters);

  render();

  // ---- Učitavanje pravih podataka iz Supabase ----
  async function load() {
    if (!window.supabase) return;

    const { data: sessionData } = await window.supabase.auth.getSession();
    CURRENT_SESSION = sessionData.session;

    const { data, error } = await window.supabase
      .from("oglasi")
      .select("*, profiles(full_name, avatar_url)")
      .eq("status", "aktivan")
      .order("created_at", { ascending: false });

    if (!error && data) ALL_OGLASI = data;

    if (CURRENT_SESSION) {
      const { data: prijaveData } = await window.supabase
        .from("prijave")
        .select("oglas_id")
        .eq("freelancer_id", CURRENT_SESSION.user.id);
      MY_PRIJAVE = new Set((prijaveData || []).map(p => p.oglas_id));
    }

    render();
  }
  load();
}

/* ---------- Modal: prijava na oglas ---------- */
function initApplyModal() {
  const backdrop = document.getElementById("applyModalBackdrop");
  if (!backdrop) return;

  const closeBtn = document.getElementById("applyModalClose");
  const body = document.getElementById("applyModalBody");

  function close() { backdrop.classList.remove("open"); }
  closeBtn.addEventListener("click", close);
  backdrop.addEventListener("click", (e) => { if (e.target === backdrop) close(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });

  window.__balkanGigOpenApplyModal = function (oglasId) {
    const oglas = ALL_OGLASI.find(o => o.id === oglasId);
    if (!oglas) return;

    if (!CURRENT_SESSION) {
      body.innerHTML = `<p>Moraš biti prijavljen/a kao freelancer da bi se javio/la na oglas.</p>
        <a href="prijava.html" class="btn btn-primary btn-block" style="margin-top:14px;">Idi na prijavu</a>`;
      backdrop.classList.add("open");
      return;
    }

    if (CURRENT_SESSION.user.user_metadata?.role !== "freelancer") {
      body.innerHTML = `<p>Samo freelanceri mogu da se prijave na oglase. Ovaj nalog nije registrovan kao freelancer.</p>`;
      backdrop.classList.add("open");
      return;
    }

    body.innerHTML = `
      <p style="margin-bottom:12px;">Javljaš se na oglas <strong>"${oglas.naslov}"</strong>.</p>
      <div class="field">
        <label for="applyMsg">Poruka firmi (opciono)</label>
        <textarea id="applyMsg" rows="4" placeholder="Ukratko se predstavi i objasni zašto si dobar izbor za ovaj posao..."></textarea>
      </div>
      <div class="form-error" id="applyError" style="display:none;"></div>
      <button type="button" class="btn btn-primary btn-block" id="applySubmitBtn">Pošalji prijavu</button>
    `;
    backdrop.classList.add("open");

    document.getElementById("applySubmitBtn").addEventListener("click", async (e) => {
      const btn = e.currentTarget;
      const errEl = document.getElementById("applyError");
      errEl.style.display = "none";
      btn.disabled = true;
      btn.textContent = "Slanje...";

      const poruka = document.getElementById("applyMsg").value.trim();
      const { error } = await window.supabase.from("prijave").insert({
        oglas_id: oglas.id,
        freelancer_id: CURRENT_SESSION.user.id,
        poruka
      });

      btn.disabled = false;
      btn.textContent = "Pošalji prijavu";

      if (error) {
        errEl.textContent = error.code === "23505"
          ? "Već si se prijavio/la na ovaj oglas."
          : "Greška pri slanju prijave: " + error.message;
        errEl.style.display = "";
        return;
      }

      MY_PRIJAVE.add(oglas.id);
      body.innerHTML = `
        <div class="pay-success">
          <div class="pay-success-icon">✓</div>
          <h3>Prijava je poslata!</h3>
          <p>Firma će moći da vidi tvoju prijavu i da te kontaktira preko poruka.</p>
        </div>
      `;
      const cardBtn = document.querySelector(`.apply-btn[data-id="${oglas.id}"]`);
      if (cardBtn) {
        cardBtn.disabled = true;
        cardBtn.textContent = "Prijavljen/a ✓";
        cardBtn.classList.remove("btn-primary");
        cardBtn.classList.add("btn-outline");
      }
      setTimeout(close, 1500);
    });
  };
}

function openApplyModal(oglasId) {
  if (window.__balkanGigOpenApplyModal) window.__balkanGigOpenApplyModal(oglasId);
}

document.addEventListener("DOMContentLoaded", () => {
  initApplyModal();
  initOglasiPage();
});
