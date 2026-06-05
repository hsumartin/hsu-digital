import type { Metadata } from 'next';
import { Instrument_Serif, IBM_Plex_Sans, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';

const instrumentSerif = Instrument_Serif({
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-instrument-serif',
  display: 'swap',
  subsets: ['latin'],
});

const ibmPlexSans = IBM_Plex_Sans({
  weight: ['300', '400', '500'],
  variable: '--font-plex-sans',
  display: 'swap',
  subsets: ['latin'],
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ['400', '500'],
  variable: '--font-plex-mono',
  display: 'swap',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Martin Hsu — Digitalisierung · Verwaltung · KI',
  description:
    'Portfolio von Martin Hsu — Informationsarchitekt an der Schnittstelle von öffentlicher Verwaltung, GIS und KI.',
  openGraph: {
    images: ['/uploads/Martin_Hsu_Banner.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="de"
      className={`${instrumentSerif.variable} ${ibmPlexSans.variable} ${ibmPlexMono.variable}`}
    >
      <body className="font-sans bg-paper text-ink antialiased">{children}</body>
    </html>
  );
}
