import './globals.css';
import Script from 'next/script';
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

        {/* Meta Pixel Code */}
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod ?
            n.callMethod.apply(n, arguments) : n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1677021723290360');
          fbq('track', 'PageView');
        `}}
        />
        <noscript>
          <img height="1" width="1" style="display:none"
            src="https://www.facebook.com/tr?id=1677021723290360&ev=PageView&noscript=1"
          />
        </noscript>
        {/* End Meta Pixel Code */}

      </body>
    </html>
  );
}
