import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Eliano Miguel - FullStack Developer',
  description: 'Portfolio of Eliano Miguel, a passionate FullStack Developer specializing in JavaScript, Node.js, and modern web technologies. Based in Berlin, Germany.',
  keywords: 'fullstack developer, javascript, nodejs, react, nextjs, web development, berlin',
  authors: [{ name: 'Eliano Miguel' }],
  creator: 'Eliano Miguel',
  publisher: 'Eliano Miguel',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Eliano Miguel - FullStack Developer',
    description: 'Portfolio of Eliano Miguel, a passionate FullStack Developer specializing in JavaScript, Node.js, and modern web technologies.',
    url: 'https://drdeveli.github.io',
    siteName: 'Eliano Miguel Portfolio',
    images: [
      {
        url: '/images/perfil.fotoo.jpeg',
        width: 1200,
        height: 630,
        alt: 'Eliano Miguel - FullStack Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eliano Miguel - FullStack Developer',
    description: 'Portfolio of Eliano Miguel, a passionate FullStack Developer specializing in JavaScript, Node.js, and modern web technologies.',
    images: ['/images/perfil.fotoo.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#dbcd90',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
