'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Menu, X, Phone, ChevronDown, ChevronUp,
  TreePine, Leaf, Flower2, Search, ArrowLeft,
  MessageCircle, Scissors, Shovel,
  Droplets, Sun, Bug
} from 'lucide-react';

// ============================================
// NAVIGATION
// ============================================
function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Početna', href: '/' },
    { name: 'O nama', href: '/#o-nama' },
    { name: 'Usluge', href: '/#usluge' },
    { name: 'Kontakt', href: '/#kontakt' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/98 backdrop-blur-md shadow-lg' : 'bg-white shadow-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/images/logo.png" alt="Grahor Usluge" width={50} height={50} className="rounded-full" />
            <div className="hidden sm:block">
              <span className="font-heading font-bold text-lg text-primary-dark">GRAHOR</span>
              <span className="block text-xs tracking-widest uppercase text-gray-500">Usluge</span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
                {link.name}
              </a>
            ))}
            <a href="/#kontakt" className="btn-primary text-sm !py-2.5 !px-6">Zatraži ponudu</a>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 rounded-lg hover:bg-gray-100">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 rounded-b-2xl shadow-xl pb-6">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={() => setIsOpen(false)}
                className="block px-6 py-3 text-gray-700 hover:text-primary hover:bg-primary-50/50 font-medium">
                {link.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

// ============================================
// FAQ DATA - 6 categories, 10 questions each
// ============================================
const categories = [
  {
    id: 'travnjaci',
    name: 'Travnjaci i vrtovi',
    icon: <Leaf size={20} />,
    questions: [
      { q: 'Koliko često trebam kositi travu?', a: 'U proljeće i ljeto preporučamo košnju svakih 7-10 dana, dok je u jesen dovoljno kositi svakih 14-20 dana. Visina košnje trebala bi biti oko 4-5 cm — prekratko košena trava sklonija je isušivanju i pojavi korova. Redovitom košnjom potičete gušći rast i ljepši izgled travnjaka.' },
      { q: 'Kada je najbolje vrijeme za sijanje trave?', a: 'Idealno vrijeme za sijanje trave je rano u jesen (rujan-listopad) ili u proljeće (ožujak-travanj). Jesenski rok je bolji jer tlo zadržava toplinu iz ljeta, a povećana vlaga pomaže klijanju. Prije sjetve obavezno pripremite tlo — rahljenje, ravnanje i lagano gnojenje daju najbolje rezultate.' },
      { q: 'Kako se riješiti korova u travnjaku?', a: 'Najzdraviji pristup je prevencija — gust i dobro njegovani travnjak sam po sebi potiskuje korov. Ručno čupanje korova s korijenom najučinkovitije je za manje površine. Za veće zahvate mogu se koristiti selektivni herbicidi, ali preporučamo konzultaciju sa stručnjakom. Redovita košnja i gnojidba značajno smanjuju pojavu korova.' },
      { q: 'Koliko vode treba mom travnjaku?', a: 'Travnjak treba oko 25-30 mm vode tjedno, uključujući kišu. Bolje je zalijevati rjeđe ali obilnije (2-3 puta tjedno) nego svaki dan malo, jer duboko zalijevanje potiče razvoj korijena u dubinu. Zalijevajte rano ujutro ili navečer kako biste smanjili isparavanje.' },
      { q: 'Kada i kako gnojiti travnjak?', a: 'Gnojidbu obavite 3-4 puta godišnje: u rano proljeće (ožujak), kasno proljeće (svibanj), ljeto (srpanj) i jesen (rujan). Koristite granulirana sporootpuštajuća gnojiva s omjerom NPK prilagođenim sezoni. Jesenska gnojidba s više kalija priprema travu za zimu.' },
      { q: 'Moj travnjak ima žute mrlje — što je uzrok?', a: 'Žute mrlje mogu biti uzrokovane: nedostatkom vode, pretjeranom gnojidbom (opekline), bolestima poput fusariuma, urinom kućnih ljubimaca ili nedostatkom hranjivih tvari. Preporučamo stručni pregled kako bismo utvrdili točan uzrok i predložili odgovarajuće rješenje.' },
      { q: 'Kako pripremiti vrt za zimu?', a: 'Jesensko čišćenje uključuje uklanjanje opalog lišća, posljednju košnju na 4-5 cm, jesensku gnojidbu kalijem, aeraciju tla vilama ili aeratorom te zaštitu osjetljivih biljaka agrotekstilom. Ove pripreme osiguravaju da vaš vrt u proljeće brže krene s rastom.' },
      { q: 'Što je aeracija tla i zašto je važna?', a: 'Aeracija je proces stvaranja malih rupica u tlu kako bi se poboljšao protok zraka, vode i hranjivih tvari do korijena. Posebno je važna za zbijena tla s puno gline. Preporučamo aeraciju jednom do dva puta godišnje — idealno u proljeće i/ili jesen.' },
      { q: 'Kako odabrati pravu mješavinu travne sjemenke?', a: 'Izbor ovisi o uvjetima — sunčana ili sjenovita lokacija, intenzitet korištenja i estetske preferencije. Za sunčane travnjake idealne su mješavine s engleskim ljuljem i livadnom vlasnjačom. Za sjenu su bolji crveni vijuk i šumska vlasnjača. Za dječja igrališta birajte otpornije sorte.' },
      { q: 'Koliko košta redovno održavanje travnjaka?', a: 'Cijena ovisi o veličini parcele, stanju travnjaka i opsegu usluga. Nudimo besplatan izlazak na teren i procjenu kako bismo vam dali točnu ponudu prilagođenu vašim potrebama. Kontaktirajte nas telefonom ili WhatsAppom za dogovor.' },
    ],
  },
  {
    id: 'drvece',
    name: 'Drveće i obrezivanje',
    icon: <TreePine size={20} />,
    questions: [
      { q: 'Kada je najbolje obrezivati drveće?', a: 'Optimalno vrijeme za obrezivanje većine vrsta je kasna zima ili rano proljeće (veljača-ožujak), dok su stabla u mirovanju. Izbjegavajte obrezivanje za vrijeme jakog mraza. Neke vrste poput breze obrezuju se u ljeto jer u proljeće jako "krvare" sokom. Sušne grane uklonite bilo kada.' },
      { q: 'Kako znati da li je stablo opasno i treba ga srušiti?', a: 'Znakovi opasnosti: veliki nagib stabla, vidljive pukotine na deblu, gljive na korijenu ili deblu, suhe i mrtve grane u krošnji, izdignuto tlo oko baze i šupljine u deblu. Ako primijetite ove znakove, preporučamo hitnu stručnu procjenu. Ne pokušavajte sami rušiti opasna stabla.' },
      { q: 'Koliko košta rušenje stabla?', a: 'Cijena ovisi o veličini stabla, lokaciji (blizina kuća, dalekovoda), pristupačnosti terena i potrebi za posebnom opremom. Svako stablo je specifično, stoga nudimo besplatan izlazak i procjenu. U cijenu je uvijek uključen odvoz materijala i čišćenje terena.' },
      { q: 'Trebam li dozvolu za rušenje stabla?', a: 'U većini slučajeva za rušenje stabla na privatnom zemljištu potrebno je ishoditi dozvolu od nadležnog ureda. Posebno za stabla unutar urbanih područja i zaštićene vrste. Možemo vam pomoći s informacijama o potrebnim dozvolama za vašu lokaciju u Zagrebu i okolici.' },
      { q: 'Što radite s posječenim drvećem?', a: 'Nudimo kompletnu uslugu — od rušenja do čišćenja. Deblo i veće grane možemo izrezati na ogrjevno drvo. Sitnije grane i lišće odvozimo na deponiju za zeleni otpad. Panj možemo izvaditi ili samljeti strojno, ovisno o vašim željama.' },
      { q: 'Može li se obrezivanjem spasiti bolesno stablo?', a: 'U mnogim slučajevima da — pravovremenim uklanjanjem zaraženih grana možemo spriječiti širenje bolesti. Sanitarno obrezivanje, zajedno s tretmanom i pravilnom ishranom stabla, može značajno produžiti život bolesnog stabla. Ključno je rano otkrivanje problema.' },
      { q: 'Obrezujete li i živice?', a: 'Da, obrezivanje živica jedna je od naših redovitih usluga. Oblikujemo sve vrste — od tuja i šimšira do lovorvišnje i ligustera. Preporučamo obrezivanje 2-3 puta godišnje: proljeće (travanj), ljeto (lipanj-srpanj) i jesen (rujan).' },
      { q: 'Kako se brinuti za novo posađeno stablo?', a: 'Prve dvije godine su ključne. Redovito zalijevajte (posebno ljeti), postavite kolac za potporu, zaštitite deblo od oštećenja i ne gnojite odmah — pričekajte barem godinu. Malčiranje oko baze zadržava vlagu i sprječava korov.' },
      { q: 'Koje drveće preporučate za manje vrtove?', a: 'Za manje vrtove idealne su kompaktne vrste poput japanskog javora, ukrasne trešnje, magnolije ili kuglastog javora. Voćke poput stupastih jabuka također su odličan izbor. Rado ćemo vam predložiti vrste primjerene vašem prostoru.' },
      { q: 'Što je kroniranje drveća?', a: 'Kroniranje je stručno obrezivanje krošnje stabla radi smanjenja volumena, poboljšanja protoka svjetlosti ili uklanjanja opasnih grana. Razlikujemo podizanje krošnje, stanjivanje i redukciju. Pravilno kroniranje poboljšava zdravlje stabla i sigurnost okoline.' },
    ],
  },
  {
    id: 'vocnjaci',
    name: 'Voćnjaci',
    icon: <Flower2 size={20} />,
    questions: [
      { q: 'Kada rezati voćke za bolji urod?', a: 'Zimska rezidba (siječanj-ožujak) je osnovna i najvažnija — obavlja se dok su voćke u mirovanju. Ljetna rezidba (lipanj-srpanj) koristi se za usmjeravanje rasta. Jabuke, kruške i šljive režu se zimi, dok se breskve i trešnje preferiraju rezati u kasno ljeto.' },
      { q: 'Kako pravilno rezati jabuku?', a: 'Cilj je stvoriti otvorenu, prozračnu krošnju u obliku vaze. Uklonite grane koje rastu prema unutra, križaju se ili su bolesne. Skratite vodilice za trećinu i ostavite rodne grančice. Rez radite iznad pupa ili na razini kolenca grane, pod kutom od 45 stupnjeva.' },
      { q: 'Moje voćke imaju bolesti — što učiniti?', a: 'Najčešće bolesti su krastavost jabuke, monilija i pepelnica. Preventivno prskanje u rano proljeće i nakon cvatnje najvažnija je mjera. Uklanjanje zaraženih plodova i grana sprječava širenje. Preporučamo stručnu dijagnozu za pravilan tretman.' },
      { q: 'Koliko često treba prskati voćnjak?', a: 'Standardni program uključuje 5-7 tretmana godišnje: zimsko prskanje, tretman pred i nakon cvatnje, dva ljetna prskanja i jesenski tretman. Koristite ekološke preparate kad je moguće i poštujte karencu prije berbe.' },
      { q: 'Kada posaditi novo voćno drvo?', a: 'Idealno je jesen (listopad-studeni) ili rano proljeće (ožujak). Jesenska sadnja je bolja jer se korijen ukorijeni prije zime. Iskopajte jamu 60x60x60 cm, dodajte kompost i drenažni sloj, posadite na istu dubinu kao u rasadniku.' },
      { q: 'Kako povećati urod voćaka?', a: 'Redovitom rezidbom, pravilnom gnojidbom, zaštitom od bolesti i štetnika, te pravilnim navodnjavanjem. Proređivanje plodova u lipnju (jedan plod na 10-15 cm) daje manji broj, ali krupnijih i kvalitetnijih plodova.' },
      { q: 'Koje voćke uspijevaju najbolje u Zagrebu?', a: 'Zagrebačka klima pogoduje: jabukama, kruškama, šljivama, trešnjama, višnjama, orasima i lijeskama. Od sorata preporučamo jabuke Idared i Jonagold, krušku Viljamovku, šljivu Čačansku rodnu. Za toplije mikrolokacije uspijevaju i breskve i marelice.' },
      { q: 'Što je zelena rezidba voćaka?', a: 'Zelena ili ljetna rezidba obavlja se tijekom vegetacije (lipanj-kolovoz). Uklanjaju se vodopije (jake uspravne mladice), proređuju plodovi i pinciraju mladice. Ovom rezidbom usmjeravamo energiju stabla u razvoj plodova umjesto nepotrebnog rasta.' },
      { q: 'Kako zaštititi voćke od mraza?', a: 'Preventivne mjere: sadnja na povišenim položajima, postavljanje agrotekstila oko krošnji, dimljenje i zalijevanje tla prije mraza jer vlažno tlo bolje čuva toplinu. Kasni proljetni mrazevi mogu uništiti cvatove pa je zaštita ključna.' },
      { q: 'Koliko košta uređenje voćnjaka?', a: 'Cijena ovisi o broju stabala, veličini, stanju i opsegu radova. Za točnu ponudu dolazimo na besplatan izlazak. Nudimo i godišnje ugovore o održavanju koji su financijski povoljniji od pojedinačnih dolazaka.' },
    ],
  },
  {
    id: 'ciscenje',
    name: 'Čišćenje i priprema terena',
    icon: <Shovel size={20} />,
    questions: [
      { q: 'Što uključuje čišćenje zapuštene parcele?', a: 'Kompletno čišćenje: uklanjanje korova i divlje vegetacije, košnja visoke trave, krčenje grmlja, uklanjanje panjeva, ravnanje terena i odvoz svog otpada. Ovisno o stanju, radovi mogu trajati od jednog do nekoliko dana.' },
      { q: 'Možete li očistiti teren za gradnju?', a: 'Da, priprema terena za gradnju jedna je od naših usluga. Uključuje uklanjanje vegetacije, krčenje stabala i grmlja, vađenje panjeva i grubo ravnanje. Surađujemo s građevinskim tvrtkama i prilagođavamo radove prema projektnoj dokumentaciji.' },
      { q: 'Koliko vremena treba za čišćenje parcele?', a: 'Manju zapuštenu parcelu (do 500 m²) obično očistimo u jednom danu. Veće parcele s gustom vegetacijom i stablima mogu zahtijevati 2-5 radnih dana. Točnu procjenu dajemo nakon besplatnog izlaska na teren.' },
      { q: 'Što radite s otpadom nakon čišćenja?', a: 'Sav zeleni otpad odvozimo na ovlaštenu deponiju. Deblje grane i debla možemo izrezati na ogrjevno drvo za vas. Nudimo i uslugu mulčiranja — sitnjenje granja u drvnu sječku za malč. Cijena odvoza uključena je u ponudu.' },
      { q: 'Uklanjate li panjeve?', a: 'Da, nudimo strojno glodanje panjeva ili kompletno vađenje s korijenom. Glodanje je brže i jeftinije, ali ostavlja korijenje u tlu. Kompletno vađenje preporučamo ako planirate sadnju ili gradnju na tom mjestu.' },
      { q: 'Radite li uređenje staza i putova u vrtu?', a: 'Naša primarna usluga je rad sa zelenim površinama, ali možemo pripremiti teren za staze — uklanjanje vegetacije, ravnanje i kompaktiranje podloge. Za polaganje kamena ili betona preporučamo specijalizirane obrtnike s kojima surađujemo.' },
      { q: 'Možete li iskrčiti korov s velikih površina?', a: 'Da, raspolažemo profesionalnom opremom za krčenje korova — od motornih kosa i trimera do traktorskih malčera za veće terene. Nakon krčenja možemo obaviti tretman za trajnije rezultate i pripremu za buduće uređenje.' },
      { q: 'Kako sprječavam ponovno zarastanje parcele?', a: 'Preporučamo redovitu košnju (jednom mjesečno), postavljanje malč folije ili sijanje trave koja potiskuje korov. Možemo napraviti plan održavanja koji uključuje periodične dolaske i kontrolu vegetacije.' },
      { q: 'Radite li i zimsko čišćenje?', a: 'Da, zima je idealna za krčenje — vegetacija je u mirovanju, tlo je tvrđe i lakše je procijeniti stanje terena. Zimsko razdoblje posebno preporučamo za veća krčenja jer su radovi efikasniji.' },
      { q: 'Nudite li odvoz glomaznog otpada iz dvorišta?', a: 'Naša specijalizacija je zeleni otpad, ali možemo pomoći s odvozom manjeg glomaznog otpada. Za veće količine građevinskog otpada preporučamo specijalizirane tvrtke s kojima možemo dogovoriti suradnju.' },
    ],
  },
  {
    id: 'zastita',
    name: 'Zaštita bilja i gnojidba',
    icon: <Bug size={20} />,
    questions: [
      { q: 'Koje su najčešće bolesti vrtnog bilja u Zagrebu?', a: 'Najčešće bolesti: pepelnica (bijeli prašnasti sloj), hrđa (narančaste pustule), siva plijesan (Botrytis) i gljivične bolesti korijena. Vlažno i toplo vrijeme pogoduje širenju. Preventivno prskanje i dobra cirkulacija zraka ključni su za zdravlje bilja.' },
      { q: 'Kada i čime gnojiti vrtno bilje?', a: 'Osnovnu gnojidbu obavite u proljeće organskim gnojivom (kompost, stajsko gnojivo). Tijekom vegetacije prihranjujte tekućim gnojivom svaka 2-3 tjedna. Rajčice trebaju više kalija, lisnato povrće više dušika. Ne pretjerujte — previše gnojiva oštećuje biljke.' },
      { q: 'Kako prepoznati nedostatak hranjivih tvari?', a: 'Žuto lišće ukazuje na nedostatak dušika, ljubičasto na nedostatak fosfora, smeđi rubovi na nedostatak kalija. Kloroza (žuto lišće sa zelenim žilama) ukazuje na nedostatak željeza. Analiza tla može točno utvrditi koji elementi nedostaju.' },
      { q: 'Što je malčiranje i zašto je korisno?', a: 'Malčiranje je prekrivanje tla oko biljaka organskim ili anorganskim materijalom. Prednosti: zadržava vlagu, sprječava korov, regulira temperaturu tla, štiti od erozije i obogaćuje tlo. Preporučamo sloj od 5-8 cm drvne sječke ili kore.' },
      { q: 'Kako se boriti protiv lisnih uši ekološki?', a: 'Prirodni neprijatelji poput božjih ovčica najučinkovitiji su. Prskanje otopinom sapunice također pomaže. Biljke poput lavande i kadifice odbijaju štetke. Izbjegavajte pretjeranu gnojidbu dušikom jer meke mladice privlače uši.' },
      { q: 'Koliko često zalijevati vrt ljeti?', a: 'Tijekom vrućih dana zalijevajte 2-3 puta tjedno, obilno ali rjeđe. Idealno rano ujutro (5-8h) ili navečer (nakon 18h). Kapljično navodnjavanje najučinkovitiji je način jer usmjerava vodu direktno na korijen biljaka.' },
      { q: 'Što je kompostiranje i kako početi?', a: 'Kompostiranje je razgradnja organskog otpada u bogati humus. Postavite komposticu na sjenovito mjesto. Izmjenjujte "zeleni" materijal (ostaci hrane, trava) i "smeđi" (suho lišće, karton, grančice). Redovito okretajte. Kompost je spreman za 3-6 mjeseci.' },
      { q: 'Kako poboljšati glinasto tlo?', a: 'Glinasta tla česta su u Zagrebu. Poboljšajte ih kompostom, tresetom i pijeskom. Jesenje prekopavanje i mrznutje poboljšava strukturu. Izbjegavajte hodanje po mokrom tlu jer ga zbijate. Podignute gredice odličan su izbor za problematična tla.' },
      { q: 'Trebam li analizirati tlo u vrtu?', a: 'Analiza tla izuzetno je korisna, preporučamo je svake 3-4 godine. Otkriva pH vrijednost, sadržaj hranjivih tvari i strukturu tla, što omogućava preciznu gnojidbu. Na temelju rezultata savjetujemo optimalan program gnojidbe.' },
      { q: 'Kako zaštititi vrt od krtica?', a: 'Najučinkovitiji su ultrazvučni tjerači koji se zabijaju u tlo. Voluharice se kontroliraju zaštitnim mrežicama oko korijena pri sadnji. Biljke poput bazge i euforbie prirodno odbijaju glodavce. Za ozbiljniji problem preporučamo kombinaciju metoda.' },
    ],
  },
  {
    id: 'sezona',
    name: 'Sezonski radovi',
    icon: <Sun size={20} />,
    questions: [
      { q: 'Koji su najvažniji vrtni radovi u proljeće?', a: 'Prioritetni radovi: čišćenje zimskog otpada, rezidba voćaka i grmlja, priprema tla i gnojidba, sijanje trave, sadnja novih biljaka i stabala, te prvo prskanje voćnjaka. Sve ovo idealno obaviti u ožujku i travnju.' },
      { q: 'Što raditi u vrtu ljeti?', a: 'Fokus je na redovitom zalijevanju, košnji trave svakih 7-10 dana, obrezivanju povenutih cvjetova, zaštiti od štetnika i zelenoj rezidbi voćaka. Malčiranjem zadržavate vlagu. Ne obrezujte za najjačih vrućina.' },
      { q: 'Kako pripremiti vrt za jesen?', a: 'Jesenska priprema: zadnja gnojidba kalijem, sadnja lukovica za proljeće, kompostiranje lišća, posljednja košnja na 4-5 cm, sadnja stabala i grmlja, te zaštita osjetljivih biljaka. Jesen je idealna i za aeraciju travnjaka.' },
      { q: 'Trebam li nešto raditi u vrtu zimi?', a: 'Zima je za planiranje i pripremu. Aktivni radovi: rezidba voćaka i drveća (veljača-ožujak), popravak ograde i alata, naručivanje sjemena i zimsko prskanje voćnjaka. Provjeravajte zaštitu biljaka nakon mrazeva i snijega.' },
      { q: 'Kada saditi živicu?', a: 'Optimalno je jesen za listopadne vrste i rano proljeće za vazdazelene. Biljke u kontejneru sade se cijele godine osim za mraza. Za gustu živicu sadite na razmak 30-50 cm ovisno o vrsti. Obilno zalijte nakon sadnje.' },
      { q: 'Kada je sigurno posaditi osjetljive biljke van?', a: 'U Zagrebu su kasni mrazevi mogući do sredine travnja. Osjetljive biljke (rajčice, paprike, tikvice) sadite na otvoreno tek nakon 15. travnja, idealno oko 1. svibnja. Do tada ih držite u zaštićenom prostoru.' },
      { q: 'Kako organizirati radove za veliki vrt?', a: 'Preporučamo godišnji ugovor o održavanju. Naš tim dolazi prema rasporedu i obavlja sve sezonski primjerene radove. Vrt je uvijek uredan, a vi ne brinete o planiranju. Godišnji ugovor financijski je povoljniji.' },
      { q: 'Mogu li saditi voćke u jesen?', a: 'Da, jesen (listopad-studeni) zapravo je najbolje doba! Tlo je još toplo, a vlaga pomaže ukorjenjivanju. Do proljeća se korijen dobro razvije. Izbjegavajte sadnju ako je tlo smrznuto ili prezasićeno vodom.' },
      { q: 'Kako zaštititi vrt od ljetnih vrućina?', a: 'Mjere: obilno malčiranje, zasjena mreža za osjetljive biljke, zalijevanje ujutro ili navečer, izbjegavanje obrezivanja za ekstremnih vrućina. Košnju trave ostavite na većoj visini (5-6 cm) jer duža trava čuva vlagu.' },
      { q: 'Što učiniti s vrtom nakon oluje?', a: 'Odmah provjerite stabla za oštećenja i nagnutosti. Uklonite slomljene grane čistim rezom. Polomljene biljke stabilizirajte i zalijte. Oštećeni travnjak dosijte i gnojite. Za ozbiljna oštećenja stabala kontaktirajte nas za hitnu intervenciju.' },
    ],
  },
];

// ============================================
// FAQ ACCORDION COMPONENT
// ============================================
function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-5 px-6 text-left hover:bg-gray-50/50 transition-colors"
      >
        <span className="font-heading font-semibold text-gray-900 pr-4">{question}</span>
        {isOpen ? (
          <ChevronUp size={20} className="text-primary flex-shrink-0" />
        ) : (
          <ChevronDown size={20} className="text-gray-400 flex-shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="px-6 pb-5">
          <p className="text-gray-600 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

// ============================================
// MAIN PAGE
// ============================================
export default function SavjetiPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredCategories = categories.map((cat) => ({
    ...cat,
    questions: cat.questions.filter(
      (q) =>
        q.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
        q.a.toLowerCase().includes(searchTerm.toLowerCase())
    ),
  })).filter((cat) => {
    if (activeCategory !== 'all' && cat.id !== activeCategory) return false;
    if (searchTerm && cat.questions.length === 0) return false;
    return true;
  });

  const totalQuestions = categories.reduce((sum, cat) => sum + cat.questions.length, 0);

  return (
    <>
      <Navigation />

      {/* Hero */}
      <section className="relative pt-28 pb-16 bg-gradient-to-br from-primary to-primary-dark overflow-hidden">
        <div className="geo-pattern absolute inset-0"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Link href="/" className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-6 transition-colors text-sm">
            <ArrowLeft size={16} />
            Povratak na početnu
          </Link>
          <h1 className="font-heading text-3xl lg:text-5xl font-bold text-white mb-4">
            Savjeti i česta pitanja
          </h1>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
            Pronađite odgovore na najčešća pitanja o održavanju vrtova, dvorišta i voćnjaka.
            Stručni savjeti tima s 20+ godina iskustva.
          </p>

          {/* Search */}
          <div className="relative max-w-xl mx-auto">
            <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Pretražite pitanja..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-2xl border-0 shadow-lg text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-primary-lighter"
            />
          </div>
          <p className="text-white/50 text-sm mt-4">{totalQuestions} pitanja i odgovora u {categories.length} kategorija</p>
        </div>
      </section>

      {/* Category Navigation */}
      <div className="sticky top-20 z-40 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 py-3 overflow-x-auto" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <button
              onClick={() => setActiveCategory('all')}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                activeCategory === 'all' ? 'bg-primary text-white shadow-md' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Sve kategorije
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  activeCategory === cat.id ? 'bg-primary text-white shadow-md' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat.icon}
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Content */}
      <section className="py-16 bg-gray-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredCategories.length === 0 ? (
            <div className="text-center py-16">
              <Search size={48} className="mx-auto mb-4 text-gray-300" />
              <h3 className="font-heading text-xl font-bold text-gray-900 mb-2">Nema rezultata</h3>
              <p className="text-gray-500">Pokušajte s drugim pojmom pretrage ili kontaktirajte nas direktno.</p>
            </div>
          ) : (
            <div className="space-y-12">
              {filteredCategories.map((cat) => (
                <div key={cat.id} id={cat.id}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center text-white">
                      {cat.icon}
                    </div>
                    <h2 className="font-heading text-2xl font-bold text-gray-900">{cat.name}</h2>
                    <span className="text-sm text-gray-400 ml-auto">{cat.questions.length} pitanja</span>
                  </div>
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                    {cat.questions.map((faq, i) => (
                      <FAQItem key={i} question={faq.q} answer={faq.a} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl font-bold text-gray-900 mb-4">Niste pronašli odgovor?</h2>
          <p className="text-gray-600 mb-8">Kontaktirajte nas direktno — rado ćemo odgovoriti na sva vaša pitanja i ponuditi besplatnu procjenu.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+385922409363" className="btn-primary justify-center">
              <Phone size={18} />
              092 240 9363
            </a>
            <a href="https://wa.me/385922409363?text=Molim%20Vas%20kontaktirajte%20me%2C%20imam%20pitanje." target="_blank" rel="noopener noreferrer" className="btn-whatsapp justify-center">
              <MessageCircle size={18} />
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Image src="/images/logo.png" alt="Grahor Usluge" width={32} height={32} className="rounded-full brightness-0 invert" />
              <span className="font-heading font-bold text-white text-sm">GRAHOR USLUGE</span>
            </div>
            <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} Sva prava pridržana.</p>
            <a href="https://wa.me/385922409363" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition-colors">
              <MessageCircle size={20} />
            </a>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/385922409363?text=Molim%20Vas%20kontaktirajte%20me%2C%20zainteresiran%20sam%20za%20Va%C5%A1u%20ponudu."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#128C7E] rounded-full shadow-lg flex items-center justify-center text-white transition-all hover:scale-110"
      >
        <MessageCircle size={26} />
      </a>
    </>
  );
}
