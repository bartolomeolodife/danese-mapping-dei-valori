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
- `danese_rivenditori.csv` — tutti i 391 contatti di vendita elencati su danesemilano.com/it/contacts (37 paesi; Italia divisa per regione e provincia): nome, tipo (rivenditore, rete Artemide, agente/distributore senza indirizzo, contatto commerciale Danese), indirizzo, telefono, email, città e coordinate (precisione: città; per l'Italia il capoluogo di provincia indicato dal sito). Vendita diretta: showroom Piazza S. Nazaro in Brolo 15, Milano, e onlinestore.danesemilano.com.
- `danese_classifiche_vendita.csv` — per ogni famiglia Danese: posizione nelle classifiche «più venduti» di onlinestore.danesemilano.com, connox.com e designrepublic.com, indice di vendita 0–100 (media delle posizioni normalizzate: 100 = primo), quadrante e voti; in fondo le famiglie del catalogo che non compaiono in nessuna classifica.
- `piu_venduti_top50.csv` — i primi 50 prodotti diversi (per famiglia) ordinati per «più venduti» sui negozi Shopify di Seletti, Design House Stockholm, Alessi e Danese, abbinati alla famiglia della mappa.
- `piu_venduti_confronto.csv` — per le stesse aziende: quote dei quadranti e baricentro del catalogo e dei primi 50; per Danese anche primi 20 per indice, coda e famiglie fuori classifica.
- `../mercato.json` — tutti i dati della pagina mercato.html in un solo file. `../mercato-geo.json` — confini dei paesi (Natural Earth via world-atlas) già proiettati.

## Metodo dei voti
Floch (valori pratici, utopici, critici, ludici), valore critico allargato da Petitimbert (2022), quadranti di Semprini (missione, progetto, informazione, euforia). Voti 0–3 su U P C L; x = L − C, y = U − P. I voti si basano su foto, prodotto in sé, prezzo, costruzione e descrizione. Regole fisse: ironia = ludica; un mobile davvero usato ha almeno P2; U3 è raro. Dettagli in `../metodo.html`.

## Come sono stati raccolti
- Danese oggi: schede di danesemilano.com (26/11/2026).
- Danese 2015–2016: indice dell'archivio web (CDX) per danesemilano.com/spaces, /lights, /newproducts, 2013–2017; testi e foto dalle copie archiviate del 2016 (o 2015/2014/2017 se mancanti), letti il 28/11/2026.
- Rivenditori Danese: pagina contatti di danesemilano.com e le sue chiamate /it/contacts/country/<id> e /it/contacts/region/<id>, 28/11/2026.
- Più venduti: /collections/all?sort_by=best-selling (Shopify) di seletti.it, designhousestockholm.com, alessi.com, onlinestore.danesemilano.com; /collections/danese-milano?sort_by=best-selling di connox.com; /en/collections/vendors?q=Danese&sort_by=best-selling di designrepublic.com; 28/11/2026. Limiti: periodo non dichiarato, ogni negozio vede solo i suoi clienti, ordine e non quantità. Danese non pubblica vendite per prodotto e non ha un bilancio separato da Artemide.
- Direzione artistica Danese: Ron Gilad 2017–2018, Giulio Iacchetti dal 2019 (danesemilano.com/en/manifesto).
- Altre aziende: siti ufficiali (Shopify/WordPress/schede), 27/11/2026; Vitra dal rivenditore nordicnew.nl.
