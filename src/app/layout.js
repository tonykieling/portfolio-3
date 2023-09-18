import './globals.css';
import { Montserrat } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';

const montserrat = Montserrat({ 
  subsets: ['latin'],
  display: "swap"
});


export const metadata = {
  title: "Tony Kieling's Website",
  description: 'Tony Kieling is a full-stack Web Engineer focused on React, Node, and Javascript ecosystems. I thrive on taking on new challenges and delivering first-class code.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`scroll-smooth ${montserrat.className} no-scrollbar`}>
      <body suppressHydrationWarning={true} >
        { children }
        <Analytics />
      </body>
    </html>
  )
};
