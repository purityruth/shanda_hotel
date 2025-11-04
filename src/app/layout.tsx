// app/layout.tsx
import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Fikira1 - Luxury Hotel & Digital Transformation',
  description: 'Experience luxury and digital innovation at Fikira1 Hotel',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="pt-16"> {/* Add padding to account for fixed navbar */}
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}