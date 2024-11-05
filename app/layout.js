import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'dogcat',
  description: 'select a dog or a cat',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="navigation">
          <Link href="/">홈</Link>
          <Link href="/dog">강아지</Link>
          <Link href="/cat">고양이</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
