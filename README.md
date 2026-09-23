# BalkanGig

Statički (frontend-only) sajt za BalkanGig — platformu koja povezuje klijente sa freelancerima sa Balkana.

Sajt je napravljen u čistom HTML-u, CSS-u i JavaScript-u, bez ikakvog build alata ili backend-a, i radi odmah nakon otvaranja `index.html`.

## Struktura projekta

```
balkangig/
├── index.html                 → Početna stranica (hero, kategorije, freelanceri, kako funkcioniše)
├── pronadji-freelancera.html  → Pretraga i filtriranje freelancera
├── profil-freelancera.html    → Primer stranice profila freelancera
├── objavi-projekat.html       → Forme "Brza ponuda" i "Detaljan zahtev"
├── prijava.html                → Forma za prijavu (demo, bez backend-a)
├── registracija.html           → Forma za registraciju (demo, bez backend-a)
├── style.css                   → Kompletan stil sajta
├── script.js                   → Podaci o freelancerima/kategorijama + sva interaktivnost
└── README.md
```

## Kako pokrenuti lokalno

Najjednostavnije: dupli klik na `index.html` i sajt se otvara u browseru.

Za potpuno korektno učitavanje (preporučeno), pokreni lokalni server iz foldera projekta:

```bash
python3 -m http.server 8000
```

zatim otvori `http://localhost:8000` u browseru.

## Kako postaviti kod na GitHub

```bash
# 1. Uđi u folder projekta
cd balkangig

# 2. Inicijalizuj git repozitorijum
git init

# 3. Dodaj sve fajlove
git add .

# 4. Napravi prvi commit
git commit -m "Prva verzija BalkanGig sajta"

# 5. Poveži sa praznim repozitorijumom na GitHub-u
#    (prethodno napravi repo na github.com, npr. "balkangig")
git branch -M main
git remote add origin https://github.com/TVOJ-KORISNICKO-IME/balkangig.git

# 6. Pošalji kod na GitHub
git push -u origin main
```

## Kako objaviti sajt besplatno preko GitHub Pages

1. Otvori repozitorijum na GitHub-u.
2. Idi na **Settings → Pages**.
3. Pod **Branch** izaberi `main` i folder `/ (root)`, pa klikni **Save**.
4. Nakon par minuta, sajt će biti dostupan na adresi:
   `https://TVOJ-KORISNICKO-IME.github.io/balkangig/`

## Napomena

Sve forme (prijava, registracija, brza ponuda, detaljan zahtev) rade samo na frontend nivou — prikazuju poruku o uspehu, ali ne šalju podatke nikuda, jer projekat trenutno nema backend. Kada budeš spreman/na za pravu funkcionalnost (čuvanje podataka, slanje email-ova, prijava korisnika), potrebno je dodati backend i bazu podataka.
