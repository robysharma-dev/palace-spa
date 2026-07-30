import './globals.css';
import type { ReactNode } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

export const metadata = {
  title: 'Palace Spa | Singapore',
  description: 'Premier luxury wellness sanctuary for men in Singapore',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#fcfbf9] text-[#2c3e50] font-sans antialiased selection:bg-[#c5a880] selection:text-white">
        
        {/* Global Header / Navbar Component */}
        <Header />

        {/* Main Page Content */}
        <main>{children}</main>

        {/* Global Professional Footer Component */}
        <Footer />

      </body>
    </html>
  );
}