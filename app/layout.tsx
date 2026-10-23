// Root layout: fonts, metadata and the theme script that runs before the first paint.
import type { Metadata } from 'next';
import { Bricolage_Grotesque, Caveat, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const display = Bricolage_Grotesque({ subsets: ['latin'], axes: ['opsz'], variable: '--font-bricolage' });
const hand = Caveat({ subsets: ['latin'], weight: ['500', '700'], variable: '--font-caveat' });
const mono = JetBrains_Mono({ subsets: ['latin'], weight: ['400', '600'], variable: '--font-jetbrains' });

export const metadata: Metadata = {
  title: 'Luca Doglione',
  description: 'Luca Doglione builds software, products and the architecture that keeps them together.',
};

// A saved choice wins, otherwise the system setting; set before paint so dark never flashes light.
const themeScript = `try{var t=localStorage.getItem('theme');document.documentElement.dataset.theme=t==='dark'||t==='light'?t:matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${hand.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="px-4">{children}</body>
    </html>
  );
}
