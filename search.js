// Ricerca «intelligente»: italiano e inglese insieme, singolare e plurale, sinonimi.
// Ogni gruppo raccoglie le radici delle parole che indicano la stessa cosa: se una parola cercata
// comincia con una di queste radici (o ne è l'inizio), si cercano nel testo tutte le radici del gruppo.
window.SMART=(function(){
const G=[
// tavola
'cucchia cucchiai spoon teaspoon tablespoon ladle mestol',
'forchett fork',
'coltell knife knive blade lama',
'posat cutlery flatware silverware',
'piatt plate dish dinnerware',
'ciotol bowl coppa coppett insalatier salad',
'tazz cup mug tazzin',
'bicchier glass tumbler calic goblet flute',
'teier teapot tea',
'caffettier coffee-maker coffeemaker moka espresso',
'bollitor kettle',
'vassoi tray tablett',
'brocc carafe caraff pitcher jug decanter',
'bottigli bottle',
'apribottigli bottle-opener cavatapp corkscrew',
'oliera ampoll oil vinegar aceto condiment',
'salier pepe salt pepper macinin grinder',
'zuccherier sugar',
'formagg cheese grater grattugi',
'pane bread',
'frutt fruit fruttier',
'ghiacc ice secchiell bucket cooler',
'pentol casserol padell saucepan cookware',
'tagliere board cutting',
'centrotavol centerpiece centrepiece',
'alzat cake-stand',
'tovaglio napkin',
// casa
'vas vase vasi',
'fior flower',
'pianta plant planter pot cachepot fioriera',
'portacandel candel candle candlestick candleholder lanterna lantern',
'specchi mirror',
'orolog clock watch',
'calendari calendar',
'portaombrell umbrella',
'appendiabit attaccapann coat hook hanger gruccia rack',
'cestin basket waste-bin wastebasket rifiut',
'scatol box contenitor container storage barattol jar canister',
'portafoto cornic frame',
'posacener ashtray',
'cuscin cushion pillow',
'tappet rug carpet',
'coperta plaid blanket throw',
'tessut fabric textile tessil',
'poster print stampa',
'libr book',
'borsa bag tote pouch',
'portachiav key-ring keyring',
'giocattol toy gioco game puzzle',
'bambin child kid children junior baby',
'animal animal bird uccell cane dog gatto cat elefant elephant',
'scultur sculpture figur statue',
'profum fragrance diffusor diffuser',
// arredo
'sedi chair seat seduta',
'sgabell stool',
'poltron armchair lounge',
'divan sofa couch',
'chaise-longue daybed day-bed lettino',
'panc bench',
'tavol table',
'tavolin side-table coffee-table low-table',
'scrivani desk',
'librer bookcase bookshelf shelf shelv mensol scaffal',
'armadi cabinet credenz sideboard cassettier drawer',
'letto bed',
'pouf ottoman poggiapied',
'carrell trolley cart',
'paravent screen divider',
// luce
'lampad lamp light luce lighting',
'sospension pendant suspension',
'lampadari chandelier',
'applique wall-light wall-lamp sconce',
'piantan floor-lamp floor-light',
'abat-jour table-lamp table-light',
// ufficio
'portapenn portamatit pencil-holder pen-holder pencil',
'cancelleri stationery desk-accessor',
'fermacart clip',
'quadern notebook',
// materiali
'legn wood wooden oak rovere faggio beech betulla birch noce walnut frassino ash',
'vetr glass cristall crystal',
'acciai steel inox',
'allumini aluminium aluminum',
'ottone brass',
'rame copper',
'porcellan porcelain',
'ceramic ceramica stoneware gres terracott',
'marm marble pietra stone',
'plastic plastica polipropilen polypropylene abs resin resina',
'pelle leather cuoio',
'sughero cork',
'bambù bamboo',
'carta paper cartone cardboard',
'feltr felt lana wool',
'cotone cotton lino linen',
// colori
'ross red','blu blue azzurr','verd green','giall yellow','ner black','bianc white','grigi grey gray','arancio orange','rosa pink','oro gold dorat','argent silver'
].map(s=>s.split(' '));
const norm=s=>String(s||'').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'');
const NG=G.map(g=>g.map(norm));
const stem=t=>t.length>4?t.replace(/[aeiou]+$/,''):t;
function groups(tok){if(tok.length<3)return [];let best=0;const hit=[];
 NG.forEach(g=>{let m=0;g.forEach(r=>{if(tok.startsWith(r))m=Math.max(m,r.length);else if(tok.length>=4&&r.startsWith(tok))m=Math.max(m,tok.length)});if(m){hit.push([g,m]);best=Math.max(best,m)}});
 const out=new Set();hit.filter(h=>h[1]===best).forEach(h=>h[0].forEach(r=>out.add(r)));return [...out]}
const esc=r=>r.replace(/[.*+?^${}()|[\]\\-]/g,'\\$&');
const pat=r=>esc(r).replace(/\\-/g,'[\\s-]?')+(r.length<=4?'(s|es|i|e|a|o|ini|ino)?(?![a-z])':'');
function compile(q){
 return norm(q).split(/[\s,]+/).filter(t=>t.length>1).map(tok=>{
  const rs=groups(tok);const all=rs.length?rs.concat([stem(tok)]):[stem(tok)];
  const re=new RegExp('(^|[^a-z0-9])('+all.map(pat).join('|')+')','i');
  return {tok,re,sub:rs.length?null:stem(tok)};
 });
}
// q: stringa cercata; text: testo dell'oggetto. Tutte le parole devono trovare riscontro.
function test(parts,text){const t=norm(text);return parts.every(p=>p.re.test(t)||(p.sub&&p.sub.length>=3&&t.includes(p.sub)))}
return {compile,test,norm};
})();
