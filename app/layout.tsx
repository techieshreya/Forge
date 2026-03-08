import type {Metadata} from 'next';
import { Manrope } from 'next/font/google';
import './globals.css'; // Global styles

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-display',
});

export const metadata: Metadata = {
  title: 'ForgeDocs',
  description: 'Forge Illustrative Docs Portal',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={manrope.variable}>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
