import type {Metadata} from 'next';
import {Geist, Geist_Mono} from 'next/font/google';
import './globals.css';
import {Footer} from "@/components/Footer";

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'ServerSight',
  description: 'Generated by Firebase Studio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="flex flex-col min-h-screen">
        <header className="bg-secondary text-center p-4 mb-4">
          <h1 className="text-2xl font-semibold">ServerSight Dashboard</h1>
        </header>
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        </div>
      </body>
    </html>
  );
}

