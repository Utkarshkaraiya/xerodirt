import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import RevealOnScroll from '@/components/RevealOnScroll';
import { CartProvider } from '@/context/CartContext';

export const metadata = {
  title: 'Xerodirt — Professional Cleaning Services in Pune',
  description: 'On-demand washroom, kitchen, flat, and home cleaning services in Pune. Affordable, professional, and reliable. Book now starting at ₹49!',
  keywords: 'cleaning services pune, washroom cleaning, flat cleaning, kitchen cleaning, home cleaning pune, xerodirt',
  openGraph: {
    title: 'Xerodirt — Professional Cleaning Services in Pune',
    description: 'On-demand washroom, kitchen, flat, and home cleaning services in Pune.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
          <RevealOnScroll />
        </CartProvider>
      </body>
    </html>
  );
}
