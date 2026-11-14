# Brama Oleśnicka: DESIGN.md (v9, 14.11.2026)

## Cel
Strona wizytówka restauracji z podstronami. Konwersje: rezerwacja stolika (główna), zapytanie o przyjęcie (przyjecia.html), zapytanie o catering (catering.html); zawsze też telefon 798 101 270.

## v9 (14.11.2026): karta na osobnej podstronie, hero na telefonie
Powód: na telefonie karta zajmowała ok. 5400 px (prawie 7 ekranów), hero było mało zapraszające. Strona główna na telefonie skróciła się z ok. 16 300 do 12 100 px.
- **menu.html (nowa):** nagłówek ze zdjęciem stołu w łuku, „Karta”, pigułki „Zupa dnia 16 zł / Deser dnia 21 zł / zupa gratis”. 8 kategorii (Zupy, Dania mięsne, Pierogi, Jarskie i ryby, Sałatki, Dodatki i surówki, Desery i kawa, Napoje), 52 pozycje.
  - Telefon: przyklejony pasek pigułek z kategoriami, widać jedną kategorię naraz; zmiana pigułką, przesunięciem palca albo linkami „Wcześniej / Dalej” na dole; kropki postępu. Adres kategorii w hashu (menu.html#pierogi).
  - Komputer (od 900 px): menu boczne z numerami i złotym wskaźnikiem (scroll-spy), wszystkie kategorie pod sobą; od 1280 px pozycje w dwóch kolumnach.
  - Pozycja: nazwa szeryfem, alergeny w indeksie (podpowiedź z nazwą), kropki prowadzące, cena w złocie, opis bezszeryfowy; znaczek „Polecamy” przy: rosół, kotlet schabowy z sosem grzybowym, schab po oleśnicku, pierogi z gęsiną, filet w sosie kurkowym.
  - Alergeny w szufladzie od dołu (dialog), na komputerze w oknie. Na dole zielony pas „Wybrane? Zarezerwuj stolik” + telefon.
  - Pliki: `menu.html`, `assets/menu.css`, `assets/menu.js` (+ `pod-lampa.css`). Dane karty są tylko w menu.html.
- **Strona główna, sekcja #menu → „Polecamy z karty”:** 6 dań na arkuszu z ornamentami (rosół, kotlet schabowy, pierogi z gęsiną, schab po oleśnicku, filet z kurczaka, gorące maliny), przy dwóch krótki cytat z Google (Gosia K., Mirosław N.). Obok: zdanie wstępu, „Do dań mięsnych zupa gratis”, przycisk „Cała karta · 52 pozycje”, skróty do 8 działów (menu.html#…). Każdy wiersz linkuje do działu.
- **Nawigacja:** „Menu” na wszystkich stronach prowadzi do menu.html. Przycisk w hero: „Zobacz kartę” → menu.html.
- **Hero na telefonie:** zdjęcie sali na górze (ok. 70% szerokości ekranu w pionie) bez zielonej zasłony, zieleń zaczyna się pod zdjęciem; ukryte zdanie o właścicielach (na komputerze zostaje); jeden główny przycisk na całą szerokość, „Zobacz kartę →” jako link; „Codziennie w karcie” jako trzy pigułki; w karcie adresu bez telefonu (jest w dolnym pasku). Węższy logotyp poniżej 380 px.

## v8 (13.11.2026): paleta „Pod lampą”, zdjęcia sali, nowe opinie
- Paleta „Pod lampą” (wybrana spośród sześciu): ciemne tło jak sala wieczorem, bursztyn lamp jako akcja, butelkowa zieleń na szyldzie i pasach, kremowy tekst. W `assets/pod-lampa.css` (po `style.css`), wczytywana w index.html i menu.html. Przyjęcia i Catering jeszcze w starej palecie. Inne propozycje: `assets/palety.css`.
- Zdjęcia (`img/`): sala.jpg pod szyldem w hero, stol.jpg w „O nas” i w nagłówku karty, galeria 6 kafli z lightboxem (`assets/galeria.js`). Brakuje zdjęć dań i wejścia.
- Opinie: „pas pod lampą” zaraz pod hero, na całą szerokość ekranu, wjeżdża pod kartę z adresem. Po lewej „4,4 / 5” złotym gradientem (licznik), gwiazdki wypełniane do 88%, 779 opinii w Google, 90% poleca na Facebooku, link do opinii i „Zostaw opinię”. Po prawej dwa rzędy cytatów jadące w przeciwne strony (pauza na hover). Tło: wzór łusek z kloszy lamp, poświata za kursorem. Telefon: ocena nad jednym rzędem. 6 prawdziwych cytatów z Google.
- Pasek przewijania: ciemna szyna, złoty zaokrąglony suwak (Firefox: cienki w kolorach). Zaznaczenie tekstu w bursztynie.
- Bloczki kelnerskie (v5–v6) zostają tylko na podstronie Przyjęcia.

## Źródła wyglądu
- Kolory: wnętrze restauracji (lampy, dębowe lamele, zielona kolumna i ściana, kremowe krzesła). Wcześniej: plakat „Brama Smaków”.
- Typografia: karta menu restauracji w PDF (rozstrzelone wersaliki, szeryf w nazwach dań).
- Motyw: łuk bramy w logo, szyldzie i kadrach zdjęć; kute żelazo (narożniki, przekładki); wzór łusek z kloszy lamp w pasie opinii.

## Strona główna (kolejność, v9)
Szyld (hero) + karta adresu → pas opinii → Polecamy z karty → Sezonowo (świąteczna garmażerka) → Okazje (Przyjęcia, Catering) → O nas → Galeria → FAQ → Rezerwacja i dojazd → stopka.
Alkohol nie jest wypisany (ustawa o wychowaniu w trzeźwości: reklama alkoholu poza piwem zakazana): „Piwo, wino i alkohole w karcie na miejscu”.

## Podstrony
- Karta (menu.html): patrz v9.
- Przyjęcia: szyld z listą okazji, lista okazji z linkiem wypełniającym formularz, 4 kroki na złotej linii, karta „Co warto wiedzieć” (TODO), opinie z przyjęć na szynie, formularz jako bloczek kelnerski.
- Catering: szyld z ofertą sezonową, cztery oferty jako wiersze redakcyjne, świąteczna garmażerka z cenami, kalendarz roku, formularz-bloczek.
- Formularze: pola z `data-label` składają e-mail (mailto) na kontakt@bramaolesnicka.pl; telefon wymagany.

## Motyw: kuta brama
Złota linia 1.4–1.5 px: narożniki z ornamentem (arkusze, karty), przekładka z grotem jak w kutym ogrodzeniu. Rytm dają przesunięcia i nachodzenie (pas opinii pod kartą adresu, oferta sezonowa przekrzywiona), nie łuki-sekcje.

## Bloczki kelnerskie (tylko Przyjęcia)
Stempel z oceną, kartki z bloczka zamówień pod mosiężną szyną, kołysanie na hover, na telefonie przewijane w bok. Numery „Nr 0417…” dekoracyjne; nie wymyślamy stolików, dat ani ocen pojedynczych opinii.

## Logo
Znak bramy: złota rama rysuje się przy wejściu, bursztynowe skrzydła zamykają się; na hover otwierają się, w środku złote światło i parująca miska.

## Tokeny („Pod lampą”; nazwy jak w style.css)
| Token | Wartość | Rola |
|---|---|---|
| --paper | #13110D | tło |
| --sheet | #1C1914 | karty, arkusze, kategorie karty |
| --ink | #F1E7D4 | tekst (krem) |
| --muted | #B8AB93 | opisy |
| --green | #1E3A2B | szyld, pasy, stopka |
| --on-green | #F1E7D4 | tekst na zieleni |
| --gold | #D49A3A | ornamenty, linie, gwiazdki, znaczek „Polecamy” |
| --gold-text | #E6B867 | ceny, drobne napisy w akcencie |
| --gold-on-green | #E6B867 | akcent na zieleni |
| --wine | #E3A64A | akcja (bursztyn; nazwa historyczna) |
| --wine-hover | #F0BC6A | hover akcji |
| --on-wine | #17110A | tekst na przycisku |
| --line | rgba(241,231,212,.14) | separatory |
| --tint | #E3A64A @ .16 | nałożenie na zdjęcia (soft-light) |

Kontrast (zmierzony): ink/paper 15.4, muted/paper 8.3, muted/sheet 7.7, on-green/green 10.1, gold-on-green/green 6.7, gold-text/paper 10.3, on-wine/wine 8.8.

## Typografia
Playfair Display (nagłówki, nazwy dań, ocena) + Josefin Sans (wersaliki z rozstrzeleniem: nawigacja, przyciski, pigułki, ceny). Root `calc(16px*var(--z))`, `--z:.8` desktop, 1 do 600 px.

## Ruch
Navbar: linia i rozmycie przy scrollu, złoty wskaźnik pod linkiem. Przyciski: tło wjeżdża od lewej, telefon „dzwoni”. Szyld: ramka rysuje się, treść kaskadą, zdjęcie z powolnym zoomem. Opinie: liczniki, gwiazdki, przesuwające się cytaty, poświata. Karta: pozycja podświetla się na hover, kropki złocą się; kategorie na telefonie wjeżdżają z boku zgodnie z kierunkiem. Galeria: zoom, złota ramka, lightbox. O nas: paralaksa. Dojazd: trasa się rysuje. `prefers-reduced-motion` wyłącza animacje.

## Menu (źródło: karta w PDF od Fabiana, 12.11.2026)
Pełne dane z cenami są w `menu.html`. Do potwierdzenia: aktualność cen, legenda alergenów (przyjęto standard UE 1 gluten, 3 jaja, 4 ryby, 7 mleko, 9 seler).

## Do uzupełnienia przez firmę
Link „Poproś o opinie” z Profilu Firmy w Google, więcej cytatów z opinii, zdjęcia dań, wejścia i fasady, dane do „Co warto wiedzieć” przy przyjęciach, lista dań garmażeryjnych i dostawa, asortyment sklepiku, catering na spotkania, psy w lokalu, godziny otwarcia, płatność kartą, parking i znak wejścia, nazwa firmy i NIP, polityka prywatności, og:image (kandydat: sala.jpg), decyzja o logo, fonty lokalnie przed wdrożeniem, zgoda na użycie zdjęć wnętrza.

## v10 (14.11.2026): Orzech, Rytm, Łuk bramy

- Ciemne sekcje: orzech `--paper:#2E241B`, `--sheet:#382C21`, `--muted:#C9BCA2` (było prawie czarne `#13110D`). theme-color `#2E241B`.
- Rytm: jasne sekcje `.is-light` (krem `#EFE6D6`, arkusz `#F7F1E6`). Strona główna: karta, okazje, FAQ. Przyjęcia: okazje, „Co warto wiedzieć”. Catering: oferta, kalendarz.
- Kontrast na jasnym: przyciski i ornamenty w brązie `#8C5A1C` / `#9A6420` (bursztyn na kremie miał 1,8:1, teraz 5,5:1 dla tekstu przycisku). Tekst ≥ 4,5:1 wszędzie.
- Przejścia: `.cut` = sekcja, której tło różni się od poprzedniej. Zaczyna się płaskim łukiem (`--arch`, 36–88 px) ze złotą nitką (inset box-shadow) i nachodzi na poprzednią sekcję. `.cut` ma `z-index:3`. Stary `.season::before` i obramowanie `.res` są wyłączone na `.cut`.
- Nowa sekcja: dodaj `cut` tylko gdy jej tło różni się od poprzedniej.
