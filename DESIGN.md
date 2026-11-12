# Brama Oleśnicka: DESIGN.md (v7, 12.11.2026)

## Cel
Strona wizytówka restauracji z dwiema podstronami. Konwersje: rezerwacja stolika (główna), zapytanie o przyjęcie (przyjecia.html), zapytanie o catering (catering.html); zawsze też telefon 798 101 270. W v2 przyjęcia i catering były wyłączone, w v7 Fabian je przywrócił jako osobne podstrony.

## Źródła wyglądu
- Kolory: plakat „Brama Smaków, Świąteczna oferta garmażeryjna” (zieleń butelkowa, bordo, pergamin, złoto). Decyzja klienta wygrywa z listą zakazaną (kremowe tło).
- Typografia: karta menu restauracji w PDF (rozstrzelone wersaliki w nagłówkach kategorii, szeryf w nazwach dań).
- Motyw: łuk bramy w logo i szyldzie, kute żelazo w reszcie strony (v5).

## Sekcje (v2)
1. Szyld (hero): zielone pole ze złotą ramką rysowaną przy wejściu, nazwa, zdanie o kuchni, „Codziennie w karcie” (zupa dnia, deser dnia, zupa gratis). Pod szyldem pasek: adres / telefon / godziny.
2. Menu: pełna karta z cenami na arkuszu w ramce, przyklejony pasek kategorii z aktywną zakładką, 2 kolumny. Napoje zimne w rozwijanym bloku. Alkohol nie jest wypisany (ustawa o wychowaniu w trzeźwości: reklama alkoholu poza piwem zakazana).
3. Sezonowo: zielony pas, aktualnie świąteczna garmażerka (zamówienia do 15.12, odbiór do 22.12) + informacja o menu na Walentynki, Wielkanoc i inne okazje. Treść podmienia się w jednym bloku.
4. Opinie (osobna sekcja, v5) i O nas (sam tekst z konturową „10”).
5. Rezerwacja i dojazd: duży numer, e-mail z kopiowaniem, formularz (imię, telefon*, dzień, godzina, liczba osób), schemat wejścia z tyłu budynku Feniks, godziny.
6. Stopka.

Odrzucone z v1: kafle przyjęć, kroki 1-2-3, siatki kart z ikonami, etykiety nad każdym nagłówkiem, formularz zapytań o przyjęcia/catering.

## Struktura (v7)
- Pliki: `index.html`, `przyjecia.html`, `catering.html`, wspólne `assets/style.css` i `assets/main.js`.
- Nawigacja (5): Menu, Przyjęcia, Catering, Opinie, Kontakt. Przycisk w nawigacji zależy od strony: Zarezerwuj stolik / Zapytaj o termin / Zapytaj o catering.
- Główna, kolejność: szyld, menu, sezonowo, okazje (dwie karty-zaproszenia: zielona Przyjęcia, jasna Catering, druga przesunięta w dół), opinie (+ „Zostaw opinię w Google”), o nas, galeria (6 ramek na zdjęcia, układ mozaiki), FAQ (akordeon + dane FAQPage tylko z potwierdzonymi odpowiedziami), rezerwacja i dojazd, stopka z linkami do podstron.
- Przyjęcia: szyld z okruszkami i listą okazji, lista okazji (wiersze z hoverem i linkiem wypełniającym formularz), 4 kroki na złotej linii rysowanej po wejściu w widok, karta „Co warto wiedzieć” (same TODO), opinie z przyjęć na szynie (Google + Facebook), formularz jako bloczek kelnerski na szynie.
- Catering: szyld z aktualną ofertą sezonową, cztery oferty jako wiersze redakcyjne (drugi i czwarty wcięte), świąteczna garmażerka z cenami, kalendarz roku na kropkowanej linii (Walentynki, Wielkanoc, Komunie, Święta), formularz-bloczek.
- Formularze: jeden skrypt, pola z `data-label` składają gotowy e-mail (mailto) na kontakt@bramaolesnicka.pl; telefon wymagany.

## Motyw (v5): kuta brama
Łuk bramy zostaje tylko w logo i w szyldzie (hero). Poniżej szyldu motywem jest kute żelazo, złotą linią 1.4–1.5 px:
- narożniki z ornamentem (dwie spirale z gałką, opaski), na arkuszu menu, karcie oferty sezonowej i karcie dojazdu;
- przekładka z grotem jak w kutym ogrodzeniu (C-zawijasy, opaska, kula): pod tytułem MENU, w ofercie sezonowej, na styku O nas / Rezerwacja, w stopce.
Sekcje mają proste kształty; rytm dają przesunięcia, nachodzenie (arkusz menu na zielony pas, oferta sezonowa przekrzywiona) i różne marginesy. Zrezygnowano z łuków-sekcji z v3 (kiczowate powtarzanie).

## Opinie (v5): bloczki kelnerskie
- Wynik jako stempel w bordowym tuszu (faktura z filtra SVG): 4,4 NA 5, wokół „779 opinii w Google, 90% poleca na Facebooku”, obrócony -9°.
- Sześć opinii z Google na kartkach z bloczka zamówień (druk zielonym tuszem jak klasyczne bloczki, czerwony numer), wsunięte pod mosiężną szynę jak w okienku kuchni. Pola: Zamówienie (temat opinii), Źródło (Google), tekst na liniach, podpis gościa. Dół perforowany, papier z delikatną fakturą, cień od szyny.
- Dwie szyny po trzy kartki, druga przesunięta. Kartki lekko obrócone od punktu zawieszenia; na hover kołyszą się jak wahadło (wygasające wychylenie) i zatrzymują prosto.
- Szyna (v6): mosiężny profil z fazą, rowkiem i szczotkowaną fakturą, refleks przesuwa się po szynie na hover sekcji; uchwyty ścienne z dwiema śrubami (różny kąt nacięć); stalowe kulki dociskowe nad każdą kartką; cień szyny na ścianie.
- Kartka (v6): nagłówek z mini-logo bramy i adresem, podwójna linia, numer czerwonym tuszem, wpisy „ręczne” granatowym atramentem, znak wodny bramy, cień i wgniecenie od kulki, cieniowanie wygięcia papieru, perforacja i odcinek „Zapraszamy ponownie”, nierówno oderwany dół (każda kartka inaczej).
- Telefon: kartki przewijane w bok pod szyną.
- Numery „Nr 0417…” są dekoracyjne. Nie wymyślamy stolików, dat ani ocen pojedynczych opinii.

## Logo
Znak bramy: rama rysuje się przy wejściu, bordowe skrzydła zamykają się. Na hover skrzydła się otwierają, w środku złote światło i parująca miska; podpis rozsuwa się i zmienia kolor na bordo.

## Menu: czytelność (v3)
Nagłówki kategorii szeryfem w kursywie ze złotą linią, nazwy dań 1.25rem, opisy bezszeryfowe (nie kursywa), ceny wyrównane do prawej, cienkie separatory między pozycjami, podświetlenie wiersza na hover. Kategorie jako pigułki z aktywną na zielono.

## Tokeny
| Token | Jasny | Ciemny | Rola |
|---|---|---|---|
| --paper | #F3EBDC | #121A15 | tło (pergamin) |
| --sheet | #FBF6EC | #18221C | arkusz menu, sekcja rezerwacji |
| --ink | #1F2A22 | #EFE6D3 | tekst |
| --muted | #5B5446 | #B8AE98 | opisy |
| --green | #1F4A33 | #163626 | szyld, sezonowo, stopka |
| --gold | #B08A3E | #C9A45C | ornamenty, ramki, linie (dekor) |
| --gold-text | #8A6A2C | #D9BE7E | małe złote napisy na jasnym |
| --gold-on-green | #D9BE7E | #D9BE7E | złoto na zieleni |
| --wine | #7D1B24 | #D46A6F | tylko akcja (CTA, cena na hover) |

Kontrast (zmierzony): ink/paper 12.6, muted/paper 6.3, white/wine 10.2, paper/green 8.5, gold-on-green 5.6, gold-text/sheet 4.7; ciemny: ink 14.3, muted 8.1, on-wine/wine 5.1.

## Typografia
Playfair Display (nagłówki, nazwy dań, tekst) + Josefin Sans (wersaliki z rozstrzeleniem .14–.35em: nawigacja, przyciski, kategorie, ceny). Root `calc(16px*var(--z))`, `--z:.8` desktop, 1 do 600 px.

## Ruch
- Navbar stałej wysokości; przy scrollu linia i cień. Złoty wskaźnik pod aktywnym linkiem przesuwa się i śledzi hover.
- Przyciski: tło wjeżdża od lewej, ikona telefonu „dzwoni”.
- Szyld: złota ramka rysuje się przy wejściu, treść wchodzi kaskadą (tylko przy załadowaniu).
- Pasek pod szyldem: złota linia rośnie na hover.
- Menu: aktywna kategoria podkreśla się w pasku i przewija do widoku; kropki prowadzące wydłużają się, cena dostaje bordowe tło na hover.
- Oferta sezonowa: arkusz lekko przekrzywiony, prostuje się na hover.
- Opinie: kartki prostują się i opadają na hover, stempel obraca się.
- Schemat dojazdu: trasa rysuje się po wejściu w widok, drzwi pulsują.
- `prefers-reduced-motion` wyłącza wszystko.

## Menu (źródło: karta w PDF od Fabiana, 12.11.2026)
Pełne dane z cenami są w `index.html`. Do potwierdzenia: aktualność cen, legenda alergenów (przyjęto standard UE 1 gluten, 3 jaja, 4 ryby, 7 mleko, 9 seler).

## Do uzupełnienia przez firmę
Link „Poproś o opinie” z Profilu Firmy w Google (zastępuje cid), zdjęcia do galerii (6 kadrów), dane do karty „Co warto wiedzieć” przy przyjęciach, lista dań garmażeryjnych i dostawa, asortyment sklepiku, potwierdzenie cateringu na spotkania, psy w lokalu, godziny otwarcia, płatność kartą, parking i znak wejścia, strona obejścia budynku, nazwa firmy i NIP, polityka prywatności, og:image, zdjęcia (wejście, sala, dania), decyzja o logo (roboczo znak-łuk), fonty lokalnie przed wdrożeniem.
