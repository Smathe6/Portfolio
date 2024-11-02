import {Roboto} from 'next/font/google';
import './globals.css';
export const metadata = {
  title: 'Portfolio - Home',
  description: 'The home page of my portfolio with a sleek, modern theme.',
};

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({children}) {
  return (
    <html lang="en">
    <body className={roboto.className}>{children}</body>
    </html>
  )
}
