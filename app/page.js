'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Menu, X, Phone, Mail, MapPin, ChevronDown, ChevronRight,
  TreePine, Leaf, Axe, Flower2, CheckCircle2, Medal, Star,
  BookOpen, Clock, ArrowRight, MessageCircle, Send,
  Facebook, Instagram, Home, Scissors, Shovel, Sprout,
  Shield, Award, Users, ExternalLink, Search
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
    { name: 'O nama', href: '#o-nama' },
    { name: 'Usluge', href: '#usluge' },
    { name: 'Projekti', href: '#projekti' },
    { name: 'Zašto mi?', href: '#zasto-mi' },
    { name: '📚 Savjeti', href: '/savjeti' },
    { name: 'Kontakt', href: '#kontakt' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/98 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="Grahor Usluge"
              width={50}
              height={50}
              className="rounded-full"
            />
            <div className="hidden sm:block">
              <span className={`font-heading font-bold text-lg ${scrolled ? 'text-primary-dark' : 'text-primary-dark'}`}>
                GRAHOR
              </span>
              <span className={`block text-xs tracking-widest uppercase ${scrolled ? 'text-gray-500' : 'text-gray-500'}`}>
                Usluge
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  scrolled ? 'text-gray-700' : 'text-gray-700'
                } ${link.name.includes('Savjeti') ? 'bg-primary-50 px-3 py-1.5 rounded-full text-primary font-semibold' : ''}`}
              >
                {link.name}
              </a>
            ))}
            <a href="#kontakt" className="btn-primary text-sm !py-2.5 !px-6">
              Zatraži ponudu
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 rounded-b-2xl shadow-xl pb-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-6 py-3 text-gray-700 hover:text-primary hover:bg-primary-50/50 font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="px-6 pt-3">
              <a href="#kontakt" onClick={() => setIsOpen(false)} className="btn-primary w-full justify-center text-sm">
                Zatraži ponudu
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

// ============================================
// HERO SECTION
// ============================================
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-primary-50 via-white to-green-50">
      {/* Background decorations */}
      <div className="absolute inset-0 leaf-pattern"></div>
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-primary-lighter/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <MapPin size={16} />
              <span>Zagreb i okolica • Profesionalna hortikultura</span>
            </div>

            {/* Title */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Vaš vrt zaslužuje{' '}
              <span className="gradient-text">profesionalnu</span>{' '}
              njegu
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
              Održavanje dvorišta, vrtova i voćnjaka. Rušenje i obrezivanje drveća.
              Više od 20 godina iskustva u uređenju zelenih površina na području Zagreba.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a href="#kontakt" className="btn-primary text-base">
                <Send size={18} />
                Zatraži besplatnu ponudu
              </a>
              <a
                href="https://wa.me/385922409363?text=Molim%20Vas%20kontaktirajte%20me%2C%20zainteresiran%20sam%20za%20Va%C5%A1u%20ponudu."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-base"
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { number: '20+', label: 'Godina iskustva' },
                { number: '100%', label: 'Zadovoljnih klijenata' },
                { number: '0', label: 'Skrivenih troškova' },
              ].map((stat, i) => (
                <div key={i} className="text-center sm:text-left">
                  <div className="font-heading text-2xl sm:text-3xl font-bold text-primary">{stat.number}</div>
                  <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Image Area */}
          <div className="relative animate-fade-in-up delay-200 hidden lg:block" style={{ animationDelay: '0.2s' }}>
            {/* Main image placeholder */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary-dark to-primary aspect-[4/5]">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white/80">
                  <TreePine size={80} className="mx-auto mb-4 opacity-50" />
                  <p className="font-heading text-lg font-semibold">Vaše dvorište</p>
                  <p className="text-sm opacity-70">u sigurnim rukama</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-transparent to-transparent"></div>
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 animate-float">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Shield size={24} className="text-primary" />
                </div>
                <div>
                  <div className="font-heading font-bold text-primary-dark">Pouzdano</div>
                  <div className="text-sm text-gray-500">Garancija kvalitete</div>
                </div>
              </div>
            </div>

            {/* Floating card 2 */}
            <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-4 animate-float" style={{ animationDelay: '1s' }}>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={20} className="text-primary" />
                <span className="font-heading font-semibold text-sm text-primary-dark">Besplatan izlazak</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-8 h-12 border-2 border-primary/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary/50 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// O NAMA SECTION
// ============================================
function AboutSection() {
  return (
    <section id="o-nama" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-xl bg-gradient-to-br from-primary/20 to-primary-lighter/30 aspect-[4/3] border-4 border-primary/10">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Leaf size={64} className="mx-auto mb-4 text-primary/40" />
                  <p className="text-primary/60 font-heading font-semibold">Naš tim na terenu</p>
                </div>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary-lighter/30 rounded-2xl -z-10"></div>
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary/10 rounded-full -z-10"></div>
          </div>

          {/* Content */}
          <div>
            <p className="text-primary font-semibold uppercase tracking-[2px] text-sm mb-3">O nama</p>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Stručnost stečena kroz{' '}
              <span className="gradient-text">dva desetljeća</span> rada
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Grahor Usluge je tim iskusnih stručnjaka s više od 20 godina rada u području
              hortikulture i uređenja zelenih površina. Specijalizirani smo za kompletno
              održavanje dvorišta, vrtova i voćnjaka na području Zagreba i okolice.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Naša misija je jednostavna — pretvoriti svaki zeleni prostor u mjesto uživanja.
              Bez obzira radi li se o redovnom održavanju travnjaka, profesionalnom obrezivanju
              voćaka ili sigurnom rušenju opasnog drveća, pristupamo svakom poslu s jednakom
              pažnjom i predanošću.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Koristimo profesionalnu opremu i slijedimo najbolje prakse u hortikulturi, a svaki
              projekt započinjemo besplatnim izlaskom na teren i detaljnom procjenom.
            </p>

            {/* Advantages */}
            <div className="space-y-3">
              {[
                'Besplatan izlazak i procjena troškova',
                'Profesionalna oprema i alati',
                'Usluga prilagođena vašim potrebama',
                'Čišćenje i odvoz otpada uključeni',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-primary flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// USLUGE SECTION
// ============================================
function ServicesSection() {
  const services = [
    {
      icon: <Scissors size={28} />,
      title: 'Održavanje dvorišta i vrtova',
      description: 'Redovna košnja trave, obrezivanje grmlja i živica, čišćenje lišća i kompletno sezonsko održavanje vaših zelenih površina.',
    },
    {
      icon: <TreePine size={28} />,
      title: 'Rušenje i obrezivanje drveća',
      description: 'Profesionalno i sigurno rušenje opasnih stabala, obrezivanje krošnji i sanacija nakon olujnih nepogoda.',
    },
    {
      icon: <Flower2 size={28} />,
      title: 'Uređenje voćnjaka',
      description: 'Stručno rezanje voćaka za bolji urod, sadnja novih sadnica, zaštita i sezonska njega voćnjaka.',
    },
    {
      icon: <Shovel size={28} />,
      title: 'Čišćenje i priprema terena',
      description: 'Krčenje zapuštenih parcela, čišćenje korova i divlje vegetacije, priprema terena za sadnju ili gradnju.',
    },
  ];

  return (
    <section id="usluge" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary font-semibold uppercase tracking-[2px] text-sm mb-3">Naše usluge</p>
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Sve za vaš <span className="gradient-text">zeleni prostor</span>
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Od redovnog održavanja do zahtjevnih projekata — nudimo kompletnu ponudu usluga
            za vrtove, dvorišta i voćnjake.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 border border-gray-100 hover-lift group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="font-heading font-bold text-lg text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================
// PROJEKTI SECTION
// ============================================
function ProjectsSection() {
  const projects = [
    { title: 'Uređenje dvorišta', type: 'Kompletno održavanje', icon: <Home size={24} /> },
    { title: 'Rušenje stabla', type: 'Sigurno uklanjanje', icon: <Axe size={24} /> },
    { title: 'Obrezivanje voćnjaka', type: 'Sezonska njega', icon: <Scissors size={24} /> },
    { title: 'Čišćenje parcele', type: 'Priprema terena', icon: <Sprout size={24} /> },
  ];

  return (
    <section id="projekti" className="py-20 lg:py-28 bg-gray-900 relative overflow-hidden">
      <div className="geo-pattern absolute inset-0"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary-lighter font-semibold uppercase tracking-[2px] text-sm mb-3">Naši projekti</p>
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white mb-4">
            Rezultati govore sami za sebe
          </h2>
          <p className="text-white/60 leading-relaxed">
            Pogledajte neke od naših nedavno završenih projekata na području Zagreba i okolice.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group relative rounded-2xl overflow-hidden bg-gradient-to-br from-primary-dark to-primary aspect-[16/10] cursor-pointer"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white/20">
                  {React.cloneElement(project.icon, { size: 80 })}
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/80 transition-all"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-primary-lighter text-sm font-medium mb-1">{project.type}</p>
                <h3 className="font-heading text-xl font-bold text-white">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a href="#kontakt" className="btn-primary text-base">
            Zatražite ponudu za vaš projekt
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

// ============================================
// ZAŠTO MI SECTION
// ============================================
function WhyUsSection() {
  const reasons = [
    {
      icon: <Medal size={28} />,
      title: 'Iskustvo',
      description: 'Više od 20 godina rada u hortikulturi i uređenju zelenih površina.',
    },
    {
      icon: <Star size={28} />,
      title: 'Kvaliteta',
      description: 'Profesionalna oprema i provjerene metode za vrhunske rezultate.',
    },
    {
      icon: <BookOpen size={28} />,
      title: 'Transparentnost',
      description: 'Jasna ponuda bez skrivenih troškova. Znate točno što plaćate.',
    },
    {
      icon: <Clock size={28} />,
      title: 'Brzina',
      description: 'Brz odziv i efikasna izvedba. Poštujemo dogovorene rokove.',
    },
  ];

  return (
    <section id="zasto-mi" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary font-semibold uppercase tracking-[2px] text-sm mb-3">Zašto mi?</p>
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Razlozi za <span className="gradient-text">povjerenje</span>
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Pouzdanost, urednost i profesionalnost — vrijednosti koje nas vode u svakom projektu.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, i) => (
            <div key={i} className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                {reason.icon}
              </div>
              <h3 className="font-heading font-bold text-lg text-gray-900 mb-2">{reason.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================
// SAVJETI (TIPS) HIGHLIGHT SECTION
// ============================================
function TipsHighlightSection() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-gray-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="grid lg:grid-cols-2">
            {/* Left */}
            <div className="p-8 lg:p-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
                📚 Novo na stranici
              </div>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Savjeti i česta pitanja
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Pripremili smo opsežan vodič s odgovorima na najčešća pitanja o održavanju
                vrtova, dvorišta i voćnjaka. Naučite kako pravilno brinuti o vašem zelenom prostoru.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  'Održavanje travnjaka i vrtova',
                  'Obrezivanje drveća i voćaka',
                  'Sezonski radovi i savjeti',
                  'Čišćenje i priprema terena',
                  'Zaštita bilja i gnojidba',
                  'Sustavi navodnjavanja',
                ].map((cat, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-primary flex-shrink-0" />
                    <span className="text-gray-700 text-sm font-medium">{cat}</span>
                  </div>
                ))}
              </div>
              <Link href="/savjeti" className="btn-primary text-base">
                Pogledaj savjete
                <ArrowRight size={18} />
              </Link>
            </div>

            {/* Right */}
            <div className="bg-gradient-to-br from-primary to-primary-dark p-8 lg:p-12 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-6xl mb-4">📖</div>
                <div className="font-heading text-5xl font-bold mb-2">60+</div>
                <div className="text-lg text-white/80 mb-6">pitanja i odgovora</div>
                <div className="flex flex-wrap justify-center gap-2">
                  {['Vrtovi', 'Drveće', 'Voćnjaci', 'Travnjaci', 'Sezona'].map((tag, i) => (
                    <span key={i} className="bg-white/15 text-white/90 px-3 py-1 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// CTA BANNER
// ============================================
function CTABanner() {
  return (
    <section className="relative py-20 bg-gradient-to-r from-primary to-primary-dark overflow-hidden">
      <div className="geo-pattern absolute inset-0"></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white mb-4">
          Spremni za uređenje vašeg dvorišta?
        </h2>
        <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
          Kontaktirajte nas danas za besplatnu procjenu i ponudu.
          Vaš vrt zaslužuje profesionalnu njegu.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:+385922409363" className="inline-flex items-center justify-center gap-2 bg-white text-primary font-heading font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition-all hover:-translate-y-0.5 shadow-lg">
            <Phone size={20} />
            092 240 9363
          </a>
          <a
            href="https://wa.me/385922409363?text=Molim%20Vas%20kontaktirajte%20me%2C%20zainteresiran%20sam%20za%20Va%C5%A1u%20ponudu."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-base justify-center !shadow-lg"
          >
            <MessageCircle size={20} />
            Pišite nam na WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

// ============================================
// CONTACT SECTION
// ============================================
function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, sending, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: 'YOUR_WEB3FORMS_KEY',
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          subject: `Nova poruka s web stranice - ${formData.name}`,
          from_name: 'Grahor Usluge Web',
        }),
      });

      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <section id="kontakt" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary font-semibold uppercase tracking-[2px] text-sm mb-3">Kontakt</p>
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Javite nam se <span className="gradient-text">još danas</span>
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Besplatan izlazak na teren i procjena. Odgovaramo unutar 24 sata.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="font-heading text-xl font-bold text-gray-900 mb-6">Kontakt informacije</h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin size={22} className="text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Lokacija</p>
                  <p className="text-gray-600">Zagreb i okolica, Hrvatska</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone size={22} className="text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Telefon</p>
                  <a href="tel:+385922409363" className="text-primary hover:text-primary-dark transition-colors">
                    092 240 9363
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail size={22} className="text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Email</p>
                  <a href="mailto:dowla.dowla@gmail.com" className="text-primary hover:text-primary-dark transition-colors">
                    dowla.dowla@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/385922409363?text=Molim%20Vas%20kontaktirajte%20me%2C%20zainteresiran%20sam%20za%20Va%C5%A1u%20ponudu."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp w-full justify-center mt-8"
            >
              <MessageCircle size={20} />
              Pišite nam na WhatsApp
            </a>

            {/* Social */}
            <div className="flex gap-4 mt-6 justify-center">
              <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white transition-all">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="font-heading text-xl font-bold text-gray-900 mb-6">Pošaljite upit</h3>

            {status === 'success' ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 size={40} className="text-primary" />
                </div>
                <h4 className="font-heading text-2xl font-bold text-gray-900 mb-2">Hvala vam!</h4>
                <p className="text-gray-600">Vaša poruka je uspješno poslana. Javit ćemo vam se u najkraćem roku.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Ime i prezime *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all text-gray-900"
                    placeholder="Vaše ime i prezime"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all text-gray-900"
                    placeholder="vas@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Telefon</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all text-gray-900"
                    placeholder="09x xxx xxxx"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Poruka *</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all resize-none text-gray-900"
                    placeholder="Opišite što vam treba..."
                  />
                </div>

                {status === 'error' && (
                  <div className="bg-red-50 text-red-600 px-4 py-3 rounded-xl text-sm">
                    Došlo je do greške. Pokušajte ponovo ili nas kontaktirajte telefonom.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Šaljem...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Pošalji upit
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// FOOTER
// ============================================
function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/logo.png"
                alt="Grahor Usluge"
                width={40}
                height={40}
                className="rounded-full brightness-0 invert"
              />
              <div>
                <span className="font-heading font-bold text-lg">GRAHOR</span>
                <span className="block text-xs tracking-widest uppercase text-gray-400">Usluge</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Profesionalno održavanje dvorišta, vrtova i voćnjaka u Zagrebu i okolici.
              Pouzdanost, urednost i profesionalnost.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold mb-4 text-white">Brze veze</h4>
            <ul className="space-y-2">
              {[
                { name: 'O nama', href: '#o-nama' },
                { name: 'Usluge', href: '#usluge' },
                { name: 'Projekti', href: '#projekti' },
                { name: 'Savjeti', href: '/savjeti' },
                { name: 'Kontakt', href: '#kontakt' },
              ].map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold mb-4 text-white">Usluge</h4>
            <ul className="space-y-2">
              {[
                'Održavanje dvorišta',
                'Košnja trave',
                'Rušenje drveća',
                'Obrezivanje voćaka',
                'Čišćenje parcela',
              ].map((service) => (
                <li key={service}>
                  <span className="text-gray-400 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold mb-4 text-white">Kontakt</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <MapPin size={16} className="flex-shrink-0" />
                Zagreb i okolica
              </li>
              <li>
                <a href="tel:+385922409363" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm">
                  <Phone size={16} className="flex-shrink-0" />
                  092 240 9363
                </a>
              </li>
              <li>
                <a href="mailto:dowla.dowla@gmail.com" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm">
                  <Mail size={16} className="flex-shrink-0" />
                  dowla.dowla@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/385922409363"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-whatsapp transition-colors text-sm"
                >
                  <MessageCircle size={16} className="flex-shrink-0" />
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Grahor Usluge. Sva prava pridržana.
          </p>
          <div className="flex gap-3">
            <a href="#" className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all">
              <Facebook size={16} />
            </a>
            <a href="#" className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all">
              <Instagram size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ============================================
// FLOATING WHATSAPP BUTTON
// ============================================
function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/385922409363?text=Molim%20Vas%20kontaktirajte%20me%2C%20zainteresiran%20sam%20za%20Va%C5%A1u%20ponudu."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-whatsapp hover:bg-whatsapp-dark rounded-full shadow-lg flex items-center justify-center text-white transition-all hover:scale-110"
      aria-label="Kontaktirajte nas putem WhatsAppa"
    >
      <MessageCircle size={26} />
    </a>
  );
}

// ============================================
// MAIN PAGE
// ============================================
export default function HomePage() {
  return (
    <>
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <WhyUsSection />
      <TipsHighlightSection />
      <CTABanner />
      <ContactSection />
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
