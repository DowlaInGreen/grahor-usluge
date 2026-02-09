import './globals.css';

export const metadata = {
  title: 'Grahor Usluge | Uređenje dvorišta, vrtova i voćnjaka - Zagreb',
  description: 'Grahor Usluge - profesionalno održavanje dvorišta, vrtova i voćnjaka, rušenje i obrezivanje drveća u Zagrebu i okolici. Tim s 20+ godina iskustva. Besplatna procjena!',
  keywords: 'uređenje dvorišta Zagreb, održavanje vrta, košnja trave, rušenje drveća, obrezivanje, voćnjak, hortikultura, vrtlar Zagreb, uređenje okućnice, čišćenje parcela',
  authors: [{ name: 'Grahor Usluge' }],
  openGraph: {
    title: 'Grahor Usluge | Uređenje dvorišta, vrtova i voćnjaka - Zagreb',
    description: 'Profesionalno održavanje dvorišta, vrtova i voćnjaka u Zagrebu. 20+ godina iskustva. Besplatna procjena!',
    url: 'https://grahor-usluge.vercel.app',
    siteName: 'Grahor Usluge',
    locale: 'hr_HR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="hr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&family=Open+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">
        {children}
      </body>
    </html>
  );
}
