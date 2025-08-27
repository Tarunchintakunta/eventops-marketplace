import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'EventOps - India\'s Leading Event Contractor Marketplace',
  description: 'Book reliable event contractors for weddings, corporate events, birthdays, and more. Find verified vendors, venues, and services across India.',
  keywords: 'event contractors, wedding vendors, corporate events, event planning, India, vendors, venues, catering, decoration, photography',
  authors: [{ name: 'EventOps Team' }],
  creator: 'EventOps',
  publisher: 'EventOps',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://eventops.in'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'EventOps - India\'s Leading Event Contractor Marketplace',
    description: 'Book reliable event contractors for weddings, corporate events, birthdays, and more.',
    url: 'https://eventops.in',
    siteName: 'EventOps',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EventOps - India\'s Leading Event Contractor Marketplace',
    description: 'Book reliable event contractors for weddings, corporate events, birthdays, and more.',
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen flex flex-col">
            <Navigation />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
