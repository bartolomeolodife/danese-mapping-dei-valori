# Dati del progetto «mapping dei valori» · Fare book Danese, ISIA Roma

Tutto quello che abbiamo raccolto, in file leggibili da persone e da altre AI, così nessuno deve rifare la ricerca.
R = rilevato da una fonte; L = nostra lettura. Una cosa senza fonte non esiste.

## File
- `../data.json` — tutte le aziende e tutti i prodotti della mappa. Per azienda: id, name, site, col (colore), note (da dove vengono i dati e quando), groups, items. Per prodotto: n nome, v voti U P C L (es. "0321"), u link alla scheda, i informazioni brevi, g gruppi (categoria, designer, materiale, epoca, chi lo usa), p foto, d descrizione dalla scheda, src fonte se diversa dal sito.
- `../aziende.json` — per ogni azienda: perché è sulla mappa, storia, mission e valori, fonti con link.
- `danese_fuori_catalogo.csv` — le 139 famiglie del catalogo Danese 2015–2016 che non sono nel catalogo di oggi: designer, anno, categoria, tipo, voti, posizione, pagina archiviata, foto, testo originale.
- `danese_sito_2015_2016_pagine_prodotto.csv` — le 403 pagine prodotto del vecchio sito danesemilano.com archiviate su web.archive.org nel 2015–2016, con il link alla copia archiviata e lo stato oggi (nel catalogo / non più nel catalogo).
- `../tipologiche/fonti-quadrato.csv` — per i 180 prodotti Danese di oggi: categoria, voti, posizione sulla mappa, frase della scheda da cui viene il voto, link e data di consultazione.
- `../tipologiche/*.svg` e `legenda.pdf` — le tavole tipologiche.

## Metodo dei voti
Floch (valori pratici, utopici, critici, ludici), valore critico allargato da Petitimbert (2022), quadranti di Semprini (missione, progetto, informazione, euforia). Voti 0–3 su U P C L; x = L − C, y = U − P. I voti si basano su foto, prodotto in sé, prezzo, costruzione e descrizione. Regole fisse: ironia = ludica; un mobile davvero usato ha almeno P2; U3 è raro. Dettagli in `../metodo.html`.

## Come sono stati raccolti
- Danese oggi: schede di danesemilano.com (26/11/2026).
- Danese 2015–2016: indice dell'archivio web (CDX) per danesemilano.com/spaces, /lights, /newproducts, 2013–2017; testi e foto dalle copie archiviate del 2016 (o 2015/2014/2017 se mancanti), letti il 28/11/2026.
- Altre aziende: siti ufficiali (Shopify/WordPress/schede), 27/11/2026; Vitra dal rivenditore nordicnew.nl.
